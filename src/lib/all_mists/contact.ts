import type { MistBlock } from '$lib/types/mists';
import ContactOne from '$lib/components/mist/contact/contact-one.svelte';

export const all_mists_contact: MistBlock[] = [
  {
    slug: 'one',
    title: 'Contact Form One',
    category: 'contact',
    preview: '/preview/mist/contact/one',
    code: {
      code: (await import('$lib/components/mist/contact/contact-one.svelte?raw')).default,
      lang: 'svelte'
    },
    component: ContactOne
  }
];
