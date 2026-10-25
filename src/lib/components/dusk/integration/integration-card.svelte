<script lang="ts">
	import type { Component } from "svelte";

	let {
		icon: Icon,
		name,
		description,
	}: {
		icon: Component<{ class?: string }>;
		name: string;
		description: string;
	} = $props();
</script>

<div
	class="cursor-pointer space-y-4 rounded-lg border p-4 transition-colors hover:bg-foreground/5"
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
