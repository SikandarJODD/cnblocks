<script>
  import Button from "$lib/components/ui/button/button.svelte";

  // You can store Hero Header Component in seperate file
  // I have used snippet for better readability

  // Hero Header Component

  import Menu from "@lucide/svelte/icons/menu";
  import X from "@lucide/svelte/icons/x";
  import { scrollY } from "svelte/reactivity/window";

  let menuItems = [
    { name: "Features", href: "#a" },
    { name: "Solution", href: "#a" },
    { name: "Pricing", href: "#a" },
    { name: "About", href: "#a" },
  ];
  let menuState = $state(false);
  let isScrolled = $derived.by(() => {
    if (scrollY.current !== undefined && scrollY.current > 50) {
      return true;
    }
    return false;
  });
</script>

<div>
  <!-- Scroll below to see the snippet code  -->
  {@render header()}
  <main>
    <div
      aria-hidden
      class="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
    >
      <div
        class="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
      />
      <div
        class="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"
      />
      <div
        class="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
      />
    </div>

    <section class="overflow-hidden bg-white dark:bg-transparent">
      <div class="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
        <div class="relative z-10 mx-auto max-w-2xl text-center">
          <h1
            class="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl"
          >
            Modern Software testing reimagined
          </h1>
          <p class="mx-auto my-8 max-w-2xl text-xl">
            Officiis laudantium excepturi ducimus rerum dignissimos, and tempora
            nam vitae, excepturi ducimus iste provident dolores.
          </p>

          <Button href="#" size="lg">
            <span class="btn-label">Start Building</span>
          </Button>
        </div>
      </div>

      <div class="mx-auto -mt-16 max-w-7xl">
        <div class="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
          <div class="[transform:rotateX(20deg);]">
            <div class="lg:h-176 relative skew-x-[.36rad]">
              <div
                aria-hidden
                class="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32"
              />
              <div
                aria-hidden
                class="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent"
              />

              <div
                aria-hidden
                class="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
              />
              <div
                aria-hidden
                class="from-background z-11 absolute inset-0 bg-gradient-to-l"
              />
              <div
                aria-hidden
                class="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
              />
              <div
                aria-hidden
                class="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
              />

              <img
                class="rounded-(--radius) z-1 relative border dark:hidden"
                src="/card.png"
                alt="Tailark hero section"
                width={2880}
                height={2074}
              />
              <img
                class="rounded-(--radius) z-1 relative hidden border dark:block"
                src="/dark-card.webp"
                alt="Tailark hero section"
                width={2880}
                height={2074}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-background relative z-10 py-16">
      <div class="m-auto max-w-5xl px-6">
        <h2 class="text-center text-lg font-medium">
          Your favorite companies are our partners.
        </h2>
        <div
          class="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12"
        >
          <img
            class="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nvidia.svg"
            alt="Nvidia Logo"
            height="20"
            width="auto"
          />
          <img
            class="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/column.svg"
            alt="Column Logo"
            height="16"
            width="auto"
          />
          <img
            class="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/github.svg"
            alt="GitHub Logo"
            height="16"
            width="auto"
          />
          <img
            class="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nike.svg"
            alt="Nike Logo"
            height="20"
            width="auto"
          />
          <img
            class="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/laravel.svg"
            alt="Laravel Logo"
            height="16"
            width="auto"
          />
          <img
            class="h-7 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lilly.svg"
            alt="Lilly Logo"
            height="28"
            width="auto"
          />
          <img
            class="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
            alt="Lemon Squeezy Logo"
            height="20"
            width="auto"
          />
          <img
            class="h-6 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/openai.svg"
            alt="OpenAI Logo"
            height="24"
            width="auto"
          />
          <img
            class="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
            alt="Tailwind CSS Logo"
            height="16"
            width="auto"
          />
          <img
            class="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/vercel.svg"
            alt="Vercel Logo"
            height="20"
            width="auto"
          />
          <img
            class="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/zapier.svg"
            alt="Zapier Logo"
            height="20"
            width="auto"
          />
        </div>
      </div>
    </section>
  </main>
</div>

{#snippet header()}
  <header>
    <nav
      class="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
    >
      <div class="m-auto max-w-5xl px-6">
        <div
          class="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4"
        >
          <div class="flex w-full justify-between lg:w-auto">
            <a href="/" aria-label="home" class="flex items-center space-x-2">
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

            <button
              onclick={() => (menuState = !menuState)}
              aria-label={menuState == true ? "Close Menu" : "Open Menu"}
              class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu
                class={[
                  "m-auto size-6 duration-200",
                  menuState && "rotate-180 scale-0 opacity-0",
                ]}
              />
              <X
                class={[
                  "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                  menuState && "rotate-0 scale-100 opacity-100",
                ]}
              />
            </button>
          </div>

          <div
            class={[
              "bg-background  mb-6  w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
              menuState ? "block lg:flex" : "hidden",
            ]}
          >
            <div class="lg:pr-4">
              <ul
                class="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm"
              >
                {#each menuItems as item, index}
                  <li>
                    <a
                      href={item.href}
                      class="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                {/each}
              </ul>
            </div>

            <div
              class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6"
            >
              <Button variant="outline" size="sm">Sign Up</Button>
              <Button size="sm">Login</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
{/snippet}
