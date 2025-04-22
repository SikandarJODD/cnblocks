<script>
  import Button from "$lib/components/ui/button/button.svelte";

  // You can store Hero Header Component in seperate file
  // I have used snippet for better readability

  // Hero Header Component
  import Logo from "$lib/components/web/Logo.svelte";
  import Menu from "@lucide/svelte/icons/menu";
  import X from "@lucide/svelte/icons/x";
  import ArrowRight from "@lucide/svelte/icons/arrow-right";
  import { scrollY } from "svelte/reactivity/window";
  import Mail from "@lucide/svelte/icons/mail";
  import SendHorizonal from "@lucide/svelte/icons/send-horizontal";

  let menuItems = [
    { name: "Features", href: "#a" },
    { name: "Solution", href: "#a" },
    { name: "Pricing", href: "#a" },
    { name: "About", href: "#a" },
  ];
  let menuState = $state(false);
</script>

<div>
  {@render header()}
  <main>
    <section class="overflow-hidden">
      <div class="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
        <div class="lg:flex lg:items-center lg:gap-12">
          <div
            class="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left"
          >
            <a
              href="/"
              class="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0"
            >
              <span
                class="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs"
                >New</span
              >
              <span class="text-sm">Introduction Tailark Html</span>
              <span class="bg-(--color-border) block h-4 w-px"></span>

              <ArrowRight class="size-4" />
            </a>

            <h1
              class="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl"
            >
              Production Ready Digital Marketing blocks
            </h1>
            <p class="mt-8">
              Error totam sit illum. Voluptas doloribus asperiores quaerat
              aperiam. Quidem harum omnis beatae ipsum soluta!
            </p>

            <div>
              <form
                action=""
                class="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto"
              >
                <div
                  class="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2"
                >
                  <Mail
                    class="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5"
                  />

                  <input
                    placeholder="Your mail address"
                    class="h-14 w-full bg-transparent pl-12 focus:outline-none"
                    type="email"
                  />

                  <div class="md:pr-1.5 lg:pr-0">
                    <Button aria-label="submit" class="rounded-(--radius)">
                      <span class="hidden md:block">Get Started</span>
                      <SendHorizonal
                        class="relative mx-auto size-5 md:hidden"
                        strokeWidth={2}
                      />
                    </Button>
                  </div>
                </div>
              </form>

              <ul class="list-inside list-disc space-y-2">
                <li>Faster</li>
                <li>Modern</li>
                <li>100% Customizable</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
          <div class="relative">
            <div
              class="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-40%"
            ></div>
            <img
              class="hidden dark:block"
              src="/music.png"
              alt="app illustration"
              width={2796}
              height={2008}
            />
            <img
              class="dark:hidden"
              src="/music-light.png"
              alt="app illustration"
              width={2796}
              height={2008}
            />
          </div>
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
              <Logo />
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
