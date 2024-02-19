import Card, { ProjectProps } from './Card';

interface ProjectsGalleryProps {
  projects: ProjectProps[];
}

const ProjectsGallery = ({ projects }: ProjectsGalleryProps) => {
  return (
    <div className='columns-1 gap-4 lg:columns-2 lg:gap-7'>
      {projects.map((project) => (
        <Card key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGallery;
