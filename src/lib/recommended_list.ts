import { get_id } from "./utils";

interface food_profile_minimal {
   name: string;
   price: number;
   desc: string;
}

interface food_profile {
   name: string;
   price: number;
   desc: string;
   image_path: string;
}

// remove this when gotten from local db
let placeholder_recommended_food = {
   food1: {
      name: "food1",
      price: 2193,
      desc: "lorem ipsum dolor sit amet",
      image_path: "",
   },
};

function add_recommended_list() {}

function create_recommended_col_html() {}

document.addEventListener("DOMContentLoaded", () => {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
      return;
   }
   add_recommended_list();
});
