<script lang="ts">
  import Logo from "$lib/components/web/Logo.svelte";

  type LinkItem = { label: string; href: string };

  const links: Record<"product" | "company" | "resources" | "legal", LinkItem[]> = {
    product: [
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Templates", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const year = new Date().getFullYear();
</script>

<footer class="bg-background @container border-t py-12">
  <div class="mx-auto max-w-2xl px-6">
    <div class="@sm:grid-cols-3 grid grid-cols-2 gap-8">
      <div class="col-span-full">
        <a href="/" class="flex items-center gap-2">
          <Logo class="h-5 w-fit" />
        </a>
        <p class="text-muted-foreground mt-4 max-w-xs text-sm">
          Building the future of integrations. Connect your tools, automate your
          workflow.
        </p>
      </div>
      <div>
        <h3 class="text-foreground mb-3 text-sm font-medium">Product</h3>
        <ul class="space-y-2">
          {#each links.product as link (link.label)}
            <li>
              <a
                href={link.href}
                class="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-foreground mb-3 text-sm font-medium">Company</h3>
        <ul class="space-y-2">
          {#each links.company as link (link.label)}
            <li>
              <a
                href={link.href}
                class="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-foreground mb-3 text-sm font-medium">Resources</h3>
        <ul class="space-y-2">
          {#each links.resources as link (link.label)}
            <li>
              <a
                href={link.href}
                class="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-8">
      <p class="text-muted-foreground text-sm">&copy; {year} Veil. All rights reserved.</p>
      <div class="flex gap-4">
        {#each links.legal as link (link.label)}
          <a
            href={link.href}
            class="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            {link.label}
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>
