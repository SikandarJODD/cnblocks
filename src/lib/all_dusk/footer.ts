import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import FooterOne from "#lib/components/dusk/footer/one.svelte";
import FooterOneCode from "#lib/components/dusk/footer/one.svelte?raw";
import FooterTwo from "#lib/components/dusk/footer/two.svelte";
import FooterTwoCode from "#lib/components/dusk/footer/two.svelte?raw";
import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";
import DuskInputCode from "#lib/components/ui/dusk/input/input.svelte?raw";
import DuskInputIndexCode from "#lib/components/ui/dusk/input/index.ts?raw";
import DuskLabelCode from "#lib/components/ui/dusk/label/label.svelte?raw";
import DuskLabelIndexCode from "#lib/components/ui/dusk/label/index.ts?raw";
import LogoCode from "#lib/components/web/Logo.svelte?raw";
import SvgIndexCode from "#lib/svgs/index.ts?raw";
import ClaudeCode from "#lib/svgs/claude.svelte?raw";
import GeminiCode from "#lib/svgs/gemini.svelte?raw";
import OpenAICode from "#lib/svgs/open-ai.svelte?raw";
import PerplexityCode from "#lib/svgs/perplexity.svelte?raw";

const buttonCodeFiles = [
	{ path: "ui/button/button.svelte", code: DuskButtonCode, lang: "svelte" as const },
	{ path: "ui/button/index.ts", code: DuskButtonIndexCode, lang: "typescript" as const },
];

const buttonSourceFiles = [
	"components/ui/dusk/button/button.svelte",
	"components/ui/dusk/button/index.ts",
];

export const all_dusk_footer: MistBlock[] = [
	{
		slug: "one",
		title: "Footer One",
		category: "footer",
		preview: "/preview/dusk/footer/one",
		previewMode: "inline",
		itemId: "footer-one",
		component: FooterOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "footer.svelte", code: FooterOneCode, lang: "svelte" },
				...buttonCodeFiles,
				{ path: "ui/input/input.svelte", code: DuskInputCode, lang: "svelte" },
				{ path: "ui/input/index.ts", code: DuskInputIndexCode, lang: "typescript" },
				{ path: "ui/label/label.svelte", code: DuskLabelCode, lang: "svelte" },
				{ path: "ui/label/index.ts", code: DuskLabelIndexCode, lang: "typescript" },
				{ path: "web/Logo.svelte", code: LogoCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/footer/one.svelte",
						...buttonSourceFiles,
						"components/ui/dusk/input/input.svelte",
						"components/ui/dusk/input/index.ts",
						"components/ui/dusk/label/label.svelte",
						"components/ui/dusk/label/index.ts",
						"components/web/Logo.svelte",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Footer Two",
		category: "footer",
		preview: "/preview/dusk/footer/two",
		previewMode: "inline",
		itemId: "footer-two",
		component: FooterTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "footer.svelte", code: FooterTwoCode, lang: "svelte" },
				...buttonCodeFiles,
				{ path: "web/Logo.svelte", code: LogoCode, lang: "svelte" },
				{ path: "logos/index.ts", code: SvgIndexCode, lang: "typescript" },
				{ path: "logos/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "logos/gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/open-ai.svelte", code: OpenAICode, lang: "svelte" },
				{ path: "logos/perplexity.svelte", code: PerplexityCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/footer/two.svelte",
						...buttonSourceFiles,
						"components/web/Logo.svelte",
						"svgs/index.ts",
						"svgs/claude.svelte",
						"svgs/gemini.svelte",
						"svgs/open-ai.svelte",
						"svgs/perplexity.svelte",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
