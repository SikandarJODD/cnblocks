import type { MistBlock } from "#lib/types/mists.js";

import TestimonialOne from "#lib/components/veil/testimonial/testimonial-one.svelte";
import TestimonialOneCode from "#lib/components/veil/testimonial/testimonial-one.svelte?raw";
import TestimonialTwo from "#lib/components/veil/testimonial/testimonial-two.svelte";
import TestimonialTwoCode from "#lib/components/veil/testimonial/testimonial-two.svelte?raw";
import TestimonialThree from "#lib/components/veil/testimonial/testimonial-three.svelte";
import TestimonialThreeCode from "#lib/components/veil/testimonial/testimonial-three.svelte?raw";
import TestimonialFour from "#lib/components/veil/testimonial/testimonial-four.svelte";
import TestimonialFourCode from "#lib/components/veil/testimonial/testimonial-four.svelte?raw";
import VeilCardCode from "#lib/components/ui/veil/card/card.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

function createTestimonialCodeTree(fileName: string, code: string, includeCard = false) {
	const componentsTree = includeCard
		? `        ├── veil/
        │   └── testimonial/
        │       └── ${fileName}
        └── ui/
            └── veil/
                └── card/
                    ├── card.svelte
                    └── index.ts`
		: `        └── veil/
            └── testimonial/
                └── ${fileName}`;
	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
${componentsTree}
`;

	return createBlockCodeTreeFromCode(
		[
			{ path: fileName, code, lang: "svelte" },
			...(includeCard
				? [{ path: "ui/card.svelte", code: VeilCardCode, lang: "svelte" as const }]
				: []),
			{ path: "folder-structure.md", code: folderStructure, lang: "markdown" },
		],
		{ defaultOpen: false }
	);
}

export const all_veils_testimonial: MistBlock[] = [
	{
		itemId: "testimonial-one",
		slug: "testimonial-one",
		title: "Testimonial One",
		category: "testimonial",
		preview: "/preview/veil/testimonial/testimonial-one",
		codeTree: createTestimonialCodeTree("testimonial-one.svelte", TestimonialOneCode),
		component: TestimonialOne,
	},
	{
		itemId: "testimonial-two",
		slug: "testimonial-two",
		title: "Testimonial Two",
		category: "testimonial",
		preview: "/preview/veil/testimonial/testimonial-two",
		codeTree: createTestimonialCodeTree("testimonial-two.svelte", TestimonialTwoCode, true),
		component: TestimonialTwo,
	},
	{
		slug: "testimonial-three",
		title: "Testimonial Three",
		category: "testimonial",
		preview: "/preview/veil/testimonial/testimonial-three",
		itemId: "testimonial-three",
		codeTree: createTestimonialCodeTree("testimonial-three.svelte", TestimonialThreeCode),
		component: TestimonialThree,
	},
	{
		slug: "testimonial-four",
		title: "Testimonial Four",
		category: "testimonial",
		preview: "/preview/veil/testimonial/testimonial-four",
		itemId: "testimonial-four",
		codeTree: createTestimonialCodeTree("testimonial-four.svelte", TestimonialFourCode),
		component: TestimonialFour,
	},
];
