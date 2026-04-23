import type { MistBlock } from "$lib/types/mists";

import LoginOne from "$lib/components/veil/login/login-one.svelte";
import LoginOneCode from "$lib/components/veil/login/login-one.svelte?raw";
import LoginTwo from "$lib/components/veil/login/login-two.svelte";
import LoginTwoCode from "$lib/components/veil/login/login-two.svelte?raw";
import LoginThree from "$lib/components/veil/login/login-three.svelte";
import LoginThreeCode from "$lib/components/veil/login/login-three.svelte?raw";

export const all_veils_login: MistBlock[] = [
	{
		slug: "login-one",
		title: "Login One",
		category: "login",
		preview: "/preview/veil/login/login-one",
		itemId: "login-one",
		code: {
			code: LoginOneCode,
			lang: "svelte",
		},
		component: LoginOne,
	},
	{
		slug: "login-two",
		title: "Login Two",
		category: "login",
		preview: "/preview/veil/login/login-two",
		itemId: "login-two",
		code: {
			code: LoginTwoCode,
			lang: "svelte",
		},
		component: LoginTwo,
	},
	{
		slug: "login-three",
		title: "Login Three",
		category: "login",
		preview: "/preview/veil/login/login-three",
		itemId: "login-three",
		code: {
			code: LoginThreeCode,
			lang: "svelte",
		},
		component: LoginThree,
	},
];
