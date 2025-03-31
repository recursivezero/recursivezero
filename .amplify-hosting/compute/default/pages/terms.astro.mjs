import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIk6jwWF.mjs';
import { $ as $$TitleLayout } from '../chunks/TitleLayout_CLv__fyp.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "meta": { title: "Terms and Condition" } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitleLayout", $$TitleLayout, { "title": "Terms and Conditions" })} ` })}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/pages/terms.astro", void 0);

const $$file = "/home/recursive/dev/recursivezero/recursivezero/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
