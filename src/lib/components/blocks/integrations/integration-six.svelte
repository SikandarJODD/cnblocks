<script lang="ts">
  import {
    Gemini,
    GooglePaLM,
    Replit,
  } from "../logos";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Icon, Plus } from "@lucide/svelte";
</script>

<section>
  <div class="bg-muted dark:bg-background py-24 md:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <div
        class="mx-auto max-w-md px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]"
      >
        <div
          class="bg-background dark:bg-muted/50 rounded-xl border px-6 pb-12 pt-3 shadow-xl"
        >
          {@render IntegrationCardv6({
            icon: Gemini,
            name: "Gemini",
            description: "The AI model that powers Google's search engine.",
          })}

          {@render IntegrationCardv6({
            icon: Replit,
            name: "Replit",
            description: "The AI model that powers Google's search engine.",
          })}

          {@render IntegrationCardv6({
            icon: GooglePaLM,
            name: "GooglePaLM",
            description: "The AI model that powers Google's search engine.",
          })}
        </div>
      </div>
      <div class="mx-auto mt-6 max-w-lg space-y-6 text-center">
        <h2 class="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
          Integrate with your favorite LLMs
        </h2>
        <p class="text-muted-foreground">
          Connect seamlessly with popular platforms and services to enhance your
          workflow.
        </p>

        <Button variant="outline" size="sm">
          Get started
        </Button>
      </div>
    </div>
  </div>
</section>

{#snippet IntegrationCardv6({
  icon,
  name,
  description,
}: {
  icon: typeof Icon;
  name: string;
  description: string;
})}
  {@const Icon = icon}
  <div
    class="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0"
  >
    <div
      class="bg-muted border-foreground/5 flex size-12 items-center justify-center rounded-lg border"
    >
      <Icon />
    </div>
    <div class="space-y-0.5">
      <h3 class="text-sm font-medium">{name}</h3>
      <p class="text-muted-foreground line-clamp-1 text-sm">{description}</p>
    </div>
    <Button variant="outline" size="icon" aria-label="Add integration">
      <Plus class="size-4" />
    </Button>
  </div>
{/snippet}
