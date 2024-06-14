# App Config

Manages config for the app. Generally set via an `.env` file at the root level. Config is validated with a Joi schema, and getters for all config values are povided by `AppConfigService`.

## Env files

We load env files according to the `NODE_ENV` variable, using `.env.${NODE_ENV}`.
