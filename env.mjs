import { z } from 'zod';

const schema = z.object({
  _GITHUB_GRAPHQL_API_KEY: z.string(),
});

const expectedEnv = {
  GITHUB_GRAPHQL_API_KEY: process.env._GITHUB_GRAPHQL_API_KEY,
};

const _env = schema.safeParse(expectedEnv);

if (!_env.success) {
  console.error('Invalid env vars.', _env.error);
  throw new Error('Invalid env vars.');
}

export const env = { ..._env.data };
