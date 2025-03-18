<script lang="ts">
  import type { ButtonProps } from "./button.svelte";

  let {
    class: className,
    variant = "default",
    size = "default",
    ref = $bindable(null),
    href = undefined,
    type = "button",
    children,
    ...restProps
  }: ButtonProps = $props();
</script>

{#if href}
  <a
    {href}
    class="group relative grid overflow-hidden rounded-md px-4 py-2 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
  >
    <span>
      <span
        class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] dark:before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]
        before:bg-[conic-gradient(from_0deg,transparent_0_330deg,blue_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
        >,</span
      >
    </span>
    <span
      class="backdrop absolute inset-[0.9px] rounded-md bg-secondary dark:bg-neutral-900 transition-colors duration-200 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-900"
    ></span>
    <span class="z-10 text-primary text-sm font-medium">
      {@render children?.()}
    </span>
  </a>
{:else}
  <button
    class="group relative grid overflow-hidden rounded-md px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
  >
    <span>
      <span
        class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
      ></span>
    </span>
    <span
      class="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900"
    ></span>
    <span class="z-10 text-neutral-400 text-sm font-medium">
      {@render children?.()}
    </span>
  </button>
{/if}
