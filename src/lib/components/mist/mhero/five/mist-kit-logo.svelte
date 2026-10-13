<script lang="ts">
	import { cn } from "#lib/utils.js";
	import BookOpen from "@lucide/svelte/icons/book-open";

	let { class: className }: { class?: string } = $props();
</script>

<div
	aria-hidden="true"
	class={cn(
		"relative flex size-9 translate-y-0.5 items-center justify-center rounded-(--radius) border border-background bg-linear-to-b from-yellow-300 to-orange-600 shadow-lg ring-1 shadow-black/20 ring-black/10",
		className
	)}
>
	<BookOpen class="size-6 mask-b-from-25% fill-white stroke-white drop-shadow-sm" />
	<BookOpen class="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
	<div class="absolute inset-2 z-1 m-auto h-4.5 w-px translate-y-px rounded-full bg-black/10"></div>
</div>
