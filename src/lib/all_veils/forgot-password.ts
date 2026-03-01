import type { MistBlock } from '$lib/types/mists';

import ForgotPasswordOne from '$lib/components/veil/forgot-password/forgot-password-one.svelte';
import ForgotPasswordOneCode from '$lib/components/veil/forgot-password/forgot-password-one.svelte?raw';
import ForgotPasswordTwo from '$lib/components/veil/forgot-password/forgot-password-two.svelte';
import ForgotPasswordTwoCode from '$lib/components/veil/forgot-password/forgot-password-two.svelte?raw';
import ForgotPasswordThree from '$lib/components/veil/forgot-password/forgot-password-three.svelte';
import ForgotPasswordThreeCode from '$lib/components/veil/forgot-password/forgot-password-three.svelte?raw';

export const all_veils_forgot_password: MistBlock[] = [
	{
		slug: 'forgot-password-one',
		title: 'Forgot Password One',
		category: 'forgot-password',
		preview: '/preview/veil/forgot-password/forgot-password-one',
		itemId: 'veil-forgot-password-one',
		code: {
			code: ForgotPasswordOneCode,
			lang: 'svelte'
		},
		component: ForgotPasswordOne
	},
	{
		slug: 'forgot-password-two',
		title: 'Forgot Password Two',
		category: 'forgot-password',
		preview: '/preview/veil/forgot-password/forgot-password-two',
		itemId: 'veil-forgot-password-two',
		code: {
			code: ForgotPasswordTwoCode,
			lang: 'svelte'
		},
		component: ForgotPasswordTwo
	},
	{
		slug: 'forgot-password-three',
		title: 'Forgot Password Three',
		category: 'forgot-password',
		preview: '/preview/veil/forgot-password/forgot-password-three',
		itemId: 'veil-forgot-password-three',
		code: {
			code: ForgotPasswordThreeCode,
			lang: 'svelte'
		},
		component: ForgotPasswordThree
	}
];
