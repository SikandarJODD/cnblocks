<script lang="ts">
  import {
    ToggleGroup,
    ToggleGroupItem,
  } from "$lib/components/ui/toggle-group";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn } from "$lib/utils";

  import BoldIcon from "@lucide/svelte/icons/bold";
  import Calendar1 from "@lucide/svelte/icons/calendar-1";
  import Ellipsis from "@lucide/svelte/icons/ellipsis";
  import Italic from "@lucide/svelte/icons/italic";
  import Strikethrough from "@lucide/svelte/icons/strikethrough";
  import Underline from "@lucide/svelte/icons/underline";

  type IllustrationProps = {
    _class?: string;
    variant?: "elevated" | "outlined" | "mixed";
  };
</script>

<section
  class="[--color-primary:theme(color.indigo.500)] [--color-secondary:theme(color.indigo.100)] [--color-secondary-foreground:theme(color.indigo.600)]"
>
  <div class="bg-muted/50 py-24">
    <div class="mx-auto w-full max-w-5xl px-6">
      <div>
        <span class="text-primary">Smart Editor</span>
        <h2 class="text-foreground mt-4 text-4xl font-semibold">
          Ask Tailark to Edit anything
        </h2>
        <p class="text-muted-foreground mb-12 mt-4 text-lg">
          Efficient content creation is our mission. With Tailark, you can
          effortlessly edit text, generate code snippets, format documents,
          create visualizations from data, and seamlessly integrate with your
          existing workflow.
        </p>
      </div>

      <div
        class="border-foreground/5 space-y-6 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y"
      >
        <div class="grid sm:grid-cols-5">
          {@render CodeIllustration({
            _class: "sm:col-span-2",
          })}
          <div class="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
            <h3 class="text-foreground text-xl font-semibold">
              Marketing Campaigns
            </h3>
            <p class="text-muted-foreground mt-4 text-lg">
              We'll put together your schedule on automatically. You'll keep app
              deadlines, and will work on the highest priority items first.
            </p>
          </div>
        </div>
        <div class="grid sm:grid-cols-5">
          <div class="flex items-center justify-center pt-12 sm:col-span-2">
            {@render ScheduleIllustation({
              _class: "pt-8",
            })}
          </div>
          <div class="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12">
            <h3 class="text-foreground text-xl font-semibold">
              AI Meeting Scheduler
            </h3>
            <p class="text-muted-foreground mt-4 text-lg">
              Ask the chat to create or update your events. Ask it how much time
              you've spent on demo calls last week. Or have it prepare today's
              agendas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{#snippet ScheduleIllustation({
  _class = "",
  variant = "elevated",
}: IllustrationProps)}
  <div class={cn("relative", _class)}>
    <div
      class={cn(
        "bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1",
        {
          "shadow-black-950/10 shadow-lg": variant === "elevated",
          "border-foreground/10 border": variant === "outlined",
          "border-foreground/10 border shadow-md shadow-black/5":
            variant === "mixed",
        }
      )}
    >
      <Button size="sm" class="rounded-sm">
        <Calendar1 class="size-3" />
        <span class="text-sm font-medium">Schedule</span>
      </Button>
      <span class="bg-border block h-4 w-px"></span>
      <ToggleGroup type="multiple" size="sm" class="gap-0.5 *:rounded-md">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <BoldIcon class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Strikethrough class="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <span class="bg-border block h-4 w-px"></span>
      <Button size="icon" class="size-8" variant="ghost">
        <Ellipsis class="size-3" />
      </Button>
    </div>
    <span>
      <span class="bg-secondary text-secondary-foreground py-1 text-sm"
        >Tomorrow 8:30 pm</span
      > is our priority.
    </span>
  </div>
{/snippet}

{#snippet CodeIllustration({ _class = "" }: { _class?: string })}
  <div
    class={cn(
      "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]",
      _class
    )}
  >
    <ul
      class="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium"
    >
      {#each ["Images", "Variables", "Pages", "Components", "Styles"] as item, index}
        <li
          class={cn(
            index == 2 &&
              "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import']"
          )}
        >
          {item}
        </li>
      {/each}
    </ul>
  </div>
{/snippet}
