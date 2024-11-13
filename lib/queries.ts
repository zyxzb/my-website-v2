import { client } from '@/lib/sanity';

export const getProjects = async (q?: string) => {
  let query;

  if (q) {
    const sanitizedQ = q.replace(/"/g, '\\"');
    query = `
      *[_type == 'project' && (name match "${sanitizedQ}*" || tags match "${sanitizedQ}*")]`;
  } else {
    query = `*[_type == 'project']`;
  }

  const data = await client.fetch(query);
  return data;
};
