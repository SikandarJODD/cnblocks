import type { MistBlock } from "$lib/types/mists";
import TestimonialOne from "$lib/components/mist/testimonial/testimonial-one.svelte";
import TestimonialTwo from "$lib/components/mist/testimonial/testimonial-two.svelte";
import TestimonialThree from "$lib/components/mist/testimonial/testimonial-three.svelte";
import TestimonialFour from "$lib/components/mist/testimonial/testimonial-four.svelte";
import TestimonialFive from "$lib/components/mist/testimonial/testimonial-five.svelte";

export const all_mists_testimonial: MistBlock[] = [
  {
    slug: "one",
    title: "Simple Testimonial",
    category: "testimonial",
    preview: "/preview/mist/testimonial/one",
    code: {
      code: (
        await import(
          "$lib/components/mist/testimonial/testimonial-one.svelte?raw"
        )
      ).default,
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
      code: (
        await import(
          "$lib/components/mist/testimonial/testimonial-two.svelte?raw"
        )
      ).default,
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
      code: (
        await import(
          "$lib/components/mist/testimonial/testimonial-three.svelte?raw"
        )
      ).default,
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
      code: (
        await import(
          "$lib/components/mist/testimonial/testimonial-four.svelte?raw"
        )
      ).default,
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
      code: (
        await import(
          "$lib/components/mist/testimonial/testimonial-five.svelte?raw"
        )
      ).default,
      lang: "svelte",
    },
    component: TestimonialFive,
  },
];
