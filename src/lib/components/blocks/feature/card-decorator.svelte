<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	let {
		children,
		surface = "background",
	}: {
		children: Snippet;
		surface?: "background" | "muted";
	} = $props();
</script>

<div
	class="relative mx-auto size-36 text-zinc-950/10 transition-all duration-500 ease-in group-hover:text-zinc-950/20 dark:text-white/15 dark:group-hover:bg-white/5 dark:group-hover:text-white/20"
>
	<div
		class="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[24px_24px]"
	></div>
	<div
		class={cn(
			"absolute inset-0 bg-radial from-transparent to-75%",
			surface === "muted" ? "to-muted dark:to-zinc-900" : "to-background"
		)}
	></div>
	<div
		class={cn(
			"absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l text-primary",
			surface === "muted" ? "bg-muted dark:bg-zinc-900" : "bg-background"
		)}
	>
		{@render children()}
	</div>
</div>
