import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import HeroOne from "#lib/components/dusk/hero/one/hero.svelte";
import HeroOneCode from "#lib/components/dusk/hero/one/hero.svelte?raw";
import HeroOneHeaderCode from "#lib/components/dusk/hero/one/header.svelte?raw";

import HeroTwo from "#lib/components/dusk/hero/two/hero.svelte";
import HeroTwoCode from "#lib/components/dusk/hero/two/hero.svelte?raw";
import HeroTwoHeaderCode from "#lib/components/dusk/hero/two/header.svelte?raw";
import HeroTwoLogoCloudCode from "#lib/components/dusk/hero/two/logo-cloud.svelte?raw";

import HeroThree from "#lib/components/dusk/hero/three/hero.svelte";
import HeroThreeCode from "#lib/components/dusk/hero/three/hero.svelte?raw";
import HeroThreeHeaderCode from "#lib/components/dusk/hero/three/header.svelte?raw";
import HeroThreeLogoCloudCode from "#lib/components/dusk/hero/three/logo-cloud.svelte?raw";

import HeroFour from "#lib/components/dusk/hero/four/hero.svelte";
import HeroFourCode from "#lib/components/dusk/hero/four/hero.svelte?raw";
import HeroFourHeaderCode from "#lib/components/dusk/hero/four/header.svelte?raw";
import HeroFourLogoCloudCode from "#lib/components/dusk/hero/four/logo-cloud.svelte?raw";

import HeroFive from "#lib/components/dusk/hero/five/hero.svelte";
import HeroFiveCode from "#lib/components/dusk/hero/five/hero.svelte?raw";
import HeroFiveHeaderCode from "#lib/components/dusk/hero/five/header.svelte?raw";
import HeroFiveLogoCloudCode from "#lib/components/dusk/hero/five/logo-cloud.svelte?raw";
import HeroFiveVideoCode from "#lib/components/dusk/hero/five/hero-video.svelte?raw";

import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";
import KbdCode from "#lib/components/ui/kbd/kbd.svelte?raw";
import KbdIndexCode from "#lib/components/ui/kbd/index.ts?raw";
import LogoCode from "#lib/components/web/Logo.svelte?raw";
import SvgIndexCode from "#lib/svgs/index.ts?raw";
import BeaconCode from "#lib/svgs/beacon.svelte?raw";
import BoltCode from "#lib/svgs/bolt.svelte?raw";
import ClaudeCode from "#lib/svgs/claude.svelte?raw";
import FirebaseFullCode from "#lib/svgs/firebase-full.svelte?raw";
import HuluCode from "#lib/svgs/hulu.svelte?raw";
import SpotifyCode from "#lib/svgs/spotify.svelte?raw";
import SupabaseFullCode from "#lib/svgs/supabase-full.svelte?raw";
import VercelFullCode from "#lib/svgs/vercel-full.svelte?raw";

const sharedLogoFiles = [
	{ path: "logos/beacon.svelte", code: BeaconCode, lang: "svelte" as const },
	{ path: "logos/bolt.svelte", code: BoltCode, lang: "svelte" as const },
	{ path: "logos/hulu.svelte", code: HuluCode, lang: "svelte" as const },
	{ path: "logos/spotify.svelte", code: SpotifyCode, lang: "svelte" as const },
	{ path: "logos/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" as const },
	{ path: "logos/vercel-full.svelte", code: VercelFullCode, lang: "svelte" as const },
];

const sharedLogoNames = [
	"beacon.svelte",
	"bolt.svelte",
	"hulu.svelte",
	"spotify.svelte",
	"supabase-full.svelte",
	"vercel-full.svelte",
];

function createHeroFolderStructure(
	folderName: string,
	componentFiles: string[],
	logoFiles: string[],
	includeKbd = false
) {
	return createMistFolderStructure([
		...componentFiles.map((file) => `components/dusk/hero/${folderName}/${file}`),
		"components/ui/dusk/button/button.svelte",
		"components/ui/dusk/button/index.ts",
		...(includeKbd
			? ["components/ui/kbd/kbd.svelte", "components/ui/kbd/index.ts"]
			: []),
		"components/web/Logo.svelte",
		"svgs/index.ts",
		...logoFiles.map((file) => `svgs/${file}`),
	]);
}

