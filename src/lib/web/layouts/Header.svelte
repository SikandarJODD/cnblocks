<script lang="ts">
  import { slide } from "svelte/transition";
  import Button from "$lib/components/ui/button/button.svelte";

  let navs = [
    { name: "Home", url: "/" },
    { name: "Blocks", url: "/stats" },
    { name: "Templates", url: "/templates" },
  ];
  let isActive = $derived.by(() => {
    let url = page.url.pathname.split("/")[1];
    let index = navs.findIndex((nav) => nav.url === `/${url}`);
    return index;
  });

  // Mobile and user profile state
  let isMobileMenu = $state(false);
  // Dark & Light Mode
  import { toggleMode, mode } from "mode-watcher";
  import Logo from "./Logo.svelte";
  import { page } from "$app/state";
  import SearchComponent from "./SearchComponent.svelte";
</script>

<nav class="bg-background border-b">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center">
        <a href="/" aria-label="home" class="shrink-0">
          <Logo />
        </a>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-0.5">
            {#each navs as nav, index}
              <Button
                class="rounded-full font-normal"
                variant={index === isActive ? "secondary" : "ghost"}
                href={nav.url}>{nav.name}</Button
              >
            {/each}
          </div>
        </div>
      </div>
      <div class="hidden sm:block">
        {@render socials()}
      </div>
      <div class="-mr-2 flex sm:hidden">
        <!-- Mobile menu button -->
        <Button
          onclick={() => (isMobileMenu = !isMobileMenu)}
          size="icon"
          variant="secondary"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Mobile Menu  -->
          <svg
            class="{isMobileMenu ? 'hidden' : 'block'} size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <!-- Menu Open : Cross -->
          <svg
            class="{isMobileMenu ? 'block' : 'hidden'} size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if isMobileMenu}
    <div transition:slide class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        {#each navs as nav}
          <a
            aria-label={nav.name}
            onclick={() => (isMobileMenu = false)}
            href={nav.url}
            class="block rounded-md px-3 py-2 text-base font-medium text-primary"
            >{nav.name}</a
          >
        {/each}
      </div>
      <div class="flex justify-end pb-2 pr-4">
        {@render socials()}
      </div>
    </div>
  {/if}
</nav>

{#snippet themeToggle()}
  <Button onclick={toggleMode} class="rounded-full" variant="ghost" size="icon">
    <!-- Sun Icon -->
    {#if $mode === "light"}
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
{/snippet}

{#snippet socials()}
  <div class="flex items-center space-x-1">
    <div class="hidden md:block">
      <SearchComponent />
    </div>
    <!-- Sponsor Button -->
    <!-- <Button
      aria-label="sponsor"
      class="rounded-full"
      variant="default"
      href="https://github.com/sponsors/SikandarJODD"
      target="_blank">Sponsor</Button
    > -->
    <!-- Gihub -->
    <Button
      aria-label="github"
      class="rounded-full"
      href="https://github.com/SikandarJODD/cnblocks"
      target="_blank"
      size="icon"
      variant="ghost"
      ><svg
        viewBox="0 0 256 250"
        width="256"
        height="250"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
        />
      </svg></Button
    >
    <!-- Twitter  -->
    <Button
      class="rounded-full"
      href="https://x.com/Sikandar_Bhide"
      target="_blank"
      size="icon"
      variant="ghost"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1200"
        height="1227"
        fill="currentColor"
        viewBox="0 0 1200 1227"
        ><path
          d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
        /></svg
      ></Button
    >
    {@render themeToggle()}
  </div>
{/snippet}
