import { compareDesc } from 'date-fns';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageSEO } from '@/components/SEO';
import { POSTS_PER_PAGE } from '@/constants/siteMeta';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { allPosts } from '@/lib/contentLayerAdapter';

export async function getStaticProps({ locale }) {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      initialDisplayPosts,
      posts,
      pagination,
    },
  };
}

export default function Posts({ posts, initialDisplayPosts, pagination }) {
  const { t } = useTranslation(['common']);

  return (
    <>
      <PageSEO
        title={`${t('all-posts')} - ${siteMetadata.title}`}
        description={t('about-me-description')}
      />

      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
      />
    </>
  );
}