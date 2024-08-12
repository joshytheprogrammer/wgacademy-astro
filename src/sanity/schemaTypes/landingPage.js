// ./src/sanity/schemaTypes/landingPage.js
import { defineField, defineType } from 'sanity';

export const landingPageType = defineType({
  name: 'landingPage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      options: {
        maxLength: 200,
      },
    }),
    defineField({
      name: 'embedURL',
      type: 'string',
    }),
  ],
});
