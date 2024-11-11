import { Suspense } from 'react';
import { useTranslations } from 'next-intl';

import GalleryServerWrapper from '@/app/components/GalleryServerWrapper';
import Small from '@/app/components/Small';

const ProjectsPage = () => {
  const t = useTranslations('ProjectsPage');

  return (
    <div>
      <Small>{t('title')}</Small>
      <Suspense fallback={<p>Loading...</p>}>
        <GalleryServerWrapper />
      </Suspense>
    </div>
  );
};

export default ProjectsPage;
