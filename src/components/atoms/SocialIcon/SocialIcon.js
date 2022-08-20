import clsx from 'clsx'
import PropTypes from 'prop-types'

import Facebook from './facebook.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Mail from './mail.svg'
import RSS from './rss.svg'
import Twitter from './twitter.svg'
import Youtube from './youtube.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  rss: RSS,
}

const SocialIcon = ({ kind, href }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition-colors hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={clsx(
          `h-6 w-6 fill-current text-gray-700 transition-colors dark:text-gray-200`,
          kind === 'mail' && 'hover:text-primary-600 dark:hover:text-primary-400',
          kind === 'github' && 'hover:text-gray-500 dark:hover:text-gray-400',
          kind === 'facebook' && 'hover:text-[#4267B2] dark:hover:text-[#4267B2]',
          kind === 'youtube' && 'hover:text-[#FF0000] dark:hover:text-[#FF0000]',
          kind === 'linkedin' && 'hover:text-[#0e76a8] dark:hover:text-[#0e76a8]',
          kind === 'twitter' && 'hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2]',
          kind === 'rss' && 'hover:text-[#FFA500] dark:hover:text-[#FFA500]'
        )}
      />
    </a>
  )
}

export default SocialIcon

SocialIcon.propTypes = {
  kind: PropTypes.oneOf(['mail', 'github', 'facebook', 'youtube', 'linkedin', 'twitter'])
    .isRequired,
  href: PropTypes.string.isRequired,
}
