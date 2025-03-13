<script>
  import { Card, CardContent, CardHeader } from "$lib/components/ui/card";
  import { Settings2, Zap, Sparkles } from "@lucide/svelte";
  import CardDecorator from "./CardDecorator.svelte";
</script>

<section class="py-16 md:py-32">
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
      class="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]"
    >
      <Card class="group border-0 shadow-none">
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

      <Card class="group border-0 shadow-none">
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

      <Card class="group border-0 shadow-none">
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
