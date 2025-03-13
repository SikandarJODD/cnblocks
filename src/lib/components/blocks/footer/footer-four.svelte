<script>
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

<footer class="border-b bg-white py-12 dark:bg-transparent">
  <div class="mx-auto max-w-5xl px-6">
    <div class="flex flex-wrap justify-between gap-6">
      <span
        class="text-muted-foreground order-last block text-center text-sm md:order-first"
        >© {new Date().getFullYear()} Tailus UI, All rights reserved</span
      >
      <div
        class="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last"
      >
        {#each links as link, index}
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
