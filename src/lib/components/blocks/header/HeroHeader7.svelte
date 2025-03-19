<script>
  import Logo from "$lib/components/web/Logo.svelte";
  import { cn } from "$lib/utils";
  import { Menu, X } from "@lucide/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
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
