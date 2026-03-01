import type { Component } from "svelte";
import type { CodeBlock } from "$lib/components/ui/code";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc } from "$lib/types/structure";
import { getRegistryItemUrl } from "$lib/utils/registry-url";

import StatsOne from "$lib/components/veil/stats/stats-one.svelte";
import StatsTwo from "$lib/components/veil/stats/stats-two.svelte";
import StatsThree from "$lib/components/veil/stats/stats-three.svelte";
import StatsFour from "$lib/components/veil/stats/stats-four.svelte";

import StatsOneCode from "$lib/components/veil/stats/stats-one.svelte?raw";
import StatsTwoCode from "$lib/components/veil/stats/stats-two.svelte?raw";
import StatsThreeCode from "$lib/components/veil/stats/stats-three.svelte?raw";
import StatsFourCode from "$lib/components/veil/stats/stats-four.svelte?raw";

export type StatsSlug = "stats-one" | "stats-two" | "stats-three" | "stats-four";

type StatsOverviewItem = {
	slug: StatsSlug;
	title: string;
	description: string;
	href: string;
	previewHref: string;
	addItem: string;
	installUrl: string;
	preview: Component;
};

const statsOverviewSEO: SEO = {
	title: "Veil Stats Components",
	description: "Explore all Veil stats components and open dedicated docs for each variant.",
	keywords: ["svelte", "veil", "stats", "components", "ui"],
};

const registryBaseUrl = "https://sv-blocks.vercel.app";
const getInstallUrl = (itemId: string) => getRegistryItemUrl(registryBaseUrl, itemId);

const toCodeBlock = (filename: string, filecode: string): CodeBlock => ({
	filename,
	filecode,
	lang: "svelte",
});

const statsOneDoc: ComponentDoc = {
	id: "veil-stats-one",
	title: "Stats One",
	description: "A minimal stats section with compact metric highlights.",
	seo: {
		title: "Veil Stats One",
		description: "Documentation and preview for the Veil Stats One component.",
		keywords: ["veil stats one", "svelte stats component"],
	},
	preview: StatsOne,
	previewCode: toCodeBlock("stats-one.svelte", StatsOneCode),
	previewAddItem: "veil-stats-one",
	previewHref: "/preview/veil/stats/stats-one",
};

const statsTwoDoc: ComponentDoc = {
	id: "veil-stats-two",
	title: "Stats Two",
	description: "A stats layout with subtle visual rhythm and chart-like accents.",
	seo: {
		title: "Veil Stats Two",
		description: "Documentation and preview for the Veil Stats Two component.",
		keywords: ["veil stats two", "svelte stats component"],
	},
	preview: StatsTwo,
	previewCode: toCodeBlock("stats-two.svelte", StatsTwoCode),
	previewAddItem: "veil-stats-two",
	previewHref: "/preview/veil/stats/stats-two",
};

const statsThreeDoc: ComponentDoc = {
	id: "veil-stats-three",
	title: "Stats Three",
	description: "A stats section with visual media support and strong emphasis blocks.",
	seo: {
		title: "Veil Stats Three",
		description: "Documentation and preview for the Veil Stats Three component.",
		keywords: ["veil stats three", "svelte stats component"],
	},
	preview: StatsThree,
	previewCode: toCodeBlock("stats-three.svelte", StatsThreeCode),
	previewAddItem: "veil-stats-three",
	previewHref: "/preview/veil/stats/stats-three",
};

const statsFourDoc: ComponentDoc = {
	id: "veil-stats-four",
	title: "Stats Four",
	description: "A split-layout stats section with directional composition.",
	seo: {
		title: "Veil Stats Four",
		description: "Documentation and preview for the Veil Stats Four component.",
		keywords: ["veil stats four", "svelte stats component"],
	},
	preview: StatsFour,
	previewCode: toCodeBlock("stats-four.svelte", StatsFourCode),
	previewAddItem: "veil-stats-four",
	previewHref: "/preview/veil/stats/stats-four",
};

export const statsDocsBySlug: Record<StatsSlug, ComponentDoc> = {
	"stats-one": statsOneDoc,
	"stats-two": statsTwoDoc,
	"stats-three": statsThreeDoc,
	"stats-four": statsFourDoc,
};

export const statsSlugs: StatsSlug[] = ["stats-one", "stats-two", "stats-three", "stats-four"];

export const statsOverview: {
	title: string;
	description: string;
	seo: SEO;
	items: StatsOverviewItem[];
} = {
	title: "Stats",
	description: "Browse all Veil stats variants and open dedicated docs for each implementation.",
	seo: statsOverviewSEO,
	items: [
		{
			slug: "stats-one",
			title: "Stats One",
			description: "Compact metrics and clear hierarchy.",
			href: "/veil/stats/stats-one",
			previewHref: "/preview/veil/stats/stats-one",
			addItem: "veil-stats-one",
			installUrl: getInstallUrl("veil-stats-one"),
			preview: StatsOne,
		},
		{
			slug: "stats-two",
			title: "Stats Two",
			description: "Metrics with chart-style visual texture.",
			href: "/veil/stats/stats-two",
			previewHref: "/preview/veil/stats/stats-two",
			addItem: "veil-stats-two",
			installUrl: getInstallUrl("veil-stats-two"),
			preview: StatsTwo,
		},
		{
			slug: "stats-three",
			title: "Stats Three",
			description: "Stats layout paired with a visual backdrop.",
			href: "/veil/stats/stats-three",
			previewHref: "/preview/veil/stats/stats-three",
			addItem: "veil-stats-three",
			installUrl: getInstallUrl("veil-stats-three"),
			preview: StatsThree,
		},
		{
			slug: "stats-four",
			title: "Stats Four",
			description: "Split composition with strong directional flow.",
			href: "/veil/stats/stats-four",
			previewHref: "/preview/veil/stats/stats-four",
			addItem: "veil-stats-four",
			installUrl: getInstallUrl("veil-stats-four"),
			preview: StatsFour,
		},
	],
};
