import { d as createAstro, c as createComponent, r as renderTemplate, e as addAttribute, a as renderComponent, F as Fragment, m as maybeRenderHead, f as renderScript, u as unescapeHTML, s as spreadAttributes, j as renderHead, b as renderSlot } from './astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
import { s as siteConfig } from './site.config_BuEpAZo_.mjs';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from './_astro_assets_BR5gYdyg.mjs';
import 'clsx';

const $$Astro$3 = createAstro("https://recursivezero.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, ogImage, articleDate } = Astro2.props;
  const titleSeparator = "\u2022";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/assets/images/RecursiveZero-White.jpg", Astro2.url).href;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>${siteTitle}</title><link rel="icon" href="/assets/images/favicon-32x32.png" type="image/png" sizes="32x32"><link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml"><link rel="shortcut icon" href="/assets/images/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest"><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="title"${addAttribute(siteTitle, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(siteConfig.author, "content")}><meta name="theme-color" content="dark"><meta name="color-scheme" content="light dark"><meta property="og:type"${addAttribute(articleDate ? "article" : "website", "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:site_name"${addAttribute(siteConfig.title, "content")}><meta property="og:locale"${addAttribute(siteConfig.ogLocale, "content")}><meta property="og:image"${addAttribute(socialImageURL, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:author"${addAttribute(siteConfig.author, "content")}><meta property="article:published_time"${addAttribute(articleDate, "content")}>` })}`}<meta property="twitter:card" content="/assets/images/RecursiveZero-White.jpg"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(socialImageURL, "content")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(siteConfig.title, "title")} href="/rss.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/layouts/BaseHead.astro", void 0);

const logoImage = new Proxy({"src":"/_astro/RecursiveZero-White.DLnB3bUA.jpg","width":1570,"height":848,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/recursive/dev/recursivezero/recursivezero/public/assets/images/RecursiveZero-White.jpg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <div class="nav-container w-full"> <nav class=""> <div class="mx-5 flex w-full items-center justify-between"> <h1 class="text-[1.05rem] font-bold leading-[-0.03em] lg:text-[1.2rem]"> <a href="/" class="flex items-center gap-[0.5rem] lg:flex-row"> ${renderComponent($$result, "Picture", $$Picture, { "src": logoImage, "formats": ["png", "jpeg", "jpg", "webp"], "alt": "logo", "class": "w-[180px] lg:w-[250px]" })}
Recursive Zero : A gupt startup
</a> </h1> <ul class="menu-list flex items-center gap-[1.5rem] lg:flex-row-reverse"> <li id="themeToggle"> <button class="sunBtn"> <i class="fa fa-sun-o" aria-hidden="true">Light</i> </button> <button class="moonBtn hidden"> <i class="fa fa-moon-o" aria-hidden="true">Dark</i> </button> </li> <li id="menuToggle" class="menu-button lg:hidden"> <button id="closeBtn" class="ml-[3px] hidden"> <i class="fa fa-times" aria-hidden="true"></i> </button> <button id="openBtn"> <i class="fa fa-bars" aria-hidden="true"></i> </button> </li> <!-- desktop menu --> <a href=""> <button class="yellowBtnHover rounded-md bg-[#FFCC00] px-[10px] py-[5px] text-[#111]">
Start Saving Time!
</button> </a> </ul> </div> </nav> <!-- mobile nav-overlay --> <div id="menu-open" class="nav-overlay hidden h-dvh pt-[20px] lg:hidden"> <div class="pt-[10px]"> <div class="flex flex-col items-center justify-between gap-[20px] py-[20px] text-[14px] leading-[22.4px] md:text-[16px] md:leading-[25.6px]"> <a href="" class="w-full"> <button class="h-[35px] w-full rounded-md bg-[#FFCC00] px-[10px] py-[5px] text-[#111]">
Start Saving Time!
</button> </a> </div> </div> </div> </div> </header> <!--</header>--> ${renderScript($$result, "/home/recursive/dev/recursivezero/recursivezero/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/components/Header.astro", void 0);

const countersByPage = /* @__PURE__ */ new WeakMap();
function createSvgComponent({ meta, attributes, children }) {
  const renderedIds = /* @__PURE__ */ new WeakMap();
  const Component = createComponent((result, props) => {
    let counter = countersByPage.get(result) ?? 0;
    const {
      title: titleProp,
      viewBox,
      mode,
      ...normalizedProps
    } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (mode === "sprite") {
      let symbol = "";
      let id = renderedIds.get(result);
      if (!id) {
        countersByPage.set(result, ++counter);
        id = `a:${counter}`;
        symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
        renderedIds.set(result, id);
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use href="#${id}" /></svg>`;
    }
    return renderTemplate`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size !== void 0 && props.width === void 0 && props.height === void 0) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const HamIcon = createSvgComponent({"meta":{"src":"/_astro/ham.BNuwJg_M.svg","width":30,"height":30,"format":"svg"},"attributes":{"mode":"inline","fill":"current","viewBox":"0 0 100 80","width":"30","height":"30"},"children":"\n  <title>Hamburger Menu</title>\n  <symbol id=\"line\">\n    <rect width=\"100\" height=\"20\" fill=\"currentColor\"></rect>\n  </symbol>\n  <use xlink:href=\"#line\" y=\"0\" />\n  <use xlink:href=\"#line\" y=\"30\" />\n  <use xlink:href=\"#line\" y=\"60\" />\n"});

const ArrowIcon = createSvgComponent({"meta":{"src":"/_astro/arrow.BV4IYXlf.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","":"","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","width":"24","height":"24"},"children":"\n  <title>Arrow</title>\n  <path stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25\"></path>\n"});

const ToggleIcon = createSvgComponent({"meta":{"src":"/_astro/toggle.BSEihKJZ.svg","width":100,"height":100,"format":"svg"},"attributes":{"mode":"inline","viewBox":"0 0 100 100"},"children":"<!-- System Icon -->\n  <symbol id=\"icon-system\" viewBox=\"0 0 24 24\">\n    <path fill=\"green\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z\">\n    </path>\n    <title>System</title>\n  </symbol><!-- Sun Icon -->\n  <symbol id=\"icon-sun\" viewBox=\"0 0 24 24\">\n    <path =\"\" d=\"M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z\">\n    </path>\n    <title>Sun</title>\n  </symbol><!-- Moon Icon -->\n  <symbol id=\"icon-moon\" viewBox=\"0 0 24 24\">\n    <path fill=\"silver\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z\">\n    </path>\n    <title>Moon</title>\n  </symbol>\n  <svg width=\"100\" height=\"100\" fill=\"currentColor\">\n    <use href=\"#icon-system\"></use>\n  </svg>\n  <svg width=\"100\" height=\"100\" fill=\"currentColor\">\n    <use href=\"#icon-sun\"></use>\n  </svg>\n  <svg width=\"100\" height=\"100\" fill=\"currentColor\">\n    <use href=\"#icon-moon\"></use>\n  </svg>\n"});

const $$Astro$2 = createAstro("https://recursivezero.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="link"${addAttribute(href, "href")}${addAttribute(name, "aria-label")}> <span>${name}</span> </a>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/components/Link.astro", void 0);

const $$Astro$1 = createAstro("https://recursivezero.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { pages } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="nav"> <ul class="nav--list"> ${pages.filter((p) => p.isActive).map((p) => renderTemplate`<li class="nav--list__item"> ${renderComponent($$result, "Link", $$Link, { "href": p.path, "name": p.name })} </li>`)} </ul> </nav>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/layouts/Navigation.astro", void 0);

const NavbarLinks = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    isActive: true
  },
  {
    name: "About",
    title: "About",
    path: "/about",
    isActive: true
  },
  {
    name: "Blogs",
    title: "Blogs",
    path: "/blogs",
    isActive: true
  },
  {
    name: "Career",
    title: "Career",
    path: "/career",
    isActive: true
  },
  {
    name: "Work",
    title: "Work",
    path: "/work",
    isActive: true
  }
];

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button popovertarget="nav" popovertargetaction="toggle"> ${renderComponent($$result, "HamIcon", HamIcon, { "width": 24, "height": 24 })} </button> <div class="layout"> <aside popover="auto" id="nav"> <button popovertarget="nav" popovertargetaction="hide" class="hider" aria-label="Close drawer"> <span class="sr-only">Close drawer</span> </button> ${renderComponent($$result, "Navigation", $$Navigation, { "pages": NavbarLinks })} <div class="actions"> <button class="theme-toggle"> ${renderComponent($$result, "ToggleIcon", ToggleIcon, { "width": 24, "height": 24 })} </button> <button class="placement-toggle"> ${renderComponent($$result, "ArrowIcon", ArrowIcon, { "width": 24, "height": 24 })} </button> </div> </aside> </div> ${renderScript($$result, "/home/recursive/dev/recursivezero/recursivezero/src/layouts/common/Menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/layouts/common/Menu.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="h-[1px] w-full bg-white/70"></div> <div class="p-[20px] lg:py-[50px]"> <div class="mx-auto flex max-w-[100rem] flex-row items-center justify-between"> <div class="footer-bottom mb-[30px] lg:mb-[40px] lg:pt-[20px]"> <div> <p class="footerBottomA text-[12.5px] leading-[20px] text-[#999]">
©2025
<a href="/" class="footerBottomB text-[#fff]"> <strong> RecursiveZero Private Limited</strong> </a>
| All Rights Reserved |
<a href="/terms" class="hover:text-white">Terms & Conditions</a> |
<a href="/privacy" class="hover:text-white">Privacy Policy</a> </p> </div> </div> <div class="footer-top justify-between border-b border-[#222] pb-[30px] lg:flex lg:pb-[10px]"> <div class="footer-links flex justify-end"> <ul class="flex gap-[0.62rem] font-bold"> <li> <a href="https://www.twitter.com/recursivezero" target="_blank" class="social-link inline-flex size-[40px] items-center justify-center rounded-[5px]">
X
</a> </li> <li> <a href="mailto:recursivezero@outlook.com" class="social-link inline-flex size-[40px] items-center justify-center rounded-[5px]">
M
</a> </li> <li> <a href="https://www.github.com/recursivezero" target="_blank" class="social-link inline-flex size-[40px] items-center justify-center rounded-[5px]">
G
</a> </li> </ul> </div> </div> </div> </div> </footer>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://recursivezero.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    meta: { title, description = siteConfig.description, ogImage, articleDate }
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(siteConfig.lang, "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "ogImage": ogImage, "date": articleDate })}<title>${title}</title>${renderHead()}</head> <body id="pageBody"> <!--<ThemeProvider />--> ${renderComponent($$result, "Header", $$Header, {})} <main id="main" class="main"> <div class="sidebar">${renderComponent($$result, "Menu", $$Menu, {})}</div> <div class="content"> ${renderSlot($$result, $$slots["default"], renderTemplate`<p>This is my fallback content, if there is no child passed into slot</p>`)} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/home/recursive/dev/recursivezero/recursivezero/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, createSvgComponent as c };
