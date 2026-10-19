<script lang="ts">
	import Github from "#lib/components/logos/github.svelte";
	import Button from "#lib/components/ui/button/button.svelte";
	import { FaviconLink } from "#lib/components/ui/favicon-link/index.js";
</script>

<section
	class="relative m-1 flex min-h-[38vh] items-center rounded-2xl border border-ink/10 bg-ink-dim/10 font-docs dark:border-muted dark:bg-background"
>
	<div class="w-full px-6 py-10 md:px-10">
		<div class="max-w-6xl">
			<h1 class="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
				Shadcn Svelte Blocks
			</h1>
			<h1
				class="mt-3 font-gmono text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl dark:text-emerald-500"
			>
				200+ UI & Marketing Blocks for Svelte
			</h1>
			<p class="mt-4 max-w-3xl text-lg text-muted-foreground">
				Including 40 new blocks from the Dusk collection, coming soon.
			</p>

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
				<Button href="/kit/hero" size="lg" class="rounded-full px-6 text-base"
					>Explore blocks</Button
				>
				<Button
					href="/docs/installation"
					size="lg"
					variant="outline"
					class="rounded-full px-6 text-base">Get started</Button
				>
			</div>
		</div>
	</div>
	<Button
		href="https://github.com/SikandarJODD/cnblocks"
		target="_blank"
		rel="noopener noreferrer"
		variant="secondary"
		size="icon-sm"
		class="absolute right-1 bottom-1 rounded-full shadow-none"
		aria-label="View cnblocks on GitHub"
	>
		<!-- <Github /> -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			width="1em"
			height="1em"
			fill="currentColor"
			viewBox="0 0 256 256"
			><rect width="256" height="256" fill="none"></rect><path
				d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
			></path></svg
		>
	</Button>
</section>
