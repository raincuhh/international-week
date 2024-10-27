import { query, verify_page_root } from "../../lib/utils";
//import { init_recommended_list } from "../../lib/recommended_list";
import { hero_list_scroll } from "./hero_list";
import { test_fetch_data } from "../../lib/test/test_data_fetch";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger, Observer);

function animate_short_about_paragraph() {
   const trigger_: HTMLElement = query(".hero_title");
   const target_: HTMLElement = query(".short_about p");
   const split: Splitting.Result[] = Splitting({
      target: target_,
      by: "chars",
   });

   const tl: GSAPTimeline = gsap
      .timeline({
         scrollTrigger: {
            trigger: trigger_,
            start: "top-=100% top",
            end: "+=30%",
            scrub: 0.25,
         },
      })
      .to(
         split[0].chars,
         {
            color: "#f0e8e3",
            stagger: 0.2,
         },
         0.1
      );

   tl;
}

function init() {
   hero_list_scroll();
   test_fetch_data();
   animate_short_about_paragraph();
}

document.addEventListener("DOMContentLoaded", () => {
   if (!verify_page_root()) {
      return;
   }
   init();
});
