import { getProjects } from '@/lib/queries';
import Card from './Card';
import GalleryCards from './GalleryCards';

type GalleryServerProps = {
  query: string | undefined;
};

const GalleryServer = async ({ query }: GalleryServerProps) => {
  const projects = await getProjects(query);

  if (!projects.length) return <p>No projects found 😞</p>;

  return (
    <GalleryCards>
      {projects.map((project: any) => (
        <Card key={project._id} project={project} />
      ))}
    </GalleryCards>
  );
};

export default GalleryServer;
