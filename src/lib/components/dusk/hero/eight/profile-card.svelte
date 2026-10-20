<script lang="ts">
	import { cn } from "#lib/utils.js";

	let {
		name,
		alt,
		imageSrc,
		class: className,
		cardClass,
		rightMaskClass,
	}: {
		name: string;
		alt: string;
		imageSrc: string;
		class?: string;
		cardClass?: string;
		rightMaskClass?: string;
	} = $props();
</script>

<div aria-hidden="true" class={cn("absolute inset-0 z-10 m-auto size-fit", className)}>
	<div
		class="mask-radial-from-bottom-left absolute inset-y-0 left-0 z-10 aspect-video rounded-l-2xl border-t border-l border-white/25 mask-radial-[100%_60%] mask-radial-from-65% dark:border-foreground/25"
	></div>
	<div
		class={cn(
			"mask-radial-from-bottom-right absolute inset-y-0 right-0 z-10 aspect-video rounded-r-2xl border-t border-r border-white/25 mask-radial-[60%_100%] mask-radial-from-65% dark:border-foreground/25",
			rightMaskClass
		)}
	></div>

	<div
		class="relative overflow-hidden rounded-2xl border border-zinc-900/50 shadow-2xl ring shadow-black ring-black/50"
	>
		<img
			src={imageSrc}
			alt=""
			width="120"
			height="120"
			class="absolute inset-0 my-auto size-fit blur"
		/>
		<div
			class={cn(
				"relative z-10 rounded-2xl p-2 pr-32 backdrop-blur dark:bg-zinc-900/80",
				cardClass
			)}
		>
			<div class="flex gap-2">
				<div
					class="relative size-18 overflow-hidden rounded-xl shadow-md before:absolute before:inset-0 before:rounded-xl before:border before:border-white/20 dark:before:border-foreground/20"
				>
					<img src={imageSrc} {alt} width="136" height="136" />
				</div>
				<div class="py-1 pr-4">
					<div class="text-sm font-medium">{name}</div>
					<div class="mt-1.5 flex items-center gap-3">
						<div>
							<div class="text-xs text-zinc-50/50 dark:text-foreground/50">Expenses</div>
							<div class="mt-0.5 text-sm font-semibold">$32.65k</div>
						</div>
						<div class="h-7 w-px bg-white/15 dark:bg-border"></div>
						<div>
							<div class="text-xs text-zinc-50/50 dark:text-foreground/50">Income</div>
							<div class="mt-0.5 text-sm font-semibold">$2.65k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
