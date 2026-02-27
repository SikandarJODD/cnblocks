<script lang="ts">
  import Logo from "$lib/components/web/Logo.svelte";
  import { Github, Linkedin, Twitter } from "@lucide/svelte";
  import type { Component } from "svelte";

  type LinkItem = { label: string; href: string };
  type SocialItem = { icon: Component; href: string; label: string };

  const links: LinkItem[] = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const social: SocialItem[] = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const year = new Date().getFullYear();
</script>

<footer class="bg-background @container border-t py-12">
  <div class="mx-auto max-w-3xl px-6">
    <div class="grid gap-8">
      <div class="col-span-full border-b pb-8">
        <a href="/" class="flex items-center gap-2">
          <Logo class="h-5 w-fit" />
        </a>
        <p class="text-muted-foreground mt-4 max-w-xs text-sm">
          The modern integration platform for teams who ship fast.
        </p>
        <div class="-ml-2 mt-6 flex">
          {#each social as item (item.label)}
            <a
              href={item.href}
              class="text-muted-foreground hover:text-foreground flex size-8 transition-colors *:m-auto"
              aria-label={item.label}
            >
              <item.icon class="size-4" />
            </a>
          {/each}
        </div>
      </div>

      <nav class="flex flex-wrap gap-x-8 gap-y-3">
        {#each links as link (link.label)}
          <a
            href={link.href}
            class="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            {link.label}
          </a>
        {/each}
      </nav>
      <div class="border-t pt-8">
        <p class="text-muted-foreground text-sm">&copy; {year} Veil, Inc. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
