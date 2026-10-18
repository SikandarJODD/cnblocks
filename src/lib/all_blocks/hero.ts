import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import HeroOne from "#lib/components/blocks/hero/hero-one.svelte";
import HeroTwo from "#lib/components/blocks/hero/hero-two.svelte";
import HeroThree from "#lib/components/blocks/hero/hero-three.svelte";
import HeroFour from "#lib/components/blocks/hero/hero-four.svelte";
import HeroFive from "#lib/components/blocks/hero/hero-five.svelte";
import HeroSix from "#lib/components/blocks/hero/hero-six.svelte";
import HeroSeven from "#lib/components/blocks/hero/hero-seven.svelte";
import HeroEight from "#lib/components/blocks/hero/hero-eight.svelte";
import HeroNine from "#lib/components/blocks/hero/hero-nine.svelte";
import HeroOneCode from "#lib/components/blocks/hero/hero-one.svelte?raw";
import HeroTwoCode from "#lib/components/blocks/hero/hero-two.svelte?raw";
import HeroThreeCode from "#lib/components/blocks/hero/hero-three.svelte?raw";
import HeroFourCode from "#lib/components/blocks/hero/hero-four.svelte?raw";
import HeroFiveCode from "#lib/components/blocks/hero/hero-five.svelte?raw";
import HeroSixCode from "#lib/components/blocks/hero/hero-six.svelte?raw";
import HeroSevenCode from "#lib/components/blocks/hero/hero-seven.svelte?raw";
import HeroEightCode from "#lib/components/blocks/hero/hero-eight.svelte?raw";
import HeroNineCode from "#lib/components/blocks/hero/hero-nine.svelte?raw";
import HeaderCode from "#lib/components/blocks/header/header.svelte?raw";
import HeaderTwoCode from "#lib/components/blocks/header/header-two.svelte?raw";
import HeaderThreeCode from "#lib/components/blocks/header/header-three.svelte?raw";
import HeaderFourCode from "#lib/components/blocks/header/header-four.svelte?raw";
import HeaderFiveCode from "#lib/components/blocks/header/header-five.svelte?raw";
import HeaderSixCode from "#lib/components/blocks/header/header-six.svelte?raw";
import HeaderSevenCode from "#lib/components/blocks/header/header-seven.svelte?raw";
import HeaderEightCode from "#lib/components/blocks/header/header-eight.svelte?raw";
import HeaderNineCode from "#lib/components/blocks/header/header-nine.svelte?raw";
import BeaconCode from "#lib/svgs/beacon.svelte?raw";
import BoltCode from "#lib/svgs/bolt.svelte?raw";
import CiscoCode from "#lib/svgs/cisco.svelte?raw";
import ClaudeCode from "#lib/svgs/claude.svelte?raw";
import FigmaCode from "#lib/svgs/figma.svelte?raw";
import FirebaseFullCode from "#lib/svgs/firebase-full.svelte?raw";
import HuluCode from "#lib/svgs/hulu.svelte?raw";
import SpotifyCode from "#lib/svgs/spotify.svelte?raw";
import SupabaseFullCode from "#lib/svgs/supabase-full.svelte?raw";
import VercelFullCode from "#lib/svgs/vercel-full.svelte?raw";

const HeroOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── blocks/
    │   │   ├── header/
    │   │   │   └── header.svelte
    │   │   └── hero/
    │   │       └── hero-one.svelte
    │   └── ui/
    │       └── button/
    └── svgs/
        ├── index.ts
        ├── beacon.svelte
        ├── bolt.svelte
        ├── cisco.svelte
        ├── claude.svelte
        ├── figma.svelte
        ├── firebase-full.svelte
        ├── hulu.svelte
        ├── spotify.svelte
        ├── supabase-full.svelte
        └── vercel-full.svelte
`;

const HeroTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── blocks/
    │   │   ├── header/
    │   │   │   └── header-two.svelte
    │   │   └── hero/
    │   │       └── hero-two.svelte
    │   └── ui/
    │       └── button/
    └── svgs/
        ├── index.ts
        ├── beacon.svelte
        ├── bolt.svelte
        ├── claude.svelte
        ├── firebase-full.svelte
        ├── hulu.svelte
        ├── spotify.svelte
        ├── supabase-full.svelte
        └── vercel-full.svelte
`;

const HeroThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── blocks/
    │   │   ├── header/
    │   │   │   └── header-three.svelte
    │   │   └── hero/
    │   │       └── hero-three.svelte
    │   ├── magic/
    │   │   ├── marquee/
    │   │   └── progressive-blur/
    │   └── ui/
    │       └── button/
    └── svgs/
        ├── index.ts
        ├── beacon.svelte
        ├── bolt.svelte
        ├── cisco.svelte
        ├── claude.svelte
        ├── figma.svelte
        ├── firebase-full.svelte
        ├── hulu.svelte
        ├── spotify.svelte
        ├── supabase-full.svelte
        └── vercel-full.svelte
