import { _ as __vite_glob_0_0 } from '../chunks/letter_xNu_bxaH.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
import { $ as $$BlogCard } from '../chunks/BlogCard_DfVP1hkU.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIk6jwWF.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(($$result, $$props, $$slots) => {
  const pages = /* #__PURE__ */ Object.assign({"./work/letter.astro": __vite_glob_0_0});
  const pageList = Object.entries(pages).map(([path, module]) => {
    const { frontmatter } = module;
    const route = path.replace("./work", "/work").replace(".astro", "");
    return {
      title: frontmatter.title || "Untitled",
      description: frontmatter.description || "No description available.",
      image: frontmatter.image || "",
      route
    };
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "meta": { title: "Work Pages" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8"> <div class="mb-12 mt-[20px] text-center"> <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Work</h1> <p class="mt-4 text-lg text-gray-400">Discover our latest work and Projects</p> </div> <div class="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2 lg:grid-cols-3"> ${pageList.map(({ title, description, image, route }) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": title, "description": description, "image": image || "https://via.placeholder.com/800x450", "url": route, "height": 200 })}`)} </div> </main> ` })}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/pages/work.astro", void 0);

const $$file = "/home/recursive/dev/recursivezero/recursivezero/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
