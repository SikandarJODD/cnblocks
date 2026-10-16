import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import VeilCardCode from "#lib/components/ui/veil/card/card.svelte?raw";
import VeilInputCode from "#lib/components/ui/veil/input/input.svelte?raw";
import LabelCode from "#lib/components/ui/label/label.svelte?raw";
import BoltLogoCode from "#lib/svgs/bolt.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

type AuthCodeTreeOptions = {
	category: "forgot-password" | "login" | "signup";
	fileName: string;
	code: string;
	includeCard?: boolean;
};

export function createAuthCodeTree({
	category,
	fileName,
	code,
	includeCard = false,
}: AuthCodeTreeOptions) {
	const veilUiTree = includeCard
		? `        │       ├── button/
        │       │   ├── button.svelte
        │       │   └── index.ts
        │       ├── card/
        │       │   ├── card.svelte
        │       │   └── index.ts
        │       └── input/
        │           ├── index.ts
        │           └── input.svelte`
		: `        │       ├── button/
        │       │   ├── button.svelte
        │       │   └── index.ts
        │       └── input/
        │           ├── index.ts
        │           └── input.svelte`;
	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── veil/
    │   │   └── ${category}/
    │   │       └── ${fileName}
    │   └── ui/
    │       ├── label/
    │       │   ├── index.ts
    │       │   └── label.svelte
    │       └── veil/
${veilUiTree}
    └── svgs/
        ├── index.ts
        └── bolt.svelte
`;

	return createBlockCodeTreeFromCode(
		[
			{ path: fileName, code, lang: "svelte" },
			{ path: "ui/button.svelte", code: VeilButtonCode, lang: "svelte" },
			...(includeCard
				? [{ path: "ui/card.svelte", code: VeilCardCode, lang: "svelte" as const }]
				: []),
			{ path: "ui/input.svelte", code: VeilInputCode, lang: "svelte" },
			{ path: "ui/label.svelte", code: LabelCode, lang: "svelte" },
			{ path: "logos/bolt.svelte", code: BoltLogoCode, lang: "svelte" },
			{ path: "folder-structure.md", code: folderStructure, lang: "markdown" },
		],
		{ defaultOpen: false }
	);
}
