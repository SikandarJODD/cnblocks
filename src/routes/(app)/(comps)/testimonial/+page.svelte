<script>
  import { testimonials } from "$lib/all_blocks/testimonial";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Testiomonial"  />

<section>
  <div
    class="h-6 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35"
  ></div>
</section>

{#each testimonials as block}
  <BlockPreview {...block} />
{/each}
