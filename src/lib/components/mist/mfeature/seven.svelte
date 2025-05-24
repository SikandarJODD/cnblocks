<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";

  import ArrowUp from "@lucide/svelte/icons/arrow-up";
  import Globe from "@lucide/svelte/icons/globe";
  import Plus from "@lucide/svelte/icons/plus";
  import Sparkles from "@lucide/svelte/icons/sparkles";
  import Play from "@lucide/svelte/icons/play";
  import Signature from "@lucide/svelte/icons/signature";
  import CalendarCheck from "@lucide/svelte/icons/calendar-check";
  import Target from "@lucide/svelte/icons/target";
  import Button from "$lib/components/ui/button/button.svelte";
  import Layout from "@lucide/svelte/icons/layout";

  const AIDEN_BLESER = "https://avatars.githubusercontent.com/u/117548273?v=4";
  const BHIDE_SVELTE = "https://avatars.githubusercontent.com/u/93428946?v=4";
  const RICH_HARRIS = "https://avatars.githubusercontent.com/u/1162160?v=4";
  const HUNTER_JOHNSTON =
    "https://avatars.githubusercontent.com/u/64506580?v=4";

  let avatars = [
    { src: BHIDE_SVELTE, alt: "Bhide Svelte" },
    { src: AIDEN_BLESER, alt: "Aiden Blesser" },
    { src: RICH_HARRIS, alt: "Rich Harris" },
    { src: HUNTER_JOHNSTON, alt: "Hunter Johnston" },
  ];
</script>

<section
  class="[--color-primary:theme(color.indigo.500)] [--color-secondary:theme(color.indigo.100)] [--color-secondary-foreground:theme(color.indigo.600)] dark:[--color-primary:theme(color.indigo.400)] dark:[--color-secondary:theme(color.indigo.400)] dark:[--color-secondary-foreground:theme(color.indigo.500)]"
>
  <div class="py-24">
    <div class="mx-auto w-full max-w-5xl px-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card variant="soft" class="col-span-full overflow-hidden pl-6 pt-6">
          <Layout class="text-primary size-5" />
          <h3 class="text-foreground mt-5 text-lg font-semibold">
            AI Code Generation
          </h3>
          <p class="text-muted-foreground mt-3 max-w-xl text-balance">
            Our advanced AI models transform natural language into
            production-ready code, streamlining development workflows and
            enabling faster iteration.
          </p>
          <div class="mask-b-from-95% -ml-2 -mt-2 mr-0.5 pl-2 pt-2">
            <div
              class="bg-background rounded-tl-(--radius) relative mx-auto mt-8 h-96 overflow-hidden border border-transparent shadow ring-1"
            >
              <img
                src="/mist/tailark-2.png"
                alt="app screen"
                width="2880"
                height="1842"
                class="object-top-left h-full object-cover"
              />
            </div>
          </div>
        </Card>
        <Card variant="soft" class="overflow-hidden p-6">
          <Target class="text-primary size-5" />
          <h3 class="text-foreground mt-5 text-lg font-semibold">
            AI Code Generation
          </h3>
          <p class="text-muted-foreground mt-3 text-balance">
            Our advanced AI models transform natural language into
            production-ready code.
          </p>

          {@render MettingIllustration()}
        </Card>

        <Card variant="soft" class="group overflow-hidden px-6 pt-6">
          <CalendarCheck class="text-primary size-5" />
          <h3 class="text-foreground mt-5 text-lg font-semibold">
            Intelligent Code Review
          </h3>
          <p class="text-muted-foreground mt-3 text-balance">
            Our AI analyzes your code for bugs, security issues, and
            optimization opportunities.
          </p>

          {@render CodeReviewIllustration()}
        </Card>
        <Card variant="soft" class="group overflow-hidden px-6 pt-6">
          <Sparkles class="text-primary size-5" />
          <h3 class="text-foreground mt-5 text-lg font-semibold">
            Contextual AI Assistant
          </h3>
          <p class="text-muted-foreground mt-3 text-balance">
            A personalized AI companion that understands your codebase and helps
            solve complex...
          </p>

          <div class="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2">
            {@render AIAssistantIllustration()}
          </div>
        </Card>
      </div>
    </div>
  </div>
</section>

{#snippet MettingIllustration()}
  <Card aria-hidden="true" class="mt-9 aspect-video p-4">
    <div class="relative hidden h-fit">
      <div
        class="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35"
      >
        PDF
      </div>
      <div
        class="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"
      ></div>
    </div>
    <div class="mb-0.5 text-sm font-semibold">AI Strategy Meeting</div>
    <div class="mb-4 flex gap-2 text-sm">
      <span class="text-muted-foreground">2:30 - 3:45 PM</span>
    </div>
    <div class="mb-2 flex -space-x-1.5">
      <div class="flex -space-x-1.5">
        {#each avatars as avatar, index}
          <div
            class="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5"
          >
            <img
              class="aspect-square rounded-full object-cover"
              src={avatar.src}
              alt={avatar.alt}
              height="460"
              width="460"
            />
          </div>
        {/each}
      </div>
    </div>
    <div class="text-muted-foreground text-sm font-medium">
      ML Pipeline Discussion
    </div>
  </Card>
{/snippet}
{#snippet CodeReviewIllustration()}
  <div aria-hidden="true" class="relative mt-6">
    <Card
      class="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3"
    >
      <div class="mb-3 flex items-center gap-2">
        <div
          class="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5"
        >
          <img
            class="aspect-square rounded-full object-cover"
            src={BHIDE_SVELTE}
            alt="Bhide Svelte"
            height="460"
            width="460"
          />
        </div>
        <span class="text-muted-foreground text-sm font-medium"
          >Bhide Svelte</span
        >

        <span class="text-muted-foreground/75 text-xs">2m</span>
      </div>

      <div class="ml-8 space-y-2">
        <div class="bg-foreground/10 h-2 rounded-full"></div>
        <div class="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
        <div class="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
      </div>

      <Signature class="ml-8 mt-3 size-5" />
    </Card>
    <Card
      class="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3"
    >
      <div class="bg-foreground/5 m-auto flex size-10 rounded-full">
        <Play class="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
      </div>
    </Card>
  </div>
{/snippet}
{#snippet AIAssistantIllustration()}
  <Card
    aria-hidden
    class="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0"
  >
    <div class="w-fit">
      <Sparkles class="size-3.5 fill-purple-300 stroke-purple-300" />
      <p class="mt-2 line-clamp-2 text-sm">
        How can I optimize my neural network to reduce inference time while
        maintaining accuracy?
      </p>
    </div>
    <div class="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
      <div class="text-muted-foreground text-sm">Ask AI Assistant</div>

      <div class="flex justify-between">
        <div class="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            class="size-7 rounded-2xl bg-transparent shadow-none"
          >
            <Plus />
          </Button>
          <Button
            variant="outline"
            size="icon"
            class="size-7 rounded-2xl bg-transparent shadow-none"
          >
            <Globe />
          </Button>
        </div>

        <Button size="icon" variant="mdefault" class="size-7 rounded-2xl">
          <ArrowUp strokeWidth={3} />
        </Button>
      </div>
    </div>
  </Card>
{/snippet}
