/**
 * holds the shared content each page(booking, home, admin)
 * will call on dom content load.
 */

import { get_id } from "./utils";
import { init } from "./shared_loading";

document.addEventListener("DOMContentLoaded", () => {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
      return;
   }

   console.log(
      "%cIl Sapore dell'Italia",
      "background-color: #FFF; color: #000000; font-size: 12px; padding: 8px 10px 6px; border-radius: 4px"
   );
   init();
});
