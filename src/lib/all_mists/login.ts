import type { MistBlock } from "#lib/types/mists.js";
import LoginOne from "#lib/components/mist/mlogin/one.svelte";
import LoginOneCode from "#lib/components/mist/mlogin/one.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import MistInputCode from "#lib/components/ui/mist/input/input.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mlogin");

export const all_mists_login: MistBlock[] = [
	{
		slug: "one",
		title: "Login One",
		category: "login",
		preview: "/preview/mist/login/one",

		itemId: "login-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: LoginOneCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
			{ path: "ui/input.svelte", code: MistInputCode, lang: "svelte" },
		]),
		component: LoginOne,
	},
];
