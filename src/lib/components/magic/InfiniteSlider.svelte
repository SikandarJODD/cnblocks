<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  type InfiniteSliderProps = {
    children: Snippet;
    gap?: number;
    speed?: number;
    speedOnHover?: number;
    direction?: "horizontal" | "vertical";
    reverse?: boolean;
    class?: string;
  };

  let {
    children,
    gap = 0,
    speed = 40,
    speedOnHover = 20,
    direction = "horizontal",
    reverse = false,
    class: _class = "",
  }: InfiniteSliderProps = $props();

  let currentSpeed = $state(speed);
  let isTransitioning = $state(false);
  let ref = $state(null);
</script>
