<script lang="ts">
  // Scroll below for the component code
  import IntegrationCardv5 from "./card/integration-cardv5.svelte";
  import {
    Gemini,
    GooglePaLM,
    MagicUI,
    VSCodium,
    Replit,
    MediaWiki,
  } from "../logos/logos";

  import Button from "$lib/components/ui/button/button.svelte";
</script>

<section>
  <div class="py-24 md:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <div
        class="aspect-16/10 group relative mx-auto flex max-w-[22rem] items-center justify-between sm:max-w-sm"
      >
        <div
          role="presentation"
          class="bg-linear-to-b border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin items-center justify-center rounded-full border-t from-lime-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100 dark:from-white/5"
        ></div>
        <div
          role="presentation"
          class="bg-linear-to-b border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t from-blue-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
        ></div>
        <div
          class="bg-linear-to-b from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25%"
        >
          <IntegrationCardv5
            class="-translate-x-1/6 absolute left-0 top-1/4 -translate-y-1/4"
          >
            <Gemini />
          </IntegrationCardv5>
          <IntegrationCardv5 class="absolute top-0 -translate-y-1/2">
            <Replit />
          </IntegrationCardv5>
          <IntegrationCardv5
            class="translate-x-1/6 absolute right-0 top-1/4 -translate-y-1/4"
          >
            <MagicUI />
          </IntegrationCardv5>
        </div>
        <div
          class="bg-linear-to-b from-muted-foreground/15 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t to-transparent to-25%"
        >
          <IntegrationCardv5 class="absolute top-0 -translate-y-1/2">
            <VSCodium />
          </IntegrationCardv5>
          <IntegrationCardv5
            class="absolute left-0 top-1/4 -translate-x-1/4 -translate-y-1/4"
          >
            <MediaWiki />
          </IntegrationCardv5>
          <IntegrationCardv5
            class="absolute right-0 top-1/4 -translate-y-1/4 translate-x-1/4"
          >
            <GooglePaLM />
          </IntegrationCardv5>
        </div>
        <div
          class="absolute inset-x-0 bottom-0 mx-auto my-2 flex w-fit justify-center gap-2"
        >
          <div class="bg-muted relative z-20 rounded-full border p-1">
            <IntegrationCardv5
              class="shadow-black-950/10 dark:bg-background size-16 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15"
              isCenter={true}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                class="text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                color="currentColor"
              >
                <path
                  d="M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
                <path
                  opacity="0.4"
                  d="M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
              </svg>
            </IntegrationCardv5>
          </div>
        </div>
      </div>
      <div
        class="bg-linear-to-t from-background relative z-20 mx-auto mt-12 max-w-lg space-y-6 from-55% text-center"
      >
        <h2 class="text-balance text-3xl font-semibold md:text-4xl">
          Integrate with your favorite tools
        </h2>
        <p class="text-muted-foreground">
          Connect seamlessly with popular platforms and services to enhance your
          workflow.
        </p>

        <Button variant="outline" size="sm">Get started</Button>
      </div>
    </div>
  </div>
</section>

<!-- Integration Card V5 Component Code  -->

<!-- <script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  let {
    children,
    class: _class = "",
    isCenter = false,
  }: {
    children: Snippet;
    class?: string;
    isCenter?: boolean;
  } = $props();
</script>

<div
  class={cn(
    "relative z-30 flex size-12 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md",
    _class
  )}
>
  <div class={cn("m-auto size-fit *:size-5", isCenter && "*:size-8")}>
    {@render children()}
  </div>
</div>
 -->
