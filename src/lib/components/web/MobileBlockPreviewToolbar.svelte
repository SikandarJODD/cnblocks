<script lang="ts">
	import Button from "../ui/button/button.svelte";
	import * as DropdownMenu from "../ui/dropdown-menu/index.js";
	import { UseClipboard } from "#lib/hooks/use-clipboard.svelte.js";
	import Check from "@lucide/svelte/icons/check";
	import CodeXml from "@lucide/svelte/icons/code-xml";
	import Copy from "@lucide/svelte/icons/copy";
	import Ellipsis from "@lucide/svelte/icons/ellipsis";
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import Eye from "@lucide/svelte/icons/eye";
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

<div class="relative z-10 mx-auto flex h-12 max-w-7xl items-center gap-2 px-2 md:hidden">
	<div class="flex shrink-0 items-center gap-2" aria-label="Preview mode">
		<Button
			variant={mode === "preview" ? "secondary" : "ghost"}
			size="icon"
			class="relative size-9 touch-manipulation before:absolute before:-inset-1 before:content-['']"
			onclick={() => (mode = "preview")}
			aria-label="Show preview"
			aria-pressed={mode === "preview"}
		>
			<Eye class="size-3.5!" />
		</Button>
		<Button
			variant={mode === "code" ? "secondary" : "ghost"}
			size="icon"
			class="relative size-9 touch-manipulation before:absolute before:-inset-1 before:content-['']"
			onclick={() => (mode = "code")}
			aria-label="Show code"
			aria-pressed={mode === "code"}
		>
			<CodeXml class="size-3.5!" />
		</Button>
	</div>

	<span class="min-w-0 flex-1 truncate px-1 text-xs font-medium capitalize" {title}>
		{title}
	</span>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger
			class="relative flex size-9 shrink-0 touch-manipulation items-center justify-center rounded-md before:absolute before:-inset-1 before:content-[''] hover:bg-accent focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
			aria-label="More preview actions"
		>
			<Ellipsis class="size-4" />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end" class="w-56">
			<DropdownMenu.Item class="min-h-11" onSelect={openPreview}>
				<ExternalLink />
				<span>Open preview</span>
			</DropdownMenu.Item>

			{#if itemId}
				<div class="flex min-h-11 items-center justify-between gap-3 px-2 py-1.5 text-sm">
					<span>Install</span>
					<PreviewInstallAdd {itemId} class="h-11 w-20 [&_button]:h-11!" />
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
