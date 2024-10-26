import { query, get_id, query_all, verify_page_root } from "../../lib/utils";
import { init_recommended_list } from "../../lib/recommended_list";
import { hero_list_scroll } from "./hero_list";
import { test_fetch_data } from "../../lib/test/test_data_fetch";

function init() {
   hero_list_scroll();
   test_fetch_data();
}

// TODO: add the hero list scroll actually, and make it work
document.addEventListener("DOMContentLoaded", () => {
   if (!verify_page_root()) {
      return;
   }
   init();
});
