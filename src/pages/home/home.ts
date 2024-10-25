import { query, get_id, query_all } from "../../lib/utils";
import { init_recommended_list } from "../../lib/recommended_list";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

function start_hero_title_scroll() {}

function init() {
   start_hero_title_scroll();
}

document.addEventListener("DOMContentLoaded", () => {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
      return;
   }
   init();
});
