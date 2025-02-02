# constitution

Thailand's Constitution, explained

## Deployment

- Staging: https://wevisdemo.github.io/reconstitution
- Production: https://reconstitution.wevis.info

## Environment

.env file can be used to config Starpi api endpoint. If not specify mock data will be used with msw.

```
STRAPI_ENDPOINT=<url_to_strapi>
STRAPI_TOKEN=<strapi_secret_token>
BASE_PATH=<site_path_when_deploy>
SITE_URL=<site_url_when_deploy>
```

## Build Setup

```bash
# install dependencies
$ yarn install

# populate data (Docker required)
$ ./populate-data.sh

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
