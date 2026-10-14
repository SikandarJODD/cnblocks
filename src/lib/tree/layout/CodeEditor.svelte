<script lang="ts">
	import {
		collectDefaultOpenFolderIds,
		findBlockCodeFile,
		flattenBlockCodeFiles,
		type BlockCodeTree,
	} from "#lib/tree/types.js";
	import Check from "@lucide/svelte/icons/check";
	import Copy from "@lucide/svelte/icons/copy";
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import { UseClipboard } from "#lib/hooks/use-clipboard.svelte.js";
	import { scale } from "svelte/transition";
	import { untrack } from "svelte";
	import Button from "#lib/components/ui/button/button.svelte";
	import Code from "#lib/components/ui/code/code.svelte";
	import CodeTreeNode from "./CodeTreeNode.svelte";

	let { codeTree }: { codeTree: BlockCodeTree } = $props();

	let clipboard = new UseClipboard({ delay: 1500 });
	let openFolderIds = $state<Set<string>>(new Set());
	let activeFileId = $state("");

	let files = $derived(flattenBlockCodeFiles(codeTree.nodes));
	let fallbackFileId = $derived(codeTree.defaultFileId || files[0]?.id || "");
	let activeFile = $derived(findBlockCodeFile(codeTree, activeFileId) ?? files[0]);

	$effect(() => {
		const currentFileId = untrack(() => activeFileId);
		if (files.some((file) => file.id === currentFileId)) return;

		activeFileId = fallbackFileId;
		openFolderIds = new Set(collectDefaultOpenFolderIds(codeTree.nodes));
	});

	function selectFile(fileId: string) {
		activeFileId = fileId;
	}

	function toggleFolder(folderId: string) {
		const next = new Set(openFolderIds);

		if (next.has(folderId)) {
			next.delete(folderId);
		} else {
			next.add(folderId);
		}

		openFolderIds = next;
	}

	async function copyCode() {
		if (!activeFile) return;
		if (!activeFile.code) return;
		await clipboard.copy(activeFile.code);
	}
</script>

<div
	class="mx-1 flex min-h-70 flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-background sm:flex-row dark:border-muted"
