<script lang="ts">
	import { cn } from "#lib/utils.js";
	import {
		HoverCard,
		HoverCardContent,
		HoverCardTrigger,
	} from "#lib/components/ui/hover-card/index.js";
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
				class="flex h-8 items-center justify-center gap-0.5 rounded-md border bg-background/40 px-0.5 dark:bg-transparent"
				role="group"
				aria-label="SvelteKit import alias version"
			>
				{#each options as option (option.value)}
					<button
						type="button"
						class={cn(
							"size-6 cursor-pointer rounded-md font-mono text-xs transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none",
							value === option.value
								? "bg-background text-foreground shadow-xs dark:bg-muted"
								: "text-muted-foreground hover:bg-background/70 hover:text-foreground dark:hover:bg-muted/50"
						)}
						aria-label={option.title}
						aria-pressed={value === option.value}
						onclick={() => (value = option.value)}
					>
						{option.label}
					</button>
				{/each}
			</div>
		{/snippet}
	</HoverCardTrigger>

	<HoverCardContent class="w-fit space-y-1.5 px-3 py-2 text-xs">
		<p class="flex items-center justify-between gap-3">
			SvelteKit 2
			<kbd class="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">$</kbd>
		</p>
		<p class="flex items-center justify-between gap-3">
			SvelteKit 3
			<kbd class="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">#</kbd>
		</p>
	</HoverCardContent>
</HoverCard>
