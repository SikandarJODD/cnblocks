<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type CopyState = "idle" | "done" | "error";

	export type CopyStateIconProps = {
		state: CopyState;
		/** Custom icon for the idle state. */
		idleIcon?: Snippet;
		/** Custom icon for the done state. */
		doneIcon?: Snippet;
		/** Custom icon for the error state. */
		errorIcon?: Snippet;
	};
</script>

<script lang="ts">
	import CircleXIcon from "@lucide/svelte/icons/circle-x";
	import CopyIcon from "@lucide/svelte/icons/copy";
	import { IconSwap, IconSwapItem } from "#lib/components/chan/icon-swap/index.js";
	import { motion } from "motion-sv";

	let { state, idleIcon, doneIcon, errorIcon }: CopyStateIconProps = $props();
</script>

<IconSwap>
	{#key state}
		<IconSwapItem as={motion.span}>
			{#if state === "idle"}
				{#if idleIcon}
					{@render idleIcon()}
				{:else}
					<CopyIcon data-slot="idle-icon" />
				{/if}
			{:else if state === "done"}
				{#if doneIcon}
					{@render doneIcon()}
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="10" class="fill-primary"></circle>
						<path d="m16 9-5.5 5.5L8 12" class="stroke-primary-foreground"></path>
					</svg>
				{/if}
			{:else}
				{#if errorIcon}
					{@render errorIcon()}
				{:else}
					<CircleXIcon data-slot="error-icon" />
				{/if}
			{/if}
		</IconSwapItem>
	{/key}
</IconSwap>
