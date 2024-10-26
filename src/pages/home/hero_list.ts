import { get_root_variable_val, create, query } from "../../lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

const gap_val: string = get_root_variable_val("--s-marg-em-s");
const resolved_gap_height: number = get_resolved_gap_height_val(gap_val) || 0;

export function hero_list_scroll(): void {
   const hero_title_list: HTMLElement = query(".hero_title_list");
   //duplicate_list_elements(hero_title_list);

   const texts: Array<HTMLElement> = gsap.utils.toArray(".hero_title_list .h1");
   const hero_tl: GSAPTimeline = gsap.timeline({
      repeat: -1,
      paused: false,
   });
   //animate_section_lines(hero_tl, hero_title_list, hero_title_list.clientHeight, texts);
}

function animate_section_lines(
   tl: GSAPTimeline,
   container: HTMLElement,
   container_height: number,
   texts: Array<HTMLElement>
): void {
   texts.forEach((text: HTMLElement, _i: number) => {
      const line_height: number = text.clientHeight + resolved_gap_height;
   });
}

function get_resolved_gap_height_val(gap_val: string): number {
   if (gap_val.startsWith("calc")) {
      return resolve_1em_and_expression_height(1 / 1.618);
   }
   return 0;
}

function resolve_1em_and_expression_height(expression: number): number {
   const temp: HTMLElement = create("div");
   document.body.appendChild(temp);
   temp.style.fontSize = "1em";
   const one_em_px: number = parseFloat(getComputedStyle(temp).fontSize);
   document.body.removeChild(temp);

   const factor = expression;
   return one_em_px * factor;
}

function duplicate_list_elements(container: HTMLElement): void {
   const original_elements: Element[] = Array.from(container.children);
   original_elements.forEach((item) => {
      const clone: HTMLElement = item.cloneNode(true) as HTMLElement;
      container.appendChild(clone);
   });
}

/*
function split_hero_title_list_sections(sections: Array<Array<Element>>, texts: Array<Element>) {
   texts.forEach((text) => {
      if (text.querySelector("span")) {
         sections.push([text]);
      } else {
         if (sections.length === 0) {
            sections.push([]);
         }
         sections[sections.length - 1].push(text);
      }
   });
}

function animate_section_lines(
   tl: GSAPTimeline,
   sections: Array<Array<HTMLElement>>,
   text_heights: number[]
) {
   const container_height = 700;
   let total_height = 0;
   let gap = get_root_variable_val("--s-marg-em-s");
   let resolved_gap: number;
   if (gap.startsWith("calc")) {
      resolved_gap = resolve_1em_and_expression_height(gap, 1 / 1.618);
   }

   sections.forEach((section: Array<HTMLElement>, i: number) => {
      section.forEach((line: Element, j: number) => {
         const line_height: number = line.clientHeight + resolved_gap;

         tl.to(".hero_title_list", {
            y: line_height * j,
            onComplete: () => {
               handle_line_changes(line, sections);
            },
         }).to(
            {},
            {
               duration: 0.25,
            }
         );
      });
   });
}

function handle_line_changes(line: Element, sections: Array<Array<HTMLElement>>) {}
*/
