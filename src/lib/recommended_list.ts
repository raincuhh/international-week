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
   console.log(test_recommened_list);
}

function add_recommended_list(list: Array<food_profile_minimal>) {
   list.forEach((profile) => {
      create_food_profile_html(profile);
   });
}

function create_food_profile_html(items: food_profile_minimal) {
   let profile_div: Element = create("div");
   profile_div.setAttribute("class", "recommended_food_profile");
   profile_div.setAttribute("id", `recommened_food_profile_${items.name || "name"}`);
}

document.addEventListener("DOMContentLoaded", () => {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
      return;
   }
   console.log("adwawadaw");
   init();
});
