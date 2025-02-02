import constitutionOverview from './data/constitution-overview';
import { getCategoryById, getAllTopics } from './utils/strapi';
import { server } from './mocks/server';
import { generateHeadTags } from './utils/head';

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    ...generateHeadTags(
      {
        description:
          'เรียนรู้และเปรียบเทียบรัฐธรรมนูญของประเทศไทย ที่นำเสนอผ่าน Interactive website เพื่อเสริมสร้างความเข้าใจในรัฐธรรมนูญที่ทุกคนเป็นเจ้าของร่วมกัน',
        image: `${process.env.SITE_URL}/sharer/default.png`,
      },
      [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'twitter:card', content: 'summary_large_image' },
      ]
    ),
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${process.env.BASE_PATH || ''}/favicon.png`,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/fonts/typography.css',
    '@wevisdemo/ui/styles/typography.css',
    '@wevisdemo/ui/styles/components.css',
    '~/assets/styles/global.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/msw.server.ts',
    '~/plugins/msw.client.ts',
    '~/plugins/v-click-outside.ts',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      '~/components/category',
      '~/components/landing',
      '~/components/layout',
      '~/components/topic',
      '~/components/typography',
    ],
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['vue-plausible'],

  plausible: {
    domain: 'reconstitution.wevis.info',
    apiHost: 'https://analytics.punchup.world',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: `${process.env.BASE_PATH || ''}/_nuxt/`,
  },

  env: {
    STRAPI_ENDPOINT: process.env.STRAPI_ENDPOINT,
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
    SITE_URL: process.env.SITE_URL,
    BASE_PATH: process.env.BASE_PATH,
  },

  router: {
    base: process.env.BASE_PATH || '/',
  },

  optimizedImages: {
    optimizeImages: true,
  },

  generate: {
    concurrency: 1,
    async routes() {
      if (!process.env.STRAPI_ENDPOINT) {
        server.listen();
      }

      const categoryRoutes = await Promise.all(
        constitutionOverview.categories.map(async (category) => ({
          route: `/categories/${category.id}`,
          payload: {
            category: await getCategoryById(category.id),
          },
        }))
      );

      const topicRoutes = (await getAllTopics()).map((topic) => {
        const { category } =
          categoryRoutes.find(
            ({ payload }) => payload.category.category_id === topic.category_id
          )?.payload || {};

        if (!category) {
          throw new Error(
            `category id: ${topic.category_id} not found on topic ${topic.name}`
          );
        }

        return {
          route: `/categories/${category.category_id}/topics/${topic.id}`,
          payload: {
            category,
            topic,
          },
        };
      });

      if (!process.env.STRAPI_ENDPOINT) {
        server.close();
      }

      return [...categoryRoutes, ...topicRoutes];
    },
  },
};
