<script lang="ts">
	import { page } from "$app/state";
	import type { BlockCodeTree } from "#lib/tree/types.js";
	import { IsMobile } from "#lib/hooks/is-mobile.svelte.js";
	import { cn } from "#lib/utils.js";
	import Palette from "@lucide/svelte/icons/palette";
	import { Pane, PaneGroup, PaneResizer, type PaneAPI } from "paneforge";
	import { watch } from "runed";
	import type { Component } from "svelte";
	import { MediaQuery } from "svelte/reactivity";
	import { scale } from "svelte/transition";
	import Button from "#lib/components/ui/button/button.svelte";
	import DecorIcon from "./DecorIcon.svelte";
	import Separator from "#lib/components/ui/separator/separator.svelte";
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from "#lib/components/ui/tooltip/index.js";
	import CodeEditor from "./CodeEditor.svelte";
	import InstallComponent from "./InstallComponent.svelte";

	interface BlockPreviewProps {
		id: string;
		title: string;
		description?: string;
		codeTree: BlockCodeTree;
		previewComponent: Component;
		previewHref?: string;
		previewMode: "inline" | "iframe";
		previewHeight?: number;
		installId?: string;
	}

	const radioItem =
		"rounded-full duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted";

	const DEFAULT_SIZE = 100;
	const SM_SIZE = 30;
	const MD_SIZE = 62;
	const LG_SIZE = 82;
	const MIN_PREVIEW_HEIGHT = 520;

	let {
		id,
		title,
		description = "",
		codeTree,
		previewComponent: PreviewComponent,
		previewHref,
		previewMode,
		previewHeight,
		installId,
	}: BlockPreviewProps = $props();

	let width = $state(DEFAULT_SIZE);
	let mode = $state<"preview" | "code">("preview");
	let iframeHeight = $state(0);
	let isLoading = $state(true);

	let ref: PaneAPI | undefined = $state(undefined);
	let isMobile = new IsMobile();
	let large = new MediaQuery("min-width: 1024px");
	let iframeRef = $state<HTMLIFrameElement | null>(null);

	type ScopedTheme = "veil" | "mist";

	function resolveScopedTheme(pathname: string): ScopedTheme | null {
		const segments = pathname.split("/").filter(Boolean);
		const themeSegment = segments[0] === "preview" ? segments[1] : segments[0];

		return themeSegment === "veil" || themeSegment === "mist" ? themeSegment : null;
	}

	let canOpenPreview = $derived(Boolean(previewHref));
	let isHeroPreview = $derived(previewHref?.startsWith("/preview/hero/") ?? false);
	let startsInIframe = $derived(Boolean(previewHref) && previewMode === "iframe");
	let canToggleResponsivePreview = $derived(Boolean(previewHref) && previewMode === "inline");
	let showIframeComp = $state(false);
	let shouldRenderInIframe = $derived(Boolean(previewHref) && (startsInIframe || showIframeComp));
	let shouldShowIframeScrollHint = $derived(shouldRenderInIframe && isHeroPreview);
	let isLargeViewport = $derived(large.current);
	let showViewportControls = $derived(shouldRenderInIframe && !isMobile.current);
	let resolvedIframeHeight = $derived(
		Math.max(previewHeight ?? iframeHeight, MIN_PREVIEW_HEIGHT)
	);
	let activePreviewTheme = $derived(resolveScopedTheme(page.url.pathname));
	let themeSetupHref = $derived.by(() => {
		if (activePreviewTheme === "veil") {
			return "/v2-docs/veil-theme";
		}

		if (activePreviewTheme === "mist") {
			return "/v2-docs/mist-theme";
		}

		return null;
	});
	let canInstall = $derived(Boolean(installId));

	function applyIframeScrollbarStyles(
		iframe: HTMLIFrameElement | null,
		{ hideScrollbar = true }: { hideScrollbar?: boolean } = {}
	) {
		const iframeDocument = iframe?.contentDocument;
		if (!iframeDocument) return;

		iframeDocument.documentElement.classList.toggle("no-scrollbar", hideScrollbar);
		iframeDocument.body.classList.toggle("no-scrollbar", hideScrollbar);
	}

	watch(
		() => startsInIframe,
		(shouldStartInIframe) => {
			if (shouldStartInIframe && !showIframeComp) {
				showIframeComp = true;
			}
		}
	);

	watch(
		() => previewHref,
		(href) => {
			if (!href) {
				showIframeComp = false;
				isLoading = false;
			}
		}
	);
