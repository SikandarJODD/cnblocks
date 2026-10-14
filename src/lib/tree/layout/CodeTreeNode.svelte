<script lang="ts">
	import { CSS, Svelte as SvelteIcon, TypeScript } from "#lib/components/icons/index.js";
	import type { BlockCodeNode } from "#lib/tree/types.js";
	import { cn } from "#lib/utils.js";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import File from "@lucide/svelte/icons/file";
	import Folder from "@lucide/svelte/icons/folder";
	import FolderOpen from "@lucide/svelte/icons/folder-open";
	import { slide } from "svelte/transition";
	import CodeTreeNode from "./CodeTreeNode.svelte";

	interface CodeTreeNodeProps {
		node: BlockCodeNode;
		activeFileId: string;
		openFolderIds: Set<string>;
		onSelectFile: (fileId: string) => void;
		onToggleFolder: (folderId: string) => void;
	}

	let { node, activeFileId, openFolderIds, onSelectFile, onToggleFolder }: CodeTreeNodeProps =
		$props();

	let isOpen = $derived(node.type === "folder" && openFolderIds.has(node.id));
	let isExternalOnlyFile = $derived(
		node.type === "file" && Boolean(node.externalUrl) && !node.code
	);

	function fileType(name: string) {
		const lowerName = name.toLowerCase();

		if (lowerName.endsWith(".svelte")) return "svelte";
		if (lowerName.endsWith(".ts") || lowerName.endsWith(".tsx")) return "typescript";
		if (lowerName.endsWith(".css")) return "css";
		return "file";
	}
</script>

{#snippet FileIcon(name: string)}
	{@const type = fileType(name)}
	{#if type === "svelte"}
		<SvelteIcon class="size-3.5 shrink-0" />
	{:else if type === "typescript"}
		<TypeScript class="size-3.5 shrink-0" />
	{:else if type === "css"}
		<CSS class="size-3.5 shrink-0" />
	{:else}
		<File class="size-3.5 shrink-0 text-foreground/65" />
	{/if}
{/snippet}

{#if node.type === "folder"}
	<div>
		<button
			type="button"
			class="flex w-full items-center gap-1.5 rounded-md px-1.5 py-1.5 text-left font-mono text-xs text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
			onclick={() => onToggleFolder(node.id)}
			aria-expanded={isOpen}
		>
			<span class="flex w-3.5 shrink-0 items-center justify-center">
				<ChevronRight
					class={cn(
						"size-3 transition-transform duration-150 ease-out",
						isOpen ? "rotate-90 text-foreground/80" : "text-foreground/60"
					)}
				/>
			</span>
			{#if isOpen}
				<FolderOpen class="size-3.5 text-foreground/80" />
			{:else}
				<Folder class="size-3.5 text-foreground/80" />
			{/if}
			<span class="truncate">{node.name}</span>
		</button>

		{#if isOpen}
			<div transition:slide={{ duration: 150 }} class="ml-3.5 border-l border-border/60 pl-1">
				{#each node.children as child (child.id)}
					<CodeTreeNode
						node={child}
						{activeFileId}
						{openFolderIds}
						{onSelectFile}
						{onToggleFolder}
					/>
				{/each}
			</div>
		{/if}
	</div>
{:else if isExternalOnlyFile}
	<a
		href={node.externalUrl}
		target="_blank"
		rel="noreferrer"
		aria-label={`Open ${node.externalLabel ?? node.name}`}
		class="flex items-center gap-1.5 rounded-md px-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
	>
		{@render FileIcon(node.name)}
		<span class="min-w-0 flex-1 truncate py-1">{node.name}</span>
		<span class="inline-flex size-6 shrink-0 items-center justify-center rounded-md">
			<ExternalLink class="size-3" />
		</span>
	</a>
{:else}
	<div
		class={cn(
			"my-px flex items-center gap-1 rounded-md text-xs transition-colors",
			activeFileId === node.id
				? "bg-accent text-foreground"
				: "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
		)}
	>
		<button
			type="button"
			class="flex min-w-0 flex-1 items-center gap-1.5 px-1.5 py-1 text-left"
			onclick={() => onSelectFile(node.id)}
			aria-current={activeFileId === node.id ? "true" : undefined}
		>
			{@render FileIcon(node.name)}
			<span class="truncate">{node.name}</span>
		</button>

		{#if node.externalUrl}
			<a
				href={node.externalUrl}
				target="_blank"
				rel="noreferrer"
				aria-label={`Open ${node.externalLabel ?? node.name}`}
				class="mr-1 inline-flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
			>
				<ExternalLink class="size-3" />
			</a>
		{/if}
	</div>
{/if}
