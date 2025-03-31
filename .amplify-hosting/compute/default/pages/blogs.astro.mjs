import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
import { $ as $$BlogCard } from '../chunks/BlogCard_DfVP1hkU.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIk6jwWF.mjs';
import { g as getCollection } from '../chunks/_astro_content_BS3zoIiF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "meta": { title: "Feature List" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8"> <div class="mb-12 mt-[20px] text-center"> <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Blog Articles</h1> <p class="mt-4 text-lg text-gray-400">Discover our latest blog and updates</p> </div> <div class="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2 lg:grid-cols-3"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "url": `/blogs/${post.slug}`, "title": post.data.title, "description": post.data.description, "image": post.data.image, "author": post.data.author, "date": post.data.date.toLocaleDateString() })}`)} </div> </main> ` })}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/pages/blogs/index.astro", void 0);

const $$file = "/home/recursive/dev/recursivezero/recursivezero/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
