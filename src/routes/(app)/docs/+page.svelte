<script lang="ts">
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index";
  /*
Get started
- Introduction - main docs starting point
- Installation - using CLI
- Sponsors

I need breadcrumb
Title
desc
- create new project - select tailwind css
install shadcn svelte command ..update
- jsrepo command
- add path to it
easy done
*/
  const members = [
    {
      name: "Bhide Svelte",
      role: "Svelte Developer",
      avatar: "https://avatars.githubusercontent.com/u/93428946?v=4",
      href: "https://github.com/SikandarJODD",
    },
    {
      name: "Aidan Bleser",
      role: "Creator of JSrepo",
      avatar: "https://avatars.githubusercontent.com/u/117548273?v=4",
      href: "https://github.com/ieedan",
    },
  ];
</script>

<svelte:head>
  <title>Shadcn Marketing Blocks</title>
  <meta
    name="description"
    content="Welcome to Shadcn Marketing Blocks! This is a collection of marketing components built with Svelte 5, Tailwind CSS v4 and Shadcn Svelte."
  />
  <meta
    name="keywords"
    content="svelte, shadcn, marketing blocks, installation, jsrepo"
  />
</svelte:head>

<main class="space-y-6 xl:mb-24">
  <div class="space-y-4">
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Introduction</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
    <div class="space-y-3.5">
      <h1 class="text-3xl font-bold -tracking-wide text-primary">
        Introduction
      </h1>
      <p
        class="text-[16px] font-normal leading-relaxed text-black/80 dark:text-muted-foreground"
      >
        Welcome to Shadcn Marketing Blocks!
        <br />
        This is a collection of marketing components built with Svelte 5, Tailwind
        CSS v4 and Shadcn Svelte.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4 border-t py-4 md:grid-cols-6">
    {#each members as member}
      <a href={member.href} target="_blank" class="group">
        <div
          class="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5"
        >
          <img
            class="aspect-square rounded-full object-cover"
            src={member.avatar}
            alt={member.name}
            height="460"
            width="460"
            loading="lazy"
          />
        </div>
        <span class="mt-2 block text-sm">{member.name}</span>
        <span
          class="text-muted-foreground block text-xs group-hover:text-yellow-500"
          >{member.role}</span
        >
      </a>
    {/each}
  </div>
</main>
