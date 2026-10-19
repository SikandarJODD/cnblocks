import type { MistBlock } from "#lib/types/mists.js";
import SignupOne from "#lib/components/mist/msignup/one.svelte";
import SignupOneCode from "#lib/components/mist/msignup/one.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import MistInputCode from "#lib/components/ui/mist/input/input.svelte?raw";
import MistLabelCode from "#lib/components/ui/mist/label/label.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("msignup");
export const all_mists_signup: MistBlock[] = [
	{
		slug: "one",
		title: "Signup One",
		category: "signup",
		preview: "/preview/mist/signup/one",

		itemId: "signup-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: SignupOneCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
			{ path: "ui/input.svelte", code: MistInputCode, lang: "svelte" },
			{ path: "ui/label.svelte", code: MistLabelCode, lang: "svelte" },
		]),
		component: SignupOne,
	},
];
