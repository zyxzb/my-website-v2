export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of project',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Project Images',
      of: [{type: 'image'}],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Project tags',
      of: [{type: 'string'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of project',
    },
    {
      name: 'githubUrl',
      type: 'string',
      title: 'GitHub Link',
    },
    {
      name: 'liveUrl',
      type: 'string',
      title: 'Live Link',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Project Slug',
      options: {
        source: 'name',
      },
    },
  ],
}