>
	<div class="w-full text-neutral-950 sm:w-64 dark:text-zinc-50">
		<!-- border-b -->
		<div
			class="flex h-11 items-center gap-1.5 px-4 font-mono text-xs text-neutral-600 dark:text-zinc-400"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				><path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6.85929 1.25001C6.88904 1.25001 6.91919 1.25002 6.94976 1.25002L6.98675 1.25001C7.33818 1.24999 7.56433 1.24998 7.78542 1.27065C8.7367 1.35961 9.63905 1.73337 10.3746 2.34313C10.5456 2.48485 10.7055 2.64477 10.954 2.89329L11.5303 3.46969C12.3761 4.3154 12.7012 4.6311 13.0768 4.84005C13.2948 4.96134 13.526 5.05713 13.766 5.12552C14.1793 5.24333 14.6324 5.25002 15.8284 5.25002L16.253 5.25002C17.526 5.25 18.5521 5.24998 19.364 5.35206C20.2054 5.45784 20.9204 5.68358 21.5077 6.21185C21.6061 6.30032 21.6997 6.39394 21.7882 6.49231C22.3165 7.07965 22.5422 7.79459 22.648 8.63601C22.75 9.4479 22.75 10.4741 22.75 11.747V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4393 19.6615 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6615 22.4393 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H9.94361C8.10584 22.75 6.65021 22.75 5.51099 22.5969C4.33857 22.4393 3.38962 22.1071 2.64126 21.3588C1.8929 20.6104 1.56078 19.6615 1.40315 18.489C1.24999 17.3498 1.25 15.8942 1.25002 14.0564L1.25002 6.94976C1.25002 6.91919 1.25001 6.88904 1.25001 6.85929C1.2499 6.06338 1.24982 5.55685 1.33237 5.11935C1.6949 3.19788 3.19788 1.6949 5.11935 1.33237C5.55685 1.24982 6.06338 1.2499 6.85929 1.25001ZM6.94976 2.75002C6.03312 2.75002 5.67873 2.75329 5.39746 2.80636C4.08277 3.05441 3.05441 4.08277 2.80636 5.39746C2.75329 5.67873 2.75002 6.03312 2.75002 6.94976V14C2.75002 15.9068 2.75161 17.2615 2.88978 18.2892C3.02504 19.2953 3.27871 19.8749 3.70192 20.2981C4.12513 20.7213 4.70478 20.975 5.71087 21.1103C6.73853 21.2484 8.0932 21.25 10 21.25H14C15.9068 21.25 17.2615 21.2484 18.2892 21.1103C19.2953 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2953 21.1103 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14V11.7979C21.25 10.4621 21.2486 9.5305 21.1597 8.82312C21.0731 8.13448 20.9141 7.76356 20.6729 7.49539C20.6198 7.43637 20.5637 7.3802 20.5046 7.32712C20.2365 7.08592 19.8656 6.92692 19.1769 6.84034C18.4695 6.75141 17.538 6.75002 16.2021 6.75002H15.8284C15.7912 6.75002 15.7545 6.75002 15.7182 6.75003C14.6702 6.75025 13.9944 6.75038 13.3548 6.56806C13.0041 6.46811 12.6661 6.32811 12.3475 6.15083C11.7663 5.82747 11.2885 5.3495 10.5476 4.60833C10.522 4.58265 10.496 4.55666 10.4697 4.53035L9.91943 3.98009C9.63616 3.69682 9.52778 3.58951 9.41731 3.49793C8.91403 3.08073 8.29664 2.825 7.64576 2.76413C7.50289 2.75077 7.35038 2.75002 6.94976 2.75002ZM12.25 10C12.25 9.5858 12.5858 9.25002 13 9.25002H18C18.4142 9.25002 18.75 9.5858 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10Z"
					fill="currentColor"
				></path></svg
			>
			Files
		</div>
		<div class="no-scrollbar max-h-72 overflow-auto px-1.5 sm:max-h-172">
			{#each codeTree.nodes as node (node.id)}
				<CodeTreeNode
					{node}
					{activeFileId}
					{openFolderIds}
					onSelectFile={selectFile}
					onToggleFolder={toggleFolder}
				/>
			{/each}
		</div>
	</div>

	<div class="relative min-w-0 flex-1">
		<!-- border-b -->
		<div class="flex h-11 items-center justify-between gap-3 pr-2 pl-4">
			<p
				class="flex min-w-0 items-center gap-1.5 truncate font-mono text-xs text-muted-foreground"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					><path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.25 2.83422C11.7896 2.75598 11.162 2.75005 10.0298 2.75005C8.11311 2.75005 6.75075 2.75163 5.71785 2.88987C4.70596 3.0253 4.12453 3.27933 3.7019 3.70195C3.27869 4.12516 3.02502 4.70481 2.88976 5.7109C2.75159 6.73856 2.75 8.09323 2.75 10.0001V14.0001C2.75 15.9069 2.75159 17.2615 2.88976 18.2892C3.02502 19.2953 3.27869 19.8749 3.7019 20.2981C4.12511 20.7214 4.70476 20.975 5.71085 21.1103C6.73851 21.2485 8.09318 21.2501 10 21.2501H14C15.9068 21.2501 17.2615 21.2485 18.2892 21.1103C19.2952 20.975 19.8749 20.7214 20.2981 20.2981C20.7213 19.8749 20.975 19.2953 21.1102 18.2892C21.2484 17.2615 21.25 15.9069 21.25 14.0001V13.5629C21.25 12.0269 21.2392 11.2988 21.0762 10.7501H17.9463C16.8135 10.7501 15.8877 10.7501 15.1569 10.6518C14.3929 10.5491 13.7306 10.3268 13.2019 9.79815C12.6732 9.26945 12.4509 8.60712 12.3482 7.84317C12.25 7.1123 12.25 6.18657 12.25 5.05374V2.83422ZM13.75 3.6095V5.00005C13.75 6.19976 13.7516 7.0241 13.8348 7.64329C13.9152 8.24091 14.059 8.53395 14.2626 8.73749C14.4661 8.94103 14.7591 9.08486 15.3568 9.16521C15.976 9.24846 16.8003 9.25005 18 9.25005H20.0195C19.723 8.9625 19.3432 8.61797 18.85 8.17407L14.8912 4.61117C14.4058 4.17433 14.0446 3.85187 13.75 3.6095ZM10.1755 1.25002C11.5601 1.24965 12.4546 1.24942 13.2779 1.56535C14.1012 1.88129 14.7632 2.47735 15.7873 3.39955C15.8226 3.43139 15.8584 3.46361 15.8947 3.49623L19.8534 7.05912C19.8956 7.09705 19.9372 7.1345 19.9783 7.17149C21.162 8.23614 21.9274 8.92458 22.3391 9.84902C22.7508 10.7734 22.7505 11.8029 22.75 13.3949C22.75 13.4502 22.75 13.5062 22.75 13.5629V14.0565C22.75 15.8942 22.75 17.3499 22.5969 18.4891C22.4392 19.6615 22.1071 20.6104 21.3588 21.3588C20.6104 22.1072 19.6614 22.4393 18.489 22.5969C17.3498 22.7501 15.8942 22.7501 14.0564 22.7501H9.94359C8.10583 22.7501 6.65019 22.7501 5.51098 22.5969C4.33856 22.4393 3.38961 22.1072 2.64124 21.3588C1.89288 20.6104 1.56076 19.6615 1.40314 18.4891C1.24997 17.3499 1.24998 15.8942 1.25 14.0565V9.94363C1.24998 8.10587 1.24997 6.65024 1.40314 5.51103C1.56076 4.33861 1.89288 3.38966 2.64124 2.64129C3.39019 1.89235 4.34232 1.56059 5.51887 1.40313C6.66283 1.25002 8.1257 1.25003 9.97352 1.25005L10.0298 1.25005C10.0789 1.25005 10.1275 1.25004 10.1755 1.25002Z"
						fill="currentColor"
					></path><path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.2633 13.2978C10.6512 13.4432 10.8477 13.8756 10.7022 14.2634L9.20225 18.2634C9.05681 18.6512 8.6245 18.8477 8.23666 18.7023C7.84882 18.5569 7.65231 18.1245 7.79775 17.7367L9.29775 13.7367C9.44319 13.3489 9.8755 13.1524 10.2633 13.2978ZM7.53033 13.4697C7.82322 13.7626 7.82322 14.2375 7.53033 14.5304L7.06066 15L7.53033 15.4697C7.82322 15.7626 7.82322 16.2375 7.53033 16.5304C7.23744 16.8233 6.76256 16.8233 6.46967 16.5304L5.46967 15.5304C5.17678 15.2375 5.17678 14.7626 5.46967 14.4697L6.46967 13.4697C6.76256 13.1768 7.23744 13.1768 7.53033 13.4697ZM10.9697 15.4697C11.2626 15.1768 11.7374 15.1768 12.0303 15.4697L13.0303 16.4697C13.3232 16.7626 13.3232 17.2375 13.0303 17.5304L12.0303 18.5304C11.7374 18.8233 11.2626 18.8233 10.9697 18.5304C10.6768 18.2375 10.6768 17.7626 10.9697 17.4697L11.4393 17L10.9697 16.5304C10.6768 16.2375 10.6768 15.7626 10.9697 15.4697Z"
						fill="currentColor"
					></path></svg
				>
				{activeFile?.name ?? "No file selected"}
			</p>

			<div class="flex items-center gap-1">
				{#if activeFile?.externalUrl}
					<Button
						class="h-8 gap-1.5 px-3 text-xs"
						variant="outline"
						size="sm"
						href={activeFile.externalUrl}
						target="_blank"
					>
						<ExternalLink class="size-3.5" />
						<span>{activeFile.externalLabel ?? "Open docs"}</span>
					</Button>
				{/if}

				{#if activeFile?.code}
					<Button
						class="h-8 w-8 shrink-0"
						variant="ghost"
						size="icon"
						type="button"
						onclick={copyCode}
					>
						{#if clipboard.status === "success"}
							<span in:scale>
								<Check class="!size-3.5 text-[#10B981]" />
							</span>
						{:else}
							<span in:scale>
								<Copy class="!size-3.5 opacity-50" />
							</span>
						{/if}
					</Button>
				{/if}
			</div>
		</div>

		<div
			data-code-overflow
			class="mr-0.5 mb-0.5 no-scrollbar max-h-172 overflow-y-auto overscroll-contain rounded-2xl"
		>
			{#if activeFile?.code}
				<Code
					class="h-auto scroll-fade overflow-visible rounded-none border-none bg-transparent! [&_pre.shiki]:rounded-none! [&_pre.shiki]:bg-muted! dark:[&_pre.shiki]:bg-muted/50!"
					code={activeFile.code}
					lang={activeFile.lang}
					highlight={activeFile.highlight}
				/>
			{:else if activeFile?.externalUrl}
				<div class="flex min-h-[20rem] items-center justify-center px-6">
					<div class="max-w-md text-center">
						<p class="text-sm font-medium text-foreground">
							{activeFile.externalLabel ?? activeFile.name}
						</p>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">
							This base UI component is referenced from its original source instead of
							being duplicated here.
						</p>
						<div class="mt-4 flex justify-center">
							<Button
								href={activeFile.externalUrl}
								target="_blank"
								variant="outline"
								size="sm"
							>
								<ExternalLink class="size-3.5" />
								<span>Open component docs</span>
							</Button>
						</div>
					</div>
				</div>
			{:else}
				<div
					class="flex h-full min-h-[20rem] items-center justify-center px-6 text-sm text-muted-foreground"
				>
					No code files are available for this block yet.
				</div>
			{/if}
		</div>
	</div>
</div>
