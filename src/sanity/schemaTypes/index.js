// ./src/sanity/schemaTypes/index.ts
// import type { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";

export const schema = {
  types: [blockContentType, categoryType, postType],
};