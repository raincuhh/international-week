function create_uuid(): string {
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
function create(str: string): Element {
   return document.createElement(str);
}
function get_id(str: string): Element | null {
   return document.getElementById(str);
}
function query(str: string): Element | null {
   return document.querySelector(str);
}
function query_all(str: string): NodeListOf<Element> {
   return document.querySelectorAll(str);
}
function set_doc_title(str: string): void {
   document.title = str;
}
function uppercaseify(str: string): string {
   let firstChar = str.charAt(0);
   if (firstChar !== firstChar.toUpperCase()) {
      str = str.charAt(0).toUpperCase() + str.slice(1);
   }
   return str;
}
function uppercaseify_str(str: string) {
   let parts = str.split(" ");
   parts.forEach((part, index) => {
      parts[index] = uppercaseify(part);
   });

   return parts.join(" ");
}

export { create_uuid, create, get_id, query, query_all, set_doc_title, uppercaseify, uppercaseify_str };
