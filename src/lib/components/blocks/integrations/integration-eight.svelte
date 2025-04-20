<script lang="ts">
  import {
    Gemini,
    GooglePaLM,
    MagicUI,
    VSCodium,
    Replit,
    MediaWiki,
  } from "../logos/logos";
  import Button from "$lib/components/ui/button/button.svelte";
  import { type Icon } from "@lucide/svelte";
</script>

<section>
  <div class="bg-muted dark:bg-background py-24 md:py-32">
    <div
      class="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12"
    >
      <div class="order-last mt-6 flex flex-col gap-12 md:order-first">
        <div class="space-y-6">
          <h2
            class="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl"
          >
            Integrate with your favorite LLMs
          </h2>
          <p class="text-muted-foreground">
            Connect seamlessly with popular platforms and services to enhance
            your workflow.
          </p>
          <Button variant="outline" size="sm">Get started</Button>
        </div>

        <div class="mt-auto grid grid-cols-[auto_1fr] gap-3">
          <div
            class="bg-background flex aspect-square items-center justify-center border"
          >
            <MediaWiki class="size-9" />
          </div>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <div class="mt-2 flex gap-2 text-sm">
              <cite>John Doe</cite>
              <p class="text-muted-foreground">Founder, MediaWiki</p>
            </div>
          </blockquote>
        </div>
      </div>

      <div
        class="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0"
      >
        <div
          class="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12"
        >
          <div class="grid grid-cols-2 gap-2">
            {@render IntergrationCardv8({
              icon: Gemini,
              name: "Gemini",
              description: "The AI model that powers Google's search engine.",
            })}
            {@render IntergrationCardv8({
              icon: Replit,
              name: "Replit",
              description: "The AI model that powers Google's search engine.",
            })}
            {@render IntergrationCardv8({
              icon: GooglePaLM,
              name: "GooglePaLM",
              description: "The AI model that powers Google's search engine.",
            })}
            {@render IntergrationCardv8({
              icon: MagicUI,
              name: "MagicUI",
              description: "The AI model that powers Google's search engine.",
            })}
            {@render IntergrationCardv8({
              icon: VSCodium,
              name: "VSCodium",
              description: "The AI model that powers Google's search engine.",
            })}
            {@render IntergrationCardv8({
              icon: MediaWiki,
              name: "MediaWiki",
              description: "The AI model that powers Google's search engine.",
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{#snippet IntergrationCardv8({
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
    class="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors"
  >
    <div class="flex size-fit items-center justify-center">
      <Icon />
    </div>
    <div class="space-y-1">
      <h3 class="text-sm font-medium">{name}</h3>
      <p class="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2">
        {description}
      </p>
    </div>
  </div>
{/snippet}
