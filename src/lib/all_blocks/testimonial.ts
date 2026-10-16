import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import TestimonialOne from "#lib/components/blocks/testimonial/testimonial-one.svelte";
import TestimonialTwo from "#lib/components/blocks/testimonial/testimonial-two.svelte";
import TestimonialThree from "#lib/components/blocks/testimonial/testimonial-three.svelte";
import TestimonialFour from "#lib/components/blocks/testimonial/testimonial-four.svelte";
import TestimonialFive from "#lib/components/blocks/testimonial/testimonial-five.svelte";
import TestimonialSix from "#lib/components/blocks/testimonial/testimonial-six.svelte";
import TestimonialOneCode from "#lib/components/blocks/testimonial/testimonial-one.svelte?raw";
import TestimonialTwoCode from "#lib/components/blocks/testimonial/testimonial-two.svelte?raw";
import TestimonialThreeCode from "#lib/components/blocks/testimonial/testimonial-three.svelte?raw";
import TestimonialFourCode from "#lib/components/blocks/testimonial/testimonial-four.svelte?raw";
import TestimonialFiveCode from "#lib/components/blocks/testimonial/testimonial-five.svelte?raw";
import TestimonialSixCode from "#lib/components/blocks/testimonial/testimonial-six.svelte?raw";

const TestimonialOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── testimonial/
        │       └── testimonial-one.svelte
        └── ui/
            ├── avatar/
            └── card/
`;

const TestimonialTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── testimonial/
        │       └── testimonial-two.svelte
        └── ui/
            ├── avatar/
            └── card/
`;

const TestimonialThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── testimonial/
                └── testimonial-three.svelte
`;

const TestimonialFourFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── testimonial/
        │       └── testimonial-four.svelte
        └── ui/
            └── avatar/
`;

const TestimonialFiveFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── testimonial/
        │       └── testimonial-five.svelte
        └── ui/
            ├── avatar/
            └── card/
`;

const TestimonialSixFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── testimonial/
        │       └── testimonial-six.svelte
        └── ui/
            ├── avatar/
            └── card/
`;

export const testimonials: Block[] = [
	{
		itemId: "testimonial-one",
		slug: "testimonial",
		title: "one",
		category: "testimonial",
		preview: "/preview/testimonial/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "testimonial-one.svelte", code: TestimonialOneCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: TestimonialOneFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: TestimonialOne,
	},
	{
		itemId: "testimonial-two",
		slug: "testimonial",
		title: "two",
		category: "testimonial",
		preview: "/preview/testimonial/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "testimonial-two.svelte", code: TestimonialTwoCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: TestimonialTwoFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: TestimonialTwo,
	},
	{
		itemId: "testimonial-three",
		slug: "testimonial",
		title: "three",
		category: "testimonial",
		preview: "/preview/testimonial/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "testimonial-three.svelte", code: TestimonialThreeCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: TestimonialThreeFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: TestimonialThree,
	},
	{
		itemId: "testimonial-four",
		slug: "testimonial",
		title: "four",
		category: "testimonial",
		preview: "/preview/testimonial/four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "testimonial-four.svelte", code: TestimonialFourCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: TestimonialFourFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: TestimonialFour,
	},
	{
		itemId: "testimonial-five",
		slug: "testimonial",
		title: "five",
		category: "testimonial",
		preview: "/preview/testimonial/five",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "testimonial-five.svelte", code: TestimonialFiveCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: TestimonialFiveFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: TestimonialFive,
	},
	{
		itemId: "testimonial-six",
		slug: "testimonial",
		title: "six",
		category: "testimonial",
		preview: "/preview/testimonial/six",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "testimonial-six.svelte", code: TestimonialSixCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: TestimonialSixFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: TestimonialSix,
	},
];
