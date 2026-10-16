import HeroOne from "#lib/components/mist/mhero/one/hero-one.svelte";
import HeroOneCode from "#lib/components/mist/mhero/one/hero-one.svelte?raw";

import HeroTwo from "#lib/components/mist/mhero/two/hero-two.svelte";
import HeroTwoCode from "#lib/components/mist/mhero/two/hero-two.svelte?raw";
import HeroTwoHeaderCode from "#lib/components/mist/mhero/two/header.svelte?raw";
import HeroTwoLogoCode from "#lib/components/mist/mhero/two/logo-icon.svelte?raw";

import HeroThree from "#lib/components/mist/mhero/three/hero-three.svelte";
import HeroThreeCode from "#lib/components/mist/mhero/three/hero-three.svelte?raw";
import HeroThreeHeaderCode from "#lib/components/mist/mhero/three/header.svelte?raw";
import HeroThreeLogoCode from "#lib/components/mist/mhero/three/logo-icon.svelte?raw";
import HeroThreeTrustedLogosCode from "#lib/components/mist/mhero/three/trusted-logos.svelte?raw";

import HeroFour from "#lib/components/mist/mhero/four/hero-four.svelte";
import HeroFourCode from "#lib/components/mist/mhero/four/hero-four.svelte?raw";
import HeroFourHeaderCode from "#lib/components/mist/mhero/four/header.svelte?raw";
import HeroFourLogoCode from "#lib/components/mist/mhero/four/logo-icon.svelte?raw";
import HeroFourTrustedLogosCode from "#lib/components/mist/mhero/four/trusted-logos.svelte?raw";

import HeroFive from "#lib/components/mist/mhero/five/hero-five.svelte";
import HeroFiveCode from "#lib/components/mist/mhero/five/hero-five.svelte?raw";
import HeroFiveMistKitLogoCode from "#lib/components/mist/mhero/five/mist-kit-logo.svelte?raw";
import HeroFiveTrustedLogosCode from "#lib/components/mist/mhero/five/trusted-logos.svelte?raw";

import HeroSix from "#lib/components/mist/mhero/six/hero-six.svelte";
import HeroSixCode from "#lib/components/mist/mhero/six/hero-six.svelte?raw";
import HeroSixMistKitLogoCode from "#lib/components/mist/mhero/six/mist-kit-logo.svelte?raw";
import HeroSixTrustedLogosCode from "#lib/components/mist/mhero/six/trusted-logos.svelte?raw";

import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "./simple-code-tree.js";
import Header from "#lib/components/mist/mhero/one/header.svelte?raw";
import TrustedLogos from "#lib/components/mist/mhero/one/trusted-logos.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import SpotifyLogoCode from "#lib/svgs/spotify.svelte?raw";
import SupabaseFullLogoCode from "#lib/svgs/supabase-full.svelte?raw";
import VercelFullLogoCode from "#lib/svgs/vercel-full.svelte?raw";

function createHeroFolderStructure(folderName: string, fileNames: string[]) {
	const sourcePaths = fileNames.map((fileName) => {
		if (fileName === "ui/button.svelte") {
			return "components/ui/mist/button/button.svelte";
		}

		if (fileName.startsWith("logos/")) {
			return `svgs/${fileName.slice(6)}`;
		}

		return `components/mist/mhero/${folderName}/${fileName}`;
	});

	if (fileNames.includes("ui/button.svelte")) {
		sourcePaths.push("components/ui/mist/button/index.ts");
	}

	return createMistFolderStructure(sourcePaths);
}

export const all_mists_heros: MistBlock[] = [
	{
		slug: "one",
		title: "one",
		category: "hero",
		preview: "/preview/mist/hero/one",
		previewMode: "inline",

		itemId: "hero-one",
		component: HeroOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroOneCode, lang: "svelte" },
				{ path: "header.svelte", code: Header, lang: "svelte" },
				{ path: "trusted-logos.svelte", code: TrustedLogos, lang: "svelte" },
				{ path: "logos/spotify.svelte", code: SpotifyLogoCode, lang: "svelte" },
				{ path: "logos/supabase-full.svelte", code: SupabaseFullLogoCode, lang: "svelte" },
				{ path: "logos/vercel-full.svelte", code: VercelFullLogoCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure("one", [
						"hero-one.svelte",
						"header.svelte",
						"trusted-logos.svelte",
						"logos/spotify.svelte",
						"logos/supabase-full.svelte",
						"logos/vercel-full.svelte",
					]),
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
		preview: "/preview/mist/hero/two",
		previewMode: "inline",

		itemId: "hero-two",
		component: HeroTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroTwoCode, lang: "svelte" },
				{ path: "header.svelte", code: HeroTwoHeaderCode, lang: "svelte" },
				{ path: "logo-icon.svelte", code: HeroTwoLogoCode, lang: "svelte" },
				{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure("two", [
						"hero-two.svelte",
						"header.svelte",
						"logo-icon.svelte",
						"ui/button.svelte",
					]),
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
		preview: "/preview/mist/hero/three",
		previewMode: "inline",

		itemId: "hero-three",
		component: HeroThree,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroThreeCode, lang: "svelte" },
				{ path: "header.svelte", code: HeroThreeHeaderCode, lang: "svelte" },
				{ path: "trusted-logos.svelte", code: HeroThreeTrustedLogosCode, lang: "svelte" },
				{ path: "logo-icon.svelte", code: HeroThreeLogoCode, lang: "svelte" },
				{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure("three", [
						"hero-three.svelte",
						"header.svelte",
						"trusted-logos.svelte",
						"logo-icon.svelte",
						"ui/button.svelte",
					]),
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
		preview: "/preview/mist/hero/four",
		previewMode: "inline",

		itemId: "hero-four",
		component: HeroFour,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroFourCode, lang: "svelte" },
				{ path: "header.svelte", code: HeroFourHeaderCode, lang: "svelte" },
				{ path: "trusted-logos.svelte", code: HeroFourTrustedLogosCode, lang: "svelte" },
				{ path: "logo-icon.svelte", code: HeroFourLogoCode, lang: "svelte" },
				{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure("four", [
						"hero-four.svelte",
						"header.svelte",
						"trusted-logos.svelte",
						"logo-icon.svelte",
						"ui/button.svelte",
					]),
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
		preview: "/preview/mist/hero/five",
		previewMode: "inline",

		itemId: "hero-five",
		component: HeroFive,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroFiveCode, lang: "svelte" },
				{ path: "trusted-logos.svelte", code: HeroFiveTrustedLogosCode, lang: "svelte" },
				{ path: "mist-kit-logo.svelte", code: HeroFiveMistKitLogoCode, lang: "svelte" },
				{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure("five", [
						"hero-five.svelte",
						"trusted-logos.svelte",
						"mist-kit-logo.svelte",
						"ui/button.svelte",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "six",
		title: "Hero Six",
		category: "hero",
		preview: "/preview/mist/hero/six",
		previewMode: "inline",

		itemId: "hero-six",
		component: HeroSix,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero.svelte", code: HeroSixCode, lang: "svelte" },
				{ path: "trusted-logos.svelte", code: HeroSixTrustedLogosCode, lang: "svelte" },
				{ path: "mist-kit-logo.svelte", code: HeroSixMistKitLogoCode, lang: "svelte" },
				{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createHeroFolderStructure("six", [
						"hero-six.svelte",
						"trusted-logos.svelte",
						"mist-kit-logo.svelte",
						"ui/button.svelte",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
