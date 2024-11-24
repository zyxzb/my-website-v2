import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';

import Small from '@/app/components/Small';
import GalleryInput from '@/app/components/GalleryInput';
import GalleryServer from '@/app/components/GalleryServer';

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) => {
  const t = await getTranslations('ProjectsPage');

  return (
    <div>
      <Small>{t('title')}</Small>
      <Suspense>
        <GalleryInput q={searchParams.q} />
      </Suspense>
      <Suspense key={searchParams.q} fallback={<p>Loading projects...</p>}>
        <GalleryServer query={searchParams.q} />
      </Suspense>
    </div>
  );
};

export default ProjectsPage;
