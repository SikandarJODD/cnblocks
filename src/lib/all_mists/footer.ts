import type { MistBlock } from '$lib/types/mists';
import FooterOne from '$lib/components/mist/footer/footer-one.svelte';
import FooterTwo from '$lib/components/mist/footer/footer-two.svelte';
import FooterThree from '$lib/components/mist/footer/footer-three.svelte';
import FooterFour from '$lib/components/mist/footer/footer-four.svelte';

export const all_mists_footer: MistBlock[] = [
  {
    slug: 'one',
    title: 'Footer One',
    category: 'footer',
    preview: '/preview/mist/footer/one',
    code: {
      code: (await import('$lib/components/mist/footer/footer-one.svelte?raw')).default,
      lang: 'svelte'
    },
    component: FooterOne
  },
  {
    slug: 'two',
    title: 'Footer Two',
    category: 'footer',
    preview: '/preview/mist/footer/two',
    code: {
      code: (await import('$lib/components/mist/footer/footer-two.svelte?raw')).default,
      lang: 'svelte'
    },
    component: FooterTwo
  },
  {
    slug: 'three',
    title: 'Footer Three',
    category: 'footer',
    preview: '/preview/mist/footer/three',
    code: {
      code: (await import('$lib/components/mist/footer/footer-three.svelte?raw')).default,
      lang: 'svelte'
    },
    component: FooterThree
  },
  {
    slug: 'four',
    title: 'Footer Four',
    category: 'footer',
    preview: '/preview/mist/footer/four',
    code: {
      code: (await import('$lib/components/mist/footer/footer-four.svelte?raw')).default,
      lang: 'svelte'
    },
    component: FooterFour
  }
];
