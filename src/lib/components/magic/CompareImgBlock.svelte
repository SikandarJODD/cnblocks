<script lang="ts">
  import { onMount } from "svelte";
  import { Spring } from "svelte/motion";

  interface Props {
    firstImage?: string;
    secondImage?: string;
    class?: string;
    firstImageClass?: string;
    secondImageClass?: string;
    initialSliderPercentage?: number;
    slideMode?: "hover" | "drag";
    showHandlebar?: boolean;
    autoplay?: boolean;
    autoplayDuration?: number;
  }

  let {
    firstImage = "/hero_dark.png",
    secondImage = "/hero_light.png",
    class:
      className = "w-[400px] h-[250px] w-[200px] sm:h-[450px] sm:w-full rounded-tl-(--radius)",
    firstImageClass = "object-cover object-bottom",
    secondImageClass = "object-cover object-bottom",
    initialSliderPercentage = 46,
    slideMode = "hover",
    showHandlebar = true,
    autoplay = false,
    autoplayDuration = 5000,
  }: Props = $props();

  let sliderXPercent = new Spring(initialSliderPercentage, { stiffness: 0.15 });
  let isDragging = false;
  let isMouseOver = false;
  let sliderRef: HTMLElement | null = $state(null);
  let autoplayTimeout = $state<ReturnType<typeof setTimeout> | null>(null);

  const startAutoplay = () => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress =
        (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      sliderXPercent.set(percentage);
      autoplayTimeout = setTimeout(animate, 16); // ~60fps
    };

    animate();
  };

  const stopAutoplay = () => {
    if (autoplayTimeout) {
      clearTimeout(autoplayTimeout);
      autoplayTimeout = null;
    }
  };

  onMount(() => {
    startAutoplay();
    return stopAutoplay;
  });

  function mouseEnterHandler() {
    isMouseOver = true;
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    isMouseOver = false;
    if (slideMode === "hover") {
      sliderXPercent.set(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      isDragging = false;
    }
    startAutoplay();
  }

  function handleStart(clientX: number) {
    if (slideMode === "drag") {
      isDragging = true;
    }
  }

  function handleEnd() {
    if (slideMode === "drag") {
      isDragging = false;
    }
  }

  function handleMove(clientX: number) {
    if (!sliderRef) return;

    if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
      const rect = sliderRef.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      sliderXPercent.set(Math.max(0, Math.min(100, percent)));
    }
  }

  function handleMouseDown(e: MouseEvent) {
    handleStart(e.clientX);
  }

  function handleMouseUp() {
    handleEnd();
  }

  function handleMouseMove(e: MouseEvent) {
    handleMove(e.clientX);
  }

  function handleTouchStart(e: TouchEvent) {
    if (!autoplay) {
      handleStart(e.touches[0].clientX);
    }
  }

  function handleTouchEnd() {
    if (!autoplay) {
      handleEnd();
    }
  }

  function handleTouchMove(e: TouchEvent) {
    if (!autoplay) {
      handleMove(e.touches[0].clientX);
    }
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  bind:this={sliderRef}
  class="w-[400px] h-[400px] overflow-hidden {className}"
  style="position: relative; cursor: {slideMode === 'drag'
    ? 'grab'
    : 'col-resize'};"
  onmousemove={handleMouseMove}
  onmouseleave={mouseLeaveHandler}
  onmouseenter={mouseEnterHandler}
  onmousedown={handleMouseDown}
  onmouseup={handleMouseUp}
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
  ontouchmove={handleTouchMove}
>
  <div
    class="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
    style="left: {sliderXPercent.current}%; top: 0; z-index: 40;"
  >
    {#if showHandlebar}
      <div
        class="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 text-black"
          ><circle cx="12" cy="12" r="1" /><circle
            cx="12"
            cy="5"
            r="1"
          /><circle cx="12" cy="19" r="1" /></svg
        >
      </div>
    {/if}
  </div>

  <div class="overflow-hidden w-full h-full  relative z-20 pointer-events-none">
    {#if firstImage}
      <div
        class="absolute inset-0 z-20 rounded-tl-2xl  flex-shrink-0 w-full h-full select-none overflow-hidden {firstImageClass}"
        style="clip-path: inset(0 {100 - sliderXPercent.current}% 0 0);"
      >
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img
          alt="first image"
          src={firstImage}
          class={[
            "absolute inset-0 z-20 dark:bg-black  flex-shrink-0 w-full h-full select-none",
            firstImageClass,
          ]}
          draggable="false"
        />
      </div>
    {/if}
  </div>

  {#if secondImage}
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img
      class={[
        "absolute top-0 left-0 z-[19] w-full rounded-tl-3xl h-full select-none",
        secondImageClass,
      ]}
      alt="second image"
      src={secondImage}
      draggable="false"
    />
  {/if}
</div>
