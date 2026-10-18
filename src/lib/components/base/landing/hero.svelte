<script lang="ts">
	import Button from "#lib/components/ui/button/button.svelte";
	import { FaviconLink } from "#lib/components/ui/favicon-link/index.js";
</script>

<section class="flex min-h-[38vh] items-center font-docs">
	<div class="w-full px-6 py-10 md:px-10">
		<div class="max-w-xl">
			<h1 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
				Shadcn Svelte Blocks
			</h1>
			<p class="mt-4 text-muted-foreground">
				<span class="font-gmono font-medium text-foreground">200+</span> free and open-source UI
				and marketing blocks for building responsive Svelte websites.
			</p>
			<p class="mt-3 text-sm text-muted-foreground">
				Originally created by <FaviconLink
					href="https://x.com/MeschacIrung"
					target="_blank"
					rel="noreferrer"
					faviconSrc="https://www.google.com/s2/favicons?domain=irung.me&sz=128"
				>
					Méschac Irung
				</FaviconLink> and ported to Svelte by <FaviconLink
					href="https://bhide.dev/?utm_source=svelte-marketing-blocks"
					target="_blank"
					rel="noreferrer"
				>
					Bhide Svelte
				</FaviconLink>.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<Button href="/kit/hero" size="lg" class="rounded-full px-6">Explore blocks</Button>
				<Button
					href="/docs/installation"
					size="lg"
					variant="outline"
					class="rounded-full px-6">Get started</Button
				>
			</div>
		</div>
	</div>
</section>
