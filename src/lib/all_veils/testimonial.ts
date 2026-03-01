import type { MistBlock } from '$lib/types/mists';

import TestimonialOne from '$lib/components/veil/testimonial/testimonial-one.svelte';
import TestimonialOneCode from '$lib/components/veil/testimonial/testimonial-one.svelte?raw';
import TestimonialTwo from '$lib/components/veil/testimonial/testimonial-two.svelte';
import TestimonialTwoCode from '$lib/components/veil/testimonial/testimonial-two.svelte?raw';
import TestimonialThree from '$lib/components/veil/testimonial/testimonial-three.svelte';
import TestimonialThreeCode from '$lib/components/veil/testimonial/testimonial-three.svelte?raw';
import TestimonialFour from '$lib/components/veil/testimonial/testimonial-four.svelte';
import TestimonialFourCode from '$lib/components/veil/testimonial/testimonial-four.svelte?raw';

export const all_veils_testimonial: MistBlock[] = [
	{
		slug: 'testimonial-one',
		title: 'Testimonial One',
		category: 'testimonial',
		preview: '/preview/veil/testimonial/testimonial-one',
		itemId: 'veil-testimonial-one',
		code: {
			code: TestimonialOneCode,
			lang: 'svelte'
		},
		component: TestimonialOne
	},
	{
		slug: 'testimonial-two',
		title: 'Testimonial Two',
		category: 'testimonial',
		preview: '/preview/veil/testimonial/testimonial-two',
		itemId: 'veil-testimonial-two',
		code: {
			code: TestimonialTwoCode,
			lang: 'svelte'
		},
		component: TestimonialTwo
	},
	{
		slug: 'testimonial-three',
		title: 'Testimonial Three',
		category: 'testimonial',
		preview: '/preview/veil/testimonial/testimonial-three',
		itemId: 'veil-testimonial-three',
		code: {
			code: TestimonialThreeCode,
			lang: 'svelte'
		},
		component: TestimonialThree
	},
	{
		slug: 'testimonial-four',
		title: 'Testimonial Four',
		category: 'testimonial',
		preview: '/preview/veil/testimonial/testimonial-four',
		itemId: 'veil-testimonial-four',
		code: {
			code: TestimonialFourCode,
			lang: 'svelte'
		},
		component: TestimonialFour
	}
];
