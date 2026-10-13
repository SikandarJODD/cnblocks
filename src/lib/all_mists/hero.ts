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
import Header from "#lib/components/mist/mhero/one/header.svelte?raw";
import TrustedLogos from "#lib/components/mist/mhero/one/trusted-logos.svelte?raw";

export const all_mists_heros: MistBlock[] = [
	{
		slug: "one",
		title: "one",
		category: "hero",
		preview: "/preview/mist/hero/one",
		previewMode: "inline",

		itemId: "hero-one",
		component: HeroOne,
		code: [
			{
				code: HeroOneCode,
				lang: "svelte",
				name: "hero.svelte",
			},
			{
				code: Header,
				lang: "svelte",
				name: "header.svelte",
			},
			{
				code: TrustedLogos,
				lang: "svelte",
				name: "trusted-logos.svelte",
			},
		],
	},
	{
		slug: "two",
		title: "Hero Two",
		category: "hero",
		preview: "/preview/mist/hero/two",
		previewMode: "inline",

		itemId: "hero-two",
		component: HeroTwo,
		code: [
			{
				code: HeroTwoCode,
				lang: "svelte",
				name: "hero.svelte",
			},
			{
				code: HeroTwoHeaderCode,
				lang: "svelte",
				name: "header.svelte",
			},
			{
				code: HeroTwoLogoCode,
				lang: "svelte",
				name: "logo-icon.svelte",
			},
		],
	},
	{
		slug: "three",
		title: "Hero Three",
		category: "hero",
		preview: "/preview/mist/hero/three",
		previewMode: "inline",

		itemId: "hero-three",
		component: HeroThree,
		code: [
			{
				code: HeroThreeCode,
				lang: "svelte",
				name: "hero.svelte",
			},
			{
				code: HeroThreeHeaderCode,
				lang: "svelte",
				name: "header.svelte",
			},
			{
				code: HeroThreeTrustedLogosCode,
				lang: "svelte",
				name: "trusted-logos.svelte",
			},
			{
				code: HeroThreeLogoCode,
				lang: "svelte",
				name: "logo-icon.svelte",
			},
		],
	},
	{
		slug: "four",
		title: "Hero Four",
		category: "hero",
		preview: "/preview/mist/hero/four",
		previewMode: "inline",

		itemId: "hero-four",
		component: HeroFour,
		code: [
			{
				code: HeroFourCode,
				lang: "svelte",
				name: "hero.svelte",
			},
			{
				code: HeroFourHeaderCode,
				lang: "svelte",
				name: "header.svelte",
			},
			{
				code: HeroFourTrustedLogosCode,
				lang: "svelte",
				name: "trusted-logos.svelte",
			},
			{
				code: HeroFourLogoCode,
				lang: "svelte",
				name: "logo-icon.svelte",
			},
		],
	},
	{
		slug: "five",
		title: "Hero Five",
		category: "hero",
		preview: "/preview/mist/hero/five",
		previewMode: "inline",

		itemId: "hero-five",
		component: HeroFive,
		code: [
			{ code: HeroFiveCode, lang: "svelte", name: "hero.svelte" },
			{ code: HeroFiveTrustedLogosCode, lang: "svelte", name: "trusted-logos.svelte" },
			{ code: HeroFiveMistKitLogoCode, lang: "svelte", name: "mist-kit-logo.svelte" },
		],
	},
	{
		slug: "six",
		title: "Hero Six",
		category: "hero",
		preview: "/preview/mist/hero/six",
		previewMode: "inline",

		itemId: "hero-six",
		component: HeroSix,
		code: [
			{ code: HeroSixCode, lang: "svelte", name: "hero.svelte" },
			{ code: HeroSixTrustedLogosCode, lang: "svelte", name: "trusted-logos.svelte" },
			{ code: HeroSixMistKitLogoCode, lang: "svelte", name: "mist-kit-logo.svelte" },
		],
	},
];
