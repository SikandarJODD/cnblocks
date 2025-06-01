<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";

  import Layout from "@lucide/svelte/icons/layout";
  import Target from "@lucide/svelte/icons/target";
  import CalendarCheck from "@lucide/svelte/icons/calendar-check";
  import Sparkles from "@lucide/svelte/icons/sparkles";
  import CompareImgBlock from "$lib/components/magic/CompareImgBlock.svelte";
</script>

<section
  class="[--color-primary:theme(color.indigo.500)] [--color-secondary:theme(color.indigo.100)] [--color-secondary-foreground:theme(color.indigo.600)]
  dark:[--color-primary:theme(color.indigo.400)] dark:[--color-secondary:theme(color.indigo.950)] dark:[--color-secondary-foreground:theme(color.indigo.200)]"
>
  <div class="py-24">
    <div class="mx-auto w-full max-w-5xl px-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card variant="soft" class="col-span-full overflow-hidden pl-6 pt-6 dark:bg-muted/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="text-primary size-6"
            ><g fill="none"
              ><path
                fill="currentColor"
                d="M2.75 12A9.25 9.25 0 0 0 12 21.25V2.75A9.25 9.25 0 0 0 2.75 12"
              /><path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 21.25a9.25 9.25 0 0 0 0-18.5m0 18.5a9.25 9.25 0 0 1 0-18.5m0 18.5V2.75"
              /></g
            ></svg
          >
          <h3 class="text-foreground mt-4 text-lg font-semibold">
            Light and Dark Mode
          </h3>
          <p class="text-muted-foreground mt-3 max-w-2xl text-base/normal">
            All Components are designed to work seamlessly in both light and
            dark mode.
          </p>
          <div class="-ml-2 -mt-2.5 mr-0.5 pl-2 pt-2">
            <div
              class="rounded-tl-3xl relative mx-auto mt-8 h-96 overflow-hidden"
            >
              <!-- <img
                src="/mist/tailark-3.png"
                alt="app screen"
                width="2880"
                height="1842"
                class="object-top-left h-full object-cover"
              /> -->
              <CompareImgBlock />
            </div>
          </div>
        </Card>
        <Card variant="soft" class="p-6 dark:bg-muted/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary size-6"
            viewBox="0 0 24 24"
            ><g fill="none"
              ><circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="1.5"
              /><path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
              /><path
                fill="currentColor"
                d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"
              /><ellipse
                cx="9"
                cy="10.5"
                fill="currentColor"
                rx="1"
                ry="1.5"
              /></g
            ></svg
          >
          <h3 class="text-foreground mt-4 text-lg font-semibold">
            Free & Open Source
          </h3>
          <p class="text-muted-foreground mt-3 text-base/normal">
            100+ Free, customizable components under the MIT License.
          </p>
        </Card>

        <Card variant="soft" class="p-6 dark:bg-muted/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary size-6"
            viewBox="0 0 24 24"
            ><g fill="none" stroke="currentColor" stroke-width="1.5"
              ><path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"
              /><path
                stroke-linecap="round"
                d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"
              /></g
            ></svg
          >
          <h3 class="text-foreground mt-4 text-lg font-semibold">
            CLI Integration
          </h3>
          <p class="text-muted-foreground mt-3 text-base/normal">
            Easily integrate using jsrepo CLI for quick setup.
          </p>
        </Card>
        <Card variant="soft" class="p-6 dark:bg-muted/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            class="text-primary size-6"
            viewBox="0 0 24 24"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 10v10M20.5 9.5h-17M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"
            /></svg
          >
          <h3 class="text-foreground mt-4 text-lg font-semibold">
            MCP Server Integration
          </h3>
          <p class="text-muted-foreground mt-3 text-base/normal">
            Seamlessly integrate with Cursor and Windsurf via MCP Server.
          </p>
        </Card>
      </div>
    </div>
  </div>
</section>
