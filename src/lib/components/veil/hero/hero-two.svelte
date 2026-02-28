<script lang="ts">
  import HeaderTwo from "$lib/components/veil/header/header-two.svelte";
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";
  import {
    Clerk,
    Claude,
    Figma,
    Firebase,
    Linear,
    Slack,
    Supabase,
    Twilio,
    Vercel,
  } from "$lib/svgs";
  import { ChevronRight } from "@lucide/svelte";
</script>

<HeaderTwo />
<main class="overflow-hidden">
  <section class="bg-background">
    <div class="relative pb-32 pt-44">
      <div
        class="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] md:aspect-9/4 absolute inset-0 aspect-square opacity-65 dark:opacity-5"
      >
        <img
          src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dt"
          alt="hero background"
          width="2102"
          height="1694"
          class="h-full w-full object-cover object-top"
        />
      </div>
      <div class="relative z-10 mx-auto w-full max-w-5xl px-6">
        <div class="mx-auto mb-16 max-w-xl lg:mb-24">
          <div class="**:fill-foreground grid scale-95 grid-cols-3 gap-12">
            <div class="ml-auto blur-[2px]">
              <Card class="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                <Supabase class="size-4" />
                <span class="text-nowrap font-medium max-sm:text-xs">Supabase</span>
              </Card>
            </div>
            <div class="ml-auto">
              <Card class="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                <Slack class="size-4" />
                <span class="text-nowrap font-medium max-sm:text-xs">Slack</span>
              </Card>
            </div>
            <div class="ml-auto blur-[2px]">
              <Card class="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                <Figma class="size-4" />
                <span class="text-nowrap font-medium max-sm:text-xs">Figma</span>
              </Card>
            </div>
            <div class="mr-auto">
              <Card class="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                <Vercel class="size-4" />
                <span class="text-nowrap font-medium max-sm:text-xs">Vercel</span>
              </Card>
            </div>
            <div class="blur-[2px]">
              <Card class="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                <Firebase class="size-3 sm:size-4" />
                <span class="text-nowrap font-medium max-sm:text-xs">Firebase</span>
              </Card>
            </div>
            <div>
              <Card class="shadow-foreground/10 mx-a flex h-10 h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                <Linear class="size-3 sm:size-4" />
                <span class="text-nowrap font-medium max-sm:text-xs">Linear</span>
              </Card>
            </div>
            <div class="ml-auto blur-[2px]">
              <Card class="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                <Twilio class="size-3 sm:size-4" />
                <span class="text-nowrap font-medium max-sm:text-xs">Twilio</span>
              </Card>
            </div>
            <div>
              <Card class="shadow-foreground/10 mx-a flex h-10 h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                <Claude class="size-3 sm:size-4" />
                <span class="text-nowrap font-medium max-sm:text-xs">Claude AI</span>
              </Card>
            </div>
            <div class="blur-[2px]">
              <Card class="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                <Clerk class="size-3 sm:size-4" />
                <span class="text-nowrap font-medium max-sm:text-xs">Clerk </span>
              </Card>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-md text-center">
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
