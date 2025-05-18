<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
  import Calendar from "@lucide/svelte/icons/calendar";
</script>

<section class='[--color-primary:var(--color-indigo-500)]'>
  <div class="bg-muted py-12">
    <div class="mx-auto max-w-5xl px-6">
      <h2
        class="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl"
      >
        <span class="text-muted-foreground">Build Modern Websites.</span> Drive Results
      </h2>
      <p class="mt-4 text-lg">
        Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
        repellendus.
      </p>
      <div class="mt-8 flex gap-3">
        <Button href="#" class="pr-2">
          Try Mist for Free
          <ChevronRight strokeWidth={2.5} class="size-3.5! opacity-50" />
        </Button>
        <Button href="#" variant="outline" class="pl-2.5">
          <Calendar class="!size-3.5 opacity-50" strokeWidth={2.5} />
          Request a Demo
        </Button>
      </div>
    </div>
  </div>
</section>
