<script lang="ts">
  import Logo from "$lib/components/web/Logo.svelte";
  import { cn } from "$lib/utils";
  import Menu from "@lucide/svelte/icons/menu";
  import X from "@lucide/svelte/icons/x";
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

<header class="[--color-primary:var(--color-indigo-500)]">
  <nav
    data-state={menuState && "active"}
    class={cn(
      "fixed z-20 w-full transition-all duration-300",
      isScrolled && "bg-background/75 border-b border-black/5 backdrop-blur-lg"
    )}
  >
    <div class="mx-auto max-w-5xl px-6">
      <div
        class="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0"
      >
        <div class="flex w-full justify-between gap-6 lg:w-auto">
          <a href="/" aria-label="home" class="flex items-center space-x-2">
            <Logo />
          </a>

          <button
            onclick={() => (menuState = !menuState)}
            aria-label={menuState == true ? "Close Menu" : "Open Menu"}
            class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
          >
            <Menu
              class="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200"
            />
            <X
              class="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200"
            />
          </button>

          <div class="m-auto hidden size-fit lg:block">
            <ul class="flex gap-1">
              {#each menuItems as item, index}
                <li>
                  <Button variant="ghost" size="sm">
                    <a href={item.href} class="text-base">
                      <span>{item.name}</span>
                    </a>
                  </Button>
                </li>
              {/each}
            </ul>
          </div>
        </div>

        <div
          class="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent"
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
              variant="ghost"
              size="sm"
              class={cn(isScrolled && "lg:hidden")}
              href="#"
            >
              <span>Login</span>
            </Button>
            <Button href="#" size="sm" class={cn(isScrolled && "lg:hidden")}>
              <span>Sign Up</span>
            </Button>
            <Button
              size="sm"
              class={cn(isScrolled ? "lg:inline-flex" : "hidden")}
              href="#"
            >
              <span>Get Started</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