`;

const HeroFourFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── blocks/
    │   │   ├── header/
    │   │   │   └── header-four.svelte
    │   │   └── hero/
    │   │       └── hero-four.svelte
    │   ├── magic/
    │   │   ├── marquee/
    │   │   └── progressive-blur/
    │   └── ui/
    │       └── button/
    └── svgs/
        ├── index.ts
        ├── beacon.svelte
        ├── bolt.svelte
        ├── cisco.svelte
        ├── claude.svelte
        ├── figma.svelte
        ├── firebase-full.svelte
        ├── hulu.svelte
        ├── spotify.svelte
        ├── supabase-full.svelte
        └── vercel-full.svelte
`;

const HeroFiveFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── blocks/
    │   │   ├── header/
    │   │   │   └── header-five.svelte
    │   │   └── hero/
    │   │       └── hero-five.svelte
    │   ├── magic/
    │   │   ├── marquee/
    │   │   └── progressive-blur/
    │   └── ui/
    │       └── button/
    └── svgs/
        ├── index.ts
        ├── beacon.svelte
        ├── bolt.svelte
        ├── cisco.svelte
        ├── claude.svelte
        ├── figma.svelte
        ├── firebase-full.svelte
        ├── hulu.svelte
        ├── spotify.svelte
        ├── supabase-full.svelte
        └── vercel-full.svelte
`;

const HeroSixFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── header/
        │   │   └── header-six.svelte
        │   └── hero/
        │       └── hero-six.svelte
        └── ui/
            └── button/
`;

const HeroSevenFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   ├── header/
        │   │   └── header-seven.svelte
        │   └── hero/
        │       └── hero-seven.svelte
        └── ui/
            └── button/
`;

const HeroEightFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── blocks/
    │   │   ├── header/
    │   │   │   └── header-eight.svelte
    │   │   └── hero/
    │   │       └── hero-eight.svelte
    │   └── ui/
    │       └── button/
    └── svgs/
        ├── index.ts
        ├── beacon.svelte
        ├── bolt.svelte
        ├── cisco.svelte
        ├── claude.svelte
        ├── figma.svelte
        ├── firebase-full.svelte
        ├── hulu.svelte
        ├── spotify.svelte
        ├── supabase-full.svelte
        └── vercel-full.svelte
`;

const HeroNineFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── blocks/
    │   │   ├── header/
    │   │   │   └── header-nine.svelte
    │   │   └── hero/
    │   │       └── hero-nine.svelte
    │   └── ui/
    │       └── button/
    └── svgs/
        ├── index.ts
        ├── beacon.svelte
        ├── bolt.svelte
        ├── cisco.svelte
        ├── claude.svelte
        ├── figma.svelte
        ├── firebase-full.svelte
        ├── hulu.svelte
        ├── spotify.svelte
        ├── supabase-full.svelte
        └── vercel-full.svelte
