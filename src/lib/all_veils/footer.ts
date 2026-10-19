import type { MistBlock } from "#lib/types/mists.js";

import FooterOne from "#lib/components/veil/footer/footer-one.svelte";
import FooterOneCode from "#lib/components/veil/footer/footer-one.svelte?raw";
import FooterTwo from "#lib/components/veil/footer/footer-two.svelte";
import FooterTwoCode from "#lib/components/veil/footer/footer-two.svelte?raw";
import FooterThree from "#lib/components/veil/footer/footer-three.svelte";
import FooterThreeCode from "#lib/components/veil/footer/footer-three.svelte?raw";
import FooterFour from "#lib/components/veil/footer/footer-four.svelte";
import FooterFourCode from "#lib/components/veil/footer/footer-four.svelte?raw";
import FooterFive from "#lib/components/veil/footer/footer-five.svelte";
import FooterFiveCode from "#lib/components/veil/footer/footer-five.svelte?raw";
import FooterSix from "#lib/components/veil/footer/footer-six.svelte";
import FooterSixCode from "#lib/components/veil/footer/footer-six.svelte?raw";
import SocialMediaOneCode from "#lib/components/veil/footer/social-media-one.svelte?raw";
import ThemeSwitcherCode from "#lib/components/veil/footer/theme-switcher.svelte?raw";
import GithubIconCode from "#lib/components/icons/github.svelte?raw";
import LinkedinIconCode from "#lib/components/icons/linkedin.svelte?raw";
import TwitterIconCode from "#lib/components/icons/twitter.svelte?raw";
import YoutubeIconCode from "#lib/components/icons/youtube.svelte?raw";
import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import LogoCode from "#lib/components/web/Logo.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

type FooterCodeTreeOptions = {
	standardIcons?: boolean;
	socialMedia?: boolean;
	themeSwitcher?: boolean;
};

const standardIconCodeFiles = [
	{ path: "icons/github.svelte", code: GithubIconCode, lang: "svelte" },
	{ path: "icons/linkedin.svelte", code: LinkedinIconCode, lang: "svelte" },
	{ path: "icons/twitter.svelte", code: TwitterIconCode, lang: "svelte" },
] as const;

const socialMediaIconCodeFiles = [
	{ path: "icons/linkedin.svelte", code: LinkedinIconCode, lang: "svelte" },
	{ path: "icons/twitter.svelte", code: TwitterIconCode, lang: "svelte" },
	{ path: "icons/youtube.svelte", code: YoutubeIconCode, lang: "svelte" },
] as const;

function createFooterCodeTree(
	fileName: string,
	code: string,
	{
		standardIcons = false,
		socialMedia = false,
		themeSwitcher = false,
	}: FooterCodeTreeOptions = {}
) {
	const hasIcons = standardIcons || socialMedia;
	const hasButton = socialMedia || themeSwitcher;
	const footerFiles =
		socialMedia || themeSwitcher
			? `        │   └── footer/
        │       ├── ${fileName}
${socialMedia ? "        │       ├── social-media-one.svelte\n" : ""}${themeSwitcher ? "        │       └── theme-switcher.svelte" : ""}`
			: `        │   └── footer/
        │       └── ${fileName}`;
	const iconsTree = hasIcons
		? `        ├── icons/
        │   ├── index.ts
${standardIcons ? "        │   ├── github.svelte\n" : ""}        │   ├── linkedin.svelte
${socialMedia ? "        │   ├── twitter.svelte\n        │   └── youtube.svelte\n" : "        │   └── twitter.svelte\n"}`
		: "";
	const buttonTree = hasButton
		? `        ├── ui/
        │   └── veil/
        │       └── button/
        │           ├── button.svelte
        │           └── index.ts
`
		: "";
	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
${iconsTree}        ├── veil/
${footerFiles}
${buttonTree}        └── web/
            └── Logo.svelte
`;

	return createBlockCodeTreeFromCode(
		[
			{ path: fileName, code, lang: "svelte" },
			...(socialMedia
				? [
						{
							path: "footer/social-media-one.svelte",
							code: SocialMediaOneCode,
							lang: "svelte" as const,
						},
					]
				: []),
			...(themeSwitcher
				? [
						{
							path: "footer/theme-switcher.svelte",
							code: ThemeSwitcherCode,
							lang: "svelte" as const,
						},
					]
				: []),
			{ path: "Logo.svelte", code: LogoCode, lang: "svelte" },
			...(hasButton
				? [{ path: "ui/button.svelte", code: VeilButtonCode, lang: "svelte" as const }]
				: []),
			...(standardIcons ? standardIconCodeFiles : []),
			...(socialMedia ? socialMediaIconCodeFiles : []),
			{ path: "folder-structure.md", code: folderStructure, lang: "markdown" },
		],
		{ defaultOpen: false }
	);
}

export const all_veils_footer: MistBlock[] = [
	{
		slug: "footer-one",
		title: "Footer One",
		category: "footer",
		preview: "/preview/veil/footer/footer-one",
		itemId: "footer-one",
		codeTree: createFooterCodeTree("footer-one.svelte", FooterOneCode),
		component: FooterOne,
	},
	{
		slug: "footer-two",
		title: "Footer Two",
		category: "footer",
		preview: "/preview/veil/footer/footer-two",
		itemId: "footer-two",
		codeTree: createFooterCodeTree("footer-two.svelte", FooterTwoCode, {
			standardIcons: true,
		}),
		component: FooterTwo,
	},
	{
		slug: "footer-three",
		title: "Footer Three",
		category: "footer",
		preview: "/preview/veil/footer/footer-three",
		itemId: "footer-three",
		codeTree: createFooterCodeTree("footer-three.svelte", FooterThreeCode),
		component: FooterThree,
	},
	{
		slug: "footer-four",
		title: "Footer Four",
		category: "footer",
		preview: "/preview/veil/footer/footer-four",
		itemId: "footer-four",
		codeTree: createFooterCodeTree("footer-four.svelte", FooterFourCode, {
			standardIcons: true,
		}),
		component: FooterFour,
	},
	{
		slug: "footer-five",
		title: "Footer Five",
		category: "footer",
		preview: "/preview/veil/footer/footer-five",
		itemId: "footer-five",
		codeTree: createFooterCodeTree("footer-five.svelte", FooterFiveCode, {
			themeSwitcher: true,
		}),
		component: FooterFive,
	},
	{
		slug: "footer-six",
		title: "Footer Six",
		category: "footer",
		preview: "/preview/veil/footer/footer-six",
		itemId: "footer-six",
		codeTree: createFooterCodeTree("footer-six.svelte", FooterSixCode, {
			socialMedia: true,
			themeSwitcher: true,
		}),
		component: FooterSix,
	},
];
