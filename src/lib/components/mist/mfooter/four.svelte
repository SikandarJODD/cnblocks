<script lang="ts">
  import Logo from "$lib/components/web/Logo.svelte";
  const links = [
    {
      title: "Features",
      href: "#",
    },
    {
      title: "Solution",
      href: "#",
    },
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Help",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
  ];
</script>

<footer
  class="bg-background border-b py-12 [--color-primary:var(--color-indigo-500)]"
>
  <div class="mx-auto max-w-5xl px-6">
    <div class="flex flex-wrap justify-between gap-12">
      <div class="order-last flex items-center gap-3 md:order-first">
        <a href="#" aria-label="go home">
          <Logo />
        </a>
        <span class="text-muted-foreground block text-center text-sm"
          >© {new Date().getFullYear()} Tailark Mist, All rights reserved</span
        >
      </div>

      <div class="order-first flex flex-wrap gap-x-6 gap-y-4 md:order-last">
        {#each links as link}
          <a
            href={link.href}
            class="text-muted-foreground hover:text-primary block duration-150"
          >
            <span>{link.title}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>
