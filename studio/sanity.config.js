import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './schemas/schema';
export default defineConfig({
  name: 'test-blog',
  title: 'My Cool Project',
  projectId: 'l4q34gbq',
  dataset: 'production',
  plugins: [
    structureTool(),
    '@sanity/eslint-config-studio',
    '@sanity/production-preview',
    '@sanity/vision',
  ],
  schema: {
    types: schemas,
  },
});
