<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import CalendarCheck from "@lucide/svelte/icons/calendar-check";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
  import Target from "@lucide/svelte/icons/target";
</script>

<section
  class="[--color-primary:theme(color.indigo.500)] [--color-secondary:theme(color.indigo.100)] [--color-secondary-foreground:theme(color.indigo.600)] dark:[--color-primary:theme(color.indigo.400)] dark:[--color-secondary:theme(color.indigo.400)] dark:[--color-secondary-foreground:theme(color.indigo.500)]"
>
  <div class="bg-muted/50 py-24">
    <div class="mx-auto w-full max-w-5xl px-6">
      <div class="grid gap-12 md:grid-cols-5">
        <div class="md:col-span-2">
          <h2 class="text-foreground text-balance text-4xl font-semibold">
            The AI Coding Assistant that helps you write code faster
          </h2>
          <Button class="mt-8 pr-2" variant="outline" href="/">
            Learn more
            <ChevronRight class="size-4 opacity-50" />
          </Button>
        </div>

        <div class="space-y-6 md:col-span-3 md:space-y-10">
          <div>
            <div class="flex items-center gap-2">
              <Target class="size-5" />
              <h3 class="text-foreground text-lg font-semibold">
                Code Generation
              </h3>
            </div>
            <p class="text-muted-foreground mt-3 text-balance">
              Just describe the code you want to write and we'll generate it for
              you. From boilerplate code to complex business logic, we've got
              you covered.
            </p>
          </div>

          <div>
            <div class="flex items-center gap-2">
              <CalendarCheck class="size-5" />
              <h3 class="text-foreground text-lg font-semibold">Code Review</h3>
            </div>
            <p class="text-muted-foreground mt-3 text-balance">
              Get instant feedback on your code. Our AI will review your code
              and suggest improvements in terms of best practices and
              performance.
            </p>
          </div>
        </div>
      </div>

      <div class="relative -mx-12 mt-16 px-12">
        <div
          class="bg-background rounded-xl relative mx-auto overflow-hidden border border-foreground/20 shadow-lg shadow-black/10 ring-1"
        >
          <img
            src="/mist/tailark-2.png"
            alt="app screen"
            width="2880"
            height="1842"
          />
        </div>
      </div>
    </div>
  </div>
</section>
