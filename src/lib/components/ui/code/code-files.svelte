<script lang="ts">
	import type { WithoutChildren } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";
	import File from "@lucide/svelte/icons/file";
	import {
		CSS,
		Markdown,
		Svelte as SvelteIcon,
		TypeScript,
	} from "#lib/components/icons/index.js";
	import { cn } from "#lib/utils.js";
	import CopyButton from "../copy-button/copy-button.svelte";
	import * as Frame from "../frame/index.js";
	import * as Select from "../select/index.js";
	import Code from "./code.svelte";
	import type { CodeBlock } from "./index.js";

	type Props = {
		ref?: HTMLDivElement | null;
		files: CodeBlock[];
		value?: string;
		class?: string;
	} & WithoutChildren<HTMLAttributes<HTMLDivElement>>;

	let {
		ref = $bindable(null),
		files,
		value = $bindable(),
		class: className,
		...restProps
	}: Props = $props();

	let selectedValue = $derived(value ?? files[0]?.filename ?? "");
	let selectedFile = $derived(files.find((file) => file.filename === selectedValue) ?? files[0]);
</script>

{#snippet fileIcon(lang: CodeBlock["lang"])}
	{#if lang === "svelte"}
		<SvelteIcon class="size-3.5 shrink-0" />
	{:else if lang === "typescript"}
		<TypeScript class="size-3.5 shrink-0" />
	{:else if lang === "css"}
		<CSS class="size-3.5 shrink-0" />
	{:else if lang === "markdown"}
		<Markdown class="size-3.5 shrink-0" />
	{:else}
		<File class="size-3.5 shrink-0 text-muted-foreground" />
	{/if}
{/snippet}

<Frame.Root bind:ref class={cn("w-full p-0.5", className)} {...restProps}>
	<Frame.Header class="flex-row items-center gap-2 py-1 pr-1.5 pl-1">
		<div class="min-w-0 flex-1">
			<Select.Root
				type="single"
				items={files.map((file) => ({ value: file.filename, label: file.filename }))}
				value={selectedValue}
				onValueChange={(nextValue) => (value = nextValue)}
			>
				<Select.Trigger
					class="h-8 max-w-full border-border/60 bg-background/50 shadow-none hover:bg-background/80 focus:ring-ink/30 focus-visible:ring-ink/30 sm:w-auto sm:min-w-56 dark:focus:ring-ring dark:focus-visible:ring-ring"
				>
					<div class="flex min-w-0 items-center gap-1.5 font-mono text-xs">
						{@render fileIcon(selectedFile?.lang)}
						<span class="truncate">{selectedFile?.filename ?? "No files"}</span>
					</div>
				</Select.Trigger>
				<Select.Content align="start" class="rounded-lg">
					{#each files as file (file.filename)}
						<Select.Item value={file.filename} label={file.filename}>
							<span class="flex min-w-0 items-center gap-1.5 font-mono text-xs">
								{@render fileIcon(file.lang)}
								<span class="truncate">{file.filename}</span>
							</span>
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>

		{#if selectedFile}
			<CopyButton
				class="shrink-0"
				size="icon-xs"
				variant="ghost"
				text={selectedFile.filecode}
			/>
		{/if}
	</Frame.Header>

	<Frame.Panel class="no-scrollbar max-h-[550px] overflow-auto p-0">
		{#if selectedFile}
			<Code
				lang={selectedFile.lang ?? "svelte"}
				class="no-scrollbar w-full rounded-none border-none bg-background [&_pre]:no-scrollbar"
				code={selectedFile.filecode}
				highlight={selectedFile.highlight}
				hideLines={selectedFile.hideLines ?? false}
			/>
		{:else}
			<p class="p-4 text-sm text-muted-foreground">No code files available.</p>
		{/if}
	</Frame.Panel>
</Frame.Root>
