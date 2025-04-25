<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { mode, toggleMode } from "mode-watcher";

</script>

<Button onclick={toggleMode} class="rounded-full" variant="ghost" size="icon">
  <!-- Sun Icon -->
  {#if mode.current === "light"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-[1.2rem] w-[1.2rem]"
      ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path
        d="M12 20v2"
      /><path d="m4.93 4.93 1.41 1.41" /><path
        d="m17.66 17.66 1.41 1.41"
      /><path d="M2 12h2" /><path d="M20 12h2" /><path
        d="m6.34 17.66-1.41 1.41"
      /><path d="m19.07 4.93-1.41 1.41" /></svg
    >
  {:else}
    <!-- Moon Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-[1.2rem] w-[1.2rem]"
      ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
    >
  {/if}
  <span class="sr-only">Toggle theme</span>
</Button>
