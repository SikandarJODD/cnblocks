<script lang="ts" module>
	import type { ButtonProps } from "#lib/components/ui/button/index.js";
	import type { CopyStateIconProps } from "./copy-state-icon.svelte";

	export type CopyButtonProps = Omit<ButtonProps, "onclick"> &
		Omit<CopyStateIconProps, "state"> & {
			/** The text to copy, or a function that returns it. */
			text: string | (() => string);
			/** Called with the copied text after a successful copy. */
			onCopySuccess?: (text: string) => void;
			/** Called when the copy operation fails. */
			onCopyError?: (error: Error) => void;
			onclick?: (event: MouseEvent) => void;
		};
</script>

<script lang="ts">
	import { UseClipboard } from "#lib/hooks/use-clipboard.svelte.js";
	import { cn } from "#lib/utils.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import CopyStateIcon, { type CopyState } from "./copy-state-icon.svelte";

	let {
		class: className,
		size = "icon",
		children,
		text,
		idleIcon,
		doneIcon,
		errorIcon,
		onclick,
		onCopySuccess,
		onCopyError,
		"aria-label": ariaLabel = "Copy",
		...restProps
	}: CopyButtonProps = $props();

	const clipboard = new UseClipboard({ delay: 1000 });
	const state = $derived<CopyState>(
		clipboard.status === "success" ? "done" : clipboard.status === "failure" ? "error" : "idle"
	);

	async function copy() {
		let value: string;

		try {
			value = typeof text === "function" ? text() : text;
		} catch (error) {
			onCopyError?.(
				error instanceof Error ? error : new Error("Failed to copy text to the clipboard.")
			);
			return;
		}

		const status = await clipboard.copy(value);

		if (status === "success") {
			onCopySuccess?.(value);
		} else {
			onCopyError?.(new Error("Failed to copy text to the clipboard."));
		}
	}

	function handleClick(event: MouseEvent) {
		void copy();
		onclick?.(event);
	}
</script>

<Button
	class={cn("will-change-transform", className)}
	{size}
	aria-label={ariaLabel}
	onclick={handleClick}
	{...restProps}
>
	<CopyStateIcon {state} {idleIcon} {doneIcon} {errorIcon} />
	{@render children?.()}
</Button>
