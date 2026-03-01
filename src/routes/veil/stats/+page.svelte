<script lang="ts">
  import SEOComponent from "$lib/seo/SEO.svelte";
  import { PreviewFrame } from "$lib/components/ui/preview-component";
  import { statsOverview } from "./data";
</script>

<SEOComponent
  title={statsOverview.seo.title}
  description={statsOverview.seo.description}
  keywords={statsOverview.seo.keywords}
/>

<div class="space-y-8 md:space-y-10">
  <section class="space-y-3">
    <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">
      {statsOverview.title}
    </h1>
    <p class="text-muted-foreground max-w-3xl">{statsOverview.description}</p>
  </section>

  <section class="grid gap-6 md:grid-cols-1">
    {#each statsOverview.items as item}
      {@const PreviewComp = item.preview}
      <div class="space-y-2">
        <PreviewFrame
          componentName={item.title}
          addItem={item.addItem}
          installUrl={item.installUrl}
          previewHref={item.previewHref}
          themeSetupHref="/docs/installation"
        >
          <PreviewComp />
        </PreviewFrame>
      </div>
    {/each}
  </section>
</div>
