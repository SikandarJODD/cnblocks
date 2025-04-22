<script>
  import Button from "$lib/components/ui/button/button.svelte";
  // Hero Header Component
  import Logo from "$lib/components/web/Logo.svelte";
  import { cn } from "$lib/utils";
  import Menu from "@lucide/svelte/icons/menu";
  import X from "@lucide/svelte/icons/x";
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
  let isScrolled = $derived.by(() => {
    if (scrollY.current !== undefined && scrollY.current > 50) {
      return true;
    }
    return false;
  });
</script>

<div>
  <!-- Scroll below to see the snippet code  -->
  {@render heroheader()}
  <main class="overflow-hidden">
    <div
      aria-hidden
      class="absolute inset-0 isolate z-10 hidden opacity-65 contain-strict lg:block"
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
    <section>
      <div class="relative mx-auto max-w-6xl px-6 pt-32 lg:pb-16 lg:pt-48">
        <div class="relative z-10 mx-auto max-w-4xl text-center">
          <h1 class="text-balance text-4xl font-medium sm:text-5xl md:text-6xl">
            Your gateway to endless entertainment experiences
          </h1>
          <p class="mx-auto mt-12 max-w-2xl text-pretty text-lg">
            Tailwindcss highly customizable components for building modern
            websites and applications that look and feel the way you mean it.
          </p>

          <div class="mt-12">
            <form action="" class="mx-auto max-w-sm">
              <div
                class="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2"
              >
                <Mail
                  class="pointer-events-none absolute inset-y-0 left-4 my-auto size-4"
                />

                <input
                  placeholder="Your mail address"
                  class="h-12 w-full bg-transparent pl-12 focus:outline-none"
                  type="email"
                />

                <div class="md:pr-1.5 lg:pr-0">
                  <Button
                    aria-label="submit"
                    size="sm"
                    class="rounded-(--radius)"
                  >
                    <span class="hidden md:block">Get Started</span>
                    <SendHorizonal
                      class="relative mx-auto size-5 md:hidden"
                      strokeWidth={2}
                    />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="mx-auto md:-mt-20 lg:-mt-40">
          <div>
            <div class="-rotate-30 aspect-3/2 relative mx-auto lg:w-2/3">
              <div
                class="bg-linear-to-b to-background from-background absolute inset-0 via-transparent"
              ></div>
              <div
                class="bg-linear-to-l to-background from-background absolute inset-0 via-transparent"
              ></div>
              <img
                src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605545/phone-backgroudn_xqgg5g.jpg"
                alt="Phone Background"
                width="6240"
                height="4160"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Logo />
  </main>
</div>

{#snippet heroheader()}
  <header>
    <nav class="fixed z-20 w-full px-2">
      <div
        class={[
          "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 rounded-2xl",
          isScrolled &&
            "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5",
        ]}
      >
        <div
          class="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4"
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

          <div class="absolute inset-0 m-auto hidden size-fit lg:block">
            <ul class="flex gap-8 text-sm">
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
            class={[
              "bg-background mb-6  w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
              menuState ? "block lg:flex" : "hidden lg:flex",
            ]}
          >
            <div class="lg:hidden">
              <ul class="space-y-6 text-base">
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
              class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit"
            >
              <Button
                variant="outline"
                size="sm"
                class={cn(isScrolled && "lg:hidden")}
                href="#"
              >
                Login
              </Button>
              <Button href="#" size="sm" class={cn(isScrolled && "lg:hidden")}>
                Sign Up
              </Button>
              <Button
                size="sm"
                href="#"
                class={cn(isScrolled ? "lg:inline-flex" : "hidden")}
              >
                Get Strated
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
{/snippet}
