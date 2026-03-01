<script lang="ts">
	import Logo from '$lib/components/web/Logo.svelte';
	import { Github, Linkedin, Twitter } from '@lucide/svelte';
	import type { Component } from 'svelte';

	type LinkItem = { label: string; href: string };
	type SocialItem = { icon: Component; href: string; label: string };

	const links: LinkItem[] = [
		{ label: 'Features', href: '#' },
		{ label: 'Pricing', href: '#' },
		{ label: 'About', href: '#' },
		{ label: 'Blog', href: '#' },
		{ label: 'Contact', href: '#' }
	];

	const social: SocialItem[] = [
		{ icon: Twitter, href: '#', label: 'Twitter' },
		{ icon: Github, href: '#', label: 'GitHub' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn' }
	];

	const year = new Date().getFullYear();
</script>

<footer class="@container border-t bg-background py-12">
	<div class="mx-auto max-w-2xl px-6">
		<div class="flex flex-col items-center text-center">
			<a href="/" class="flex items-center gap-2">
				<Logo class="h-5" />
			</a>
			<nav class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
				{#each links as link (link.label)}
					<a
						href={link.href}
						class="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<div class="mt-8 flex gap-4">
				{#each social as item (item.label)}
					<a
						href={item.href}
						class="size-8 rounded-full text-muted-foreground transition-colors hover:text-foreground"
						aria-label={item.label}
					>
						<item.icon class="size-4" />
					</a>
				{/each}
			</div>
			<p class="mt-8 text-sm text-muted-foreground">&copy; {year} Veil.</p>
		</div>
	</div>
</footer>
