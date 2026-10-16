import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import LogoCloudOne from "#lib/components/blocks/logocloud/logocloud-one.svelte";
import LogoCloudTwo from "#lib/components/blocks/logocloud/logocloud-two.svelte";
import LogoCloudThree from "#lib/components/blocks/logocloud/logocloud-three.svelte";
import LogoCloudOneCode from "#lib/components/blocks/logocloud/logocloud-one.svelte?raw";
import LogoCloudTwoCode from "#lib/components/blocks/logocloud/logocloud-two.svelte?raw";
import LogoCloudThreeCode from "#lib/components/blocks/logocloud/logocloud-three.svelte?raw";
import MarqueeCode from "#lib/components/magic/marquee/marquee.svelte?raw";
import ProgressiveBlurCode from "#lib/components/magic/progressive-blur/progressive-blur.svelte?raw";
import BeaconCode from "#lib/svgs/beacon.svelte?raw";
import BoltCode from "#lib/svgs/bolt.svelte?raw";
import CiscoCode from "#lib/svgs/cisco.svelte?raw";
import ClaudeCode from "#lib/svgs/claude.svelte?raw";
import FigmaCode from "#lib/svgs/figma.svelte?raw";
import FirebaseCode from "#lib/svgs/firebase.svelte?raw";
import FirebaseFullCode from "#lib/svgs/firebase-full.svelte?raw";
import HuluCode from "#lib/svgs/hulu.svelte?raw";
import SpotifyCode from "#lib/svgs/spotify.svelte?raw";
import SupabaseCode from "#lib/svgs/supabase.svelte?raw";
import SupabaseFullCode from "#lib/svgs/supabase-full.svelte?raw";
import VercelCode from "#lib/svgs/vercel.svelte?raw";
import VercelFullCode from "#lib/svgs/vercel-full.svelte?raw";

const LogoCloudOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   └── blocks/
    │       └── logocloud/
    │           └── logocloud-one.svelte
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

const LogoCloudTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   └── blocks/
    │       └── logocloud/
    │           └── logocloud-two.svelte
    └── svgs/
        ├── index.ts
        ├── beacon.svelte
        ├── bolt.svelte
        ├── claude.svelte
        ├── firebase.svelte
        ├── firebase-full.svelte
        ├── hulu.svelte
        ├── spotify.svelte
        ├── supabase.svelte
        ├── supabase-full.svelte
        ├── vercel.svelte
        └── vercel-full.svelte
`;

const LogoCloudThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── blocks/
    │   │   └── logocloud/
    │   │       └── logocloud-three.svelte
    │   └── magic/
    │       ├── marquee/
    │       │   ├── index.ts
    │       │   └── marquee.svelte
    │       └── progressive-blur/
    │           ├── index.ts
    │           └── progressive-blur.svelte
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

export const logocloud: Block[] = [
	{
		itemId: "logocloud-one",
		slug: "logocloud",
		title: "one",
		category: "logocloud",
		preview: "/preview/logocloud/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "logocloud-one.svelte", code: LogoCloudOneCode, lang: "svelte" },
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
				{
					path: "folder-structure.md",
					code: LogoCloudOneFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: LogoCloudOne,
	},
	{
		itemId: "logocloud-two",
		slug: "logocloud",
		title: "two",
		category: "logocloud",
		preview: "/preview/logocloud/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "logocloud-two.svelte", code: LogoCloudTwoCode, lang: "svelte" },
				{ path: "svgs/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{ path: "svgs/bolt.svelte", code: BoltCode, lang: "svelte" },
				{ path: "svgs/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "svgs/firebase.svelte", code: FirebaseCode, lang: "svelte" },
				{ path: "svgs/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{ path: "svgs/hulu.svelte", code: HuluCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "svgs/supabase.svelte", code: SupabaseCode, lang: "svelte" },
				{ path: "svgs/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" },
				{ path: "svgs/vercel.svelte", code: VercelCode, lang: "svelte" },
				{ path: "svgs/vercel-full.svelte", code: VercelFullCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: LogoCloudTwoFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: LogoCloudTwo,
	},
	{
		itemId: "logocloud-three",
		slug: "logocloud",
		title: "three",
		category: "logocloud",
		preview: "/preview/logocloud/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "logocloud-three.svelte", code: LogoCloudThreeCode, lang: "svelte" },
				{ path: "magic/marquee.svelte", code: MarqueeCode, lang: "svelte" },
				{
					path: "magic/progressive-blur.svelte",
					code: ProgressiveBlurCode,
					lang: "svelte",
				},
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
				{
					path: "folder-structure.md",
					code: LogoCloudThreeFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: LogoCloudThree,
	},
];
