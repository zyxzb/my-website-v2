import { client } from '@/lib/sanity';
import ProjectsGallery from './ProjectsGallery';

const getAllProjects = async () => {
  const query = `*[_type == 'project']`;
  const data = await client.fetch(query);
  return data;
};

const GalleryServerWrapper = async () => {
  const projects = await getAllProjects();

  return <ProjectsGallery projects={projects} />;
};

export default GalleryServerWrapper;
