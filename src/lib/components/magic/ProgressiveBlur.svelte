<script lang="ts">
  import { cn } from "$lib/utils";

  export const GRADIENT_ANGLES = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270,
  };

  type ProgressiveBlurProps = {
    direction?: keyof typeof GRADIENT_ANGLES;
    blurLayers?: number;
    class?: string;
    blurIntensity?: number;
  };

  let {
    direction = "bottom",
    blurLayers = 8,
    class: _class = "",
    blurIntensity = 0.25,
  }: ProgressiveBlurProps = $props();

  let layers = $state(Math.max(blurLayers, 2));
  let segmentSize = 1 / (blurLayers + 1);
</script>

<div class={cn("relative", _class)}>
  {#each { length: layers } as _, index}
    {@const angle = GRADIENT_ANGLES[direction]}
    {@const gradientStops = [
      index * segmentSize,
      (index + 1) * segmentSize,
      (index + 2) * segmentSize,
      (index + 3) * segmentSize,
    ].map(
      (pos, posIndex) =>
        `rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`
    )}
    {@const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
      ", "
    )})`}

    <div
      class="pointer-events-none absolute inset-0 rounded-[inherit]"
      style="mask-image: {gradient};
  -webkit-mask-image: {gradient};
  backdrop-filter: blur({index * blurIntensity}px); z-index: {index * 10};"
    ></div>
  {/each}
</div>
