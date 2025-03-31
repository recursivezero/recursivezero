import { c as createComponent, r as renderTemplate, a as renderComponent, f as renderScript, m as maybeRenderHead } from './astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
/* empty css                          */
import { $ as $$BaseLayout } from './BaseLayout_BIk6jwWF.mjs';

const frontmatter = {
  title: "Interactive Letter",
  description: "An interactive letter with sound effects and background options",
  image: "https://plus.unsplash.com/premium_photo-1666739032615-ecbd14dfb543?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
const $$Letter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "meta": { title: "Interactive Letter" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="controls" id="controls"> <div class="control-group"> <label>Background:</label> <select id="bgSelector"> <option value="none">None</option> <option value="gradient1">Gradient 1</option> <option value="gradient2">Gradient 2</option> <option value="pattern1">Pattern 1</option> </select> <button id="toggleBg">Toggle Background</button> </div> <div class="control-group"> <label>Font:</label> <select id="fontSelector"> <option value="Arial">Arial</option> <option value="Georgia">Georgia</option> <option value="Times New Roman">Times New Roman</option> </select> <input type="color" id="colorPicker" value="#000000"> </div> <div class="control-group"> <label>Sound:</label> <select id="soundSelector"> <option value="sound1">Sound 1</option> <option value="sound2">Sound 2</option> <option value="sound3">Sound 3</option> </select> <button id="toggleSound"> <span class="icon">🔊</span> </button> </div> </div> <div class="letter-container" id="letterContainer"> <div class="big-letter" id="bigLetter">A</div> </div> <div class="meaning-section"> <h2>Meaning</h2> <p>The letter 'A' stands for...</p> <div class="meaning-content"> <p>• First letter of the English alphabet</p> <p>• Represents excellence in grading systems</p> <p>• Phonetically represents various sounds across languages</p> <p>• Historical origins trace back to ancient Phoenician alphabet</p> <!-- Add more meaning content as needed --> </div> </div> ` })} ${renderScript($$result, "/home/recursive/dev/recursivezero/recursivezero/src/pages/work/letter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/pages/work/letter.astro", void 0);

const $$file = "/home/recursive/dev/recursivezero/recursivezero/src/pages/work/letter.astro";
const $$url = "/work/letter";

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Letter,
  file: $$file,
  frontmatter,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_0 as _ };
