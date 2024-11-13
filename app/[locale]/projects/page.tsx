import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';

import Small from '@/app/components/Small';
import GalleryInput from '@/app/components/GalleryInput';
import { getProjects } from '@/lib/queries';
import GalleryCards from '@/app/components/GalleryCards';
import Card from '@/app/components/Card';

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) => {
  const t = await getTranslations('ProjectsPage');
  const projects = await getProjects(searchParams.q);

  return (
    <div>
      <Small>{t('title')}</Small>
      <Suspense fallback={<p>Loading...</p>}>
        <GalleryInput q={searchParams.q} />
      </Suspense>
      <GalleryCards>
        {projects.map((project: any) => (
          <Card key={project._id} project={project} />
        ))}
      </GalleryCards>
    </div>
  );
};

export default ProjectsPage;
