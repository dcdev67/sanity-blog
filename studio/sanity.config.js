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

// {
//   "root": true,
//   "project": {
//     "name": "test-blog"
//   },
//   "api": {
//     "projectId": "l4q34gbq",
//     "dataset": "production"
//   },
//   "plugins": [
//     "@sanity/base",
//     "@sanity/default-layout",
//     "@sanity/default-login",
//     "@sanity/desk-tool",
//     "@sanity/production-preview"
//   ],
//   "env": {
//     "development": {
//       "plugins": [
//         "@sanity/vision"
//       ]
//     }
//   },
//   "parts": [
//     {
//       "name": "part:@sanity/base/schema",
//       "path": "./schemas/schema"
//     },
//     {
//       "implements": "part:@sanity/production-preview/resolve-production-url",
//       "path": "./resolveProductionUrl.js"
//     }
//   ]
// }
