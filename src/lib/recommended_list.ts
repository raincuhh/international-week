import { get_id, create, query, query_all, uppercaseify, uppercaseify_str } from "./utils";

interface food_profile_minimal {
   name: string | null;
   price: number | null;
   desc: string | null;
   image_path: string | null;
}

interface food_profile {
   name: string | null;
   price: number | null;
   desc: string | null;
   image_path: string | null;
}

// remove this when gotten from local db
let placeholder_recommended_food = {
   food1: {
      name: "food1",
      price: 1234,
      desc: "lorem ipsum dolor sit amet",
      image_path: "",
   },
   food2: {
      name: "food2",
      price: 423,
      desc: "lorem ipsum dolor sit amet",
      image_path: "",
   },
   food3: {
      name: "food3",
      price: 3242,
      desc: "lorem ipsum dolor sit amet",
      image_path: "",
   },
};

function init() {
   //

   // tests
   let test_recommened_list: Array<food_profile_minimal> = [];
   for (const food of Object.values(placeholder_recommended_food)) {
      test_recommened_list.push(food);
   }
   add_recommended_list(test_recommened_list);
}

function add_recommended_list(list: Array<food_profile_minimal>) {
   const recommended_list_grid_div: Element = query(".recommended_list_grid");
   console.log(recommended_list_grid_div);
   list.forEach((item_list: food_profile_minimal) => {
      create_food_profile_html(item_list, recommended_list_grid_div);
   });
}

function create_food_profile_html(items: food_profile_minimal, recommended_list_grid_div: Element) {
   // profile grid
   let profile_div: Element = create("div");
   profile_div.setAttribute("class", "recommended_food_profile");
   //profile_div.setAttribute("id", `recommened_food_profile_${items.name}`);
   recommended_list_grid_div.appendChild(profile_div);
}

document.addEventListener("DOMContentLoaded", () => {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
      return;
   }
   init();
});
