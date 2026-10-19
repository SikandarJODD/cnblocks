import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import IntegrationOne from "#lib/components/blocks/integration/integration-one.svelte";
import IntegrationTwo from "#lib/components/blocks/integration/integration-two.svelte";
import IntegrationThree from "#lib/components/blocks/integration/integration-three.svelte";
import IntegrationFour from "#lib/components/blocks/integration/integration-four.svelte";
import IntegrationFive from "#lib/components/blocks/integration/integration-five.svelte";
import IntegrationSix from "#lib/components/blocks/integration/integration-six.svelte";
import IntegrationSeven from "#lib/components/blocks/integration/integration-seven.svelte";
import IntegrationEight from "#lib/components/blocks/integration/integration-eight.svelte";

import IntegrationOneCode from "#lib/components/blocks/integration/integration-one.svelte?raw";
import IntegrationTwoCode from "#lib/components/blocks/integration/integration-two.svelte?raw";
import IntegrationThreeCode from "#lib/components/blocks/integration/integration-three.svelte?raw";
import IntegrationFourCode from "#lib/components/blocks/integration/integration-four.svelte?raw";
import IntegrationFiveCode from "#lib/components/blocks/integration/integration-five.svelte?raw";
import IntegrationSixCode from "#lib/components/blocks/integration/integration-six.svelte?raw";
import IntegrationSevenCode from "#lib/components/blocks/integration/integration-seven.svelte?raw";
import IntegrationEightCode from "#lib/components/blocks/integration/integration-eight.svelte?raw";
import IntegrationCardCode from "#lib/components/blocks/integration/card/integration-card.svelte?raw";
import IntegrationCardTwoCode from "#lib/components/blocks/integration/card/integration-cardv2.svelte?raw";
import IntegrationCardThreeCode from "#lib/components/blocks/integration/card/integration-cardv3.svelte?raw";
import IntegrationCardFourCode from "#lib/components/blocks/integration/card/integration-cardv4.svelte?raw";
import IntegrationCardFiveCode from "#lib/components/blocks/integration/card/integration-cardv5.svelte?raw";
import IntegrationCardSevenCode from "#lib/components/blocks/integration/card/integration-cardv7.svelte?raw";
import GeminiCode from "#lib/components/blocks/logos/Gemini.svelte?raw";
import GooglePaLMCode from "#lib/components/blocks/logos/GooglePaLM.svelte?raw";
import MagicUICode from "#lib/components/blocks/logos/MagicUI.svelte?raw";
import MediaWikiCode from "#lib/components/blocks/logos/MediaWiki.svelte?raw";
import ReplitCode from "#lib/components/blocks/logos/Replit.svelte?raw";
import VSCodiumCode from "#lib/components/blocks/logos/VSCodium.svelte?raw";
import LogosCode from "#lib/components/blocks/logos/logos.ts?raw";
import MarqueeCode from "#lib/components/magic/marquee/marquee.svelte?raw";

const IntegrationOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── integration/
        │   │   ├── card/
        │   │   │   └── integration-card.svelte
        │   │   └── integration-one.svelte
        │   └── logos/
        │       ├── Gemini.svelte
        │       ├── GooglePaLM.svelte
        │       ├── MagicUI.svelte
        │       ├── MediaWiki.svelte
        │       ├── Replit.svelte
        │       ├── VSCodium.svelte
        │       └── logos.ts
        └── ui/
            ├── button/
            └── card/
`;

const IntegrationTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── integration/
        │   │   ├── card/
        │   │   │   └── integration-cardv2.svelte
        │   │   └── integration-two.svelte
        │   └── logos/
        │       ├── Gemini.svelte
        │       ├── GooglePaLM.svelte
        │       ├── MagicUI.svelte
        │       ├── MediaWiki.svelte
        │       ├── Replit.svelte
        │       ├── VSCodium.svelte
        │       └── logos.ts
        └── ui/
            └── button/
`;

const IntegrationThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── integration/
        │   │   ├── card/
        │   │   │   └── integration-cardv3.svelte
        │   │   └── integration-three.svelte
        │   └── logos/
        │       ├── Gemini.svelte
        │       ├── GooglePaLM.svelte
        │       ├── MagicUI.svelte
        │       ├── MediaWiki.svelte
        │       ├── Replit.svelte
        │       ├── VSCodium.svelte
        │       └── logos.ts
        └── ui/
            └── button/
