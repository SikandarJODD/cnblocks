<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="pointer-events-none relative mx-auto size-36 text-zinc-950/10 select-none dark:text-white/15"
>
	<div
		class="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[24px_24px] [mask-image:radial-gradient(circle,black_35%,transparent_75%)]"
	></div>
	<div
		class="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l bg-background text-primary"
	>
		{@render children()}
	</div>
</div>
