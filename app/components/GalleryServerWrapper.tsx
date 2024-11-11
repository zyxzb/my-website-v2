import { client } from '@/lib/sanity';
import ProjectsGallery from './ProjectsGallery';
import ServerCard from './ServerCard';

const getAllProjects = async () => {
  const query = `*[_type == 'project']`;
  const data = await client.fetch(query);
  return data;
};

const GalleryServerWrapper = async () => {
  const projects = await getAllProjects();

  return (
    <ProjectsGallery projects={projects}>
      {projects.map((project: any) => (
        <ServerCard key={project._id} project={project} />
      ))}
    </ProjectsGallery>
  );
};

export default GalleryServerWrapper;
