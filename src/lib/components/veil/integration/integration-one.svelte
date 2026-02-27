<script>
  import { Button } from "$lib/components/ui/veil/button";
  import { ChevronRight } from "@lucide/svelte";
  import IntegrationIllustration from "./integration-illustration.svelte";
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <IntegrationIllustration />
    <div class="mx-auto mt-12 max-w-md text-balance text-center">
      <h2 class="font-serif text-4xl font-medium">
        Connect Your Favorite Tools
      </h2>
      <p class="text-muted-foreground mb-6 mt-4">
        Seamlessly integrate with the services you already use. Set up in
        minutes, not days.
      </p>
      <Button variant="secondary" size="sm" class="gap-1 pr-1.5">
        Learn more
        <ChevronRight />
      </Button>
    </div>
  </div>
</section>
