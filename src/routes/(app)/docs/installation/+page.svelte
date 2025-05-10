<script lang="ts">
  import DocsCodeBlock from "$lib/web/docs/DocsCodeBlock.svelte";
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
</script>

<svelte:head>
  <title>Installation - Shadcn Marketing Blocks</title>
  <meta
    name="description"
    content="Install & configure Marketing Blocks in your Svelte project using the CLI."
  />
  <meta
    name="keywords"
    content="svelte, shadcn, marketing blocks, installation, jsrepo"
  />
</svelte:head>

<main class="space-y-10 xl:mb-24">
  <div class="space-y-4">
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Installation</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
    <div class="space-y-3.5">
      <h1 class="text-3xl font-bold -tracking-wide text-primary">
        Installation
      </h1>
      <p
        class="text-[16px] font-normal leading-relaxed text-black/80 dark:text-primary/50"
      >
        Install & configure Marketing Blocks in your Svelte project using the
        CLI.
      </p>
      <p
        class="text-[16px] font-normal leading-relaxed text-black/80 dark:text-primary/50"
      >
        Here we are using <a
          href="https://jsrepo.dev"
          target="_blank"
          rel="noopener"
          class="text-yellow-500 underline underline-offset-2">JSRepo CLI</a
        > to install the blocks.
      </p>
    </div>
  </div>
  <div>
    <div class="relative">
      <div
        class="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800"
      >
        <span class="font-semibold text-primary">1</span>
      </div>
      <div
        class="ml-[1.1rem] border-l border-neutral-200 dark:border-neutral-900"
      >
        <div class="space-y-4 pb-8 pl-8 pt-1">
          <h2 class="font-medium text-primary">Create a new Svelte project</h2>
          <DocsCodeBlock
            fileName="Terminal"
            code="npx sv@0.6.18 create my-app"
            lang="shellscript"
          />
        </div>
      </div>
    </div>
    <div class="relative">
      <div
        class="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800"
      >
        <span class="font-semibold text-primary">2</span>
      </div>
      <div
        class="ml-[1.1rem] border-l border-neutral-200 dark:border-neutral-900"
      >
        <div class="space-y-4 pb-10 pl-8 pt-1">
          <h2 class="font-medium text-primary">Add Tailwind CSS</h2>
          <DocsCodeBlock
            fileName="Terminal"
            code="npx sv@0.6.18 add tailwindcss"
            lang="shellscript"
          />
        </div>
      </div>
    </div>
    <div class="relative">
      <div
        class="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800"
      >
        <span class="font-semibold text-primary">3</span>
      </div>
      <div
        class="ml-[1.1rem] border-l border-neutral-200 dark:border-neutral-900"
      >
        <div class="space-y-4 pb-8 pl-8 pt-1">
          <h2 class="font-medium text-primary">Add Shadcn Svelte</h2>
          <DocsCodeBlock
            fileName="Terminal"
            code="npx shadcn-svelte@next init"
            lang="shellscript"
          />
        </div>
      </div>
    </div>
    <div class="relative">
      <div
        class="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800"
      >
        <span class="font-semibold text-primary">4</span>
      </div>
      <div
        class="ml-[1.1rem] border-l border-neutral-200 dark:border-neutral-900"
      >
        <div class="space-y-4 pb-8 pl-8 pt-1">
          <h2 class="font-medium text-primary">That's It Now Add Any blocks</h2>
          <DocsCodeBlock
            fileName="Terminal"
            code="npx jsrepo add @sv/cnblocks/hero/hero-one"
            lang="shellscript"
          />
        </div>
      </div>
    </div>
    <div class="relative">
      <div
        class="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800"
      >
        <span class="font-semibold text-primary">5</span>
      </div>
      <div
        class="ml-[1.1rem] border-l border-neutral-200 dark:border-neutral-900"
      >
        <div class="space-y-4 pl-8 pt-1">
          <h2 class="font-medium text-primary">Add path to save Component</h2>
          <DocsCodeBlock
            fileName="Terminal"
            code={`┌  jsrepo v1.47.0
│
◇ Please enter a default path to install the blocks
│ ./src/blocks
│
● Initializing @sv/cnblocks
│
◇ Fetched manifest from @sv/cnblocks
│
└ All done!`}
            lang="shellscript"
          />
        </div>
      </div>
    </div>
  </div>
</main>
