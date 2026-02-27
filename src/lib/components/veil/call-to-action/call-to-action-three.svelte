<script lang="ts">
  import { Button } from "$lib/components/ui/veil/button";
  import { ChevronRight, Mail } from "@lucide/svelte";

  type Props = {
    title?: string;
    description?: string;
    emailPlaceholder?: string;
    subscribeLabel?: string;
    subscribeHref?: string;
  };

  let {
    title = "Stay in the Loop",
    description = "Get the latest updates, tips, and exclusive offers delivered straight to your inbox.",
    emailPlaceholder = "Enter your email",
    subscribeLabel = "Subscribe",
    subscribeHref = "#link",
  }: Props = $props();
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="@xl:text-left grid items-center gap-8 text-center">
      <div>
        <h2 class="text-balance font-serif text-3xl font-medium md:text-4xl">{title}</h2>
        <p class="text-muted-foreground mt-3 text-balance">{description}</p>
      </div>

      <div class="@max-xl:mx-auto @max-md:flex-col flex w-full max-w-sm gap-2">
        <div
          class="ring-input not-dark:bg-card focus-within:ring-ring/15 focus-within:border-primary relative flex flex-1 items-center overflow-hidden rounded-md border border-transparent ring focus-within:ring-[3px]"
        >
          <Mail class="text-muted-foreground pointer-events-none absolute left-2.5 size-3.5" />
          <input
            type="email"
            placeholder={emailPlaceholder}
            autocomplete="email"
            class="autofill:bg-primary h-8 w-full bg-transparent pl-8 pr-2.5 text-sm outline-none"
          />
        </div>
        <Button href={subscribeHref} class="shrink-0 pr-1.5">
          {subscribeLabel}
          <ChevronRight class="opacity-50" />
        </Button>
      </div>
    </div>
  </div>
</section>
