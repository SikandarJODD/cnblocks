<script>
  import AnimatedButton from "$lib/components/ui/button/animated-button.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<svelte:head>
  <title>Svelte Shadcn Blocks - 50+ UI & Marketing Blocks</title>
  <meta
    name="description"
    content="Svelte Shadcn Blocks offers 50+ UI & marketing components for building responsive landing pages. Supports light & dark mode for seamless design."
  />

  <meta
    property="og:title"
    content="Svelte Shadcn Blocks - 50+ UI & Marketing Blocks"
  />
  <meta
    property="og:description"
    content="Easily create landing pages with 50+ responsive UI & marketing blocks built with Svelte 5, Tailwind v4, and ShadCN-Svelte. Supports light & dark mode."
  />
  <meta property="og:image" content="https://sv-blocks.vercel.app/og.png" />
  <meta property="og:url" content="https://sv-blocks.vercel.app" />
  <meta property="og:type" content="website" />

  <meta
    name="twitter:title"
    content="Svelte Shadcn Blocks - 50+ UI & Marketing Blocks"
  />
  <meta
    name="twitter:description"
    content="50+ UI & marketing blocks for Svelte 5. Fully responsive & supports light/dark mode. Build landing pages effortlessly."
  />
  <meta name="twitter:image" content="https://sv-blocks.vercel.app/og.png" />
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="keywords"
    content="Svelte UI components, Svelte marketing blocks, ShadCN-Svelte, responsive UI, landing page builder, Svelte 5, Tailwind v4"
  />
  <meta name="author" content="Sikandar_Bhide" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://sv-blocks.vercel.app" />
</svelte:head>
<section>
  <div
    class="mx-4 max-w-7xl border-x px-8 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
  >
    <div class="max-w-2xl">
      <h1 class="text-balance text-3xl font-bold sm:text-4xl">
        Svelte Shadcn Blocks
      </h1>
      <h2 class="text-balance text-3xl mt-2 font-bold sm:text-4xl">
        50+ Pre-built UI & Marketing Blocks
      </h2>
      <p class="mb-6 mt-3 text-base font-montserrat text-muted-foreground">
        Speed up your workflow with responsive, pre-built UI blocks designed for
        marketing websites.
      </p>

      <div class="space-x-2 flex items-center">
        <Button href="/stats">Explore Blocks</Button>
        <!-- <Button variant="secondary" href="/templates">Explore Templates</Button> -->
        <AnimatedButton href="/templates">Explore Templates</AnimatedButton>
      </div>
    </div>
  </div>
</section>
