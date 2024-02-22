'use client';

import { useCallback, useState } from 'react';
import Card, { ProjectProps } from './Card';
import Input from './Input';

import debounce from 'lodash/debounce';

interface ProjectsGalleryProps {
  projects: ProjectProps[];
}

const ProjectsGallery = ({ projects }: ProjectsGalleryProps) => {
  const [searchedProjects, setSearchedProjects] =
    useState<ProjectProps[]>(projects);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProjects = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
    );
    setSearchedProjects(filteredProjects);
  };

  const debouncedHandleSearch = useCallback(debounce(handleChange, 500), []);

  return (
    <>
      <div className='my-8'>
        <Input
          label='Search Projects'
          type='text'
          name='search'
          placeholder='Search by name or tags..'
          onChange={debouncedHandleSearch}
        />
      </div>
      {searchedProjects.length > 0 ? (
        <div className='columns-1 gap-4 lg:columns-2 lg:gap-7'>
          {searchedProjects.map((project) => (
            <Card key={project._id} project={project} />
          ))}
        </div>
      ) : (
        'No results found 😥'
      )}
    </>
  );
};

export default ProjectsGallery;
