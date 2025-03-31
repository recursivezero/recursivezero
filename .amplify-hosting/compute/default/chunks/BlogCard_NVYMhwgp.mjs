import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_BR_g1Lka.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://recursivezero.com");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { url, title, description, image, author, date, height = "auto" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group relative transition-all duration-300 hover:-translate-y-1"> <a${addAttribute(url, "href")}> <div class="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm"> <div class="relative"> <figure${addAttribute(`overflow-hidden ${typeof height === "number" ? `h-[${height}px]` : `h-[${height}]`}`, "class")}> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} loading="lazy" class="h-full w-full object-cover duration-700 group-hover:scale-110"> </figure> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 group-hover:translate-y-0"> <h3 class="translate-y-6 text-base font-bold leading-tight text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0"> ${title} </h3> ${description && renderTemplate`<p class="mt-2 line-clamp-2 translate-y-6 text-sm text-white/90 transition-transform duration-300 ease-in-out group-hover:translate-y-0"> ${description} </p>`} <div class="mt-2 flex items-center justify-between text-xs text-white/80"> <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"> ${author && renderTemplate`<p class="font-medium">By ${author}</p>`} </div> ${date && renderTemplate`<time${addAttribute(date, "datetime")}>${date}</time>`} </div> </div> </div> </div> </a> </article>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
