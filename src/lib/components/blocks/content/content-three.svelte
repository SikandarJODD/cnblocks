<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
</script>

<section class="py-16 md:py-32">
  <div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
    <img
      class="rounded-(--radius) grayscale"
      src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="team image"
      height=""
      width=""
      loading="lazy"
    />

    <div class="grid gap-6 md:grid-cols-2 md:gap-12">
      <h2 class="text-4xl font-medium">
        The Lyra ecosystem brings together our models, products and platforms.
      </h2>
      <div class="space-y-6">
        <p>
          Lyra is evolving to be more than just the models. It supports an
          entire ecosystem — from products to the APIs and platforms helping
          developers and businesses innovate.
        </p>

        <Button href="#" variant="secondary" size="sm" class="gap-1 pr-1.5">
          <span>Learn More</span>
          <ChevronRight class="size-2" />
        </Button>
      </div>
    </div>
  </div>
</section>
