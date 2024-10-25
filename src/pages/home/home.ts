import { query, get_id, query_all } from "../../lib/utils";
import { init_recommended_list } from "../../lib/recommended_list";

document.addEventListener("DOMContentLoaded", () => {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
      return;
   }
});
