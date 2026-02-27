<script lang="ts">
  import Logo from "$lib/components/web/Logo.svelte";
  import ThemeSwitcher from "./theme-switcher.svelte";

  type LinkItem = { label: string; href: string };

  const links: LinkItem[] = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const year = new Date().getFullYear();
</script>

<footer class="bg-background @container py-12">
  <div class="mx-auto max-w-2xl px-6">
    <div class="flex flex-col">
      <a
        href="/"
        aria-label="go home"
        class="hover:bg-foreground/5 -ml-1.5 flex size-8 rounded-lg *:m-auto"
      >
        <Logo class="w-fit" />
      </a>
      <nav class="my-8 flex flex-wrap gap-x-8 gap-y-2">
        {#each links as link (link.label)}
          <a
            href={link.href}
            class="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <ThemeSwitcher />

      <p class="text-muted-foreground mt-2 border-t pt-6 text-sm">&copy; {year} Veil.</p>
    </div>
  </div>
</footer>