`;

export const hero: Block[] = [
	{
		itemId: "hero-one",
		slug: "hero",
		title: "one",
		category: "hero",
		preview: "/preview/hero/one",
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-one.svelte", code: HeroOneCode, lang: "svelte" },
				{ path: "header/header.svelte", code: HeaderCode, lang: "svelte" },
				{ path: "svgs/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{ path: "svgs/bolt.svelte", code: BoltCode, lang: "svelte" },
				{ path: "svgs/cisco.svelte", code: CiscoCode, lang: "svelte" },
				{ path: "svgs/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "svgs/figma.svelte", code: FigmaCode, lang: "svelte" },
				{ path: "svgs/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{ path: "svgs/hulu.svelte", code: HuluCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "svgs/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" },
				{ path: "svgs/vercel-full.svelte", code: VercelFullCode, lang: "svelte" },
				{ path: "folder-structure.md", code: HeroOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: HeroOne,
	},
	{
		itemId: "hero-two",
		slug: "hero",
		title: "two",
		category: "hero",
		preview: "/preview/hero/two",
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-two.svelte", code: HeroTwoCode, lang: "svelte" },
				{ path: "header/header-two.svelte", code: HeaderTwoCode, lang: "svelte" },
				{ path: "svgs/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{ path: "svgs/bolt.svelte", code: BoltCode, lang: "svelte" },
				{ path: "svgs/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "svgs/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{ path: "svgs/hulu.svelte", code: HuluCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "svgs/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" },
				{ path: "svgs/vercel-full.svelte", code: VercelFullCode, lang: "svelte" },
				{ path: "folder-structure.md", code: HeroTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: HeroTwo,
	},
	{
		itemId: "hero-three",
		slug: "hero",
		title: "three",
		category: "hero",
		preview: "/preview/hero/three",
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-three.svelte", code: HeroThreeCode, lang: "svelte" },
				{ path: "header/header-three.svelte", code: HeaderThreeCode, lang: "svelte" },
				{ path: "svgs/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{ path: "svgs/bolt.svelte", code: BoltCode, lang: "svelte" },
				{ path: "svgs/cisco.svelte", code: CiscoCode, lang: "svelte" },
				{ path: "svgs/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "svgs/figma.svelte", code: FigmaCode, lang: "svelte" },
				{ path: "svgs/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{ path: "svgs/hulu.svelte", code: HuluCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "svgs/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" },
				{ path: "svgs/vercel-full.svelte", code: VercelFullCode, lang: "svelte" },
				{ path: "folder-structure.md", code: HeroThreeFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: HeroThree,
	},
	{
		itemId: "hero-four",
		slug: "hero",
		title: "four",
		category: "hero",
		preview: "/preview/hero/four",
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-four.svelte", code: HeroFourCode, lang: "svelte" },
				{ path: "header/header-four.svelte", code: HeaderFourCode, lang: "svelte" },
				{ path: "svgs/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{ path: "svgs/bolt.svelte", code: BoltCode, lang: "svelte" },
				{ path: "svgs/cisco.svelte", code: CiscoCode, lang: "svelte" },
				{ path: "svgs/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "svgs/figma.svelte", code: FigmaCode, lang: "svelte" },
				{ path: "svgs/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{ path: "svgs/hulu.svelte", code: HuluCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "svgs/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" },
				{ path: "svgs/vercel-full.svelte", code: VercelFullCode, lang: "svelte" },
				{ path: "folder-structure.md", code: HeroFourFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: HeroFour,
	},
	{
		itemId: "hero-five",
		slug: "hero",
		title: "five",
		category: "hero",
		preview: "/preview/hero/five",
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-five.svelte", code: HeroFiveCode, lang: "svelte" },
				{ path: "header/header-five.svelte", code: HeaderFiveCode, lang: "svelte" },
				{ path: "svgs/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{ path: "svgs/bolt.svelte", code: BoltCode, lang: "svelte" },
				{ path: "svgs/cisco.svelte", code: CiscoCode, lang: "svelte" },
				{ path: "svgs/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "svgs/figma.svelte", code: FigmaCode, lang: "svelte" },
				{ path: "svgs/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{ path: "svgs/hulu.svelte", code: HuluCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "svgs/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" },
				{ path: "svgs/vercel-full.svelte", code: VercelFullCode, lang: "svelte" },
				{ path: "folder-structure.md", code: HeroFiveFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: HeroFive,
	},
	{
		itemId: "hero-six",
		slug: "hero",
		title: "six",
		category: "hero",
		preview: "/preview/hero/six",
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-six.svelte", code: HeroSixCode, lang: "svelte" },
				{ path: "header/header-six.svelte", code: HeaderSixCode, lang: "svelte" },
				{ path: "folder-structure.md", code: HeroSixFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: HeroSix,
	},
	{
		itemId: "hero-seven",
		slug: "hero",
		title: "seven",
		category: "hero",
		preview: "/preview/hero/seven",
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-seven.svelte", code: HeroSevenCode, lang: "svelte" },
				{ path: "header/header-seven.svelte", code: HeaderSevenCode, lang: "svelte" },
				{ path: "folder-structure.md", code: HeroSevenFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: HeroSeven,
	},
	{
		itemId: "hero-eight",
		slug: "hero",
		title: "eight",
		category: "hero",
		preview: "/preview/hero/eight",
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-eight.svelte", code: HeroEightCode, lang: "svelte" },
				{ path: "header/header-eight.svelte", code: HeaderEightCode, lang: "svelte" },
				{ path: "svgs/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{ path: "svgs/bolt.svelte", code: BoltCode, lang: "svelte" },
				{ path: "svgs/cisco.svelte", code: CiscoCode, lang: "svelte" },
				{ path: "svgs/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "svgs/figma.svelte", code: FigmaCode, lang: "svelte" },
				{ path: "svgs/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{ path: "svgs/hulu.svelte", code: HuluCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "svgs/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" },
				{ path: "svgs/vercel-full.svelte", code: VercelFullCode, lang: "svelte" },
				{ path: "folder-structure.md", code: HeroEightFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: HeroEight,
	},
	{
		itemId: "hero-nine",
		slug: "hero",
		title: "nine",
		category: "hero",
		preview: "/preview/hero/nine",
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-nine.svelte", code: HeroNineCode, lang: "svelte" },
				{ path: "header/header-nine.svelte", code: HeaderNineCode, lang: "svelte" },
				{ path: "svgs/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{ path: "svgs/bolt.svelte", code: BoltCode, lang: "svelte" },
				{ path: "svgs/cisco.svelte", code: CiscoCode, lang: "svelte" },
				{ path: "svgs/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "svgs/figma.svelte", code: FigmaCode, lang: "svelte" },
				{ path: "svgs/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{ path: "svgs/hulu.svelte", code: HuluCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "svgs/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" },
				{ path: "svgs/vercel-full.svelte", code: VercelFullCode, lang: "svelte" },
				{ path: "folder-structure.md", code: HeroNineFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: HeroNine,
	},
];
