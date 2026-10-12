<script lang="ts">
	import { cn } from "$lib/utils";
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from "$lib/components/ui/tooltip";
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

<div
	class="flex h-8 items-center rounded-md border bg-background p-0.5 shadow-xs"
	role="group"
	aria-label="SvelteKit import alias version"
>
	<TooltipProvider delayDuration={150}>
		{#each options as option (option.value)}
			<Tooltip>
				<TooltipTrigger>
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
				<TooltipContent class="rounded-full px-2.5 py-1 text-[11px]">
					{option.title}
				</TooltipContent>
			</Tooltip>
		{/each}
	</TooltipProvider>
</div>
