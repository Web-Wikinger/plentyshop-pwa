export const appConfiguration = {
  head: {
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { name: 'shop-name', content: process.env.STORENAME || 'Kellog\'s Shop' },
      { name: 'description', content: process.env.METADESC || 'Welcome to Kellogg\'s Shop' },
      { name: 'keywords', content: process.env.METAKEYWORDS || 'PlentyONE, plentyshop, pwa' },
      { name: 'theme-color', content: '#0C7992' },
      { property: 'og:title', content: process.env.OGTITLE || 'PlentyONE Shop Demo' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: process.env.OGIMAGE || '' },
      { property: 'og:url', content: process.env.API_ENDPOINT },
    ],
    link: [
      { rel: 'icon', href: '/images/kelloggsicon.webp' },
      { rel: 'apple-touch-icon', href: '/images/kelloggsicon.webp' },
    ],
    title: process.env.STORENAME || 'PlentyONE Shop',
  },
};