`;

const IntegrationFourFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── integration/
        │   │   ├── card/
        │   │   │   └── integration-cardv4.svelte
        │   │   └── integration-four.svelte
        │   └── logos/
        │       ├── Gemini.svelte
        │       ├── GooglePaLM.svelte
        │       ├── MagicUI.svelte
        │       ├── MediaWiki.svelte
        │       ├── Replit.svelte
        │       ├── VSCodium.svelte
        │       └── logos.ts
        └── ui/
            └── button/
`;

const IntegrationFiveFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── integration/
        │   │   ├── card/
        │   │   │   └── integration-cardv5.svelte
        │   │   └── integration-five.svelte
        │   └── logos/
        │       ├── Gemini.svelte
        │       ├── GooglePaLM.svelte
        │       ├── MagicUI.svelte
        │       ├── MediaWiki.svelte
        │       ├── Replit.svelte
        │       ├── VSCodium.svelte
        │       └── logos.ts
        └── ui/
            └── button/
`;

const IntegrationSixFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── integration/
        │   │   └── integration-six.svelte
        │   └── logos/
        │       ├── Gemini.svelte
        │       ├── GooglePaLM.svelte
        │       ├── Replit.svelte
        │       └── logos.ts
        └── ui/
            └── button/
`;

const IntegrationSevenFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── integration/
        │   │   ├── card/
        │   │   │   └── integration-cardv7.svelte
        │   │   └── integration-seven.svelte
        │   └── logos/
        │       ├── Gemini.svelte
        │       ├── GooglePaLM.svelte
        │       ├── MagicUI.svelte
        │       ├── MediaWiki.svelte
        │       ├── Replit.svelte
        │       ├── VSCodium.svelte
        │       └── logos.ts
        ├── magic/
        │   └── marquee/
        │       ├── index.ts
        │       └── marquee.svelte
        └── ui/
            └── button/
`;

const IntegrationEightFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── integration/
        │   │   └── integration-eight.svelte
        │   └── logos/
        │       ├── Gemini.svelte
        │       ├── GooglePaLM.svelte
        │       ├── MagicUI.svelte
        │       ├── MediaWiki.svelte
        │       ├── Replit.svelte
        │       ├── VSCodium.svelte
        │       └── logos.ts
        └── ui/
            └── button/
`;

