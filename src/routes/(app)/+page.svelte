<script>
  import { all_blocks } from "$lib/all_blocks/all_blocks";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<section>
  <div
    class="mx-4 max-w-7xl border-x px-8 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
  >
    <div class="max-w-xl">
      <h1 class="text-balance text-3xl font-bold sm:text-4xl">
        Svelte Shadcn Marketing Blocks
      </h1>
      <p class="mb-6 mt-3 text-base font-montserrat text-muted-foreground">
        Speed up your workflow with responsive, pre-built UI blocks designed for
        marketing websites.
      </p>

      <div class="space-x-1">
        <Button href="/stats">Explore Blocks</Button>
        <Button variant="secondary" href="/templates">Explore Templates</Button>
      </div>
    </div>
  </div>
</section>
