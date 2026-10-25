import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import LogoCloudOne from "#lib/components/dusk/logo-cloud/one.svelte";
import LogoCloudOneCode from "#lib/components/dusk/logo-cloud/one.svelte?raw";
import LogoCloudTwo from "#lib/components/dusk/logo-cloud/two.svelte";
import LogoCloudTwoCode from "#lib/components/dusk/logo-cloud/two.svelte?raw";
import LogoCloudThree from "#lib/components/dusk/logo-cloud/three.svelte";
import LogoCloudThreeCode from "#lib/components/dusk/logo-cloud/three.svelte?raw";
import LogoCloudFour from "#lib/components/dusk/logo-cloud/four.svelte";
import LogoCloudFourCode from "#lib/components/dusk/logo-cloud/four.svelte?raw";

import SvgIndexCode from "#lib/svgs/index.ts?raw";
import BeaconCode from "#lib/svgs/beacon.svelte?raw";
import BoltCode from "#lib/svgs/bolt.svelte?raw";
import ClaudeCode from "#lib/svgs/claude.svelte?raw";
import FirebaseFullCode from "#lib/svgs/firebase-full.svelte?raw";
import HuluCode from "#lib/svgs/hulu.svelte?raw";
import SpotifyCode from "#lib/svgs/spotify.svelte?raw";
import SupabaseFullCode from "#lib/svgs/supabase-full.svelte?raw";
import VercelFullCode from "#lib/svgs/vercel-full.svelte?raw";

const coreLogoCodeFiles = [
	{ path: "logos/bolt.svelte", code: BoltCode, lang: "svelte" as const },
	{ path: "logos/hulu.svelte", code: HuluCode, lang: "svelte" as const },
	{ path: "logos/spotify.svelte", code: SpotifyCode, lang: "svelte" as const },
	{ path: "logos/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" as const },
	{ path: "logos/vercel-full.svelte", code: VercelFullCode, lang: "svelte" as const },
];

const coreLogoSourceFiles = [
	"svgs/bolt.svelte",
	"svgs/hulu.svelte",
	"svgs/spotify.svelte",
	"svgs/supabase-full.svelte",
	"svgs/vercel-full.svelte",
];

export const all_dusk_logo_cloud: MistBlock[] = [
	{
		slug: "one",
		title: "Logo Cloud One",
		category: "logo-cloud",
		preview: "/preview/dusk/logo-cloud/one",
		previewMode: "inline",
		itemId: "logo-cloud-one",
		component: LogoCloudOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "logo-cloud.svelte", code: LogoCloudOneCode, lang: "svelte" },
				{ path: "logos/index.ts", code: SvgIndexCode, lang: "typescript" },
				...coreLogoCodeFiles,
				{ path: "logos/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{ path: "logos/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "logos/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/logo-cloud/one.svelte",
						"svgs/index.ts",
						...coreLogoSourceFiles,
						"svgs/beacon.svelte",
						"svgs/claude.svelte",
						"svgs/firebase-full.svelte",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Logo Cloud Two",
		category: "logo-cloud",
		preview: "/preview/dusk/logo-cloud/two",
		previewMode: "inline",
		itemId: "logo-cloud-two",
		component: LogoCloudTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "logo-cloud.svelte", code: LogoCloudTwoCode, lang: "svelte" },
				{ path: "logos/index.ts", code: SvgIndexCode, lang: "typescript" },
				...coreLogoCodeFiles,
				{ path: "logos/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/logo-cloud/two.svelte",
						"svgs/index.ts",
						...coreLogoSourceFiles,
						"svgs/beacon.svelte",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "three",
		title: "Logo Cloud Three",
		category: "logo-cloud",
		preview: "/preview/dusk/logo-cloud/three",
		previewMode: "inline",
		itemId: "logo-cloud-three",
		component: LogoCloudThree,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "logo-cloud.svelte", code: LogoCloudThreeCode, lang: "svelte" },
				{ path: "logos/index.ts", code: SvgIndexCode, lang: "typescript" },
				...coreLogoCodeFiles,
				{ path: "logos/beacon.svelte", code: BeaconCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/logo-cloud/three.svelte",
						"svgs/index.ts",
						...coreLogoSourceFiles,
						"svgs/beacon.svelte",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "four",
		title: "Logo Cloud Four",
		category: "logo-cloud",
		preview: "/preview/dusk/logo-cloud/four",
		previewMode: "inline",
		itemId: "logo-cloud-four",
		component: LogoCloudFour,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "logo-cloud.svelte", code: LogoCloudFourCode, lang: "svelte" },
				{ path: "logos/index.ts", code: SvgIndexCode, lang: "typescript" },
				...coreLogoCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/logo-cloud/four.svelte",
						"svgs/index.ts",
						...coreLogoSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
