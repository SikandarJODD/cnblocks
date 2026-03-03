<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		children,
		class: _class,
		position,
		isCenter,
	}: {
		children: Snippet;
		class?: string;
		position?: string;
		isCenter?: boolean;
	} = $props();
</script>

<div class={["relative flex size-12 rounded-xl border bg-background dark:bg-transparent", _class]}>
	<div class={["relative z-20 m-auto size-fit *:size-6", isCenter && "*:size-8"]}>
		{@render children()}
	</div>
	{#if position && !isCenter}
		<div
			class={[
				"absolute z-10 h-px bg-linear-to-r to-muted-foreground/25",
				position === "left-top" && "top-1/2 left-full w-[130px] origin-left rotate-[25deg]",
				position === "left-middle" && "top-1/2 left-full w-[120px] origin-left",
				position === "left-bottom" &&
					"top-1/2 left-full w-[130px] origin-left rotate-[-25deg]",
				position === "right-top" &&
					"top-1/2 right-full w-[130px] origin-right rotate-[-25deg] bg-linear-to-l",
				position === "right-middle" &&
					"top-1/2 right-full w-[120px] origin-right bg-linear-to-l",
				position === "right-bottom" &&
					"top-1/2 right-full w-[130px] origin-right rotate-[25deg] bg-linear-to-l",
			]}
		></div>
	{/if}
</div>
