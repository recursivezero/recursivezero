import { s as siteConfig } from '../chunks/site.config_BuEpAZo_.mjs';
import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_BS3zoIiF.mjs';
export { renderers } from '../renderers.mjs';

const posts = await getCollection("blog");
const GET = async () => {
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://recursivezero.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `posts/${post.slug}`
    }))
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
