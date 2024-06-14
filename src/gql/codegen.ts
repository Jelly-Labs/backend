import { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.API_GRAPHQL_ENDPOINT,
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
    },
    './src/gql/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
