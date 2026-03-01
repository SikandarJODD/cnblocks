<script lang="ts">
	import Card from "$lib/components/ui/card/card.svelte";
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	let { children, class: _class = "" }: { children: Snippet; class?: string } = $props();
</script>

<Card class={cn("group relative rounded-none shadow-zinc-950/5", _class)}>
	{@render cardDecorator()}
	{@render children()}
</Card>

{#snippet cardDecorator()}
	<span
		class="absolute -top-px -left-px block size-2 border-primary"
		style="
      border-top-width: 2px;
      border-left-width: 2px;"
	></span>
	<span
		class="absolute -top-px -right-px block size-2 border-primary"
		style="
      border-top-width: 2px;
      border-right-width: 2px;"
	></span>
	<span
		class="absolute -bottom-px -left-px block size-2 border-primary"
		style="
      border-bottom-width: 2px;
      border-left-width: 2px;"
	></span>
	<span
		class="absolute -right-px -bottom-px block size-2 border-primary"
		style="
      border-bottom-width: 2px;
      border-right-width: 2px;"
	></span>
{/snippet}
