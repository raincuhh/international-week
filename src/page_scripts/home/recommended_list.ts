import { create, query } from "../../lib/utils";

interface food_profile_params {
   name: string | null;
   price: number | null;
   short_desc: string | null;
   long_desc: string | null;
   image_paths: Array<string> | null;
}

class food_profile {
   name: string | null;
   price: number | null;
   short_desc: string | null;
   long_desc: string | null;
   image_paths: Array<string> | null;
   constructor(f: food_profile_params) {
      this.name = f.name;
      this.price = f.price;
      this.short_desc = f.short_desc;
      this.long_desc = f.long_desc;
      this.image_paths = f.image_paths;
   }
}

// test
let test_food_list = {
   food1: {
      name: "food1",
      price: 562,
      short_desc: "lorem ipsum dolor sit amet",
      long_desc: "lorem ipsum",
      image_paths: ["", ""],
   },
   food2: {
      name: "food2",
      price: 763,
      short_desc: "lorem ipsum dolor sit amet",
      long_desc: "lorem ipsum",
      image_paths: ["", ""],
   },
   food3: {
      name: "food3",
      price: 1065,
      short_desc: "lorem ipsum dolor sit amet",
      long_desc: "lorem ipsum",
      image_paths: ["", ""],
   },
};

export function create_recommended_list() {
   // tests
   let test_recommened_list: Array<food_profile> = [];
   for (const [key, food] of Object.entries(test_food_list)) {
      let profile: food_profile = new food_profile({
         name: food.name,
         price: food.price,
         short_desc: food.short_desc,
         long_desc: food.long_desc,
         image_paths: food.image_paths,
      });
      test_recommened_list.push(profile);
   }
   add_recommended_list(test_recommened_list);
}

function add_recommended_list(list: Array<food_profile>) {
   const recommended_list_grid_div: HTMLElement = query(".recommended_list_grid");

   list.forEach((item_list: food_profile) => {
      create_food_profile_html(item_list, recommended_list_grid_div);
   });
}

function create_food_profile_html(items: food_profile, recommended_list_grid_div: HTMLElement) {
   let parent_div: HTMLElement = create("div");
   parent_div.setAttribute("class", "recommended_food_profile");
   parent_div.setAttribute("id", `recommened_food_profile_${items.name || "unknown_name"}`);
   recommended_list_grid_div?.appendChild(parent_div);

   let container_div: HTMLElement = create("div");
   container_div.setAttribute("class", "food_profile_container");
   container_div.textContent = "sigma";
   parent_div?.appendChild(container_div);
}
