<script lang="ts">
	import Button from "#lib/components/ui/dusk/button/button.svelte";
	import Input from "#lib/components/ui/dusk/input/input.svelte";
	import Label from "#lib/components/ui/dusk/label/label.svelte";
	import Logo from "#lib/components/web/Logo.svelte";

	const communityLinks = [
		{ href: "/", label: "GitHub" },
		{ href: "/", label: "Discord" },
		{ href: "/", label: "Slack" },
		{ href: "/", label: "X / Twitter" },
	];

	const footerLinks = [
		{
			name: "Product",
			links: ["Security", "Customization", "Enterprise", "Partners"],
		},
		{
			name: "Company",
			links: ["About", "Customers", "Enterprise", "Partners", "Jobs"],
		},
		{
			name: "Legal",
			links: ["Licence", "Privacy Policy", "Terms of Service", "Cookie Policy"],
		},
	];
</script>

<footer>
	<div class="mx-auto max-w-7xl space-y-16 px-6 pt-32 pb-16">
		<div class="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-4 lg:grid-cols-5">
			<div class="max-lg:col-span-full">
				<a href="/" aria-label="Go home"><Logo /></a>
			</div>

			{#each footerLinks as linksGroup (linksGroup.name)}
				<div>
					<span class="text-sm font-medium">{linksGroup.name}</span>
					<ul class="mt-4 list-inside space-y-4">
						{#each linksGroup.links as label (label)}
							<li>
								<a
									href="/"
									class="text-sm text-muted-foreground duration-150 hover:text-primary"
									>{label}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			{/each}

			<div>
				<span class="text-sm font-medium">Community</span>
				<ul class="mt-4 list-inside space-y-4">
					{#each communityLinks as link (link.label)}
						<li>
							<a
								href={link.href}
								class="text-sm text-muted-foreground duration-150 hover:text-primary"
								>{link.label}</a
							>
						</li>
					{/each}
				</ul>

				<form class="mt-12 w-full max-w-xs">
					<div class="space-y-2.5">
						<Label class="block text-sm font-medium" for="email">
							Subscribe to our newsletter
						</Label>
						<Input
							class="text-sm"
							placeholder="Your email"
							type="email"
							id="email"
							required
							name="email"
						/>
					</div>
					<Button type="submit" class="mt-3" size="sm">Subscribe</Button>
				</form>
			</div>
		</div>
		<div class="mt-16">
			<span class="block text-sm text-muted-foreground">&copy; Tailark 2025 - Present</span>
		</div>
	</div>
</footer>
