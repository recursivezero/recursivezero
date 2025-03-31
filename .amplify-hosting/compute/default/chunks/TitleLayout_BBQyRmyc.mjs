import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BR_g1Lka.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://recursivezero.com");
const $$TitleLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleLayout;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="title" data-astro-cid-ecuqmzuu> ${title} </h1>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/layouts/TitleLayout.astro", void 0);

export { $$TitleLayout as $ };
