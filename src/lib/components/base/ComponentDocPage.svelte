<script lang="ts" module>
  import type { Component } from "svelte";
  import type { SEO } from "$lib/types/seo";
  import type { Example } from "$lib/types/examples";
  import type { PropsTable } from "$lib/types/structure";
  import type { CodeBlock } from "$lib/components/ui/code";

  export type ComponentDocPageProps = {
    id: string;
    title: string;
    description: string;
    seo: SEO;
    preview?: Component;
    previewCode?: CodeBlock | CodeBlock[];
    installCodeBlocks?: CodeBlock | CodeBlock[];
    installPackages?: string[];
    installFolderStructure?: string;
    installTailwindCode?: CodeBlock;
    examples?: Example[];
    propsTables?: PropsTable[];
    descriptionClass?: string;
  };
</script>

<script lang="ts">
  import { page } from "$app/state";
  import { H1, H2, Paragraph, H3 } from "$lib/components/markdown/index";
  import { PreviewComponent } from "$lib/components/ui/preview-component";
  import APITable from "./APITable.svelte";
  // import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
  import SEOComponent from "$lib/seo/SEO.svelte";
  import PackageBadges from "./PackageBadges.svelte";
  import InstallComponent from "./InstallComponent.svelte";

  let {
    id,
    title,
    description,
    seo,
    preview,
    previewCode,
    installCodeBlocks,
    installPackages = [],
    installFolderStructure,
    installTailwindCode,
    examples = [],
    propsTables = [],
    descriptionClass = "",
  }: ComponentDocPageProps = $props();

  let PreviewComp = $derived(preview);
  let installUrl = $derived(`${page.url.origin}/r/${id}.json`);

  let getURLPath = (url: string) => {
    // clean url by removing query params and hash
    let cleanUrl = url.split("?")[0].split("#")[0];
    return cleanUrl;
  };

  let llmsTxtUrl = $derived(`${getURLPath(page.url.pathname)}/llms.txt`);
</script>

<SEOComponent
  title={seo.title}
  description={seo.description}
  keywords={seo.keywords}
/>
<div class="space-y-8 md:space-y-10">
  <section>
    <div
      class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4"
    >
      <H1 id="introduction">{title}</H1>
      <!-- <CopyPageDropdown componentName={title} {llmsTxtUrl} /> -->
    </div>

    <div class="mt-4 space-y-3">
      <Paragraph class={descriptionClass}>
        {description}
      </Paragraph>
      <PackageBadges packages={installPackages} />
    </div>
  </section>

  <section>
    <PreviewComponent code={previewCode}>
      {#if PreviewComp}
        <PreviewComp />
      {/if}
    </PreviewComponent>
  </section>

  <section>
    <H2 id="installation">Installation</H2>
    <InstallComponent
      {installUrl}
      tailwindConfig={installTailwindCode
        ? { code: installTailwindCode }
        : undefined}
      codeBlocks={installCodeBlocks}
      packages={installPackages}
      folderStructure={installFolderStructure}
      class="mt-4"
    />
  </section>

  {#if examples.length > 0}
    <section>
      <H2 id="examples">Examples</H2>
      <div class="mt-4 space-y-8">
        {#each examples as example}
          <div class="space-y-3">
            <H3
              id={example.name.toLowerCase().replace(/\s+/g, "-")}
              class="mt-0"
            >
              {example.name}
            </H3>
            <PreviewComponent code={example.code}>
              <example.preview />
            </PreviewComponent>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  {#if propsTables.length > 0}
    <section>
      <H2 id="props">Props</H2>
      <div class="mt-3 space-y-6">
        <div>
          {#each propsTables as prop}
            <APITable data={prop} />
          {/each}
        </div>
      </div>
    </section>
  {/if}
</div>
