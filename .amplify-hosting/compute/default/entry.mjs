import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Bmyk8HaH.mjs';
import { manifest } from './manifest_dziCKqps.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/3d.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/blogs.astro.mjs');
const _page5 = () => import('./pages/blogs/_---slug_.astro.mjs');
const _page6 = () => import('./pages/career.astro.mjs');
const _page7 = () => import('./pages/privacy.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/terms.astro.mjs');
const _page10 = () => import('./pages/work/letter.astro.mjs');
const _page11 = () => import('./pages/work.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/3d.astro", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/blogs/index.astro", _page4],
    ["src/pages/blogs/[...slug].astro", _page5],
    ["src/pages/career.astro", _page6],
    ["src/pages/privacy.astro", _page7],
    ["src/pages/rss.xml.ts", _page8],
    ["src/pages/terms.astro", _page9],
    ["src/pages/work/letter.astro", _page10],
    ["src/pages/work.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///home/recursive/dev/recursivezero/recursivezero/.amplify-hosting/static/",
    "server": "file:///home/recursive/dev/recursivezero/recursivezero/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
