<script lang="ts">
	import { Button } from "#lib/components/special/button/index.js";

	import { UseClipboard } from "#lib/hooks/use-clipboard.svelte.js";
	import { scale } from "svelte/transition";

	import Check from "@lucide/svelte/icons/check";
	import Copy from "@lucide/svelte/icons/copy";
	import X from "@lucide/svelte/icons/x";
	import type { CopyButtonProps } from "./types";
	import { cn } from "cn";

	let {
		text,
		icon,
		animationDuration = 300,
		variant = "ghost",
		size = "icon",
		onCopy,
		class: className,
		...restProps
	}: CopyButtonProps = $props();

	const clipboard = new UseClipboard({ delay: 1500 });
</script>

<Button
	{...restProps}
	{variant}
	{size}
	class={cn('group', className)}
	type="button"
	name="copy"
	onclick={async () => {
		const status = await clipboard.copy(text);
		onCopy?.(status);
	}}
>
	{#if clipboard.status === "success"}
		<div in:scale={{ duration: animationDuration, start: 0.5 }}>
			<Check class="size-3.5!" />
			<span class="sr-only">Copied</span>
		</div>
	{:else if clipboard.status === "failure"}
		<div in:scale={{ duration: animationDuration, start: 0.5 }}>
			<X class="size-3.5!" />
			<span class="sr-only">Failed to copy</span>
		</div>
	{:else}
		<div in:scale={{ duration: animationDuration, start: 0.5 }}>
			{#if icon}
				{@render icon()}
			{:else}
				<Copy class="size-3.5! opacity-50 group-hover:opacity-80" />
			{/if}
			<span class="sr-only">Copy</span>
		</div>
	{/if}
</Button>
