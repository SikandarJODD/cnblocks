<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
  import type { Snippet } from "svelte";

  type IntegrationCardProps = {
    title: string;
    description: string;
    link?: string;
    children?: Snippet;
  };
  let {
    children,
    title,
    description,
    link = "https://github.com/sikandarjodd/cnblocks",
  }: IntegrationCardProps = $props();
</script>

<Card class="p-6">
  <div class="relative">
    <div class="*:size-10">{@render children?.()}</div>
    <div class="space-y-2 py-6">
      <h3 class="text-base font-medium">{title}</h3>
      <p class="text-muted-foreground line-clamp-2 text-sm">{description}</p>
    </div>

    <div class="flex gap-3 border-t border-dashed pt-6">
      <Button
        variant="secondary"
        size="sm"
        class="gap-1 pr-2 shadow-none"
        href={link}
      >
        Learn More
        <ChevronRight class="ml-0 !size-3.5 opacity-50" />
      </Button>
    </div>
  </div>
</Card>
