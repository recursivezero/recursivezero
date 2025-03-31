import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_N9GWUwvf.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_BS3zoIiF.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_DfVP1hkU.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIk6jwWF.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="w-full px-4 py-8 md:px-6 md:py-12 lg:px-8"> <div class="mx-auto"> <h2 id="aboutText" class="mb-[0.8rem] inline-block rounded-md py-[2px] text-[27px]">What we do</h2> <h1 class="mb-[1.1rem] text-[36px] font-bold leading-[42px] tracking-[-0.03em] lg:text-[61px] lg:leading-[72px]">
Efficient apps that simplify your life.
</h1> <div class="flex flex-col gap-[1.5rem] lg:flex-row lg:justify-between lg:gap-[1.2rem] xl:gap-[3rem]"> <figure class="basis-[55%] lg:h-[500px]"> <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNlYXJjaHw0MXx8VGVjaG5vbG9neXxlbnwwfHx8fDE3MDE2MTQ0NTd8MA&ixlib=rb-4.0.3&q=85" alt="person working on a laptop " class="h-[250px] w-full rounded-xl object-cover md:h-[500px] lg:h-full"> </figure> <div class="basis-[45%]"> <div> <p id="about" class="mb-[0.8rem] text-[18px] font-normal leading-[24px] text-[#999] lg:text-[20px] lg:leading-[32px]">
Recursive Zero - crafting compact apps for smoother workflows and smarter storage solutions, enhancing
              your day-to-day productivity
</p> </div> <div> <a href="#contactForm"> <button class="h-[50px] rounded-[5px] bg-[#FFCC00] px-[20px] text-[14px] text-[#111] lg:text-[16px]">
Contact us
</button> </a> <a href="#" class="ml-[8px]"> <button class="buttonTheme learn-btn h-[50px] rounded-[5px] px-[20px] text-[14px] lg:text-[16px]">
Learn more
</button> </a> </div> </div> </div> </div> </div> </section>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/components/AboutSection.astro", void 0);

const $$AppsSimplifySection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="p-[20px] lg:py-[50px]"> <div class="mx-auto"> <div class="mb-[20px]"> <h2 class="text-[27.3px] font-bold leading-[32.8px] tracking-[-0.54px] md:text-[31.2px] md:leading-[37.5px] md:tracking-[-0.62px]">
Simplifying daily tasks with handy mini apps
</h2> </div> <div class="section-description flex-row-reverse items-start justify-between gap-[20px] lg:flex"> <div class="section-image mb-[10px] h-[150px] basis-[50%] md:h-[300px]"> <figure> <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNlYXJjaHw0NXx8VGVjaG5vbG9neXxlbnwwfHx8fDE3MDE2MTQ0NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" class="h-[150px] w-full rounded-[10px] object-cover md:h-[300px]"> </figure> </div> <div class="basis-[50%]"> <p class="appSimplifyText mb-[20px] text-[14px] leading-[22.4px] text-[#999] md:text-[16px] md:leading-[25.6px]">
Based out of Bengaluru city, Recursive Zero stands as a pioneer in innovation, meticulously crafting small
            yet powerful apps aimed at simplifying your daily tasks and enhancing your storage efficiency. Our
            cutting-edge solutions are woven with a touch of simplicity, transforming your workflow with remarkable
            efficiency. Traverse through an intuitive app experience with Recursive Zero, fueling your productivity to
            unprecedented heights
</p> <div> <a href=""> <button class="h-[40px] rounded-[5px] bg-[#ffcc00] px-[20px] text-[14px] text-[#111] md:text-[16px]">
Apps Simplify Life
</button> </a> </div> </div> </div> </div> </div> </section>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/components/AppsSimplifySection.astro", void 0);

const $$BlogsSection = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const slicedPosts = posts.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section> <div id="featuresSection" class="p-[20px] lg:py-[50px]"> <div class="mx-auto"> <div class="section-header mb-[20px]"> <h2 class="text-[27px] font-bold leading-[32.8px] tracking-[-0.54px] md:text-[31.2px] md:leading-[37.5px] md:tracking-[-0.62px]">
Blogs
</h2> </div> <div class="cards-container grid grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3"> ${slicedPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "url": `/blogs/${post.slug}` || "/404", "title": post.data.title, "description": post.data.description, "image": post.data.image, "author": post.data.author, "date": post.data.date.toLocaleDateString() })}`)} </div> <a href="/feature" class="absolute mt-2 font-bold hover:underline">Show All</a> </div> </div> </section>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/components/BlogsSection.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="p-[20px]"> <div class="mx-auto"> <div class="flex-row-reverse items-start gap-[20px] lg:flex"> <div class="mb-[10px] basis-[50%] md:mb-[40px]"> <figure> <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNlYXJjaHw0Nnx8VGVjaG5vbG9neXxlbnwwfHx8fDE3MDE2MTQ0NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="contactus image" class="h-[200px] w-full rounded-[10px] object-cover md:h-[400px]"> </figure> </div> <div class="basis-[50%]"> <h2 class="text-[27.3px] font-bold tracking-[-0.54px] md:text-[31.2px] md:leading-[37.5px] md:tracking-[-0.62px]">
Reach Recursive Zero
</h2> <p class="contactSectionText mt-[5px] text-[14px] leading-[22.4px] text-[#999999] md:text-[16px] md:leading-[25.6px]">
Tech simplified - Harness the power of modern technology with Recursive Zero; just drop a message in our
            contact form and let's ignite your journey to digital transcendence
</p> <form id="contactForm" action="" class="contact-form mt-[20px]"> <input type="text" name="" placeholder="First name" class="formInputBg mt-[5px] w-full rounded-[5px] p-[10px]"> <input type="email" name="" placeholder="Email" class="formInputBg mt-[5px] w-full rounded-[5px] p-[10px]"> <textarea name="" cols="30" rows="10" placeholder="Message" class="formInputBg mt-[5px] h-[100px] w-full rounded-[10px] p-[10px] md:h-[120px]"></textarea> <button class="mt-[5px] h-[40px] rounded-[5px] bg-[#ffcc00] px-[20px] text-[#111]"> Send </button> </form> </div> </div> </div> </div> </section>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/components/ContactSection.astro", void 0);

const $$NewsLetterSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div id="newsLetterSection" class=""> <div class="p-[20px] lg:py-[50px]"> <div class="mx-auto"> <h2 class="text-center text-[27.34px] font-bold leading-[32.8px] tracking-[-0.54px] md:text-[31.2px] md:leading-[37.5px] md:tracking-[-0.62px]">
Subscribe to our newsletter
</h2> <p id="newsLetterText" class="mt-[5px] text-center text-[14px] leading-[22.4px] text-[#999999] md:text-[14px] md:leading-[25.6px] lg:text-[16px]">
Receive our most recent news and updates
</p> <form action="" class="relative mx-auto mt-[20px] lg:max-w-[500px]"> <input id="inputBg" type="text" placeholder="Email" class="input w-full rounded-[5px] border border-[#222] bg-[#111] p-[14px] placeholder:text-[#757575]"> <button class="absolute right-[10px] top-[7px] h-[40px] max-w-[200px] rounded-[5px] bg-[#FFCC00] px-[20px] text-[16px] text-[#111]">
Subscribe
</button> </form> </div> </div> </div> </section>`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/components/NewsLetterSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "meta": { title: "Recursive Zero" } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutSection", $$AboutSection, {})}  ${renderComponent($$result2, "BlogsSection", $$BlogsSection, {})} ${renderComponent($$result2, "NewsLetterSection", $$NewsLetterSection, {})} ${renderComponent($$result2, "AppsSimplifySection", $$AppsSimplifySection, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "/home/recursive/dev/recursivezero/recursivezero/src/pages/index.astro", void 0);

const $$file = "/home/recursive/dev/recursivezero/recursivezero/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
