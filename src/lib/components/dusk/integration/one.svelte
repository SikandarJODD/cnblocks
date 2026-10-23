<script lang="ts">
	import IntegrationCard from "./integration-card.svelte";
	import Button from "#lib/components/ui/dusk/button/button.svelte";
	import {
		Gemini,
		GooglePaLM,
		MagicUI,
		MediaWiki,
		Replit,
		VSCodium,
	} from "#lib/svgs/index.js";
</script>

<section>
	<div class="mx-auto max-w-7xl px-6 py-16 md:py-20">
		<div class="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
			<div class="flex flex-col justify-between gap-12 pb-6 max-lg:order-last md:mt-6">
				<div>
					<h2 class="text-4xl font-medium tracking-tight text-balance lg:text-5xl">
						Integrate with your favorite Tools
					</h2>
					<p class="mt-4 mb-6 text-lg text-balance text-muted-foreground">
						Connect seamlessly with popular platforms and services to enhance your
						workflow.
					</p>
					<Button variant="outline" href="#">Get Started</Button>
				</div>

				<p class="max-w-xs text-lg text-balance text-muted-foreground">
					Tailark CRM integrates with <span class="font-medium text-foreground"
						>over 150 Tools</span
					>
					to enhance your workflow.
				</p>
			</div>

			<div
				class="-mx-6 mask-radial-at-top-left mask-radial-from-65% mask-radial-[100%_80%] px-6 sm:mx-auto sm:max-w-md md:-mx-6 md:mr-0 md:ml-auto"
			>
				<div class="rounded-2xl border bg-card p-3 shadow-lg md:pb-12">
					<div class="grid grid-cols-2 gap-2">
						<IntegrationCard
							icon={Gemini}
							name="Gemini"
							description="The AI model that powers Google's search engine."
						/>
						<IntegrationCard
							icon={Replit}
							name="Replit"
							description="The AI model that powers Google's search engine."
						/>
						<IntegrationCard
							icon={GooglePaLM}
							name="GooglePaLM"
							description="The AI model that powers Google's search engine."
						/>
						<IntegrationCard
							icon={MagicUI}
							name="MagicUI"
							description="The AI model that powers Google's search engine."
						/>
						<IntegrationCard
							icon={VSCodium}
							name="VSCodium"
							description="The AI model that powers Google's search engine."
						/>
						<IntegrationCard
							icon={MediaWiki}
							name="MediaWiki"
							description="The AI model that powers Google's search engine."
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
