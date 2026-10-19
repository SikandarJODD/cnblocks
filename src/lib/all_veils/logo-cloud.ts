import type { MistBlock } from "#lib/types/mists.js";

import LogoCloudOne from "#lib/components/veil/logo-cloud/logo-cloud-one.svelte";
import LogoCloudOneCode from "#lib/components/veil/logo-cloud/logo-cloud-one.svelte?raw";
import LogoCloudTwo from "#lib/components/veil/logo-cloud/logo-cloud-two.svelte";
import LogoCloudTwoCode from "#lib/components/veil/logo-cloud/logo-cloud-two.svelte?raw";
import BeaconLogoCode from "#lib/svgs/beacon.svelte?raw";
import BoltLogoCode from "#lib/svgs/bolt.svelte?raw";
import CiscoLogoCode from "#lib/svgs/cisco.svelte?raw";
import HuluLogoCode from "#lib/svgs/hulu.svelte?raw";
import LinearLogoCode from "#lib/svgs/linear.svelte?raw";
import SpotifyLogoCode from "#lib/svgs/spotify.svelte?raw";
import SupabaseFullLogoCode from "#lib/svgs/supabase-full.svelte?raw";
import VercelFullLogoCode from "#lib/svgs/vercel-full.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

const logoCloudCodeFiles = [
	{ path: "logos/beacon.svelte", code: BeaconLogoCode, lang: "svelte" },
	{ path: "logos/bolt.svelte", code: BoltLogoCode, lang: "svelte" },
	{ path: "logos/cisco.svelte", code: CiscoLogoCode, lang: "svelte" },
	{ path: "logos/hulu.svelte", code: HuluLogoCode, lang: "svelte" },
	{ path: "logos/spotify.svelte", code: SpotifyLogoCode, lang: "svelte" },
	{ path: "logos/supabase-full.svelte", code: SupabaseFullLogoCode, lang: "svelte" },
	{ path: "logos/vercel-full.svelte", code: VercelFullLogoCode, lang: "svelte" },
] as const;

function createLogoCloudCodeTree(fileName: string, code: string, includeLinear = false) {
	const linearTree = includeLinear ? "        │   ├── linear.svelte\n" : "";
	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    ├── components/
    │   └── veil/
    │       └── logo-cloud/
    │           └── ${fileName}
    └── svgs/
        ├── index.ts
        ├── beacon.svelte
        ├── bolt.svelte
        ├── cisco.svelte
        ├── hulu.svelte
${linearTree}        ├── spotify.svelte
        ├── supabase-full.svelte
        └── vercel-full.svelte
`;

	return createBlockCodeTreeFromCode(
		[
			{ path: fileName, code, lang: "svelte" },
			...logoCloudCodeFiles,
			...(includeLinear
				? [{ path: "logos/linear.svelte", code: LinearLogoCode, lang: "svelte" as const }]
				: []),
			{ path: "folder-structure.md", code: folderStructure, lang: "markdown" },
		],
		{ defaultOpen: false }
	);
}

export const all_veils_logo_cloud: MistBlock[] = [
	{
		slug: "logo-cloud-one",
		title: "Logo Cloud One",
		category: "logo-cloud",
		preview: "/preview/veil/logo-cloud/logo-cloud-one",
		itemId: "logo-cloud-one",
		codeTree: createLogoCloudCodeTree("logo-cloud-one.svelte", LogoCloudOneCode, true),
		component: LogoCloudOne,
	},
	{
		slug: "logo-cloud-two",
		title: "Logo Cloud Two",
		category: "logo-cloud",
		preview: "/preview/veil/logo-cloud/logo-cloud-two",
		itemId: "logo-cloud-two",
		codeTree: createLogoCloudCodeTree("logo-cloud-two.svelte", LogoCloudTwoCode),
		component: LogoCloudTwo,
	},
];
