<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import type { Snippet } from "svelte";
	import type { SupportedLanguage } from "$lib/components/ui/code/shiki";
	import type { CodeBlock as MagicCode } from "$lib/components/ui/code/index";
	import MultipleCode from "$lib/components/ui/code/multiple-code.svelte";
	import SingleCodeFilename from "../code/single-code-filename.svelte";
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";

	interface PreviewComponentProps {
		children: Snippet;
		code?: MagicCode | MagicCode[];
		lang?: SupportedLanguage;
		showRetry?: boolean;
		isCentered?: boolean;
		class?: string;
	}

	let {
		code,
		children,
		lang = "svelte",
		showRetry = true,
		isCentered = true,
		class: className = "",
	}: PreviewComponentProps = $props();

	type TabValue = "preview" | "code";
	let value: TabValue = $state("preview");
	let retryKey = $state(0);

	function handleRetry() {
		retryKey += 1;
	}
</script>

<div class="mt-2 w-full">
	<Tabs.Root bind:value>
		<Tabs.List class="bg-transparent">
			<Tabs.Trigger
				value="preview"
				class="border-none bg-transparent! pl-0 text-base shadow-none! "
			>
				Preview
			</Tabs.Trigger>
			<Tabs.Trigger
				value="code"
				class="group border-none bg-transparent! text-base shadow-none! "
			>
				Code
			</Tabs.Trigger>
		</Tabs.List>
	</Tabs.Root>
	<div class="mt-1" data-toc-ignore>
		{#if value === "preview"}
			<!-- <ComponentView> -->
			<div
				class={cn(
					"border-border relative flex min-h-64 w-full overflow-hidden rounded-lg border p-6",
					isCentered ? "items-center justify-center" : "",
					className
				)}
			>
				{#if showRetry && value === "preview"}
					<Button
						variant="secondary"
						size="icon"
						onclick={handleRetry}
						class="absolute top-1.5 right-1.5 z-30"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-rotate-cw-icon lucide-rotate-cw"
							><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path
								d="M21 3v5h-5"
							/></svg
						>
					</Button>
				{/if}
				{#key retryKey}
					{#if children}
						{@render children?.()}
					{:else}
						<p class="text-muted-foreground">
							No component provided. Please provide a component to render.
						</p>
					{/if}
				{/key}
			</div>
		{:else if value === "code"}
			<div>
				{#if Array.isArray(code)}
					<MultipleCode {code} />
				{:else if code}
					<SingleCodeFilename {code} />
				{/if}
			</div>
		{/if}
	</div>
</div>
