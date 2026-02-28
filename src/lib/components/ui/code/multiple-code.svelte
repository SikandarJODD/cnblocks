<script lang="ts">
	import type { Snippet } from "svelte";
	import * as Code from "./index";
	import type { CodeBlock as MagicCode } from "./index";
	import { ChevronDown } from "@lucide/svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";
	import { Svelte, TypeScript, Terminal } from "$lib/components/icons";
	type Props = {
		code: MagicCode[];
	};
	let { code }: Props = $props();
	let selectedIndex = $state(0);
	let selectedCode = $derived(code[selectedIndex]);
</script>

<div class="flex overflow-auto rounded-md border">
	<div
		class="hidden min-w-66 overflow-auto rounded-tl-md border-r bg-neutral-50 font-mono text-black [--color-background:var(--color-zinc-900)] [--color-foreground:white] [--color-muted:var(--color-zinc-800)] sm:block dark:bg-zinc-900/25 dark:text-white"
	>
		<div>
			<div
				class="dark:hover:bg-muted/50 flex items-center gap-1.5 py-2 pr-5.5 pl-4 font-mono text-xs hover:bg-white/5"
			>
				<!-- <ChevronDown class="size-4 opacity-50" /> -->
				<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 16 16">
					<path
						fill="none"
						stroke="#cad3f5"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
						stroke-width={1}
					></path>
					<path
						fill="none"
						stroke="#a6da95"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8 10.278c0-.576.468-1.044 1.044-1.044h1.045v-.19a1.044 1.044 0 0 1 2.088 0v.19h1.045c.576 0 1.044.468 1.044 1.044v1.045h.19a1.044 1.044 0 1 1 0 2.088h-.19v1.045c0 .576-.468 1.044-1.044 1.044h-1.045v-.19a1.044 1.044 0 1 0-2.088 0v.19H8v-2.089h.19a1.044 1.044 0 0 0 0-2.088H8Z"
						stroke-width={1}
					></path>
				</svg>
				<span>components</span>
			</div>

			{#each code as item, index}
				<Button
					class={cn(
						`flex w-full items-center justify-start gap-1.5 rounded-none border-l-2 border-transparent pl-6! text-xs hover:bg-neutral-200/70 hover:dark:bg-zinc-900 [&_svg:not([class*='size-'])]:size-3`,
						selectedIndex === index &&
							"border-muted-foreground border-l-2 bg-neutral-200/40 dark:bg-zinc-800/50"
					)}
					variant="ghost"
					onclick={() => (selectedIndex = index)}
				>
					{#if item.lang === "svelte"}
						<Svelte class="size-3" />
					{:else if item.lang === "typescript"}
						<TypeScript class="size-3" />
					{:else}
						<Terminal class="size-3" />
					{/if}
					<span
						class={[
							"transition-all duration-200",
							selectedIndex === index
								? "!text-black dark:!text-white"
								: "text-muted-foreground",
						]}>{item?.filename || "Svelte"}</span
					>
				</Button>
			{/each}
		</div>
	</div>
	<div class="relative max-h-[550px] min-h-[32rem] w-full overflow-auto border-none sm:w-full">
		<!-- <Code.Overflow> -->
		<Code.Root
			lang={selectedCode.lang}
			class="w-full rounded-none border-none "
			code={selectedCode.filecode}
			highlight={selectedCode.highlight}
			hideLines={selectedCode.hideLines}
		>
			<Code.CopyButton />
		</Code.Root>
		<!-- </Code.Overflow> -->
	</div>
</div>
