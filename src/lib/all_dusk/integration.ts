import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import IntegrationOne from "#lib/components/dusk/integration/one.svelte";
import IntegrationOneCode from "#lib/components/dusk/integration/one.svelte?raw";
import IntegrationCardCode from "#lib/components/dusk/integration/integration-card.svelte?raw";
import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";
import SvgIndexCode from "#lib/svgs/index.ts?raw";
import GeminiCode from "#lib/svgs/gemini.svelte?raw";
import GooglePaLMCode from "#lib/svgs/google-palm.svelte?raw";
import MagicUICode from "#lib/svgs/magic-ui.svelte?raw";
import MediaWikiCode from "#lib/svgs/media-wiki.svelte?raw";
import ReplitCode from "#lib/svgs/replit.svelte?raw";
import VSCodiumCode from "#lib/svgs/vs-codium.svelte?raw";

export const all_dusk_integration: MistBlock[] = [
	{
		slug: "one",
		title: "Integration One",
		category: "integration",
		preview: "/preview/dusk/integration/one",
		previewMode: "inline",
		itemId: "integration-one",
		component: IntegrationOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration.svelte", code: IntegrationOneCode, lang: "svelte" },
				{ path: "integration-card.svelte", code: IntegrationCardCode, lang: "svelte" },
				{ path: "ui/button/button.svelte", code: DuskButtonCode, lang: "svelte" },
				{ path: "ui/button/index.ts", code: DuskButtonIndexCode, lang: "typescript" },
				{ path: "logos/index.ts", code: SvgIndexCode, lang: "typescript" },
				{ path: "logos/gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/google-palm.svelte", code: GooglePaLMCode, lang: "svelte" },
				{ path: "logos/magic-ui.svelte", code: MagicUICode, lang: "svelte" },
				{ path: "logos/media-wiki.svelte", code: MediaWikiCode, lang: "svelte" },
				{ path: "logos/replit.svelte", code: ReplitCode, lang: "svelte" },
				{ path: "logos/vs-codium.svelte", code: VSCodiumCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/integration/one.svelte",
						"components/dusk/integration/integration-card.svelte",
						"components/ui/dusk/button/button.svelte",
						"components/ui/dusk/button/index.ts",
						"svgs/index.ts",
						"svgs/gemini.svelte",
						"svgs/google-palm.svelte",
						"svgs/magic-ui.svelte",
						"svgs/media-wiki.svelte",
						"svgs/replit.svelte",
						"svgs/vs-codium.svelte",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
