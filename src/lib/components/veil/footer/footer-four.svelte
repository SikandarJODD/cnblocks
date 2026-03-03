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

<footer class="@container border-t bg-background py-12">
	<div class="mx-auto max-w-3xl px-6">
		<div class="grid gap-8">
			<div class="col-span-full border-b pb-8">
				<a href="/" class="flex items-center gap-2">
					<Logo class="h-5 w-fit" />
				</a>
				<p class="mt-4 max-w-xs text-sm text-muted-foreground">
					The modern integration platform for teams who ship fast.
				</p>
				<div class="mt-6 -ml-2 flex">
					{#each social as item (item.label)}
						<a
							href={item.href}
							class="flex size-8 text-muted-foreground transition-colors *:m-auto hover:text-foreground"
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
						class="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<div class="border-t pt-8">
				<p class="text-sm text-muted-foreground">
					&copy; {year} Veil, Inc. All rights reserved.
				</p>
			</div>
		</div>
	</div>
</footer>
