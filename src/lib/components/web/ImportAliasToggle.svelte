<script lang="ts">
	import { cn } from "#lib/utils.js";
	import {
		HoverCard,
		HoverCardContent,
		HoverCardTrigger,
	} from "#lib/components/ui/hover-card/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import type { ImportAliasStyle } from "./import-alias";

	let {
		value = $bindable<ImportAliasStyle>("dollar"),
	}: {
		value?: ImportAliasStyle;
	} = $props();

	const options: { label: string; value: ImportAliasStyle; title: string }[] = [
		{ label: "$", value: "dollar", title: "SvelteKit 2" },
		{ label: "#", value: "hash", title: "SvelteKit 3" },
	];
</script>

<HoverCard openDelay={200}>
	<HoverCardTrigger>
		{#snippet child({ props })}
			<div
				{...props}
				class="flex h-8 items-center justify-center gap-px rounded-md border border-border/40 bg-background/30 px-0.5 dark:bg-transparent"
				role="group"
				aria-label="SvelteKit import alias version"
			>
				{#each options as option (option.value)}
					<Button
						variant="ghost"
						size="icon-xs"
						class={cn(
							"rounded-lg font-mono text-xs font-normal text-muted-foreground [corner-shape:superellipse(2)] active:not-aria-[haspopup]:translate-y-0",
							value === option.value
								? "bg-emerald-100/60 text-emerald-800 hover:bg-emerald-50 dark:bg-muted/70 dark:text-foreground dark:ring-border dark:hover:bg-muted/70"
								: "hover:bg-muted/60 hover:text-foreground dark:hover:bg-muted/40"
						)}
						aria-label={option.title}
						aria-pressed={value === option.value}
						onclick={() => (value = option.value)}
					>
						{option.label}
					</Button>
				{/each}
			</div>
		{/snippet}
	</HoverCardTrigger>

	<HoverCardContent
		class="w-fit space-y-1.5 rounded-lg px-3 py-2 text-xs [corner-shape:superellipse(1.2)]"
	>
		<p class="flex items-center justify-between gap-3 font-mono">
			SvelteKit 2
			<kbd class="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">$</kbd>
		</p>
		<p class="flex items-center justify-between gap-3 font-mono">
			SvelteKit 3
			<kbd class="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">#</kbd>
		</p>
	</HoverCardContent>
</HoverCard>
