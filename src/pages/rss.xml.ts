import { siteConfig } from "@/site-config";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
const posts = await getCollection("blog");

export const GET = async () => {
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `posts/${post.slug}`
    }))
  });
};
