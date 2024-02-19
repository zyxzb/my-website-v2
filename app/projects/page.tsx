import { client } from '@/lib/sanity';

import Small from '../components/Small';
import ProjectsGallery from '../components/ProjectsGallery';

export const revalidate = 60;

const getAllProjects = async () => {
  const query = `*[_type == 'project']`;
  const data = await client.fetch(query);
  return data;
};

const ProjectsPage = async () => {
  const projects = await getAllProjects();

  return (
    <div>
      <Small>Projects Page</Small>
      <ProjectsGallery projects={projects} />
    </div>
  );
};

export default ProjectsPage;
