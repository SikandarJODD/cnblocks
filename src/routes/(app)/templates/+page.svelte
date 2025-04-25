<script>
  import RainbowButton from "$lib/components/magic/RainbowButton.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import GridPattern from "$lib/components/magic/GridPattern.svelte";
  import { cn } from "$lib/utils";
  let features = [
    "Save 100+ hours of work",
    "1x Landing Page with 10+ sections",
    "Dark mode support",
    "100% Mobile responsive",
    "SEO Optimized",
    "Scroll Animations & Micro Interactions",
    "Global config for text, images and more",
    "Get Github Repo Access",
    "Deploy live to vercel",
  ];

  let sections = [
    "Header",
    "Hero",
    "Logos",
    "Problem",
    "Bento Features",
    "Features",
    "Testimonial",
    "Pricing",
    "Faq",
    "CTA",
    "Footer",
  ];
</script>

<svelte:head>
  <title>Startup Template - The Ultimate Landing Page for your Startup</title>
  <meta
    name="description"
    content="The Ultimate Landing Page for your Startup. This is a landing page template for a SaaS product. The template is built with Svelte 5, TailwindCSS V4, and Shadcn Svelte."
  />
</svelte:head>
<div
  class="max-w-7xl mx-auto px-4 pt-2 sm:pt-16 border-x rounded-b-2xl border-b md:px-8 md:pt-4 mb-16 relative overflow-hidden"
>
  <GridPattern
    width={30}
    height={30}
    strokeDashArray="4 2"
    x={-10}
    class={cn(
      "[mask-image:radial-gradient(800px_circle_at_top_right,white,transparent)]",
      "-z-40"
    )}
  />
  <h1 class="text-3xl font-bold mt-4 capitalize mb-2">Startup Template</h1>
  <p class="text-muted-foreground text-md md:text-lg">
    The Ultimate Landing Page for your Startup.
  </p>
  <div class="mt-4 w-full md:max-w-4xl h-fit md:h-fit">
    <img
      src="/landing-page.png"
      alt="landing page"
      class="h-fit object-cover border object-top rounded-2xl border-zinc-700/20 shadow-md dark:shadow-zinc-950"
    />
  </div>
  <div class="my-8 w-full flex items-center gap-3">
    <Button
      target="_blank"
      href="https://buy.polar.sh/polar_cl_AjEE4uRd34lOYFgOsLlGXCtyHfPqrwL6rXx5G3qPNAi"
      >Buy Now</Button
    >
    <Button
      href="https://sv-landing-pg.vercel.app"
      target="_blank"
      variant="outline"
      size="lg"
    >
      Live Demo
    </Button>
  </div>
  <Separator />
  <div class="max-w-7xl my-6 space-y-3 bg-background z-40">
    <div class="grid grid-cols-1 sm:grid-cols-9 sm:space-x-10 py-4">
      <div class="col-span-3 lg:col-span-2">
        <h2 class="text-xl sm:text-3xl font-bold">What is this?</h2>
      </div>
      <div class="col-span-6">
        <p class="text-md sm:text-lg text-muted-foreground">
          This is a landing page template for a SaaS product. The template is
          built with Svelte 5, TailwindCSS V4, and Shadcn Svelte.
        </p>
      </div>
    </div>
    <Separator />
    <div class="grid grid-cols-1 md:grid-cols-9 sm:space-x-10 py-4">
      <div class="col-span-3 lg:col-span-2">
        <h2 class="text-xl sm:text-3xl font-bold">Who is this for?</h2>
      </div>
      <div class="col-span-6">
        <p class="text-md sm:text-lg text-muted-foreground">
          This template is perfect for startups, small businesses, and
          entrepreneurs looking to create a professional landing page for their
          SaaS product.
        </p>
      </div>
    </div>
    <Separator />
    <div class="grid grid-cols-1 md:grid-cols-9 sm:space-x-10 py-4">
      <div class="col-span-3 lg:col-span-2">
        <h2 class="text-xl sm:text-3xl font-bold">What's included?</h2>
      </div>
      <div class="col-span-6">
        <p class="text-md sm:text-lg text-muted-foreground">
          This template is specifically designed for landing pages, packed with
          essential features and components to streamline your development
          process. It helps you create stunning, high-converting landing page in
          a fraction of the time, allowing you to focus on what matters most -
          your product.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 class="text-2xl font-semibold text-primary mt-4">Features</h3>
            <div
              class="list-disc list-inside text-md text-muted-foreground mt-4 space-y-1 flex flex-col"
            >
              {#each features as feature}
                <span class="flex text-primary font-semibold items-start"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 mt-1.5 text-green-500 mr-2"
                    ><polyline points="20 6 9 17 4 12"></polyline></svg
                  >{feature}</span
                >
              {/each}
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-primary mt-4">
              Page Sections
            </h3>
            <div
              class="list-disc list-inside text-md text-muted-foreground mt-4 space-y-1 flex flex-col"
            >
              {#each sections as section}
                <span class="flex text-primary items-start font-semibold"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 mt-1.5 text-green-500 mr-2"
                    ><polyline points="20 6 9 17 4 12"></polyline></svg
                  >{section}</span
                >
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Separator />
    <div class="grid grid-cols-1 md:grid-cols-9 gap-6 py-4">
      <div class="col-span-3 lg:col-span-2">
        <h2 class="text-xl sm:text-3xl font-bold">How to use?</h2>
      </div>
      <div class="col-span-6">
        <p class="text-md sm:text-lg text-muted-foreground">
          To get started, simply click the "Get Access" button above to purchase
          the template. Once you've purchased the template, you'll receive an
          email with a link to the Github repository. You can then clone the
          repository and start customizing the template to fit your needs.
        </p>
      </div>
    </div>
    <Separator />
    <div class="grid grid-cols-1 md:grid-cols-9 gap-6 py-4">
      <div class="col-span-3 lg:col-span-2">
        <h2 class="text-xl sm:text-3xl font-bold">Tech Stack</h2>
      </div>
      <div class="col-span-6">
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-green-500"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >Sveltekit <span class="text-muted-foreground ml-2">v2</span>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-green-500"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >TailwindCSS <span class="text-muted-foreground ml-2">v4</span>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-green-500"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >Shadcn Svelte
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-green-500"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >Svelte Animations
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="pb-10">
    <div
      class="mx-auto bg-background max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-20"
    >
      <div class="text-center">
        <h2 class="text-balance text-4xl font-semibold lg:text-5xl">
          Startup Template
        </h2>
        <p class="mt-4 text-muted-foreground">
          The Ultimate Landing Page for your Startup.
        </p>

        <div class="mt-12 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            href="https://buy.polar.sh/polar_cl_AjEE4uRd34lOYFgOsLlGXCtyHfPqrwL6rXx5G3qPNAi"
            target="_blank">Buy Now</Button
          >
        </div>
      </div>
    </div>
  </section>
</div>