</script>

<section {id} class="group scroll-mt-10">
	<div class="relative">
		<div class="relative mx-auto max-w-7xl">
			<div class="relative border-b px-5 py-5 sm:px-6 sm:py-4 lg:px-7">
				<DecorIcon
					class="hidden size-3.5 bg-background stroke-muted-foreground/70 md:block"
					position="top-left"
				/>
				<DecorIcon
					class="z-999 hidden size-3.5 translate-x-[calc(50%)] -translate-y-[calc(50%+0.5px)] bg-background stroke-muted-foreground/70 md:block"
					position="top-right"
				/>
				<!-- <DecorIcon
					class="size-3.5 bg-background stroke-muted-foreground/40"
					position="bottom-left"
				/>
				<DecorIcon
					class="size-3.5 bg-background stroke-muted-foreground/40"
					position="bottom-right"
				/> -->

				<!-- <div class="absolute inset-x-0 top-0 h-px bg-border/70"></div>
				<div class="absolute inset-x-0 bottom-0 h-px bg-border/70"></div>
				<div
					class="pointer-events-none absolute inset-x-0 top-0 h-10 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05)_12%,transparent_24%)] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-25 dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.04)_12%,transparent_24%)]"
				></div> -->

				<div class="relative max-w-2xl">
					<div class="flex flex-wrap items-end gap-x-2 gap-y-1">
						<h2 class="text-xl font-medium tracking-tight text-foreground sm:text-xl">
							{title}
						</h2>
					</div>
					{#if description}
						<p class="mt-1.5 text-sm text-muted-foreground">
							{description}
						</p>
					{/if}
				</div>
			</div>

			<div
				class={cn(
					"relative z-40 flex flex-col gap-2 border-b px-4 py-2.5 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:px-6",
					isMobile.current && "gap-3 py-3"
				)}
			>
				<DecorIcon
					class="hidden size-3.5 bg-background stroke-muted-foreground/70 md:block"
					position="top-left"
				/>
				<DecorIcon
					class="hidden size-3.5 bg-background stroke-muted-foreground/70 md:block"
					position="top-right"
				/>
				<div
					class={cn(
						"flex min-w-0 flex-wrap items-center gap-2.5",
						isMobile.current && "gap-2"
					)}
				>
					<div class="flex w-fit items-center gap-0.5 md:-ml-3">
						<Button
							variant={mode === "preview" ? "secondary" : "ghost"}
							onclick={() => (mode = "preview")}
							class={radioItem}
							size="sm"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								class="sm:opacity-80"
								color="currentColor"
							>
								<path
									d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
									stroke="currentColor"
									stroke-width="1.5"
								></path>
								<path
									opacity="0.4"
									d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
									stroke="currentColor"
									stroke-width="1.5"
								></path>
							</svg>
							<span class="text-[13px]">Preview</span>
						</Button>

						<Button
							variant={mode === "code" ? "secondary" : "ghost"}
							onclick={() => (mode = "code")}
							size="sm"
							class={radioItem}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path class="sm:opacity-50" d="M7 8l-4 4l4 4" />
								<path class="sm:opacity-50" d="M17 8l4 4l-4 4" />
								<path d="M14 4l-4 16" />
							</svg>
							<span class="text-[13px]">Code</span>
						</Button>
					</div>

					{#if showViewportControls}
						<Separator orientation="vertical" class="hidden h-4! lg:block" />
						<span class="hidden text-sm text-muted-foreground lg:block">
							{width < MD_SIZE ? "Mobile" : width < LG_SIZE ? "Tablet" : "Desktop"}
						</span>

						<!-- {#if shouldShowIframeScrollHint}
							<span class="hidden text-sm text-muted-foreground lg:block">
								Scroll inside preview
							</span>
						{/if} -->
					{/if}
				</div>

				<div
					class={cn(
						"flex flex-wrap items-center gap-2",
						isMobile.current && "w-full gap-1.5"
					)}
				>
					{#if showViewportControls}
						<div transition:scale={{ start: 0.8 }} class="flex items-center gap-2">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										{#snippet child({ props })}
											<Button
												{...props}
												onclick={() => ref?.resize(DEFAULT_SIZE)}
												size="icon"
												class="relative h-8 w-8 cursor-pointer shadow-none"
												variant="outline"
												aria-label="Set to Desktop View"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="28"
													height="28"
													class="text-primary"
													fill="none"
												>
													<path
														d="M20.4999 16.5V8.5C20.4999 6.14298 20.4999 4.96447 19.7676 4.23223C19.0354 3.5 17.8569 3.5 15.4999 3.5H8.49988C6.14286 3.5 4.96434 3.5 4.23211 4.23223C3.49988 4.96447 3.49988 6.14298 3.49988 8.5V16.5"
														stroke="currentColor"
														stroke-width="1.5"
														stroke-opacity="0.8"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M21.9841 20.5H2.01567C1.63273 20.5 1.38367 20.1088 1.55493 19.7764L3.49988 16.5H20.4999L22.4448 19.7764C22.6161 20.1088 22.367 20.5 21.9841 20.5Z"
														stroke="currentColor"
														stroke-width="1.5"
														stroke-opacity="0.8"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</Button>
										{/snippet}
									</TooltipTrigger>
									<TooltipContent align="center" class="px-2 py-1 text-[10px]">
										Laptop
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>

							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										{#snippet child({ props })}
											<Button
												{...props}
												onclick={() => ref?.resize(MD_SIZE)}
												size="icon"
												class="relative h-8 w-8 cursor-pointer shadow-none"
												variant="outline"
												aria-label="Set to Tablet View"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="28"
													height="28"
													class="text-primary"
													fill="none"
												>
													<path
														d="M14.5 2H9.5C6.67157 2 5.25736 2 4.37868 2.87868C3.5 3.75736 3.5 5.17157 3.5 8V16C3.5 18.8284 3.5 20.2426 4.37868 21.1213C5.25736 22 6.67157 22 9.5 22H14.5C17.3284 22 18.7426 22 19.6213 21.1213C20.5 20.2426 20.5 18.8284 20.5 16V8C20.5 5.17157 20.5 3.75736 19.6213 2.87868C18.7426 2 17.3284 2 14.5 2Z"
														stroke="currentColor"
														stroke-width="1.5"
														stroke-opacity="0.8"
														stroke-linecap="round"
													></path>
													<path
														d="M12 19H12.01"
														stroke="currentColor"
														stroke-width="1.5"
														stroke-linecap="round"
													></path>
												</svg>
											</Button>
										{/snippet}
									</TooltipTrigger>
									<TooltipContent align="center" class="px-2 py-1 text-[10px]">
										Tablet
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>

							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										{#snippet child({ props })}
											<Button
												{...props}
												onclick={() => ref?.resize(SM_SIZE)}
												size="icon"
												class="relative h-8 w-8 cursor-pointer shadow-none"
												variant="outline"
												aria-label="Set to Mobile View"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="28"
													height="28"
													class="text-primary"
													fill="none"
												>
													<path
														d="M12 19H12.01"
														stroke="currentColor"
														stroke-width="2"
														stroke-opacity="0.8"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z"
														stroke="currentColor"
														stroke-width="1.5"
														stroke-opacity="0.8"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</Button>
										{/snippet}
									</TooltipTrigger>
									<TooltipContent align="center" class="px-2 py-1 text-[10px]">
										Mobile
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
					{/if}

					{#if canToggleResponsivePreview}
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									{#snippet child({ props })}
										<Button
											{...props}
											size="icon"
											onclick={() => {
												showIframeComp = !showIframeComp;
												isLoading = showIframeComp;
											}}
											class="relative h-8 w-8 cursor-pointer shadow-none"
											variant="outline"
											aria-label="Toggle Responsive UI"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="28"
												height="28"
												viewBox="0 0 24 24"
												fill="none"
											>
												<path
													d="M2 6V18C2 19.6569 3.34315 21 5 21L19 21C20.6569 21 22 19.6569 22 18V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6Z"
													class={showIframeComp
														? "fill-green-500/10 stroke-green-500"
														: "stroke-primary"}
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
												<path
													d="M10 3L10 21"
													class={showIframeComp
														? "stroke-green-500"
														: "stroke-primary"}
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
												<path
													d="M5.5 7H6.5M5.5 10H6.5"
													class={showIframeComp
														? "stroke-green-500"
														: "stroke-primary"}
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
												<path
													d="M17 10L15 12L17 14"
													class={showIframeComp
														? "stroke-green-500"
														: "stroke-primary"}
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
											</svg>
										</Button>
									{/snippet}
								</TooltipTrigger>
								<TooltipContent align="center" class="px-2 py-1 text-[10px]">
									Responsive UI
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					{/if}

					{#if canOpenPreview}
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									{#snippet child({ props })}
										<Button
											{...props}
											variant="outline"
											size="icon-sm"
											href={previewHref}
											target="_blank"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												stroke-width={1.6}
												class="size-4! sm:opacity-70"
												fill="none"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												role="img"
												color="currentColor"
											>
												<path
													d="M3 8.5V5C3 3.89543 3.89543 3 5 3H8.5M21 8.5V5C21 3.89543 20.1046 3 19 3H15.5M15.5 21H19C20.1046 21 21 20.1046 21 19V15.5M8.5 21H5C3.89543 21 3 20.1046 3 19V15.5"
													stroke="currentColor"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
											</svg>
										</Button>
									{/snippet}
								</TooltipTrigger>
								<TooltipContent align="center" class="px-2 py-1 text-[10px]">
									Open Preview in New Tab
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					{/if}

					{#if canInstall}
						<InstallComponent id={installId} class={cn(isMobile.current && "flex-1")} />
					{/if}

					{#if themeSetupHref}
						<Button
							variant="outline"
							size="sm"
							class="h-8 gap-1.5 px-3 text-xs shadow-none"
							href={themeSetupHref}
						>
							<Palette class="size-3.5" />
							<span>Theme Setup</span>
						</Button>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div class="relative">
		<div
			class="relative mx-auto max-w-7xl border-b px-4 lg:px-0"
			style={`--preview-min-height: ${MIN_PREVIEW_HEIGHT}px;`}
		>
			<div class={cn("z-40 bg-white dark:bg-background", mode === "code" && "hidden")}>
				{#if shouldRenderInIframe && previewHref}
					<PaneGroup direction="horizontal">
						<Pane
							bind:this={ref}
							id={`preview-${id}`}
							order={1}
							onResize={(size) => {
								width = Number(size);
							}}
							defaultSize={DEFAULT_SIZE}
							minSize={SM_SIZE}
							class={cn("h-fit", isLargeViewport && "border-r")}
						>
							<iframe
								loading="lazy"
								allowFullScreen
								bind:this={iframeRef}
								{title}
								height={resolvedIframeHeight}
								class="@starting:opacity-0 @starting:blur-xl no-scrollbar block h-(--iframe-height) min-h-(--preview-min-height) w-full duration-200 will-change-auto"
								src={previewHref}
								id={`block-${id}`}
								style={`--iframe-height: ${resolvedIframeHeight}px;`}
								onload={() => {
									isLoading = false;
									applyIframeScrollbarStyles(iframeRef, {
										hideScrollbar: !isHeroPreview,
									});

									if (!previewHeight) {
										const contentHeight =
											iframeRef?.contentWindow?.document.body.scrollHeight;

										if (contentHeight) {
											iframeHeight = contentHeight + 20;
										}
									} else {
										iframeHeight = previewHeight;
									}
								}}
							></iframe>

							{#if isLoading}
								<div
									class="absolute inset-0 right-2 flex items-center justify-center border-x bg-background"
								>
									<div
										class="size-6 animate-spin rounded-full border border-primary border-t-transparent"
									></div>
								</div>
							{/if}
						</Pane>

						{#if isLargeViewport}
							<PaneResizer
								class="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-zinc-400 focus:before:bg-zinc-400 dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:focus:before:bg-zinc-400"
							/>
							<Pane
								id={`preview-resizer-${id}`}
								order={2}
								defaultSize={100 - DEFAULT_SIZE}
							/>
						{/if}
					</PaneGroup>
				{:else if activePreviewTheme}
					<div data-theme={activePreviewTheme}>
						<div
							in:scale={{ start: 0.85 }}
							class="theme-container min-h-(--preview-min-height) w-full overflow-hidden"
						>
							<PreviewComponent />
						</div>
					</div>
				{:else}
					<div
						in:scale={{ start: 0.85 }}
						class="flex min-h-(--preview-min-height) w-full items-center justify-center overflow-hidden"
					>
						<PreviewComponent />
					</div>
				{/if}
			</div>

			<div class="bg-white dark:bg-transparent!">
				{#if mode === "code"}
					<CodeEditor {codeTree} />
				{/if}
			</div>
		</div>
	</div>
</section>
