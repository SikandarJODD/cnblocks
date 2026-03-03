<script lang="ts">
	import Gemini from "../mlogos/Gemini.svelte";
	import GooglePaLM from "../mlogos/GooglePaLM.svelte";
	import Replit from "../mlogos/Replit.svelte";
	import MediaWiki from "../mlogos/MediaWiki.svelte";
	import MagicUI from "../mlogos/MagicUI.svelte";
	import VSCodium from "../mlogos/VSCodium.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<section>
	<div class="mx-auto max-w-5xl px-6 py-8">
		<div class="space-y-6 text-center">
			<h2 class="text-2xl font-semibold text-foreground">
				Integrate with your favorite tools :
			</h2>
			<div
				class="mx-auto flex max-w-xl flex-wrap justify-center gap-0.5 *:rounded *:bg-foreground/5 *:p-6 *:first:rounded-l-xl *:last:rounded-r-xl"
			>
				<div>
					<Gemini class="m-auto size-8" />
				</div>
				<div>
					<GooglePaLM class="m-auto size-8" />
				</div>
				<div>
					<Replit class="m-auto size-8" />
				</div>
				<div>
					<MediaWiki class="m-auto size-8" />
				</div>
				<div>
					<MagicUI class="m-auto size-8" />
				</div>
				<div>
					<VSCodium class="m-auto size-8" />
				</div>
			</div>
			<Button variant="outline">More Integrations</Button>
		</div>
	</div>
</section>
