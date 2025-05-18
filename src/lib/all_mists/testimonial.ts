import type { MistBlock } from "$lib/types/mists";
import TestimonialOne from "$lib/components/mist/mtestimonial/one.svelte";
import TestimonialTwo from "$lib/components/mist/mtestimonial/two.svelte";
import TestimonialThree from "$lib/components/mist/mtestimonial/three.svelte";
import TestimonialFour from "$lib/components/mist/mtestimonial/four.svelte";
import TestimonialFive from "$lib/components/mist/mtestimonial/five.svelte";
import TestimonialOneCode from "$lib/components/mist/mtestimonial/one.svelte?raw";
import TestimonialTwoCode from "$lib/components/mist/mtestimonial/two.svelte?raw";
import TestimonialThreeCode from "$lib/components/mist/mtestimonial/three.svelte?raw";
import TestimonialFourCode from "$lib/components/mist/mtestimonial/four.svelte?raw";
import TestimonialFiveCode from "$lib/components/mist/mtestimonial/five.svelte?raw";
export const all_mists_testimonial: MistBlock[] = [
  {
    slug: "one",
    title: "Simple Testimonial",
    category: "testimonial",
    preview: "/preview/mist/testimonial/one",
    code: {
      code: TestimonialOneCode,
      lang: "svelte",
    },
    component: TestimonialOne,
  },
  {
    slug: "two",
    title: "Grid Testimonials",
    category: "testimonial",
    preview: "/preview/mist/testimonial/two",
    code: {
      code: TestimonialTwoCode,
      lang: "svelte",
    },
    component: TestimonialTwo,
  },
  {
    slug: "three",
    title: "Star Rating Testimonials",
    category: "testimonial",
    preview: "/preview/mist/testimonial/three",
    code: {
      code: TestimonialThreeCode,
      lang: "svelte",
    },
    component: TestimonialThree,
  },
  {
    slug: "four",
    title: "Avatar Testimonial",
    category: "testimonial",
    preview: "/preview/mist/testimonial/four",
    code: {
      code: TestimonialFourCode,
      lang: "svelte",
    },
    component: TestimonialFour,
  },
  {
    slug: "five",
    title: "Centered Quote Testimonial",
    category: "testimonial",
    preview: "/preview/mist/testimonial/five",
    code: {
      code: TestimonialFiveCode,
      lang: "svelte",
    },
    component: TestimonialFive,
  },
];
