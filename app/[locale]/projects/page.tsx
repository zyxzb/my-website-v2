import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';

import Small from '@/app/components/Small';
import GalleryInput from '@/app/components/GalleryInput';
import GalleryServer from '@/app/components/GalleryServer';

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string | string[];
  }>;
}) => {
  const { q } = await searchParams;
  const query = typeof q === 'string' ? q : q?.[0];
  const t = await getTranslations('ProjectsPage');

  return (
    <div>
      <Small>{t('title')}</Small>
      <Suspense>
        <GalleryInput q={query} />
      </Suspense>
      <Suspense key={query} fallback={<p>Loading projects...</p>}>
        <GalleryServer query={query} />
      </Suspense>
    </div>
  );
};

export default ProjectsPage;
