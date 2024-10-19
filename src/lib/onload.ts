import { get_id } from "./utils";

document.addEventListener("DOMContentLoaded", () => {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
      return;
   }

   console.log(
      "%c La Tavola del Sapore",
      "background-color: #FFF; color: #000000; font-size: 12px; padding: 8px 10px 6px; border-radius: 4px"
   );
});
