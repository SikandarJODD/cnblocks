<script lang="ts">
	import type { LucideIcon } from "@lucide/svelte";
	type IntegrationCardProps = {
		icon: LucideIcon;
		name: string;
		description: string;
		link?: string;
	};
	let {
		name,
		icon: Icon,
		description,
		link = "https://github.com/SikandarJODD/cnblocks",
	}: IntegrationCardProps = $props();
</script>

<div
	class="space-y-4 rounded-lg border p-4 transition-colors hover:bg-muted dark:hover:bg-muted/50"
>
	<div class="flex size-fit items-center justify-center">
		<Icon />
	</div>
	<div class="space-y-1">
		<h3 class="text-sm font-medium">{name}</h3>
		<p class="line-clamp-1 text-sm text-muted-foreground md:line-clamp-2">
			{description}
		</p>
	</div>
</div>
