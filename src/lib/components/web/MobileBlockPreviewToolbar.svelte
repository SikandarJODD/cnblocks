<script lang="ts">
	import Button from "../ui/button/button.svelte";
	import * as DropdownMenu from "../ui/dropdown-menu/index.js";
	import { UseClipboard } from "#lib/hooks/use-clipboard.svelte.js";
	import Check from "@lucide/svelte/icons/check";
	import Copy from "@lucide/svelte/icons/copy";
	import Ellipsis from "@lucide/svelte/icons/ellipsis";
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import PreviewInstallAdd from "./PreviewInstallAdd.svelte";
	import { flattenBlockCodeFiles, type BlockCodeTree } from "#lib/tree/types.js";

	let {
		mode = $bindable<"preview" | "code">("preview"),
		title,
		preview,
		itemId,
		codeTree,
	}: {
		mode?: "preview" | "code";
		title: string;
		preview: string;
		itemId?: string;
		codeTree: BlockCodeTree;
	} = $props();

	const clipboard = new UseClipboard({ delay: 1500 });
	let files = $derived(flattenBlockCodeFiles(codeTree.nodes));
	let copyText = $derived(files.length === 1 ? files[0].code : undefined);

	function openPreview() {
		window.open(preview, "_blank", "noopener,noreferrer");
	}
</script>

<div class="relative z-10 mx-auto flex h-12 max-w-7xl items-center gap-2 px-4 md:hidden">
	<div class="flex shrink-0 items-center gap-1" aria-label="Preview mode">
		<Button
			variant={mode === "preview" ? "secondary" : "ghost"}
			size="icon"
			class="relative size-9 touch-manipulation before:absolute before:-inset-1 before:content-['']"
			onclick={() => (mode = "preview")}
			aria-label="Show preview"
			aria-pressed={mode === "preview"}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				class="size-4"
				color="currentColor"
			>
				<path
					d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
					stroke="currentColor"
					stroke-width="1.5"
				/>
				<path
					opacity="0.4"
					d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
					stroke="currentColor"
					stroke-width="1.5"
				/>
			</svg>
		</Button>
		<Button
			variant={mode === "code" ? "secondary" : "ghost"}
			size="icon"
			class="relative size-9 touch-manipulation before:absolute before:-inset-1 before:content-['']"
			onclick={() => (mode = "code")}
			aria-label="Show code"
			aria-pressed={mode === "code"}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.4"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-4"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M7 8l-4 4l4 4" />
				<path d="M17 8l4 4l-4 4" />
				<path d="M14 4l-4 16" />
			</svg>
		</Button>
	</div>

	<span class="min-w-0 flex-1 truncate px-1 text-xs font-medium capitalize" {title}>
		{title}
	</span>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger aria-label="More preview actions">
			{#snippet child({ props })}
				<Button size="icon" variant="secondary" class="text-muted-foreground" {...props}>
					<Ellipsis class="size-4" />
				</Button>
			{/snippet}
			<Ellipsis class="size-4" />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end" class="w-fit shadow-none">
			<DropdownMenu.Item class="min-h-11" onSelect={openPreview}>
				Open Preview
			</DropdownMenu.Item>

			{#if itemId}
				<div class="flex min-h-11 items-center justify-between gap-3 px-2 text-sm">
					<span>Install</span>
					<PreviewInstallAdd {itemId} class="h-11 w-18 [&_button]:h-7!" />
				</div>
			{/if}

			{#if copyText}
				<DropdownMenu.Item class="min-h-11" onSelect={() => clipboard.copy(copyText)}>
					{#if clipboard.status === "success"}
						<Check class="text-emerald-500!" />
						<span>Copied</span>
					{:else}
						<Copy />
						<span>Copy code</span>
					{/if}
				</DropdownMenu.Item>
			{/if}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
