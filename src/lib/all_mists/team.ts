import type { MistBlock } from '$lib/types/mists';
import TeamOne from '$lib/components/mist/team/team-one.svelte';
import TeamTwo from '$lib/components/mist/team/team-two.svelte';

export const all_mists_team: MistBlock[] = [
  {
    slug: "one",
    title: "Team One",
    category: "team",
    preview: "/preview/mist/team/one",
    code: {
      code: (await import('$lib/components/mist/team/team-one.svelte?raw')).default,
      lang: 'svelte'
    },
    component: TeamOne
  },
  {
    slug: 'two',
    title: 'Team Two',
    category: 'team',
    preview: '/preview/mist/team/two',
    code: {
      code: (await import('$lib/components/mist/team/team-two.svelte?raw')).default,
      lang: 'svelte'
    },
    component: TeamTwo
  }
];
