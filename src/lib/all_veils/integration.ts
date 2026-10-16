import type { MistBlock } from "#lib/types/mists.js";

import IntegrationOne from "#lib/components/veil/integration/integration-one.svelte";
import IntegrationOneCode from "#lib/components/veil/integration/integration-one.svelte?raw";
import IntegrationTwo from "#lib/components/veil/integration/integration-two.svelte";
import IntegrationTwoCode from "#lib/components/veil/integration/integration-two.svelte?raw";
import IntegrationIllustrationCode from "#lib/components/veil/integration/integration-illustration.svelte?raw";
import IntegrationIllustrationTwoCode from "#lib/components/veil/integration/integration-illustration-two.svelte?raw";
import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import BoltLogoCode from "#lib/svgs/bolt.svelte?raw";
import ClerkLogoCode from "#lib/svgs/clerk.svelte?raw";
import FirebaseLogoCode from "#lib/svgs/firebase.svelte?raw";
import LinearLogoCode from "#lib/svgs/linear.svelte?raw";
import SlackLogoCode from "#lib/svgs/slack.svelte?raw";
import SupabaseLogoCode from "#lib/svgs/supabase.svelte?raw";
import VercelLogoCode from "#lib/svgs/vercel.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

const integrationLogoCodeFiles = [
	{ path: "logos/bolt.svelte", code: BoltLogoCode, lang: "svelte" },
	{ path: "logos/clerk.svelte", code: ClerkLogoCode, lang: "svelte" },
	{ path: "logos/firebase.svelte", code: FirebaseLogoCode, lang: "svelte" },
	{ path: "logos/linear.svelte", code: LinearLogoCode, lang: "svelte" },
	{ path: "logos/slack.svelte", code: SlackLogoCode, lang: "svelte" },
	{ path: "logos/supabase.svelte", code: SupabaseLogoCode, lang: "svelte" },
	{ path: "logos/vercel.svelte", code: VercelLogoCode, lang: "svelte" },
] as const;

function createIntegrationFolderStructure(fileName: string, illustrationFileName: string) {
	return `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── veil/
    │   │   └── integration/
    │   │       ├── ${fileName}
    │   │       └── ${illustrationFileName}
    │   └── ui/
    │       └── veil/
    │           └── button/
    │               ├── button.svelte
    │               └── index.ts
    └── svgs/
        ├── index.ts
        ├── bolt.svelte
        ├── clerk.svelte
        ├── firebase.svelte
        ├── linear.svelte
        ├── slack.svelte
        ├── supabase.svelte
        └── vercel.svelte
`;
}

export const all_veils_integration: MistBlock[] = [
	{
		slug: "integration-one",
		title: "Integration One",
		category: "integration",
		preview: "/preview/veil/integration/integration-one",
		itemId: "integration-one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-one.svelte", code: IntegrationOneCode, lang: "svelte" },
				{
					path: "illustrations/integration-illustration.svelte",
					code: IntegrationIllustrationCode,
					lang: "svelte",
				},
				{ path: "ui/button.svelte", code: VeilButtonCode, lang: "svelte" },
				...integrationLogoCodeFiles,
				{
					path: "folder-structure.md",
					code: createIntegrationFolderStructure(
						"integration-one.svelte",
						"integration-illustration.svelte"
					),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationOne,
	},
	{
		slug: "integration-two",
		title: "Integration Two",
		category: "integration",
		preview: "/preview/veil/integration/integration-two",
		itemId: "integration-two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "integration-two.svelte", code: IntegrationTwoCode, lang: "svelte" },
				{
					path: "illustrations/integration-illustration-two.svelte",
					code: IntegrationIllustrationTwoCode,
					lang: "svelte",
				},
				{ path: "ui/button.svelte", code: VeilButtonCode, lang: "svelte" },
				...integrationLogoCodeFiles,
				{
					path: "folder-structure.md",
					code: createIntegrationFolderStructure(
						"integration-two.svelte",
						"integration-illustration-two.svelte"
					),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: IntegrationTwo,
	},
];
