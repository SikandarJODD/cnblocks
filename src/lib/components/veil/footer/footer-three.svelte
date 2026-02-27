<script lang="ts">
  import Logo from "$lib/components/web/Logo.svelte";

  type LinkItem = { label: string; href: string };

  const links: LinkItem[] = [
    { label: "Home", href: "#" },
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
    <div class="border-y py-8">
      <div class="@xl:flex-row @xl:items-center flex flex-col gap-6">
        <a href="/" aria-label="home">
          <Logo class="h-5 w-fit" />
        </a>
        <nav class="@xl:ml-auto flex flex-wrap gap-x-6 gap-y-2">
          {#each links as link (link.label)}
            <a
              href={link.href}
              class="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </a>
          {/each}
        </nav>
      </div>
    </div>
    <div class="@xl:flex-row @xl:justify-between flex flex-col-reverse gap-4 pt-8">
      <p class="text-muted-foreground text-sm">&copy; {year} Veil.</p>
      <div class="flex flex-wrap gap-4">
        <a
          href="#"
          class="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          class="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#"
          class="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          Cookies
        </a>
      </div>
    </div>
  </div>
</footer>
