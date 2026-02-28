<script lang="ts">
	import { TypeScript } from "$lib/components/icons";
	import { Svelte, Terminal, CSS, Markdown } from "$lib/components/icons";
	import * as Code from "$lib/components/ui/code";
	import type { CodeBlock as MagicCode } from "$lib/components/ui/code/index";
	import CopyButton from "../copy-button/copy-button.svelte";

	type Props = {
		code: MagicCode;
	};
	let { code }: Props = $props();
</script>

<div class="w-full">
	<div class="border-border overflow-hidden rounded-lg border">
		<div class="border-border flex items-center justify-between border-b py-1 pr-1 pl-4">
			<div class="flex items-center gap-1.5">
				{#if code.lang === "svelte"}
					<Svelte />
				{:else if code.lang === "typescript"}
					<TypeScript />
				{:else if code.lang === "css"}
					<CSS />
				{:else if code.lang === "markdown"}
					<Markdown />
				{:else}
					<Terminal />
				{/if}
				<span class="text-sm font-normal">{code.filename}</span>
			</div>
			<div>
				<CopyButton text={code.filecode} />
			</div>
		</div>
		{#if code.isExpand}
			<Code.Overflow collapsed={true}>
				<Code.Root
					lang={code.lang}
					class="w-full rounded-none border-none"
					code={code.filecode}
					highlight={code.highlight}
					hideLines={code.hideLines}
				>
					<!-- <Code.CopyButton /> -->
				</Code.Root>
			</Code.Overflow>
		{:else}
			<Code.Root
				lang={code.lang}
				class="w-full rounded-none border-none"
				code={code.filecode}
				highlight={code.highlight}
				hideLines={code.hideLines}
			></Code.Root>
		{/if}
	</div>
</div>
