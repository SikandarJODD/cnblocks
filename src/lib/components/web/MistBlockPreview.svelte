<script lang="ts">
	import { page } from "$app/state";
	import { cn } from "#lib/utils.js";
	import Separator from "../ui/separator/separator.svelte";
	import Button from "../ui/button/button.svelte";
	import Maximize from "@lucide/svelte/icons/maximize";
	import Palette from "@lucide/svelte/icons/palette";
	import PreviewInstallAdd from "./PreviewInstallAdd.svelte";
	import ImportAliasToggle from "./ImportAliasToggle.svelte";
	import { transformCodeImports, type ImportAliasStyle } from "./import-alias";
	import { CopyButton } from "../ui/copy-button";
	import { scale } from "svelte/transition";
	import { onDestroy, type Component } from "svelte";
	import { PersistedState, watch } from "runed";
	import MobileBlockPreviewToolbar from "./MobileBlockPreviewToolbar.svelte";

	interface BlockPreviewProps {
		itemId?: string;
		code: MistCode | MistCode[];
		preview: string;
		previewMode?: "inline" | "iframe";
		title: string;
		category: string;
		previewOnly?: boolean;
		slug?: string;
		component: Component;
	}

	export interface MistCode {
		name?: string;
		code: string;
		lang?: SupportedLanguage;
		highlight?: (number | [number, number])[];
	}

	let {
		itemId,
		code,
		preview,
		previewMode = "inline",
		title = "Hero Section",
		category = "Components",
		slug,
		previewOnly,
		component: BlockComponent,
	}: BlockPreviewProps = $props();

	const radioItem =
		"rounded-(--radius) duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted";

	const DEFAULT_SIZE = 100;
	const SM_SIZE = 30;
	const MD_SIZE = 62;
	const LG_SIZE = 82;
	const MAX_IFRAME_HEIGHT = 1200;

	let width = $state(DEFAULT_SIZE);
	let mode = $state<"preview" | "code">("preview");
	let iframeHeight = $state(0);
	let isLoading = $state(true);
	let importAliasStyle = new PersistedState<ImportAliasStyle>(
		"sveltekit-import-alias-style",
		"dollar"
	);
	let displayedCode = $derived(transformCodeImports(code, importAliasStyle.current));

	let iframeRef = $state<HTMLIFrameElement | null>(null);
	let iframeResizeObserver: ResizeObserver | undefined;
	let removeIframeWheelListener: (() => void) | undefined;

	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from "#lib/components/ui/tooltip/index.js";
	import CodeEditor from "./CodeEditor.svelte";
	import type { SupportedLanguage } from "../ui/code/shiki";

	type ScopedTheme = "veil" | "mist";

	function resolveScopedTheme(): ScopedTheme | null {
		let pathname = page.url.pathname.toString();
		const segments = pathname.split("/").filter(Boolean);
		const themeSegment = segments[0] === "preview" ? segments[1] : segments[0];

		return themeSegment === "veil" || themeSegment === "mist" ? themeSegment : null;
	}

	let showIframeComp = $derived(previewMode === "iframe");
	let forcesIframe = $derived(previewMode === "iframe");
	let shouldRenderInIframe = $derived(forcesIframe || showIframeComp);
	let activePreviewTheme = $derived(resolveScopedTheme());
	let themeSetupHref = $derived(
		activePreviewTheme === "veil" ? "/docs/veil-theme" : "/docs/mist-theme"
	);

	function setPreviewWidth(size: number) {
		width = size;
		iframeHeight = 0;
	}

	function cleanupIframe() {
		iframeResizeObserver?.disconnect();
		iframeResizeObserver = undefined;
		removeIframeWheelListener?.();
		removeIframeWheelListener = undefined;
	}

	function setupIframeAutoHeight(iframe: HTMLIFrameElement | null) {
		const iframeDocument = iframe?.contentDocument;
		const iframeWindow = iframe?.contentWindow;
		if (!iframeDocument || !iframeWindow) return;

		cleanupIframe();

		iframeDocument.documentElement.classList.add("no-scrollbar");
		iframeDocument.body.classList.add("no-scrollbar");
		iframeDocument.documentElement.style.overflow = "hidden";
		iframeDocument.body.style.overflow = "hidden";

		const syncHeight = () => {
			const contentHeight = Math.min(
				iframeDocument.documentElement.scrollHeight,
				MAX_IFRAME_HEIGHT
			);
			if (contentHeight > 0 && contentHeight !== iframeHeight) {
				iframeHeight = contentHeight;
			}
		};

		iframeResizeObserver = new ResizeObserver(syncHeight);
		iframeResizeObserver.observe(iframeDocument.documentElement);
		iframeResizeObserver.observe(iframeDocument.body);

		const forwardWheelToPage = (event: WheelEvent) => {
			if (event.ctrlKey) return;

			const multiplier =
				event.deltaMode === WheelEvent.DOM_DELTA_LINE
					? 16
					: event.deltaMode === WheelEvent.DOM_DELTA_PAGE
						? window.innerHeight
						: 1;

			event.preventDefault();
			window.scrollBy(event.deltaX * multiplier, event.deltaY * multiplier);
		};

		iframeWindow.addEventListener("wheel", forwardWheelToPage, { passive: false });
		removeIframeWheelListener = () =>
			iframeWindow.removeEventListener("wheel", forwardWheelToPage);
		syncHeight();
	}

	onDestroy(cleanupIframe);

	watch(
		() => forcesIframe,
		(isForced) => {
			if (isForced && !showIframeComp) {
				showIframeComp = true;
			}
		}
	);

	watch(
		() => shouldRenderInIframe,
		(isRendered) => {
			if (!isRendered) cleanupIframe();
		}
	);
