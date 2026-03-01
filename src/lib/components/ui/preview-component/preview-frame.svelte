<script lang="ts">
	import type { Snippet } from "svelte";
	import * as Frame from "$lib/components/ui/frame/index.js";
	import { Button } from "$lib/components/ui/button";
	import type { CodeBlock } from "$lib/components/ui/code";
	import MultipleCode from "$lib/components/ui/code/multiple-code.svelte";
	import SingleCodeFilename from "$lib/components/ui/code/single-code-filename.svelte";
	import { UseClipboard } from "$lib/hooks/use-clipboard.svelte";
	import { cn } from "$lib/utils";
	import Eye from "@lucide/svelte/icons/eye";
	import CodeXml from "@lucide/svelte/icons/code-xml";
	import Terminal from "@lucide/svelte/icons/terminal";
	import Check from "@lucide/svelte/icons/check";
	import Info from "@lucide/svelte/icons/info";
	import Maximize from "@lucide/svelte/icons/maximize";

	interface PreviewFrameProps {
		children: Snippet;
		componentName: string;
		installCommand: string;
		code?: CodeBlock | CodeBlock[];
		previewHref?: string;
		openPreviewInNewTab?: boolean;
		showFullscreenButton?: boolean;
		themeSetupHref?: string;
		themeSetupText?: string;
		class?: string;
		panelClass?: string;
	}

	let {
		children,
		componentName,
		installCommand,
		code,
		previewHref,
		openPreviewInNewTab = true,
		showFullscreenButton = Boolean(previewHref),
		themeSetupHref = "/docs/installation",
		themeSetupText = "Need theme tweaks? Follow the theme setup guide.",
		class: className = "",
		panelClass = "",
	}: PreviewFrameProps = $props();

	type PreviewMode = "preview" | "code";
	let mode: PreviewMode = $state("preview");
	let hasCode = $derived(Boolean(code));
	const clipboard = new UseClipboard({ delay: 1500 });
</script>

<div class={cn("mt-2 w-full", className)} data-toc-ignore>
	<Frame.Root>
		<Frame.Panel class="overflow-hidden p-0">
			<Frame.Header class="border-b px-3 py-2.5 sm:px-4">
				<div class="flex flex-wrap items-center justify-between gap-2.5">
					<div class="min-w-0 space-y-0.5">
						<Frame.Title class="truncate text-sm font-medium">{componentName}</Frame.Title>
						<Frame.Description class="text-[11px]">Component preview and install</Frame.Description>
					</div>
					<div class="flex items-center gap-1.5">
						{#if hasCode}
							<div class="bg-muted/60 inline-flex items-center gap-0.5 rounded-md border p-0.5">
								<Button
									variant={mode === "preview" ? "secondary" : "ghost"}
									size="sm"
									class="h-7 px-2.5"
									onclick={() => (mode = "preview")}
									aria-label="Show preview"
								>
									<Eye class="size-3.5" />
								</Button>
								<Button
									variant={mode === "code" ? "secondary" : "ghost"}
									size="sm"
									class="h-7 px-2.5"
									onclick={() => (mode = "code")}
									aria-label="Show code"
								>
									<CodeXml class="size-3.5" />
								</Button>
							</div>
						{/if}

						<Button
							variant="outline"
							size="sm"
							class="h-7 max-w-[18rem] gap-1.5 px-2.5"
							onclick={() => clipboard.copy(installCommand)}
							aria-label="Copy installation command"
						>
							{#if clipboard.status === "success"}
								<Check class="size-3.5 text-[#10B981]" />
							{:else}
								<Terminal class="size-3.5" />
							{/if}
							<span class="font-mono text-xs truncate">{installCommand}</span>
						</Button>

						{#if previewHref && showFullscreenButton}
							<Button
								variant="outline"
								size="sm"
								class="h-7 w-7 p-0"
								href={previewHref}
								target={openPreviewInNewTab ? "_blank" : undefined}
								rel={openPreviewInNewTab ? "noopener noreferrer" : undefined}
								aria-label="Open fullscreen preview"
							>
								<Maximize class="size-3.5" />
							</Button>
						{/if}
					</div>
				</div>
			</Frame.Header>

			{#if mode === "preview" || !hasCode}
				<div class={cn("bg-background min-h-64 w-full p-3 sm:p-4", panelClass)}>
					{#if children}
						{@render children?.()}
					{:else}
						<p class="text-muted-foreground text-sm leading-relaxed">
							No component provided. Please provide a component to render.
						</p>
					{/if}
				</div>
			{:else}
				<div class="bg-background p-3 sm:p-4">
					{#if Array.isArray(code)}
						<MultipleCode {code} />
					{:else if code}
						<SingleCodeFilename {code} />
					{/if}
				</div>
			{/if}

			<Frame.Footer class="border-t bg-muted/20 px-3 py-2 sm:px-4">
				<a
					href={themeSetupHref}
					class="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-xs transition-colors"
				>
					<Info class="size-3.5" />
					<span>{themeSetupText}</span>
				</a>
			</Frame.Footer>
		</Frame.Panel>
	</Frame.Root>
</div>
