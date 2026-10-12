<script lang="ts">
	import { TypeScript } from "#lib/components/icons/index.ts";
	import { Svelte, Terminal, CSS, Markdown } from "#lib/components/icons/index.ts";
	import * as Code from "#lib/components/ui/code/index.ts";
	import * as Frame from "#lib/components/ui/frame/index.ts";
	import type { CodeBlock } from "#lib/components/ui/code/index.ts";
	import CopyButton from "../copy-button/copy-button.svelte";
	import Button from "../button/button.svelte";
	import { untrack } from "svelte";

	type Props = {
		code: CodeBlock;
	};
	let { code }: Props = $props();
	let isExpanded = $state(untrack(() => code.isExpand));
	let updateIsExpanded = () => {
		isExpanded = !isExpanded;
	};
</script>

<Frame.Root class="w-full rounded-xl p-0.5">
	<Frame.Header
		class="flex-row items-center justify-between gap-2 py-0 pr-1.5 pl-4"
	>
		<div class="flex min-w-0 items-center gap-1.5">
			{#if code.lang === "svelte"}
				<Svelte />
			{:else if code.lang === "typescript"}
				<TypeScript />
			{:else if code.lang === "css"}
				<CSS />
			{:else if code.lang === "markdown"}
				<Markdown />
			{:else if code.lang === "bash"}
				<Terminal />
			{:else}
				<Svelte />
			{/if}
			<Frame.Title
				class="truncate font-mono text-xs font-medium text-primary"
			>
				{code.filename}
			</Frame.Title>
		</div>
		<div class="flex items-center gap-1 py-1">
			{#if code.isExpand}
				<Button variant="ghost" size="sm" onclick={updateIsExpanded}>
					{#if isExpanded}
						Expand
					{:else}
						Collapse
					{/if}
				</Button>
			{/if}
			<CopyButton size="icon-xs" variant='ghost' text={code.filecode} />
		</div>
	</Frame.Header>
	<Frame.Panel class="overflow-hidden p-0">
		{#if isExpanded}
			<Code.Overflow
				bind:collapsed={isExpanded}
				class="max-h-[500px] overflow-auto data-[collapsed=true]:overflow-y-hidden"
			>
				<Code.Root
					lang={code.lang || "svelte"}
					class="w-full rounded-none border-none bg-secondary"
					code={code.filecode}
					highlight={code.highlight}
					hideLines={code.hideLines ?? false}
				>
					<!-- <Code.CopyButton /> -->
				</Code.Root>
			</Code.Overflow>
		{:else}
			<div class="scroll-fade scroll-fade-b-20 no-scrollbar max-h-[600px] overflow-y-auto">
				<Code.Root
					lang={code.lang || "svelte"}
					class="h-auto w-full overflow-visible rounded-none border-none bg-background"
					code={code.filecode}
					highlight={code.highlight}
					hideLines={code.hideLines ?? false}
				></Code.Root>
			</div>
		{/if}
	</Frame.Panel>
</Frame.Root>
