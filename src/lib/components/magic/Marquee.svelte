<script lang="ts">
  import { cn } from "$lib/utils";
  export let pauseOnHover: boolean = false;
  export let vertical: boolean = false;
  export let repeat: number = 4;
  export let reverse: boolean = false;

  let className: any = "";
  export { className as class };
</script>

<div
  class={cn(
    "group flex overflow-hidden p-2 [--duration:16s] [--gap:3rem] [gap:var(--gap)]",
    {
      "flex-row": !vertical,
      "flex-col": vertical,
    },
    className
  )}
>
  {#each { length: repeat } as _, i (i)}
    <div
      class={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
        "animate-marquee flex-row": !vertical,
        "animate-marquee-vertical flex-col": vertical,
        "group-hover:[animation-play-state:paused]": pauseOnHover,
        "[animation-direction:reverse]": reverse,
      })}
    >
      <slot>Default</slot>
    </div>
  {/each}
</div>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes marquee-vertical {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  .animate-marquee {
    animation: marquee var(--duration) linear infinite;
  }

  .animate-marquee-vertical {
    animation: marquee-vertical var(--duration) linear infinite;
  }
</style>
