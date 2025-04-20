<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
  import Logo from "./Logo.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<footer class="pb-16">
  <div class="mx-auto max-w-7xl px-10 lg:px-6">
    <a href="/" aria-label="home" class="-m-2 inline-block p-2 duration-200">
      <Logo />
    </a>
    <div
      class="mt-2 flex flex-wrap gap-1 overflow-hidden text-sm font-medium text-muted-foreground"
    >
      Created by
      <a href="https://x.com/MeschacIrung" class="text-primary" target="_blank"
        >Méschac Irung</a
      >Ported by
      <div
        class="flex items-start justify-center gap-2 text-center font-semibold text-gray-950 sm:gap-1 dark:text-white"
      >
        <div class="block">
          <a
            class="block pb-2"
            href="https://x.com/Sikandar_Bhide"
            target="_blank">Bhide Svelte</a
          >
          <div class="-mt-5 grow overflow-hidden">
            <svg
              aria-hidden="true"
              class="w-16"
              height="22"
              viewBox="0 0 283 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332"
                stroke="url(#paint0_linear_pl)"
                stroke-width="4"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_pl"
                  x1="282"
                  y1="5.49999"
                  x2="40"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#facc15"></stop>
                  <stop offset="1" stop-color="#a855f7"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <Button
        href="https://github.com/sikandarjodd/cnblocks"
        target="_blank"
        variant="link"
        class="text-sm text-foreground decoration-primary -ml-4 gap-1"
      >
        GitHub
        <ArrowUpRight class="!size-3.5 opacity-50" />
      </Button>
      <ThemeToggle />
    </div>
  </div>
</footer>
