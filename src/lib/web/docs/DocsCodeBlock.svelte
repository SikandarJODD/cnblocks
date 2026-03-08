<script lang="ts">
	import { UseClipboard } from "$lib/hooks/use-clipboard.svelte";
	import { cn } from "$lib/utils";
	import CodeIcon from "@lucide/svelte/icons/code";
	// import TerminalIcon from "@lucide/svelte/icons/terminal";
	import { Svelte, Terminal, CSS, TypeScript } from "$lib/components/icons";
	import CheckIcon from "@lucide/svelte/icons/check";
	import CopyIcon from "@lucide/svelte/icons/copy";

	type CodeBlockProps = {
		code: string;
		fileName?: string;
		lang?: SupportedLanguage | "ts" | "js" | "md";
		class?: string;
	};
	let { code = "", fileName = "", lang = "bash", class: _class = "" }: CodeBlockProps = $props();

	const normalizedLang: SupportedLanguage = $derived(
		lang === "ts"
			? "typescript"
			: lang === "js"
				? "javascript"
				: lang === "md"
					? "markdown"
					: lang
	);
	let copyCode = new UseClipboard({ delay: 1000 });
	let handleCopy = async () => {
		await copyCode.copy(code);
	};

	// import { codeToHtml } from "shiki";
	// import { onMount } from "svelte";
	import Code from "$lib/components/web/code/code.svelte";
	import type { SupportedLanguage } from "$lib/components/web/code/shiki";
	import { scale } from "svelte/transition";

	// let htmlCode = $state("");
	// onMount(async () => {
	//   htmlCode = await codeToHtml(code, {
	//     lang: lang,
	//     themes: {
	//       dark: "github-light",
	//       light: "github-light",
	//     },
	//   });
	// });
</script>

<div
	class={cn(
		"relative overflow-hidden rounded-xl border border-neutral-300/50 bg-neutral-200/30 dark:border-neutral-800/60 dark:bg-neutral-900/40",
		_class
	)}
>
	{#if fileName}
		<div
			class="flex h-10 items-center justify-between border-b border-neutral-300/50 bg-neutral-200/30 pr-2.5 pl-4 dark:border-neutral-800/60 dark:bg-neutral-900/30"
		>
			<div class="flex items-center gap-2">
				{#if lang === "bash"}
					<Terminal />
				{:else if lang === "svelte"}
					<Svelte />
				{:else if lang === "css"}
					<CSS />
				{:else if lang === "ts" || lang === "typescript"}
					<TypeScript />
				{:else}
					<CodeIcon size={14} class="text-neutral-500 dark:text-neutral-600" />
				{/if}
				<span class="text-[13px] leading-none font-medium text-neutral-500">
					{fileName}
				</span>
			</div>
			<!-- <CopyCode code={code} /> -->
			<button
				onclick={handleCopy}
				class="relative flex h-7 w-7 items-center justify-center rounded-md text-foreground outline-none focus-visible:ring-1 dark:text-neutral-500 dark:focus-visible:ring-neutral-800"
			>
				{#if copyCode.status === "success"}
					<span in:scale={{ start: 0.6 }}>
						<CheckIcon size={14} />
					</span>
				{:else}
					<span in:scale={{ start: 0.6 }}>
						<CopyIcon size={14} />
					</span>
				{/if}
			</button>
		</div>
	{/if}
	<!-- <div
    class="relative overflow-x-auto p-4 [&_pre]:!bg-transparent [&_code]:text-sm"
  >
    {@html htmlCode}
  </div> -->
	<div>
		<Code class="border-none no-scrollbar [&_pre]:no-scrollbar" {code} lang={normalizedLang} hideLines={true} />
	</div>
</div>
