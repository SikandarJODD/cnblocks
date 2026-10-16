<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "#lib/utils.ts";
	import type { ClassValue } from "svelte/elements";

	type ComponentProps = {
		href: string;
		faviconSrc?: string;
		class?: string;
		imageClass?: ClassValue;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const {
		children,
		href,
		faviconSrc,
		class: className = "",
		imageClass = "",
		...restProps
	}: ComponentProps = $props();

	let failedFaviconSrc = $state<string>();

	const faviconUrl = $derived(faviconSrc?.trim() || getFaviconUrl(href));
	const showFavicon = $derived(faviconUrl !== undefined && faviconUrl !== failedFaviconSrc);

	function getFaviconUrl(value: string) {
		try {
			const url = new URL(value);

			if (url.protocol !== "http:" && url.protocol !== "https:") {
				return undefined;
			}

			return `${url.origin}/favicon.ico`;
		} catch {
			return undefined;
		}
	}
</script>

<a
	{href}
	{...restProps}
	class={cn(
		"mx-1 inline-flex items-center gap-1 align-bottom text-foreground transition-[color] duration-150 ease-out hover:text-foreground/70",
		className
	)}
>
	{#if showFavicon}
		<img
			src={faviconUrl}
			alt="Favicon"
			aria-hidden="true"
			class={cn("size-4 shrink-0 rounded-[6px] bg-muted object-cover", imageClass)}
			width="16"
			height="16"
			loading="lazy"
			decoding="async"
			referrerpolicy="no-referrer"
			onerror={() => (failedFaviconSrc = faviconUrl)}
		/>
	{/if}
	{@render children?.()}
</a>
