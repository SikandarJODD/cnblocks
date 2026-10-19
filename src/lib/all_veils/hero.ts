import type { MistBlock } from "#lib/types/mists.js";

import HeroOne from "#lib/components/veil/hero/hero-one.svelte";
import HeroOneCode from "#lib/components/veil/hero/hero-one.svelte?raw";
import HeaderOneCode from "#lib/components/veil/header/header-one.svelte?raw";
import HeaderTwoCode from "#lib/components/veil/header/header-two.svelte?raw";
import HeaderThreeCode from "#lib/components/veil/header/header-three.svelte?raw";
import HeaderFourCode from "#lib/components/veil/header/header-four.svelte?raw";
import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import VeilCardCode from "#lib/components/ui/veil/card/card.svelte?raw";
import GithubLogoCode from "#lib/components/logos/github.svelte?raw";
import LogoCode from "#lib/components/web/Logo.svelte?raw";
import ClaudeLogoCode from "#lib/svgs/claude.svelte?raw";
import ClerkLogoCode from "#lib/svgs/clerk.svelte?raw";
import FigmaLogoCode from "#lib/svgs/figma.svelte?raw";
import FirebaseLogoCode from "#lib/svgs/firebase.svelte?raw";
import LinearLogoCode from "#lib/svgs/linear.svelte?raw";
import SlackLogoCode from "#lib/svgs/slack.svelte?raw";
import SupabaseLogoCode from "#lib/svgs/supabase.svelte?raw";
import TwilioLogoCode from "#lib/svgs/twilio.svelte?raw";
import VercelLogoCode from "#lib/svgs/vercel.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import HeroTwo from "#lib/components/veil/hero/hero-two.svelte";
import HeroTwoCode from "#lib/components/veil/hero/hero-two.svelte?raw";
import HeroThree from "#lib/components/veil/hero/hero-three.svelte";
import HeroThreeCode from "#lib/components/veil/hero/hero-three.svelte?raw";
import HeroFour from "#lib/components/veil/hero/hero-four.svelte";
import HeroFourCode from "#lib/components/veil/hero/hero-four.svelte?raw";
import HeroFive from "#lib/components/veil/hero/hero-five.svelte";
import HeroFiveCode from "#lib/components/veil/hero/hero-five.svelte?raw";

const HeroOneFolderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── veil/
    │   │   ├── hero/
    │   │   │   └── hero-one.svelte
    │   │   └── header/
    │   │       └── header-one.svelte
    │   ├── ui/
    │   │   └── veil/
    │   │       ├── button/
    │   │       │   ├── button.svelte
    │   │       │   └── index.ts
    │   │       └── card/
    │   │           ├── card.svelte
    │   │           └── index.ts
    │   └── web/
    │       └── Logo.svelte
    └── svgs/
        ├── index.ts
        ├── claude.svelte
        ├── clerk.svelte
        ├── figma.svelte
        ├── firebase.svelte
        ├── linear.svelte
        ├── slack.svelte
        ├── supabase.svelte
        ├── twilio.svelte
        └── vercel.svelte
`;

const HeroTwoFolderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── veil/
    │   │   ├── hero/
    │   │   │   └── hero-two.svelte
    │   │   └── header/
    │   │       └── header-two.svelte
    │   ├── ui/
    │   │   └── veil/
    │   │       ├── button/
    │   │       │   ├── button.svelte
    │   │       │   └── index.ts
    │   │       └── card/
    │   │           ├── card.svelte
    │   │           └── index.ts
    │   └── web/
    │       └── Logo.svelte
    └── svgs/
        ├── index.ts
        ├── claude.svelte
        ├── clerk.svelte
        ├── figma.svelte
        ├── firebase.svelte
        ├── linear.svelte
        ├── slack.svelte
        ├── supabase.svelte
        ├── twilio.svelte
        └── vercel.svelte
`;

const HeroThreeFolderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   ├── hero/
        │   │   └── hero-three.svelte
        │   └── header/
        │       └── header-three.svelte
        ├── ui/
        │   └── veil/
        │       └── button/
        │           ├── button.svelte
        │           └── index.ts
        └── web/
            └── Logo.svelte
`;

const HeroFourFolderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── logos/
        │   └── github.svelte
        ├── veil/
        │   ├── hero/
        │   │   └── hero-four.svelte
        │   └── header/
        │       └── header-four.svelte
        ├── ui/
        │   └── veil/
        │       └── button/
        │           ├── button.svelte
        │           └── index.ts
        └── web/
            └── Logo.svelte
`;

const HeroFiveFolderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── hero/
        │       └── hero-five.svelte
        ├── ui/
        │   └── veil/
        │       └── button/
        │           ├── button.svelte
        │           └── index.ts
        └── web/
            └── Logo.svelte
`;

export const all_veils_hero: MistBlock[] = [
	{
		slug: "hero-one",
		title: "Hero One",
		category: "hero",
		preview: "/preview/veil/hero/hero-one",
		previewMode: "inline",
		itemId: "hero-one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-one.svelte", code: HeroOneCode, lang: "svelte" },
				{ path: "header-one.svelte", code: HeaderOneCode, lang: "svelte" },
				{
					path: "Logo.svelte",
					code: LogoCode,
					lang: "svelte",
				},
				{
					path: "ui/button.svelte",
					code: VeilButtonCode,
					lang: "svelte",
				},
				{
					path: "ui/card.svelte",
					code: VeilCardCode,
					lang: "svelte",
				},
				{
					path: "logos/claude.svelte",
					code: ClaudeLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/clerk.svelte",
					code: ClerkLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/figma.svelte",
					code: FigmaLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/firebase.svelte",
					code: FirebaseLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/linear.svelte",
					code: LinearLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/slack.svelte",
					code: SlackLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/supabase.svelte",
					code: SupabaseLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/twilio.svelte",
					code: TwilioLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/vercel.svelte",
					code: VercelLogoCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: HeroOneFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: HeroOne,
	},
	{
		slug: "hero-two",
		title: "Hero Two",
		category: "hero",
		preview: "/preview/veil/hero/hero-two",
		previewMode: "inline",
		itemId: "hero-two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-two.svelte", code: HeroTwoCode, lang: "svelte" },
				{ path: "header-two.svelte", code: HeaderTwoCode, lang: "svelte" },
				{
					path: "Logo.svelte",
					code: LogoCode,
					lang: "svelte",
				},
				{
					path: "ui/button.svelte",
					code: VeilButtonCode,
					lang: "svelte",
				},
				{
					path: "ui/card.svelte",
					code: VeilCardCode,
					lang: "svelte",
				},
				{
					path: "logos/claude.svelte",
					code: ClaudeLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/clerk.svelte",
					code: ClerkLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/figma.svelte",
					code: FigmaLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/firebase.svelte",
					code: FirebaseLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/linear.svelte",
					code: LinearLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/slack.svelte",
					code: SlackLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/supabase.svelte",
					code: SupabaseLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/twilio.svelte",
					code: TwilioLogoCode,
					lang: "svelte",
				},
				{
					path: "logos/vercel.svelte",
					code: VercelLogoCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: HeroTwoFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: HeroTwo,
	},
	{
		slug: "hero-three",
		title: "Hero Three",
		category: "hero",
		preview: "/preview/veil/hero/hero-three",
		previewMode: "inline",
		itemId: "hero-three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-three.svelte", code: HeroThreeCode, lang: "svelte" },
				{ path: "header-three.svelte", code: HeaderThreeCode, lang: "svelte" },
				{
					path: "Logo.svelte",
					code: LogoCode,
					lang: "svelte",
				},
				{
					path: "ui/button.svelte",
					code: VeilButtonCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: HeroThreeFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: HeroThree,
	},
	{
		slug: "hero-four",
		title: "Hero Four",
		category: "hero",
		preview: "/preview/veil/hero/hero-four",
		previewMode: "inline",
		itemId: "hero-four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-four.svelte", code: HeroFourCode, lang: "svelte" },
				{ path: "header-four.svelte", code: HeaderFourCode, lang: "svelte" },
				{
					path: "Logo.svelte",
					code: LogoCode,
					lang: "svelte",
				},
				{
					path: "ui/button.svelte",
					code: VeilButtonCode,
					lang: "svelte",
				},
				{
					path: "logos/github.svelte",
					code: GithubLogoCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: HeroFourFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: HeroFour,
	},
	{
		slug: "hero-five",
		title: "Hero Five",
		category: "hero",
		preview: "/preview/veil/hero/hero-five",
		previewMode: "inline",
		itemId: "hero-five",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "hero-five.svelte", code: HeroFiveCode, lang: "svelte" },
				{
					path: "Logo.svelte",
					code: LogoCode,
					lang: "svelte",
				},
				{
					path: "ui/button.svelte",
					code: VeilButtonCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: HeroFiveFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: HeroFive,
	},
];
