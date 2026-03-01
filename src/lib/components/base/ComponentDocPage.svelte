<script lang="ts" module>
  import type { Component } from "svelte";
  import type { SEO } from "$lib/types/seo";
  import type { CodeBlock } from "$lib/components/ui/code";

  export type ComponentDocPageProps = {
    id: string;
    title: string;
    description: string;
    seo: SEO;
    preview?: Component;
    previewCode?: CodeBlock | CodeBlock[];
    previewInstallCommand?: string;
    previewHref?: string;
    previewThemeSetupHref?: string;
    descriptionClass?: string;
  };
</script>

<script lang="ts">
  import { page } from "$app/state";
  import { H1, H2, Paragraph, H3 } from "$lib/components/markdown/index";
  import { PreviewFrame } from "$lib/components/ui/preview-component";
  import SEOComponent from "$lib/seo/SEO.svelte";
  import InstallComponent from "./InstallComponent.svelte";

  let {
    id,
    title,
    description,
    seo,
    preview,
    previewCode,
    previewInstallCommand,
    previewHref,
    previewThemeSetupHref = "/docs/installation",
    descriptionClass = "",
  }: ComponentDocPageProps = $props();

  let PreviewComp = $derived(preview);
  let installUrl = $derived(`${page.url.origin}/r/${id}.json`);
  let previewInstallCmd = $derived(
    previewInstallCommand ?? `npx jsrepo add @sv/cnblocks/${id}`,
  );

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
    </div>
  </section>

  <section>
    <PreviewFrame
      componentName={title}
      installCommand={previewInstallCmd}
      {previewHref}
      themeSetupHref={previewThemeSetupHref}
      code={previewCode}
    >
      {#if PreviewComp}
        <PreviewComp />
      {/if}
    </PreviewFrame>
  </section>

  <section>
    <H2 id="installation">Installation</H2>
    <InstallComponent
      {installUrl}
      class="mt-4"
    />
  </section>
</div>
