import type { MistBlock } from "#lib/types/mists.js";
import IntegrationOne from "#lib/components/mist/mintegration/one.svelte";
import IntegrationOneCode from "#lib/components/mist/mintegration/one.svelte?raw";
import IntegrationTwo from "#lib/components/mist/mintegration/two.svelte";
import IntegrationTwoCode from "#lib/components/mist/mintegration/two.svelte?raw";
import IntegrationThree from "#lib/components/mist/mintegration/three.svelte";
import IntegrationThreeCode from "#lib/components/mist/mintegration/three.svelte?raw";
import IntegrationCardCode from "#lib/components/mist/mintegration/integration-card.svelte?raw";
import GeminiLogoCode from "#lib/components/mist/mlogos/Gemini.svelte?raw";
import GooglePaLMLogoCode from "#lib/components/mist/mlogos/GooglePaLM.svelte?raw";
import MagicUILogoCode from "#lib/components/mist/mlogos/MagicUI.svelte?raw";
import MediaWikiLogoCode from "#lib/components/mist/mlogos/MediaWiki.svelte?raw";
import ReplitLogoCode from "#lib/components/mist/mlogos/Replit.svelte?raw";
import VSCodiumLogoCode from "#lib/components/mist/mlogos/VSCodium.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mintegration");

const integrationLogoCodeFiles = [
	{ path: "logos/gemini.svelte", sourcePath: "components/mist/mlogos/Gemini.svelte", code: GeminiLogoCode, lang: "svelte" },
	{ path: "logos/google-palm.svelte", sourcePath: "components/mist/mlogos/GooglePaLM.svelte", code: GooglePaLMLogoCode, lang: "svelte" },
	{ path: "logos/magic-ui.svelte", sourcePath: "components/mist/mlogos/MagicUI.svelte", code: MagicUILogoCode, lang: "svelte" },
	{ path: "logos/media-wiki.svelte", sourcePath: "components/mist/mlogos/MediaWiki.svelte", code: MediaWikiLogoCode, lang: "svelte" },
	{ path: "logos/replit.svelte", sourcePath: "components/mist/mlogos/Replit.svelte", code: ReplitLogoCode, lang: "svelte" },
	{ path: "logos/vs-codium.svelte", sourcePath: "components/mist/mlogos/VSCodium.svelte", code: VSCodiumLogoCode, lang: "svelte" },
] as const;

export const all_mists_integrations: MistBlock[] = [
	{
		slug: "one",
		title: "Simple Integration List",
		category: "integration",
		preview: "/preview/mist/integration/one",

		itemId: "integration-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: IntegrationOneCode, lang: "svelte" },
			...integrationLogoCodeFiles,
		]),
		component: IntegrationOne,
	},
	{
		slug: "two",
		title: "Centered Integration List",
		category: "integration",
		preview: "/preview/mist/integration/two",

		itemId: "integration-two",
		codeTree: createSimpleMistCodeTree([
			{ path: "two.svelte", code: IntegrationTwoCode, lang: "svelte" },
			...integrationLogoCodeFiles,
		]),
		component: IntegrationTwo,
	},
	{
		slug: "three",
		title: "Integration Cards Grid",
		category: "integration",
		preview: "/preview/mist/integration/three",

		itemId: "integration-three",
		codeTree: createSimpleMistCodeTree([
			{ path: "three.svelte", code: IntegrationThreeCode, lang: "svelte" },
			{ path: "integration-card.svelte", code: IntegrationCardCode, lang: "svelte" },
			...integrationLogoCodeFiles,
		]),
		component: IntegrationThree,
	},
];