const sharedCodeFiles = [
	{ path: "ui/button/button.svelte", code: DuskButtonCode, lang: "svelte" as const },
	{ path: "ui/button/index.ts", code: DuskButtonIndexCode, lang: "typescript" as const },
	{ path: "web/Logo.svelte", code: LogoCode, lang: "svelte" as const },
	{ path: "logos/index.ts", code: SvgIndexCode, lang: "typescript" as const },
];

export const all_dusk_hero: MistBlock[] = [
	{
		slug: "one",
		title: "Hero One",
		category: "hero",
		preview: "/preview/dusk/hero/one",
		previewMode: "inline",
		itemId: "hero-one",
		component: HeroOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroOneCode, lang: "svelte" },
				{ path: "header.svelte", code: HeroOneHeaderCode, lang: "svelte" },
				...sharedCodeFiles,
				...sharedLogoFiles,
				{ path: "logos/claude.svelte", code: ClaudeCode, lang: "svelte" },
				{ path: "logos/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure(
						"one",
						["hero.svelte", "header.svelte"],
						[...sharedLogoNames, "claude.svelte", "firebase-full.svelte"]
					),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Hero Two",
		category: "hero",
		preview: "/preview/dusk/hero/two",
		previewMode: "inline",
		itemId: "hero-two",
		component: HeroTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroTwoCode, lang: "svelte" },
				{ path: "header.svelte", code: HeroTwoHeaderCode, lang: "svelte" },
				{ path: "logo-cloud.svelte", code: HeroTwoLogoCloudCode, lang: "svelte" },
				...sharedCodeFiles,
				...sharedLogoFiles,
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure(
						"two",
						["hero.svelte", "header.svelte", "logo-cloud.svelte"],
						sharedLogoNames
					),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "three",
		title: "Hero Three",
		category: "hero",
		preview: "/preview/dusk/hero/three",
		previewMode: "inline",
		itemId: "hero-three",
		component: HeroThree,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroThreeCode, lang: "svelte" },
				{ path: "header.svelte", code: HeroThreeHeaderCode, lang: "svelte" },
				{ path: "logo-cloud.svelte", code: HeroThreeLogoCloudCode, lang: "svelte" },
				...sharedCodeFiles,
				...sharedLogoFiles,
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure(
						"three",
						["hero.svelte", "header.svelte", "logo-cloud.svelte"],
						sharedLogoNames
					),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "four",
		title: "Hero Four",
		category: "hero",
		preview: "/preview/dusk/hero/four",
		previewMode: "inline",
		itemId: "hero-four",
		component: HeroFour,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroFourCode, lang: "svelte" },
				{ path: "header.svelte", code: HeroFourHeaderCode, lang: "svelte" },
				{ path: "logo-cloud.svelte", code: HeroFourLogoCloudCode, lang: "svelte" },
				...sharedCodeFiles,
				{ path: "ui/kbd/kbd.svelte", code: KbdCode, lang: "svelte" },
				{ path: "ui/kbd/index.ts", code: KbdIndexCode, lang: "typescript" },
				...sharedLogoFiles,
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure(
						"four",
						["hero.svelte", "header.svelte", "logo-cloud.svelte"],
						sharedLogoNames,
						true
					),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "five",
		title: "Hero Five",
		category: "hero",
		preview: "/preview/dusk/hero/five",
		previewMode: "inline",
		itemId: "hero-five",
		component: HeroFive,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroFiveCode, lang: "svelte" },
				{ path: "header.svelte", code: HeroFiveHeaderCode, lang: "svelte" },
				{ path: "logo-cloud.svelte", code: HeroFiveLogoCloudCode, lang: "svelte" },
				{ path: "hero-video.svelte", code: HeroFiveVideoCode, lang: "svelte" },
				...sharedCodeFiles,
				...sharedLogoFiles,
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure(
						"five",
						["hero.svelte", "header.svelte", "logo-cloud.svelte", "hero-video.svelte"],
						sharedLogoNames
					),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
