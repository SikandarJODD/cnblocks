<script lang="ts">
	import Button from "#lib/components/ui/button/button.svelte";
	import { FaviconLink } from "#lib/components/ui/favicon-link/index.js";
</script>

<section class="flex min-h-[38vh] items-center font-docs">
	<div class="w-full px-6 py-10 md:px-10">
		<div class="max-w-6xl">
			<h1 class="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
				Shadcn Svelte Blocks
			</h1>
			<h1
				class="mt-3 font-gmono text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl dark:text-emerald-500"
			>
				200+ UI & Marketing Components for Svelte
			</h1>

			<!-- <p class="mt-4 text-xl! text-muted-foreground">
				<span class="font-gmono text-foreground">200+</span> Free and Open-Source UI and Marketing
				blocks for building responsive Svelte websites.
			</p> -->
			<p class="mt-6 text-lg text-muted-foreground">
				Originally created by <FaviconLink
					href="https://x.com/MeschacIrung"
					target="_blank"
					rel="noreferrer"
					faviconSrc="https://www.google.com/s2/favicons?domain=irung.me&sz=128"
					class="rounded-full bg-muted pr-2.5 pl-1.5"
				>
					Méschac Irung
				</FaviconLink> and ported to Svelte by <FaviconLink
					href="https://bhide.dev?utm_source=svelte-marketing-blocks"
					target="_blank"
					rel="noreferrer"
					class="rounded-full bg-ink/10 pr-2.5 pl-1.5 text-ink/80 transition-all duration-200 hover:text-ink dark:bg-[oklch(0.654_0.234_34.196)]/15 dark:text-[oklch(0.654_0.234_34.196)] dark:hover:bg-[oklch(0.654_0.234_34.196)]/25 dark:hover:text-[oklch(0.72_0.19_34.196)]"
					imageClass="rounded-full"
				>
					Bhide Svelte
				</FaviconLink>
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
