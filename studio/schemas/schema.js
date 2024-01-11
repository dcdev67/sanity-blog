// Then we give our schema to the builder and provide the result to Sanity
export default [
  /* Your types here! */
  {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'string',
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }],
      },
    ],
  },

  {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'picture',
        title: 'Picture',
        type: 'image',
      },
    ],
  },
];
