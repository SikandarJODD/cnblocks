<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
  import type { Snippet } from "svelte";

  type IntegrationCardProps = {
    title: string;
    description: string;
    children?: Snippet;
  };
  let { children, title, description }: IntegrationCardProps = $props();
</script>

<Card variant="soft" class="p-6">
  <div class="relative">
    <div class="*:size-10">{@render children?.()}</div>
    <div class="mt-6 space-y-1.5">
      <h3 class="text-lg font-semibold">{title}</h3>
      <p class="text-muted-foreground line-clamp-2">{description}</p>
    </div>
  </div>
</Card>