export const integration: Block[] = [
	{
		itemId: "integration-one",
		slug: "integration",
		title: "one",
		category: "integration",
		preview: "/preview/integration/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-one.svelte", code: IntegrationOneCode, lang: "svelte" },
				{ path: "card/integration-card.svelte", code: IntegrationCardCode, lang: "svelte" },
				{ path: "logos/Gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/GooglePaLM.svelte", code: GooglePaLMCode, lang: "svelte" },
				{ path: "logos/MagicUI.svelte", code: MagicUICode, lang: "svelte" },
				{ path: "logos/MediaWiki.svelte", code: MediaWikiCode, lang: "svelte" },
				{ path: "logos/Replit.svelte", code: ReplitCode, lang: "svelte" },
				{ path: "logos/VSCodium.svelte", code: VSCodiumCode, lang: "svelte" },
				{ path: "logos/logos.ts", code: LogosCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: IntegrationOneFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationOne,
	},
	{
		itemId: "integration-two",
		slug: "integration",
		title: "two",
		category: "integration",
		preview: "/preview/integration/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-two.svelte", code: IntegrationTwoCode, lang: "svelte" },
				{
					path: "card/integration-cardv2.svelte",
					code: IntegrationCardTwoCode,
					lang: "svelte",
				},
				{ path: "logos/Gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/GooglePaLM.svelte", code: GooglePaLMCode, lang: "svelte" },
				{ path: "logos/MagicUI.svelte", code: MagicUICode, lang: "svelte" },
				{ path: "logos/MediaWiki.svelte", code: MediaWikiCode, lang: "svelte" },
				{ path: "logos/Replit.svelte", code: ReplitCode, lang: "svelte" },
				{ path: "logos/VSCodium.svelte", code: VSCodiumCode, lang: "svelte" },
				{ path: "logos/logos.ts", code: LogosCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: IntegrationTwoFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationTwo,
	},
	{
		itemId: "integration-three",
		slug: "integration",
		title: "three",
		category: "integration",
		preview: "/preview/integration/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-three.svelte", code: IntegrationThreeCode, lang: "svelte" },
				{
					path: "card/integration-cardv3.svelte",
					code: IntegrationCardThreeCode,
					lang: "svelte",
				},
				{ path: "logos/Gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/GooglePaLM.svelte", code: GooglePaLMCode, lang: "svelte" },
				{ path: "logos/MagicUI.svelte", code: MagicUICode, lang: "svelte" },
				{ path: "logos/MediaWiki.svelte", code: MediaWikiCode, lang: "svelte" },
				{ path: "logos/Replit.svelte", code: ReplitCode, lang: "svelte" },
				{ path: "logos/VSCodium.svelte", code: VSCodiumCode, lang: "svelte" },
				{ path: "logos/logos.ts", code: LogosCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: IntegrationThreeFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationThree,
	},
	{
		itemId: "integration-four",
		slug: "integration",
		title: "four",
		category: "integration",
		preview: "/preview/integration/four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-four.svelte", code: IntegrationFourCode, lang: "svelte" },
				{
					path: "card/integration-cardv4.svelte",
					code: IntegrationCardFourCode,
					lang: "svelte",
				},
				{ path: "logos/Gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/GooglePaLM.svelte", code: GooglePaLMCode, lang: "svelte" },
				{ path: "logos/MagicUI.svelte", code: MagicUICode, lang: "svelte" },
				{ path: "logos/MediaWiki.svelte", code: MediaWikiCode, lang: "svelte" },
				{ path: "logos/Replit.svelte", code: ReplitCode, lang: "svelte" },
				{ path: "logos/VSCodium.svelte", code: VSCodiumCode, lang: "svelte" },
				{ path: "logos/logos.ts", code: LogosCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: IntegrationFourFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationFour,
	},
	{
		itemId: "integration-five",
		slug: "integration",
		title: "five",
		category: "integration",
		preview: "/preview/integration/five",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-five.svelte", code: IntegrationFiveCode, lang: "svelte" },
				{
					path: "card/integration-cardv5.svelte",
					code: IntegrationCardFiveCode,
					lang: "svelte",
				},
				{ path: "logos/Gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/GooglePaLM.svelte", code: GooglePaLMCode, lang: "svelte" },
				{ path: "logos/MagicUI.svelte", code: MagicUICode, lang: "svelte" },
				{ path: "logos/MediaWiki.svelte", code: MediaWikiCode, lang: "svelte" },
				{ path: "logos/Replit.svelte", code: ReplitCode, lang: "svelte" },
				{ path: "logos/VSCodium.svelte", code: VSCodiumCode, lang: "svelte" },
				{ path: "logos/logos.ts", code: LogosCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: IntegrationFiveFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationFive,
	},
	{
		itemId: "integration-six",
		slug: "integration",
		title: "six",
		category: "integration",
		preview: "/preview/integration/six",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-six.svelte", code: IntegrationSixCode, lang: "svelte" },
				{ path: "logos/Gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/GooglePaLM.svelte", code: GooglePaLMCode, lang: "svelte" },
				{ path: "logos/Replit.svelte", code: ReplitCode, lang: "svelte" },
				{ path: "logos/logos.ts", code: LogosCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: IntegrationSixFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationSix,
	},
	{
		itemId: "integration-seven",
		slug: "integration",
		title: "seven",
		category: "integration",
		preview: "/preview/integration/seven",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-seven.svelte", code: IntegrationSevenCode, lang: "svelte" },
				{
					path: "card/integration-cardv7.svelte",
					code: IntegrationCardSevenCode,
					lang: "svelte",
				},
				{ path: "logos/Gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/GooglePaLM.svelte", code: GooglePaLMCode, lang: "svelte" },
				{ path: "logos/MagicUI.svelte", code: MagicUICode, lang: "svelte" },
				{ path: "logos/MediaWiki.svelte", code: MediaWikiCode, lang: "svelte" },
				{ path: "logos/Replit.svelte", code: ReplitCode, lang: "svelte" },
				{ path: "logos/VSCodium.svelte", code: VSCodiumCode, lang: "svelte" },
				{ path: "logos/logos.ts", code: LogosCode, lang: "typescript" },
				{ path: "magic/marquee.svelte", code: MarqueeCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: IntegrationSevenFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationSeven,
	},
	{
		itemId: "integration-eight",
		slug: "integration",
		title: "eight",
		category: "integration",
		preview: "/preview/integration/eight",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-eight.svelte", code: IntegrationEightCode, lang: "svelte" },
				{ path: "logos/Gemini.svelte", code: GeminiCode, lang: "svelte" },
				{ path: "logos/GooglePaLM.svelte", code: GooglePaLMCode, lang: "svelte" },
				{ path: "logos/MagicUI.svelte", code: MagicUICode, lang: "svelte" },
				{ path: "logos/MediaWiki.svelte", code: MediaWikiCode, lang: "svelte" },
				{ path: "logos/Replit.svelte", code: ReplitCode, lang: "svelte" },
				{ path: "logos/VSCodium.svelte", code: VSCodiumCode, lang: "svelte" },
				{ path: "logos/logos.ts", code: LogosCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: IntegrationEightFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationEight,
	},
];
