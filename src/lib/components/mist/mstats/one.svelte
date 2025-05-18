<script>
  import Card from "$lib/components/ui/card/card.svelte";
</script>

<section class="bg-muted py-12 md:py-20 dark:[--color-muted:var(--color-zinc-900)]">
  <div class="mx-auto max-w-5xl px-6">
    <Card
      class="grid gap-0.5 divide-y *:py-8 *:text-center md:grid-cols-3 md:divide-x md:divide-y-0"
    >
      <div>
        <div class="text-foreground space-y-1 text-4xl font-bold">+1200</div>
        <p class="text-muted-foreground">Stars on GitHub</p>
      </div>
      <div>
        <div class="text-foreground space-y-1 text-4xl font-bold">56%</div>
        <p class="text-muted-foreground">Conversion rate</p>
      </div>
      <div>
        <div class="text-foreground space-y-1 text-4xl font-bold">+500</div>
        <p class="text-muted-foreground">Powered Apps</p>
      </div>
    </Card>
  </div>
</section>
