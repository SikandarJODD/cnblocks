<script lang="ts">
  import { Button } from "$lib/components/ui/veil/button";
  import Logo from "$lib/components/web/Logo.svelte";
  import { ChevronRight } from "@lucide/svelte";
</script>

<header class="fixed inset-x-0 top-4 z-50 mx-auto w-fit">
  <div class="bg-foreground/5 flex items-center gap-6 rounded-full py-2 pl-5 pr-2 backdrop-blur">
    <Logo class="h-5" />
    <Button class="pr-1.5" variant="outline" size="sm" href="#link">
      <span class="text-nowrap">Get started</span>
      <ChevronRight class="opacity-50" />
    </Button>
  </div>
</header>
<main class="overflow-hidden">
  <section class="bg-background">
    <div class="relative pb-32 pt-16">
      <div class="relative z-10 mx-auto w-full max-w-5xl px-6">
        <div
          class="mask-radial-from-35% aspect-3/2 mask-radial-to-75% pointer-events-none relative mx-auto max-w-xl opacity-75 mix-blend-darken"
        >
          <div class="bg-background absolute inset-0 mix-blend-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1634595947394-87012e7b12ba?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="watch in dark"
            class="not-dark:invert dark:mix-blend-lighten"
            width="1340"
            height="560"
          />
        </div>
        <div class="mx-auto mt-6 max-w-md text-center">
          <h1 class="text-balance font-serif text-4xl font-medium sm:text-5xl">
            Ship faster. Integrate smarter.
          </h1>
          <p class="text-muted-foreground mt-4 text-balance">
            Veil is your all-in-one engine for adding seamless integrations to your app.
          </p>

          <Button class="mt-6 pr-1.5" href="#link">
            <span class="text-nowrap">Start Building</span>
            <ChevronRight class="opacity-50" />
          </Button>
        </div>
      </div>
    </div>
  </section>
</main>
