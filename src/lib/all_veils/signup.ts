import type { MistBlock } from "$lib/types/mists";

import SignupOne from "$lib/components/veil/signup/signup-one.svelte";
import SignupOneCode from "$lib/components/veil/signup/signup-one.svelte?raw";
import SignupTwo from "$lib/components/veil/signup/signup-two.svelte";
import SignupTwoCode from "$lib/components/veil/signup/signup-two.svelte?raw";
import SignupThree from "$lib/components/veil/signup/signup-three.svelte";
import SignupThreeCode from "$lib/components/veil/signup/signup-three.svelte?raw";

export const all_veils_signup: MistBlock[] = [
	{
		slug: "signup-one",
		title: "Signup One",
		category: "signup",
		preview: "/preview/veil/signup/signup-one",
		itemId: "signup-one",
		code: {
			code: SignupOneCode,
			lang: "svelte",
		},
		component: SignupOne,
	},
	{
		slug: "signup-two",
		title: "Signup Two",
		category: "signup",
		preview: "/preview/veil/signup/signup-two",
		itemId: "signup-two",
		code: {
			code: SignupTwoCode,
			lang: "svelte",
		},
		component: SignupTwo,
	},
	{
		slug: "signup-three",
		title: "Signup Three",
		category: "signup",
		preview: "/preview/veil/signup/signup-three",
		itemId: "signup-three",
		code: {
			code: SignupThreeCode,
			lang: "svelte",
		},
		component: SignupThree,
	},
];