</script>

<section
	id="{category}-{title}"
	class="group w-full min-w-0 max-w-full overflow-hidden"
>

	<div class="relative mx-2 my-1.5 min-w-0 overflow-hidden rounded-xl border border-muted dark:border-muted/50">
		<div
			class="relative z-10  hidden  justify-between py-1.5 pr-6 pl-8 md:flex md:py-2 lg:pr-2 lg:pl-2 "
		>
			<div class=" flex items-center gap-2">
				{#if code}
					<div class="flex gap-0.5">
						<Button
							variant={mode === "preview" ? "secondary" : "ghost"}
							onclick={() => (mode = "preview")}
							class={radioItem}
							size="sm"
						>
							<!-- <Eye class="size-3 sm:opacity-50" /> -->
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
							<span class="hidden text-[13px] sm:block">Preview</span>
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
								><path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path class="sm:opacity-50" d="M7 8l-4 4l4 4" />
								<path
									class="sm:opacity-50"
									stroke="currentColor"
									d="M17 8l4 4l-4 4"
								/>
								<path d="M14 4l-4 16" /></svg
							>
							<span class="hidden text-[13px] sm:block">Code</span>
						</Button>
					</div>
					<Separator orientation="vertical" class="hidden  lg:block" />
				{/if}
				<Button variant="ghost" class="size-8" href={preview} target="_blank">
					<Maximize strokeWidth={1.6} class="size-4! sm:opacity-70" />
				</Button>
				<Separator orientation="vertical" class="hidden lg:block" />
				<span class="hidden text-sm text-muted-foreground lg:block"
					>{width < MD_SIZE ? "Mobile" : width < LG_SIZE ? "Tablet" : "Desktop"}</span
				>
				<!-- {#if previewOnly} -->
				<Separator orientation="vertical"  />
				<span class="ml-0 text-sm capitalize">{title}</span>
				<!-- {/if} -->
			</div>

			<div class="flex items-center gap-2">
				{#if shouldRenderInIframe}
					<div transition:scale={{ start: 0.8 }}>
						<!-- Laptop Icon -->
						<TooltipProvider delayDuration={100}>
							<Tooltip>
								<TooltipTrigger
									><Button
										onclick={() => setPreviewWidth(DEFAULT_SIZE)}
										size="icon"
										class="relative  h-8 w-8 cursor-pointer shadow-none"
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
									</Button></TooltipTrigger
								>
								<TooltipContent align="center" class="px-2 py-1 text-[10px]"
									>Laptop</TooltipContent
								>
							</Tooltip>
						</TooltipProvider>

						<!-- Table Icon -->
						<TooltipProvider delayDuration={100}>
							<Tooltip>
								<TooltipTrigger>
									<Button
										onclick={() => setPreviewWidth(MD_SIZE)}
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
									</Button></TooltipTrigger
								>
								<TooltipContent align="center" class="px-2 py-1 text-[10px]"
									>Tablet</TooltipContent
								>
							</Tooltip>
						</TooltipProvider>

						<!-- Phone Icon -->
						<TooltipProvider delayDuration={100}>
							<Tooltip>
								<TooltipTrigger
									><Button
										onclick={() => setPreviewWidth(SM_SIZE)}
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
									</Button></TooltipTrigger
								>
								<TooltipContent align="center" class="px-2 py-1 text-[10px]"
									>Mobile</TooltipContent
								>
							</Tooltip>
						</TooltipProvider>
					</div>
				{/if}
				{#if !forcesIframe}
					<TooltipProvider delayDuration={120}>
						<Tooltip>
							<TooltipTrigger>
								<Button
									size="icon"
									onclick={() => {
										showIframeComp = !showIframeComp;
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
							</TooltipTrigger>
							<TooltipContent align="center" class="px-2 py-1 text-[10px]"
								>Responsive UI</TooltipContent
							>
						</Tooltip>
					</TooltipProvider>
				{/if}
				{#if code}
					{#if mode === "code"}
						<ImportAliasToggle bind:value={importAliasStyle.current} />
						<Separator  orientation="vertical" />
					{/if}
					<PreviewInstallAdd {itemId} />
					<Button
						variant="outline"
						size="sm"
						class="h-8 gap-1.5 px-3 text-xs shadow-none"
						href={themeSetupHref}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							role="img"
							color="currentColor"
						>
							<path
								d="M20.7906 9.15201C21.5969 10.5418 22 11.2366 22 12C22 12.7634 21.5969 13.4582 20.7906 14.848L18.8669 18.1638C18.0638 19.548 17.6623 20.2402 17.0019 20.6201C16.3416 21 15.5402 21 13.9373 21L10.0627 21C8.45982 21 7.6584 21 6.99807 20.6201C6.33774 20.2402 5.93619 19.548 5.13311 18.1638L3.20942 14.848C2.40314 13.4582 2 12.7634 2 12C2 11.2366 2.40314 10.5418 3.20942 9.152L5.13311 5.83621C5.93619 4.45196 6.33774 3.75984 6.99807 3.37992C7.6584 3 8.45982 3 10.0627 3L13.9373 3C15.5402 3 16.3416 3 17.0019 3.37992C17.6623 3.75984 18.0638 4.45197 18.8669 5.83622L20.7906 9.15201Z"
								stroke="currentColor"
								stroke-width="1.5"
							></path>
							<path
								opacity="0.4"
								d="M9 8L15 16"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
							></path>
						</svg>
						<span>Theme Setup</span>
					</Button>

					{#if !Array.isArray(displayedCode)}
						<Separator  orientation="vertical" />

						<CopyButton text={displayedCode.code} />
					{/if}
				{/if}
			</div>
		</div>
		<MobileBlockPreviewToolbar bind:mode {title} {preview} {itemId} code={displayedCode} />
	</div>

	<div class="relative min-w-0 max-w-full overflow-hidden">
		<div class="relative z-10 min-w-0 max-w-full overflow-hidden px-0 lg:px-0">
			<div class={cn("bg-white dark:bg-transparent mx-1 rounded-2xl border border-transparent dark:border-muted overflow-hidden", mode === "code" && "hidden")}>
				{#if shouldRenderInIframe}
					<div
						class="h-fit"
						style:width={`${width}%`}
					>
						<iframe
							loading="lazy"
							allowFullScreen
							bind:this={iframeRef}
							{title}
							height={iframeHeight}
							class="@starting:opacity-0 @starting:blur-xl no-scrollbar block h-(--iframe-height) max-h-[1200px] min-h-56 w-full duration-200 will-change-auto rounded-2xl!"
							src={preview}
							id={`block-${title}`}
							style="--iframe-height: {iframeHeight}px;"
							onload={() => {
								isLoading = false;
								setupIframeAutoHeight(iframeRef);
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
					</div>
				{:else if activePreviewTheme}
					<div data-theme={activePreviewTheme}>
						<div
							in:scale={{ start: 0.85 }}
							class={cn(
								"theme-container relative w-full overflow-hidden [contain:paint]",
								category === "header" && "min-h-80 bg-background"
							)}
						>
							<BlockComponent></BlockComponent>
						</div>
					</div>
				{:else}
					<div in:scale={{ start: 0.85 }} class="w-full overflow-hidden">
						<BlockComponent></BlockComponent>
					</div>
				{/if}
			</div>

			<div class="min-w-0 max-w-full overflow-hidden bg-white dark:bg-transparent">
				{#if mode === "code"}
					<CodeEditor code={displayedCode} />
				{/if}
			</div>
		</div>
	</div>
</section>
