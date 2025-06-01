<script lang="ts">
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index";
  import { marked } from "marked";
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

  let overview_content = `## Overview
  Svelte Shadcn Blocks consists of 2 main variants:

1. **Normal** - A vibrant, bold design with a focus on marketing and UI components.
2. **Mist** - A clean, minimal design inspired by Notion, perfect for documentation and content-heavy applications.

Each variant include **50+ blocks** that can be used in your projects. These blocks are designed to be easily customizable and integrate seamlessly with your Svelte applications.

You can use these blocks to build landing pages, marketing sites, dashboards, and more.
  `;
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
      <p
        class="text-[16px] font-normal leading-relaxed text-black/80 dark:text-muted-foreground"
      >
        This project is inspired by <a
          href="https://tailark.com"
          class="underline text-primary"
          target="_blank">Tailark</a
        >, this project is designed to bring a similarly smooth and efficient
        experience to Svelte developers, with a focus on building landing and
        marketing pages effortlessly.
      </p>
    </div>
    <div class="prose max-w-none dark:prose-invert prose-p:my-1 prose-li:my-1 prose-h2:my-3.5">
      {@html marked(overview_content)}
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
