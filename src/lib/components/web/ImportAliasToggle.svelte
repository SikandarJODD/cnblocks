<script lang="ts">
	import { cn } from "#lib/utils.js";
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from "#lib/components/ui/tooltip/index.js";
	import { Tooltip as TooltipPrimitive } from "bits-ui";
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

	const tooltipTether = TooltipPrimitive.createTether<{ label: string }>();
</script>

<div
	class="flex h-8 items-center rounded-md border bg-background p-0.5 shadow-xs"
	role="group"
	aria-label="SvelteKit import alias version"
>
	<TooltipProvider delayDuration={150}>
		{#each options as option (option.value)}
			<TooltipTrigger tether={tooltipTether} payload={{ label: option.title }}>
				<button
					type="button"
					class={cn(
						"size-6 rounded-sm font-mono text-xs transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none",
						value === option.value
							? "bg-muted text-foreground shadow-xs"
							: "text-muted-foreground hover:text-foreground"
					)}
					aria-label={option.title}
					aria-pressed={value === option.value}
					onclick={() => (value = option.value)}
				>
					{option.label}
				</button>
			</TooltipTrigger>
		{/each}

		<Tooltip tether={tooltipTether}>
			{#snippet children({ payload })}
				<TooltipContent class="rounded-full px-2.5 py-1 text-[11px]">
					{payload?.label}
				</TooltipContent>
			{/snippet}
		</Tooltip>
	</TooltipProvider>
</div>
