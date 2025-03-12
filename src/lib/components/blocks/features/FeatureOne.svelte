<script lang="ts">
  import { Card, CardContent, CardHeader } from "$lib/components/ui/card";
  import { Settings2, Sparkles, Zap } from "@lucide/svelte";
  import { type Snippet } from "svelte";
  import CardDecorator from "./CardDecorator.svelte";
</script>

<section class="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
  <div class="@container mx-auto max-w-5xl px-6">
    <div class="text-center">
      <h2 class="text-balance text-4xl font-semibold lg:text-5xl">
        Built to cover your needs
      </h2>
      <p class="mt-4">
        Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
        repellendus.
      </p>
    </div>
    <div
      class="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16"
    >
      <Card class="group shadow-zinc-950/5">
        <CardHeader class="pb-3">
          <CardDecorator>
            <Zap class="size-6" aria-hidden />
          </CardDecorator>

          <h3 class="mt-6 font-medium">Customizable</h3>
        </CardHeader>

        <CardContent>
          <p class="text-sm">
            Extensive customization options, allowing you to tailor every aspect
            to meet your specific needs.
          </p>
        </CardContent>
      </Card>

      <Card class="group shadow-zinc-950/5">
        <CardHeader class="pb-3">
          <CardDecorator>
            <Settings2 class="size-6" aria-hidden />
          </CardDecorator>

          <h3 class="mt-6 font-medium">You have full control</h3>
        </CardHeader>

        <CardContent>
          <p class="mt-3 text-sm">
            From design elements to functionality, you have complete control to
            create a unique and personalized experience.
          </p>
        </CardContent>
      </Card>

      <Card class="group shadow-zinc-950/5">
        <CardHeader class="pb-3">
          <CardDecorator>
            <Sparkles class="size-6" aria-hidden />
          </CardDecorator>

          <h3 class="mt-6 font-medium">Powered By AI</h3>
        </CardHeader>

        <CardContent>
          <p class="mt-3 text-sm">
            Elements to functionality, you have complete control to create a
            unique experience.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
