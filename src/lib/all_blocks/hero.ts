import type { Block } from "../../types/blocks";
import { numToString } from "#lib";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

// Components
import HeroOne from "#lib/components/blocks/hero/hero-one.svelte";
import HeroTwo from "#lib/components/blocks/hero/hero-two.svelte";
import HeroThree from "#lib/components/blocks/hero/hero-three.svelte";
import HeroFour from "#lib/components/blocks/hero/hero-four.svelte";
import HeroFive from "#lib/components/blocks/hero/hero-five.svelte";
import HeroSix from "#lib/components/blocks/hero/hero-six.svelte";
import HeroSeven from "#lib/components/blocks/hero/hero-seven.svelte";
import HeroEight from "#lib/components/blocks/hero/hero-eight.svelte";
import HeroNine from "#lib/components/blocks/hero/hero-nine.svelte";

// Code
import HeroOneCode from "#lib/components/blocks/hero/hero-one.svelte?raw";
import HeroTwoCode from "#lib/components/blocks/hero/hero-two.svelte?raw";
import HeroThreeCode from "#lib/components/blocks/hero/hero-three.svelte?raw";
import HeroFourCode from "#lib/components/blocks/hero/hero-four.svelte?raw";
import HeroFiveCode from "#lib/components/blocks/hero/hero-five.svelte?raw";
import HeroSixCode from "#lib/components/blocks/hero/hero-six.svelte?raw";
import HeroSevenCode from "#lib/components/blocks/hero/hero-seven.svelte?raw";
import HeroEightCode from "#lib/components/blocks/hero/hero-eight.svelte?raw";
import HeroNineCode from "#lib/components/blocks/hero/hero-nine.svelte?raw";
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

const codes = [
	HeroOneCode,
	HeroTwoCode,
	HeroThreeCode,
	HeroFourCode,
	HeroFiveCode,
	HeroSixCode,
	HeroSevenCode,
	HeroEightCode,
	HeroNineCode,
];
const components = [
	HeroOne,
	HeroTwo,
	HeroThree,
	HeroFour,
	HeroFive,
	HeroSix,
	HeroSeven,
	HeroEight,
	HeroNine,
];

const svgCodes = {
	beacon: BeaconCode,
	bolt: BoltCode,
	cisco: CiscoCode,
	claude: ClaudeCode,
	figma: FigmaCode,
	"firebase-full": FirebaseFullCode,
	hulu: HuluCode,
	spotify: SpotifyCode,
	"supabase-full": SupabaseFullCode,
	"vercel-full": VercelFullCode,
};

type SvgName = keyof typeof svgCodes;

const allHeroSvgs: SvgName[] = [
	"beacon",
	"bolt",
	"cisco",
	"claude",
	"figma",
	"firebase-full",
	"hulu",
	"spotify",
	"supabase-full",
	"vercel-full",
];

const heroTwoSvgs: SvgName[] = allHeroSvgs.filter(
	(name) => name !== "cisco" && name !== "figma"
);

const heroDependencies = [
	{ magic: false, svgs: allHeroSvgs },
	{ magic: false, svgs: heroTwoSvgs },
	{ magic: true, svgs: allHeroSvgs },
	{ magic: true, svgs: allHeroSvgs },
	{ magic: true, svgs: allHeroSvgs },
	{ magic: false, svgs: [] },
	{ magic: false, svgs: [] },
	{ magic: false, svgs: allHeroSvgs },
	{ magic: false, svgs: allHeroSvgs },
];

function createFolderStructure(
	fileName: string,
	dependencies: (typeof heroDependencies)[number]
) {
	const hasSvgs = dependencies.svgs.length > 0;
	const rootBranch = hasSvgs ? "\u251c\u2500\u2500" : "\u2514\u2500\u2500";
	const componentIndent = hasSvgs ? "\u2502   " : "    ";
	const magicFolders = dependencies.magic
		? `    ${componentIndent}\u251c\u2500\u2500 magic/\n    ${componentIndent}\u2502   \u251c\u2500\u2500 marquee/\n    ${componentIndent}\u2502   \u2514\u2500\u2500 progressive-blur/\n`
		: "";
	const svgFiles = ["index.ts", ...dependencies.svgs.map((name) => `${name}.svelte`)];
	const svgFolder = hasSvgs
		? `\u2514\u2500\u2500 svgs/\n${svgFiles
				.map((name, index) => {
					const branch = index === svgFiles.length - 1 ? "\u2514\u2500\u2500" : "\u251c\u2500\u2500";
					return `        ${branch} ${name}`;
				})
				.join("\n")}\n`
		: "";

	return `# Folder structure

Here is the original folder structure:

    src/lib/
    ${rootBranch} components/
    ${componentIndent}\u251c\u2500\u2500 blocks/
    ${componentIndent}\u2502   \u2514\u2500\u2500 hero/
    ${componentIndent}\u2502       \u2514\u2500\u2500 ${fileName}
${magicFolders}    ${componentIndent}\u2514\u2500\u2500 ui/
    ${componentIndent}    \u2514\u2500\u2500 button/
    ${svgFolder}`;
}

export let hero: Block[] = components.map((component, index) => {
	const title = numToString(index + 1);
	const fileName = `hero-${title}.svelte`;

	return {
		itemId: `hero-${title}`,
		slug: "hero",
		title,
		category: "hero",
		preview: `/preview/hero/${title}`,
		previewMode: "inline",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: fileName, code: codes[index], lang: "svelte" },
				...heroDependencies[index].svgs.map((name) => ({
					path: `svgs/${name}.svelte`,
					code: svgCodes[name],
					lang: "svelte" as const,
				})),
				{
					path: "folder-structure.md",
					code: createFolderStructure(fileName, heroDependencies[index]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component,
	};
});
