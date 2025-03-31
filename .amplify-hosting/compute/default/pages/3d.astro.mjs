import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$3D = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section> <select id="theme"> <option value="light">light</option> <option value="dark">dark</option> </select> </section> <main> <h1 class="fluid">switching<br>themes in 3d</h1> <p>\nMaking use of View Transitions and CSS\n<code>perspective()</code>.<br><strong>The Trick:</strong> Apply a chained transform to both <code>::view-transition-new</code> and\n<code>::view-transition-old</code> using <code>perspective()</code> as a base.\n</p> </main> <script>\n  const config = {\n    theme: "system",\n    perspective: 400,\n    distance: 0.75,\n    duration: 1.2,\n    invert: true\n  };\n\n  const ctrl = document.getElementById("theme");\n\n  const update = () => {\n    document.documentElement.dataset.theme = config.theme;\n    document.documentElement.dataset.invert = config.invert;\n    document.documentElement.style.setProperty("--perspective", `${config.perspective}vmax`);\n    document.documentElement.style.setProperty("--distance", `-${config.distance}`);\n    document.documentElement.style.setProperty("--duration", `${config.duration}s`);\n  };\n\n  const sync = (event) => {\n    if (!document.startViewTransition || event.target.controller.view.labelElement.innerText !== "theme")\n      return update();\n    document.startViewTransition(update);\n  };\n\n  ctrl?.addEventListener("change", sync);\n  update();\n<\/script>'], ["", '<section> <select id="theme"> <option value="light">light</option> <option value="dark">dark</option> </select> </section> <main> <h1 class="fluid">switching<br>themes in 3d</h1> <p>\nMaking use of View Transitions and CSS\n<code>perspective()</code>.<br><strong>The Trick:</strong> Apply a chained transform to both <code>::view-transition-new</code> and\n<code>::view-transition-old</code> using <code>perspective()</code> as a base.\n</p> </main> <script>\n  const config = {\n    theme: "system",\n    perspective: 400,\n    distance: 0.75,\n    duration: 1.2,\n    invert: true\n  };\n\n  const ctrl = document.getElementById("theme");\n\n  const update = () => {\n    document.documentElement.dataset.theme = config.theme;\n    document.documentElement.dataset.invert = config.invert;\n    document.documentElement.style.setProperty("--perspective", \\`\\${config.perspective}vmax\\`);\n    document.documentElement.style.setProperty("--distance", \\`-\\${config.distance}\\`);\n    document.documentElement.style.setProperty("--duration", \\`\\${config.duration}s\\`);\n  };\n\n  const sync = (event) => {\n    if (!document.startViewTransition || event.target.controller.view.labelElement.innerText !== "theme")\n      return update();\n    document.startViewTransition(update);\n  };\n\n  ctrl?.addEventListener("change", sync);\n  update();\n<\/script>'])), maybeRenderHead());
}, "/home/recursive/dev/recursivezero/recursivezero/src/pages/3d.astro", void 0);

const $$file = "/home/recursive/dev/recursivezero/recursivezero/src/pages/3d.astro";
const $$url = "/3d";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$3D,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
