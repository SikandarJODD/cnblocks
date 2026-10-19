import type { MistBlock } from "#lib/types/mists.js";
import ContactOne from "#lib/components/mist/mcontact/one.svelte";
import ContactOneCode from "#lib/components/mist/mcontact/one.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import MistCardCode from "#lib/components/ui/mist/card/card.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mcontact");

export const all_mists_contact: MistBlock[] = [
	{
		slug: "one",
		title: "Contact Form One",
		category: "contact",
		preview: "/preview/mist/contact/one",

		itemId: "contact-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: ContactOneCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: MistCardCode, lang: "svelte" },
		]),
		component: ContactOne,
	},
];
