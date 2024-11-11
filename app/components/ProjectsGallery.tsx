'use client';

import { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import debounce from 'lodash/debounce';

import { ProjectProps } from './ServerCard';
import Input from './Input';
import GalleryCards from './GalleryCards';
import ClientCard from './ClientCard';

interface ProjectsGalleryProps {
  projects: ProjectProps[];
  children: React.ReactNode;
}

const ProjectsGallery = ({ projects, children }: ProjectsGalleryProps) => {
  const [searchedProjects, setSearchedProjects] = useState<ProjectProps[]>([]);
  const [dynamicGallery, setDynamicGallery] = useState(false);

  const t = useTranslations('ProjectsPage');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProjects = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
    );
    setSearchedProjects(filteredProjects);

    if (searchTerm.length > 0) {
      setDynamicGallery(true);
    } else {
      setDynamicGallery(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleSearch = useCallback(debounce(handleChange, 500), []);

  return (
    <>
      <div className='my-8'>
        <Input
          label={t('searchInputLabel')}
          type='text'
          name='search'
          placeholder={t('searchInputPlaceholder')}
          onChange={debouncedHandleSearch}
        />
      </div>
      {projects.length > 0 && !dynamicGallery ? (
        <GalleryCards>{children}</GalleryCards>
      ) : searchedProjects.length > 0 && dynamicGallery ? (
        <GalleryCards>
          {searchedProjects.map((project) => (
            <ClientCard key={project._id} project={project} />
          ))}
        </GalleryCards>
      ) : (
        'No results found 😥'
      )}
    </>
  );
};

export default ProjectsGallery;
