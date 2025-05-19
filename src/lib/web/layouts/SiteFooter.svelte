<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
  import Logo from "./Logo.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<footer class="py-16">
  <div class="mx-auto max-w-7xl px-10 lg:px-6">
    <a href="/" aria-label="home" class="-m-2 inline-block p-2 duration-200">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          role="img"
          color="currentColor"
        >
          <path
            d="M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            opacity="0.4"
            d="M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
        </svg>
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
