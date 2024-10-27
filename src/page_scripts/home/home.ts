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

function animate_short_about_paragraph(): void {
   const hero_title_div: HTMLElement = query(".hero_title");
   const paragraph_p_div: HTMLElement = query(".short_about .short_about_paragraph p");

   const split: Splitting.Result[] = Splitting({
      target: paragraph_p_div,
      by: "chars",
   });

   const tl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
         trigger: hero_title_div,
         start: "top-=100% top",
         end: "+=30%",
         scrub: 0.25,
      },
   });

   tl.to(
      split[0].chars,
      {
         color: "#f0e8e3",
         stagger: 0.2,
      },
      0.1
   );
}

function animate_short_about_thumbnail(): void {
   const hero_title_div: HTMLElement = query(".hero_title");
   const image_div: HTMLElement = query(".short_about_thumbnail .short_about_thumbnail_centered img");
   const box_shadow_div: HTMLElement = query(
      ".short_about_thumbnail .short_about_thumbnail_centered .short_about_thumbnail_box_shadow"
   );

   const tl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
         trigger: hero_title_div,
         start: "top-=200% top",
         end: "+=70%",
         scrub: true,
         toggleActions: "play none none reverse",
      },
   });
   tl.to(image_div, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
   }).to(
      box_shadow_div,
      {
         width: "100%",
         ease: "power1.inOut",
      },
      "<"
   );

   tl.add(() => {
      const paragraph_div: HTMLElement = query(".short_about .short_about_paragraph");

      const nested_tl: GSAPTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: paragraph_div,
            start: "top+=80% top",
            end: "+=50%",
            scrub: true,
            toggleActions: "play none none reverse",
         },
      });

      nested_tl.to(image_div, {
         clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 85%)",
         y: -50,
         duration: 2,
         ease: "power1.inOut",
      });
   });
}

function init(): void {
   hero_list_scroll();
   test_fetch_data();
   animate_short_about_paragraph();
   animate_short_about_thumbnail();
}

document.addEventListener("DOMContentLoaded", () => {
   if (!verify_page_root()) {
      return;
   }
   init();
});
