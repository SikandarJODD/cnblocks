<script lang="ts">
  import DocsCodeBlock from "$lib/web/docs/DocsCodeBlock.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index";
</script>

<svelte:head>
  <title>MCP Server - Shadcn Marketing Blocks</title>
  <meta
    name="description"
    content="Install & configure Marketing Blocks in your Svelte project using the CLI."
  />
  <meta
    name="keywords"
    content="svelte, shadcn, marketing blocks, installation, jsrepo, mcp"
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
          <Breadcrumb.Page>MCP Server</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
    <div class="space-y-3.5">
      <h1 class="text-3xl font-bold -tracking-wide text-primary">
        MCP Server Integration for Cursor | Windsurf
      </h1>
      <p
        class="text-[16px] font-normal leading-relaxed text-black/80 dark:text-primary/50"
      >
        Here we are using <a
          href="https://jsrepo.dev/docs/registry/mcp"
          target="_blank"
          rel="noopener"
          class="text-yellow-500 underline underline-offset-2">jsrepo</a
        > to integrate MCP Server to your project.
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
          <h2 class="font-medium text-primary">Cursor Usage</h2>
          <p class="text-muted-foreground text-sm">
            Add the following code to your <code
              class="font-mono text-primary bg-secondary rounded-sm px-1 py-0.5"
              >.cursor/mcp.json</code
            > file:
          </p>
          <DocsCodeBlock
            fileName="Terminal"
            code={`   {
    	"mcpServers": {
    		"jsrepo": {
    			"command": "npx",
    			"args": ["jsrepo", "mcp"]
    		}
    	}
    }`}
            lang="json"
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
          <h2 class="font-medium text-primary">Windsurf Usage</h2>
          <p class="text-muted-foreground text-sm">
            Add the following code to your <code
              class="font-mono text-primary bg-secondary rounded-sm px-1 py-0.5"
              >.codeium/windsurf/mcp_config.json</code
            > file:
          </p>
          <DocsCodeBlock
            fileName="Terminal"
            code={`   {
    	"mcpServers": {
    		"jsrepo": {
    			"command": "npx",
    			"args": ["jsrepo", "mcp"]
    		}
    	}
    }`}
            lang="json"
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
        <div class="space-y-4 pb-10 pl-8 pt-1">
          <h2 class="font-medium text-primary">Add Cursor Rules</h2>
          <p class="text-muted-foreground text-sm">
            Create new file in <code
              class="font-mono text-primary bg-secondary rounded-sm px-1 py-0.5"
              >.cursor/rules</code
            >
            folder and create new file
            <code
              class="font-mono text-primary bg-secondary rounded-sm px-1 py-0.5"
              >svelte-blocks.mdc</code
            >
            and add the following code:
          </p>
          <DocsCodeBlock
            fileName="Terminal"
            code={`
---
description: Svelte Marketing Blocks
globs:
alwaysApply: true
---

# Svelte Marketing Blocks

## Project Description
You are working with Svelte Marketing Blocks, a collection of 100+ beautifully crafted components built with:
- Svelte 5
- Tailwind CSS 4
- shadcn-svelte components

These components are ideal for building high-converting marketing, landing, and product pages, and cover:
Hero, Feature, Content, Testimonial, Pricing, FAQ, CTA, Integration, Header, Footer, and more.

## General Instructions
- Use components from this library unless explicitly asked otherwise.
- Use Svelte 5 and support for children snippet, props, and actions.
- Style exclusively with Tailwind CSS 4, no inline styles.
- Use shadcn-svelte for buttons, cards, modals, accordions, and UI primitives.
- Ensure accessibility with proper roles, labels, alt text, and keyboard navigation where applicable.

## What Users Want
- Users are building beautiful, functional, responsive marketing pages.
- Pages should convert, look modern, and follow UI best practices.
- Components should be easy to customize, with clear slots and props.
- Code must be modular, clean, and production-ready.
- Use Images from Unsplash if not present or has static image.

## Component Usage Guidelines
- Component names follow the format: <HeroOne />, <FeatureTwo />, etc.
- Every component is a Svelte file with full props and children support.
- Support custom colors, spacing, and content via Tailwind utility classes or props.

### Sample Prompts
\`\`\`prompt
 Create a hero section using \`@sv/cnblocks\` with a compelling title, subheading, CTA, and image.
\`\`\`

\`\`\`prompt
 Create a Marketing page which include Hero in Notion Mist Style, Content,\n Feature, CTA and Footer with Responsive UI and Notion style theme using \`@sv/cnblocks\` from \`jsrepo\`
\`\`\``}
            lang="bash"
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
        <div class="space-y-4 pb-10 pl-8 pt-1">
          <h2 class="font-medium text-primary">
            Install jsrepo & Run MCP Server
          </h2>
          <DocsCodeBlock
            fileName="Terminal"
            code={`npm install -g jsrepo \n# Run MCP Server\njsrepo mcp`}
            lang="bash"
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
        <div class="space-y-4 pb-10 pl-8 pt-1">
          <h2 class="font-medium text-primary">Example Prompt</h2>
          <DocsCodeBlock
            fileName="Terminal"
            code={`Hey can you create a landing page using \`jsrepo\` and using \`@sv/cnblocks\` \nwhich should include hero section with Notion Mist Style, \nContent Setion, Feature Section, CTA and Footer with \nResponsive UI and Notion style theme related \nto SASS Product with good Content and Images.`}
            lang="bash"
          />
        </div>
      </div>
    </div>
  </div>
</main>
