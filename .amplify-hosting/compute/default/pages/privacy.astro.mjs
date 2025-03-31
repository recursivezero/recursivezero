import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIk6jwWF.mjs';
import { $ as $$TitleLayout } from '../chunks/TitleLayout_CLv__fyp.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "meta": { title: "Privacy Policy" } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitleLayout", $$TitleLayout, { "title": "Privacy Policy" })} ` })}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/pages/privacy.astro", void 0);

const $$file = "/home/recursive/dev/recursivezero/recursivezero/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
