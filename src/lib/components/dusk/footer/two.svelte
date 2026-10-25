<script lang="ts">
	import Button from "#lib/components/ui/dusk/button/button.svelte";
	import Logo from "#lib/components/web/Logo.svelte";
	import { Claude, Gemini, OpenAI, Perplexity } from "#lib/svgs/index.js";

	const footerLinks = [
		{
			name: "Product",
			links: ["Features", "Solutions", "Agents", "Pricing"],
		},
		{
			name: "Company",
			links: ["About", "Blog", "Contact", "LinkedIn", "X"],
		},
		{
			name: "Legal",
			links: ["Licence", "Privacy Policy", "Terms of Service"],
		},
	];
</script>

<footer>
	<div class="mx-auto max-w-7xl space-y-16 px-6 pt-32 pb-6">
		<div class="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-4 lg:grid-cols-6">
			<div class="col-span-full lg:col-span-3">
				<a href="/" aria-label="Go home"><Logo /></a>
			</div>

			{#each footerLinks as linksGroup (linksGroup.name)}
				<div>
					<span class="text-sm text-foreground">{linksGroup.name}</span>
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
		</div>

		<div class="mt-24 grid gap-x-3 gap-y-6 border-t pt-6 sm:grid-cols-2">
			<div>
				<p class="text-sm text-muted-foreground">Get an AI summary of this page</p>
				<div class="mt-2 -ml-2.5 flex items-center">
					<Button variant="ghost" size="icon" href="/" aria-label="Claude AI">
						<Claude />
					</Button>
					<Button variant="ghost" size="icon" href="/" aria-label="OpenAI">
						<OpenAI />
					</Button>
					<Button variant="ghost" size="icon" href="/" aria-label="Perplexity">
						<Perplexity class="size-5!" />
					</Button>
					<Button variant="ghost" size="icon" href="/" aria-label="Gemini">
						<Gemini />
					</Button>
				</div>
			</div>
			<span class="block text-sm text-muted-foreground">&copy; Tailark 2025 - Present</span>
		</div>
	</div>
</footer>
