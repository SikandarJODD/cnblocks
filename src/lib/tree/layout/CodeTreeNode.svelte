<script lang="ts">
	import {
		CSS,
		Markdown,
		Svelte as SvelteIcon,
		TypeScript,
	} from "#lib/components/icons/index.js";
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
		if (lowerName.endsWith(".md")) return "markdown";
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
	{:else if type === "markdown"}
		<Markdown class="size-3.5 shrink-0" />
	{:else}
		<File class="size-3.5 shrink-0 text-neutral-600 dark:text-zinc-400" />
	{/if}
{/snippet}

{#if node.type === "folder"}
	<div>
		<button
			type="button"
			class="flex w-full cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-1.5 text-left font-mono text-xs text-neutral-600 transition-colors [corner-shape:superellipse(1.4)] hover:bg-neutral-200/70 hover:text-neutral-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
			onclick={() => onToggleFolder(node.id)}
			aria-expanded={isOpen}
		>
			<span class="flex w-3.5 shrink-0 items-center justify-center">
				<ChevronRight
					class={cn(
						"size-3 transition-transform duration-150 ease-out",
						isOpen
							? "rotate-90 text-neutral-800 dark:text-zinc-200"
							: "text-neutral-500 dark:text-zinc-500"
					)}
				/>
			</span>
			{#if isOpen}
				<FolderOpen
					strokeWidth={1.4}
					class="size-3.5 text-neutral-700 dark:text-zinc-300"
				/>
			{:else}
				<Folder strokeWidth={1.4} class="size-3.5 text-neutral-700 dark:text-zinc-300" />
			{/if}
			<span class="truncate">{node.name}</span>
		</button>

		{#if isOpen}
			<div
				transition:slide={{ duration: 150 }}
				class="ml-3.5 border-l border-neutral-200 pl-1 dark:border-zinc-800"
			>
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
		class="flex items-center gap-1.5 rounded-md px-1.5 text-xs text-neutral-600 transition-colors hover:bg-neutral-200/70 hover:text-neutral-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
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
			"my-px flex items-center gap-1 rounded-md text-xs transition-colors [corner-shape:superellipse(1.6)]",
			activeFileId === node.id
				? "bg-neutral-200/80 text-neutral-950 dark:bg-zinc-900 dark:text-zinc-50"
				: "text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
		)}
	>
		<button
			type="button"
			class="flex min-w-0 flex-1 cursor-pointer items-center gap-1.5 px-1.5 py-1.5 text-left font-mono"
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
				class="mr-1 inline-flex size-6 shrink-0 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-neutral-300/70 hover:text-neutral-950 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
			>
				<ExternalLink class="size-3" />
			</a>
		{/if}
	</div>
{/if}
