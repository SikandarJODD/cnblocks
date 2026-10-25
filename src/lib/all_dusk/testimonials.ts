import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import TestimonialsOne from "#lib/components/dusk/testimonials/one.svelte";
import TestimonialsOneCode from "#lib/components/dusk/testimonials/one.svelte?raw";
import TestimonialsTwo from "#lib/components/dusk/testimonials/two.svelte";
import TestimonialsTwoCode from "#lib/components/dusk/testimonials/two.svelte?raw";
import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";
import SvgIndexCode from "#lib/svgs/index.ts?raw";
import ClaudeCode from "#lib/svgs/claude.svelte?raw";
import GeminiCode from "#lib/svgs/gemini.svelte?raw";
import OpenAICode from "#lib/svgs/open-ai.svelte?raw";

const buttonCodeFiles = [
	{ path: "ui/button/button.svelte", code: DuskButtonCode, lang: "svelte" as const },
	{ path: "ui/button/index.ts", code: DuskButtonIndexCode, lang: "typescript" as const },
];

const buttonSourceFiles = [
	"components/ui/dusk/button/button.svelte",
	"components/ui/dusk/button/index.ts",
];

const logoCodeFiles = [
	{ path: "logos/index.ts", code: SvgIndexCode, lang: "typescript" as const },
	{ path: "logos/gemini.svelte", code: GeminiCode, lang: "svelte" as const },
	{ path: "logos/open-ai.svelte", code: OpenAICode, lang: "svelte" as const },
];

const logoSourceFiles = ["svgs/index.ts", "svgs/gemini.svelte", "svgs/open-ai.svelte"];

export const all_dusk_testimonials: MistBlock[] = [
	{
		slug: "one",
		title: "Testimonial One",
		category: "testimonials",
		preview: "/preview/dusk/testimonials/one",
		previewMode: "inline",
		itemId: "testimonial-one",
		component: TestimonialsOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "testimonials.svelte", code: TestimonialsOneCode, lang: "svelte" },
				...buttonCodeFiles,
				...logoCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/testimonials/one.svelte",
						...buttonSourceFiles,
						...logoSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Testimonial Two",
		category: "testimonials",
		preview: "/preview/dusk/testimonials/two",
		previewMode: "inline",
		itemId: "testimonial-two",
		component: TestimonialsTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "testimonials.svelte", code: TestimonialsTwoCode, lang: "svelte" },
				...buttonCodeFiles,
				...logoCodeFiles,
				{ path: "logos/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/testimonials/two.svelte",
						...buttonSourceFiles,
						...logoSourceFiles,
						"svgs/claude.svelte",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
