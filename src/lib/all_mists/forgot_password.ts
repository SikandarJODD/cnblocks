import type { MistBlock } from "#lib/types/mists.js";
import ForgotPasswordOne from "#lib/components/mist/mforgot-password/one.svelte";
import ForgotPasswordOneCode from "#lib/components/mist/mforgot-password/one.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import MistInputCode from "#lib/components/ui/mist/input/input.svelte?raw";
import MistLabelCode from "#lib/components/ui/mist/label/label.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mforgot-password");
export const all_mists_forgot_password: MistBlock[] = [
	{
		slug: "one",
		title: "Forgot Password One",
		category: "forgot-password",
		preview: "/preview/mist/forgot-password/one",

		itemId: "forgot-password-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: ForgotPasswordOneCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
			{ path: "ui/input.svelte", code: MistInputCode, lang: "svelte" },
			{ path: "ui/label.svelte", code: MistLabelCode, lang: "svelte" },
		]),
		component: ForgotPasswordOne,
	},
];
