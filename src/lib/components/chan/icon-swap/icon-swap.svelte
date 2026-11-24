<script lang="ts" module>
	import type { AnimatePresenceProps } from "motion-sv";
	import type { Snippet } from "svelte";

	export type IconSwapProps = AnimatePresenceProps & {
		children: Snippet;
	};
</script>

<script lang="ts">
	import { AnimatePresence } from "motion-sv";

	let { children, mode = "popLayout", initial = false, ...restProps }: IconSwapProps = $props();
</script>

<AnimatePresence {mode} {initial} {...restProps}>
	{@render children()}
</AnimatePresence>
