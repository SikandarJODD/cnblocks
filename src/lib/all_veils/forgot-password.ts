import type { MistBlock } from "#lib/types/mists.js";

import ForgotPasswordOne from "#lib/components/veil/forgot-password/forgot-password-one.svelte";
import ForgotPasswordOneCode from "#lib/components/veil/forgot-password/forgot-password-one.svelte?raw";
import ForgotPasswordTwo from "#lib/components/veil/forgot-password/forgot-password-two.svelte";
import ForgotPasswordTwoCode from "#lib/components/veil/forgot-password/forgot-password-two.svelte?raw";
import ForgotPasswordThree from "#lib/components/veil/forgot-password/forgot-password-three.svelte";
import ForgotPasswordThreeCode from "#lib/components/veil/forgot-password/forgot-password-three.svelte?raw";
import { createAuthCodeTree } from "./auth-code-tree.js";

export const all_veils_forgot_password: MistBlock[] = [
	{
		slug: "forgot-password-one",
		title: "Forgot Password One",
		category: "forgot-password",
		preview: "/preview/veil/forgot-password/forgot-password-one",
		itemId: "forgot-password-one",
		codeTree: createAuthCodeTree({
			category: "forgot-password",
			fileName: "forgot-password-one.svelte",
			code: ForgotPasswordOneCode,
			includeCard: true,
		}),
		component: ForgotPasswordOne,
	},
	{
		slug: "forgot-password-two",
		title: "Forgot Password Two",
		category: "forgot-password",
		preview: "/preview/veil/forgot-password/forgot-password-two",
		itemId: "forgot-password-two",
		codeTree: createAuthCodeTree({
			category: "forgot-password",
			fileName: "forgot-password-two.svelte",
			code: ForgotPasswordTwoCode,
		}),
		component: ForgotPasswordTwo,
	},
	{
		slug: "forgot-password-three",
		title: "Forgot Password Three",
		category: "forgot-password",
		preview: "/preview/veil/forgot-password/forgot-password-three",
		itemId: "forgot-password-three",
		codeTree: createAuthCodeTree({
			category: "forgot-password",
			fileName: "forgot-password-three.svelte",
			code: ForgotPasswordThreeCode,
		}),
		component: ForgotPasswordThree,
	},
];
