<script lang="ts">
	import Logo from '$lib/components/web/Logo.svelte';

	type LinkItem = { label: string; href: string };

	const links: LinkItem[] = [
		{ label: 'Home', href: '#' },
		{ label: 'Features', href: '#' },
		{ label: 'Pricing', href: '#' },
		{ label: 'About', href: '#' },
		{ label: 'Blog', href: '#' },
		{ label: 'Contact', href: '#' }
	];

	const year = new Date().getFullYear();
</script>

<footer class="@container bg-background py-12">
	<div class="mx-auto max-w-2xl px-6">
		<div class="border-y py-8">
			<div class="flex flex-col gap-6 @xl:flex-row @xl:items-center">
				<a href="/" aria-label="home">
					<Logo class="h-5 w-fit" />
				</a>
				<nav class="flex flex-wrap gap-x-6 gap-y-2 @xl:ml-auto">
					{#each links as link (link.label)}
						<a
							href={link.href}
							class="text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							{link.label}
						</a>
					{/each}
				</nav>
			</div>
		</div>
		<div class="flex flex-col-reverse gap-4 pt-8 @xl:flex-row @xl:justify-between">
			<p class="text-sm text-muted-foreground">&copy; {year} Veil.</p>
			<div class="flex flex-wrap gap-4">
				<a href="#" class="text-sm text-muted-foreground transition-colors hover:text-foreground">
					Privacy Policy
				</a>
				<a href="#" class="text-sm text-muted-foreground transition-colors hover:text-foreground">
					Terms of Service
				</a>
				<a href="#" class="text-sm text-muted-foreground transition-colors hover:text-foreground">
					Cookies
				</a>
			</div>
		</div>
	</div>
</footer>
