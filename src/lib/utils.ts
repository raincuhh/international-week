import axios from "axios";

const base_url: string = window.location.origin;

export async function fetch_data(query: string) {
   try {
      const response = await axios.get(`${base_url}/international-week/src/lib/test/test_data_fetch.php`);
      console.log(response.data);
   } catch (error) {
      console.error("Error fetching data:", error);
   }
}

export function create_uuid(): string {
   let pattern: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
   let result: string = "";

   for (let i = 0; i < pattern.length; i++) {
      let c: string = pattern[i];

      if (c === "x" || c === "y") {
         let r: number = Math.floor(Math.random() * 16);
         let v: number = c === "x" ? r : (r & 0x3) | 0x8;

         result += v.toString(16);
      } else {
         result += c;
      }
   }
   return result;
}
export function create(str: string): HTMLElement {
   return document.createElement(str);
}
export function get_id(str: string): HTMLElement | null {
   return document.getElementById(str);
}
export function query(str: string): HTMLElement | null {
   return document.querySelector(str);
}
export function query_all(str: string): NodeListOf<HTMLElement> {
   return document.querySelectorAll(str);
}
export function set_doc_title(str: string): void {
   document.title = str;
}
export function uppercaseify(str: string): string {
   let firstChar = str.charAt(0);
   if (firstChar !== firstChar.toUpperCase()) {
      str = str.charAt(0).toUpperCase() + str.slice(1);
   }
   return str;
}
export function uppercaseify_str(str: string) {
   let parts = str.split(" ");
   parts.forEach((part, index) => {
      parts[index] = uppercaseify(part);
   });

   return parts.join(" ");
}
export function verify_page_root(): boolean {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
      return false;
   }
   return true;
}
export function get_root_variable_val(variable: string): string {
   return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}
