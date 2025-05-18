import type { MistBlock } from '$lib/types/mists';
import ContactOne from '$lib/components/mist/mcontact/one.svelte';
import ContactOneCode from '$lib/components/mist/mcontact/one.svelte?raw';

export const all_mists_contact: MistBlock[] = [
  {
    slug: 'one',
    title: 'Contact Form One',
    category: 'contact',
    preview: '/preview/mist/contact/one',
    code: {
      code: ContactOneCode,
      lang: 'svelte'
    },
    component: ContactOne
  }
];
