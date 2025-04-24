<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import ArrowRight from "@lucide/svelte/icons/arrow-right";
</script>

<div>
  <main class="overflow-hidden">
    <div
      class="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
    >
      <div
        class="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
      ></div>
      <div
        class="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"
      ></div>
      <div
        class="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
      ></div>
    </div>
    <section>
      <div class="relative pt-12 md:pt-16">
        <div
          class="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
        ></div>
        <div class="mx-auto max-w-7xl px-6">
          <div class="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <div>
              <a
                href="/changelog"
                class="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-2 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span class="text-foreground text-sm flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    fill-opacity="0.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    role="img"
                    color="currentColor"
                    stroke-opacity="0.9"
                  >
                    <path
                      d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  Introducing 20 New Blocks
                </span>
                <div
                  class="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500"
                >
                  <div class="flex size-6">
                    <ArrowRight class="m-auto size-3" />
                  </div>
                </div>
              </a>
            </div>

            <h1
              class="mt-8 text-balance font-medium bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-600 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-600 bg-clip-text text-transparent pb-2 font-display text-3xl md:text-4xl lg:mt-16 xl:text-6xl"
            >
              Svelte Shadcn Blocks <br />
              50+ UI & Marketing Blocks
            </h1>
            <p
              class="mx-auto mt-8 max-w-3xl text-balance text-lg font-display text-muted-foreground"
            >
              Speed up your workflow with responsive,<br /> Pre-built UI blocks designed
              for marketing websites.
            </p>

            <div
              class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <div
                class="bg-foreground/10 border p-0.5"
                style="border-radius: calc(0.5rem + 0.125rem + 4px);"
              >
                <Button
                  href="/hero"
                  size="lg"
                  class="rounded-xl px-5 text-base"
                >
                  <span class="text-nowrap">Explore Blocks</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-background pb-16 pt-0 md:pb-10">
      <div class="relative m-auto max-w-5xl px-6">
        <div class="mx-auto mt-12 max-w-2xl flex justify-center gap-6">
          <div class="flex">
            <svg
              viewBox="0 0 256 308"
              class="mx-auto h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              ><path
                d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
                fill="#FF3E00"
              /><path
                d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
                fill="#FFF"
              /></svg
            >
          </div>
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 54 33"
              class="mx-auto h-10 w-10"
              ><g clip-path="url(#a)"
                ><path
                  fill="#38bdf8"
                  fill-rule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clip-rule="evenodd"
                /></g
              ><defs
                ><clipPath id="a"
                  ><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath
                ></defs
              ></svg
            >
          </div>
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              class="mx-autp h-10 w-10"
              ><path fill="none" d="M0 0h256v256H0z" /><path
                fill="none"
                class="stroke-[#EB4F27]"
                stroke-width="25"
                stroke-linecap="round"
                d="M208 128l-80 80M192 40L40 192"
              /></svg
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
