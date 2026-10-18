<script lang="ts">
	import type { WithoutChildren } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";
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
					class="h-8 max-w-full border-border/60 bg-background/50 shadow-none hover:bg-background/80 sm:w-auto sm:min-w-48"
				>
					<span class="truncate font-mono text-xs"
						>{selectedFile?.filename ?? "No files"}</span
					>
				</Select.Trigger>
				<Select.Content>
					{#each files as file (file.filename)}
						<Select.Item value={file.filename} label={file.filename}>
							<span class="font-mono text-xs">{file.filename}</span>
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

	<Frame.Panel class="max-h-[550px] overflow-auto p-0">
		{#if selectedFile}
			<Code
				lang={selectedFile.lang ?? "svelte"}
				class="w-full rounded-none border-none bg-background"
				code={selectedFile.filecode}
				highlight={selectedFile.highlight}
				hideLines={selectedFile.hideLines ?? false}
			/>
		{:else}
			<p class="p-4 text-sm text-muted-foreground">No code files available.</p>
		{/if}
	</Frame.Panel>
</Frame.Root>
