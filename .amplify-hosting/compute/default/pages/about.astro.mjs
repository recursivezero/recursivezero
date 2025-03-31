import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIk6jwWF.mjs';
import { $ as $$TitleLayout } from '../chunks/TitleLayout_CLv__fyp.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "meta": { title: "About" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container__about"> ${renderComponent($$result2, "TitleLayout", $$TitleLayout, { "title": "About Us" })} <article class="prose dark:prose-invert max-w-none"> <section class="about__section"> <h2 class="about__title">Our Story</h2> <p class="about__text">
Welcome to our company! We're a passionate team dedicated to creating amazing solutions for our clients.
          Founded in 2024, we've been at the forefront of innovation and digital transformation.
</p> <p class="about__text">we are leveraging latest tech stacks and bright and fresh minds</p> </section> <section class="about__section"> <h2 class="about__title">Our Team</h2> <div class="team__grid"> <div class="team__card"> <h3 class="team__name">Keshav Mohta</h3> <p class="team__role">Founder & CEO</p> </div> <div class="team__card"> <h3 class="team__name">Omkar Chebale</h3> <p class="team__role">Lead Developer</p> </div> </div> </section> <section> <h2 class="about__title">Our Mission</h2> <p class="about__text">
Our mission is to deliver exceptional value through innovative solutions and outstanding service. We believe
          in creating lasting partnerships with our clients and contributing to their success.
</p> </section> </article> </div> ` })}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/pages/about.astro", void 0);

const $$file = "/home/recursive/dev/recursivezero/recursivezero/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
