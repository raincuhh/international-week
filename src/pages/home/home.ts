import { query, get_id, query_all, verify_page_root } from "../../lib/utils";
import { init_recommended_list } from "../../lib/recommended_list";
import { hero_list_scroll } from "./hero_list";
import { test_fetch_data } from "../../lib/test/test_data_fetch";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

function animate_short_about_paragraph() {
   const target: HTMLElement = query(".short_about p");

   gsap.to(target, {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
         trigger: target,
         scrub: 1,
         start: "top center",
         end: "bottom top",
      },
   });
}

function init() {
   hero_list_scroll();
   test_fetch_data();
   animate_short_about_paragraph();
}

// TODO: add the hero list scroll actually, and make it work
document.addEventListener("DOMContentLoaded", () => {
   if (!verify_page_root()) {
      return;
   }
   init();
});
