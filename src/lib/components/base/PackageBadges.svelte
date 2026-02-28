<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import { cn } from "$lib/utils";

	type PackageBadgesProps = {
		packages?: string[];
		class?: string;
	};

	let { packages = [], class: className }: PackageBadgesProps = $props();
</script>

{#if packages.length > 0}
	<div class={cn("mt-2 flex flex-wrap gap-2", className)} data-toc-ignore="true">
		{#each packages as pkg (pkg)}
			<Badge
				variant="secondary"
				class="border-border/60 bg-muted/60 text-muted-foreground rounded-full px-2 py-0.5 font-mono text-[11px] leading-none"
			>
				{pkg}
			</Badge>
		{/each}
	</div>
{/if}
