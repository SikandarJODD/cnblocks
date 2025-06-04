<script lang="ts">
  import { cn } from "$lib/utils";
  import { type Icon } from "@lucide/svelte";
  import Calendar from "@lucide/svelte/icons/calendar";
  import MapIcon from "@lucide/svelte/icons/map";

  import FeatureCard from "$lib/components/blocks/feature/feature-card.svelte";
  import * as Card from "$lib/components/ui/card/index.js";

  interface CircleConfig {
    pattern: "none" | "border" | "primary" | "blue";
  }

  interface CircularUIProps {
    label: string;
    circles: CircleConfig[];
    _class?: string;
  }

  interface DualModeImageProps {
    darkSrc: string;
    lightSrc: string;
    alt: string;
    width: number;
    height: number;
    _class?: string;
  }

  interface CardHeadingProps {
    icon: typeof Icon;
    title: string;
    description: string;
  }
</script>

<section class="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-5xl">
    <div class="mx-auto grid gap-4 lg:grid-cols-2">
      <FeatureCard class="relative">
        <Card.Header class="pb-3">
          {@render cardHeading({
            icon: MapIcon,
            title: "Real time location tracking",
            description:
              "Advanced tracking system, Instantly locate all your assets.",
          })}
        </Card.Header>

        <div class="mb-6 border-t border-dashed sm:mb-0">
          <div
            class="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"
          ></div>
          <div class="aspect-76/59 p-1 px-6">
            {@render dualModeImg({
              darkSrc: "/payments.png",
              lightSrc: "/payments-light.png",
              alt: "payments illustration",
              width: 1207,
              height: 929,
            })}
          </div>
        </div>
      </FeatureCard>

      <FeatureCard>
        <Card.Header class="pb-3">
          {@render cardHeading({
            icon: Calendar,
            title: "Advanced Scheduling",
            description: "Scheduling system, Instantly locate all your assets.",
          })}
        </Card.Header>

        <Card.Content>
          <div class="relative mb-6 sm:mb-0 overflow-hidden">
            <div
              class="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,var(--color-background)_100%)]"
            ></div>
            <div class="aspect-76/59 border">
              {@render dualModeImg({
                darkSrc: "/origin-cal-dark.png",
                lightSrc: "/origin-cal.png",
                alt: "calendar illustration",
                width: 1207,
                height: 929,
              })}
            </div>
          </div>
        </Card.Content>
      </FeatureCard>

      <FeatureCard class="p-6 lg:col-span-2">
        <p
          class="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold"
        >
          Smart scheduling with automated reminders for maintenance.
        </p>

        <div class="flex justify-center gap-6 overflow-hidden">
          {@render circularUI({
            label: "Union",
            circles: [{ pattern: "border" }, { pattern: "border" }],
            _class: "",
          })}
          {@render circularUI({
            label: "Inclusion",
            circles: [{ pattern: "none" }, { pattern: "primary" }],
            _class: "",
          })}
          {@render circularUI({
            label: "Join",
            circles: [{ pattern: "blue" }, { pattern: "none" }],
            _class: "",
          })}
          {@render circularUI({
            label: "Exclusion",
            circles: [{ pattern: "primary" }, { pattern: "none" }],
            _class: "hidden sm:block",
          })}
        </div>
      </FeatureCard>
    </div>
  </div>
</section>

{#snippet cardHeading({ icon: Icon, title, description }: CardHeadingProps)}
  <div class="p-6">
    <span class="text-muted-foreground flex items-center gap-2">
      <Icon class="size-4" />
      {title}
    </span>
    <p class="mt-8 text-2xl font-semibold">{description}</p>
  </div>
{/snippet}

{#snippet dualModeImg({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  _class,
}: DualModeImageProps)}
  <img
    src={darkSrc}
    class={cn("hidden dark:block", _class)}
    alt={`${alt} dark`}
    {width}
    {height}
  />
  <img
    src={lightSrc}
    class={cn("shadow dark:hidden", _class)}
    alt={`${alt} light`}
    {width}
    {height}
  />
{/snippet}

{#snippet circularUI({ label, circles, _class }: CircularUIProps)}
  <div class={_class}>
    <div
      class="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px"
    >
      <div
        class="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4"
      >
        {#each circles as circle, i}
          <div
            class={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-primary bg-background bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,var(--color-blue-500),var(--color-blue-500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          ></div>
        {/each}
      </div>
    </div>
    <span class="text-muted-foreground mt-1.5 block text-center text-sm"
      >{label}</span
    >
  </div>
{/snippet}
