import type { MistBlock } from '$lib/types/mists';
import FooterOne from '$lib/components/mist/footer/footer-one.svelte';
import FooterOneCode from '$lib/components/mist/footer/footer-one.svelte?raw';
import FooterTwo from '$lib/components/mist/footer/footer-two.svelte';
import FooterTwoCode from '$lib/components/mist/footer/footer-two.svelte?raw';
import FooterThree from '$lib/components/mist/footer/footer-three.svelte';
import FooterThreeCode from '$lib/components/mist/footer/footer-three.svelte?raw';
import FooterFour from '$lib/components/mist/footer/footer-four.svelte';
import FooterFourCode from '$lib/components/mist/footer/footer-four.svelte?raw';

export const all_mists_footer: MistBlock[] = [
  {
    slug: 'one',
    title: 'Footer One',
    category: 'footer',
    preview: '/preview/mist/footer/one',
    code: {
      code: FooterOneCode,
      lang: 'svelte',
    },
    component: FooterOne
  },
  {
    slug: 'two',
    title: 'Footer Two',
    category: 'footer',
    preview: '/preview/mist/footer/two',
    code: {
      code: FooterTwoCode,
      lang: 'svelte',
    },
    component: FooterTwo
  },
  {
    slug: 'three',
    title: 'Footer Three',
    category: 'footer',
    preview: '/preview/mist/footer/three',
    code: {
      code: FooterThreeCode,
      lang: 'svelte',
    },
    component: FooterThree
  },
  {
    slug: 'four',
    title: 'Footer Four',
    category: 'footer',
    preview: '/preview/mist/footer/four',
    code: {
      code: FooterFourCode,
      lang: 'svelte',
    },
    component: FooterFour
  }
];
