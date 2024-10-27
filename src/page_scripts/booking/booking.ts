import { verify_page_root } from "../../lib/utils";

function init() {}

document.addEventListener("DOMContentLoaded", () => {
   if (!verify_page_root()) {
      return;
   }
   init();
});
