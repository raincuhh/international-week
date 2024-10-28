import { create, query } from "../../lib/utils";
import gsap from "gsap";

interface food_profile_params {
   name: string | null;
   price: string | null;
   short_desc: string | null;
   long_desc: string | null;
   image_paths: Array<string> | null;
}

class food_profile {
   name: string | null;
   price: string | null;
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
      price: "562£",
      short_desc: "lorem ipsum ",
      long_desc: "lorem ipsum dolor sit amet, coneticur",
      image_paths: [
         "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
         "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
      ],
   },
   food2: {
      name: "food2",
      price: "763£",
      short_desc: "lorem ipsum ",
      long_desc: "lorem ipsum dolor sit amet, coneticur",
      image_paths: [
         "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
         "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
      ],
   },
   food3: {
      name: "food3",
      price: "1065£",
      short_desc: "lorem ipsum ",
      long_desc: "lorem ipsum dolor sit amet, coneticur",
      image_paths: [
         "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
         "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
      ],
   },
   food4: {
      name: "food4",
      price: "1654£",
      short_desc: "lorem ipsum ",
      long_desc: "lorem ipsum dolor sit amet, coneticur",
      image_paths: [
         "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
         "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
      ],
   },
   food5: {
      name: "food5",
      price: "426£",
      short_desc: "lorem ipsum ",
      long_desc: "lorem ipsum dolor sit amet, coneticur",
      image_paths: [
         "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
         "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
      ],
   },
   food6: {
      name: "food6",
      price: "656£",
      short_desc: "lorem ipsum ",
      long_desc: "lorem ipsum dolor sit amet, coneticur",
      image_paths: [
         "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
         "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
      ],
   },
};

export function create_recommended_list() {
   // tests
   let test_recommened_list: Array<food_profile> = [];
   for (const [key, food] of Object.entries(test_food_list)) {
      let profile: food_profile = new food_profile({
         name: key,
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

function create_food_profile_html(profile: food_profile, recommended_list_grid_div: HTMLElement) {
   let parent_div: HTMLElement = create("div");
   parent_div.setAttribute("class", "recommended_food_profile");
   parent_div.setAttribute("id", `recommened_food_profile_${profile.name || "unknown"}`);
   recommended_list_grid_div?.appendChild(parent_div);

   let container_div: HTMLElement = create("a");
   container_div.setAttribute("href", "#");
   container_div.setAttribute("target", "_blank");
   container_div.setAttribute("rel", "noopener noreferrer");
   container_div.setAttribute("class", "food_profile_container");
   parent_div?.appendChild(container_div);

   // images
   let image_container_div: HTMLElement = create("div");
   image_container_div.setAttribute("class", "food_profile_image_container");
   container_div?.appendChild(image_container_div);

   let hover_image_div: HTMLElement = create("img");
   hover_image_div.setAttribute("class", "food_profile_image");
   hover_image_div.setAttribute("id", `food_profile_hover_image_${profile.name || "unknown"}`);
   hover_image_div.setAttribute("alt", "food_profile_hover_image");
   hover_image_div.setAttribute("src", profile.image_paths[0]);
   image_container_div?.appendChild(hover_image_div);

   hover_image_div.addEventListener("mouseover", () => {
      gsap.to(hover_image_div, {
         opacity: 1,
      });
   });

   hover_image_div.addEventListener("mouseleave", () => {
      gsap.to(hover_image_div, {
         opacity: 0,
      });
   });

   let base_image_div: HTMLElement = create("img");
   base_image_div.setAttribute("class", "food_profile_image");
   base_image_div.setAttribute("id", `food_profile_base_image_${profile.name || "unknown"}`);
   base_image_div.setAttribute("alt", "food_profile_base_image");
   base_image_div.setAttribute("src", profile.image_paths[1]);
   image_container_div?.appendChild(base_image_div);

   // info
   let info_container_div: HTMLElement = create("div");
   info_container_div.setAttribute("class", "food_profile_info_container");
   container_div?.appendChild(info_container_div);

   // info top
   let info_top_container: HTMLElement = create("div");
   info_top_container.setAttribute("class", "food_profile_info_top");
   info_container_div?.appendChild(info_top_container);

   // name
   let info_name_div: HTMLElement = create("div");
   info_name_div.setAttribute("class", "food_profile_info_name");
   info_top_container?.appendChild(info_name_div);

   let info_name_p_div: HTMLElement = create("p");
   info_name_p_div.textContent = profile.name;
   info_name_div?.appendChild(info_name_p_div);

   // price
   let info_price_div: HTMLElement = create("div");
   info_price_div.setAttribute("class", "food_profile_info_price");
   info_top_container?.appendChild(info_price_div);

   let info_price_p_div: HTMLElement = create("p");
   info_price_p_div.textContent = profile.price;
   info_price_div?.appendChild(info_price_p_div);

   // info bottom
   let info_bottom_container: HTMLElement = create("div");
   info_bottom_container.setAttribute("class", "food_profile_info_bottom");
   info_container_div?.appendChild(info_bottom_container);

   // desc
   let info_short_desc_div: HTMLElement = create("div");
   info_short_desc_div.setAttribute("class", "food_profile_info_short_desc");
   info_bottom_container?.appendChild(info_short_desc_div);

   let info_short_desc_p_div: HTMLElement = create("p");
   info_short_desc_p_div.textContent = profile.short_desc;
   info_short_desc_div?.appendChild(info_short_desc_p_div);

   // link to booking with order added
   let info_booking_link_div: HTMLElement = create("div");
   info_booking_link_div.setAttribute("class", "food_profile_info_booking_link");
   info_bottom_container?.appendChild(info_booking_link_div);

   let info_booking_link_a_div: HTMLElement = create("a");
   info_booking_link_a_div.setAttribute("href", "#");
   info_booking_link_a_div.setAttribute("target", "_blank");
   info_booking_link_a_div.setAttribute("rel", "noopener noreferrer");
   info_booking_link_a_div.textContent = "book";
   info_booking_link_div?.appendChild(info_booking_link_a_div);

   let info_booking_link_icon_div: HTMLElement = create("i");
   info_booking_link_icon_div.setAttribute("class", "bx bx-right-arrow-alt");
   info_booking_link_div?.appendChild(info_booking_link_icon_div);

   parent_div.addEventListener("mouseover", () => {
      gsap.to(info_booking_link_icon_div, {
         rotate: "-45deg",
      });
   });

   parent_div.addEventListener("mouseleave", () => {
      gsap.to(info_booking_link_icon_div, {
         rotate: "0deg",
      });
   });
}
