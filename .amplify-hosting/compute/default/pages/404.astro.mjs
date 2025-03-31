import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIk6jwWF.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Oops! You found a missing page!",
    description: "Oops! It looks like this page is lost in space!"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6">404 | Oops something went wrong</h1> <p class="mb-8">Please use the navigation to find your way back</p> ` })}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/pages/404.astro", void 0);

const $$file = "/home/recursive/dev/recursivezero/recursivezero/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
