<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import HeartIcon from "@lucide/svelte/icons/heart";
</script>

<div class="px-0 pb-0">
	<div
		class="rounded-xl border border-sidebar-border/70 bg-white p-2.5 [corner-shape:superellipse(1.4)] dark:bg-sidebar-accent/40"
	>
		<p class="text-xs font-medium text-foreground">Support the project</p>
		<p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">
			Keep the Svelte ports growing..
		</p>
		<Button
			href="https://github.com/sponsors/SikandarJODD"
			target="_blank"
			rel="noopener noreferrer"
			variant="secondary"
			size="sm"
			class="mt-2 w-full rounded-full text-xs"
		>
			<!-- <HeartIcon class="size-3" /> -->
			Support on GitHub
		</Button>
	</div>
</div>
