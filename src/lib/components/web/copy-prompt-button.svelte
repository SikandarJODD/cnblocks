<script lang="ts">
	import { page } from "$app/state";
	import { onDestroy } from "svelte";
	import { CopyButton } from "#lib/components/chan/copy-button/index.js";
	import { projectUrl } from "#lib/config/seo.js";
	import { getRegistryItemUrl, getRegistryPathFromPathname } from "#lib/utils/registry-url.js";
	import { createCopyPrompt } from "./copy-prompt.js";

	type CopyPromptButtonProps = {
		itemId?: string;
		componentName: string;
	};

	let { itemId, componentName }: CopyPromptButtonProps = $props();

	let copied = $state(false);
	let resetTimer: ReturnType<typeof setTimeout> | undefined;
	let installUrl = $derived(
		itemId ? getRegistryItemUrl(projectUrl, page.url.pathname, itemId) : ""
	);
	let registryPath = $derived(getRegistryPathFromPathname(page.url.pathname));
	let variant = $derived<"outline" | "secondary">(
		registryPath === "r" || registryPath === "m" ? "outline" : "secondary"
	);
	let prompt = $derived(createCopyPrompt({ installUrl, componentName }));

	function showCopiedState() {
		copied = true;
		clearTimeout(resetTimer);
		resetTimer = setTimeout(() => {
			copied = false;
		}, 1000);
	}

	onDestroy(() => clearTimeout(resetTimer));
</script>

{#if installUrl}
	<CopyButton
		text={prompt}
		size="sm"
		{variant}
		class="rounded-full text-xs text-muted-foreground shadow-none"
		aria-label={copied ? "Prompt copied" : `Copy prompt for ${componentName}`}
		onCopySuccess={showCopiedState}
	>
		<span class="grid" aria-hidden="true">
			<span
				class="col-start-1 row-start-1 transition-opacity duration-150 ease-out motion-reduce:transition-none"
				class:opacity-0={copied}>Copy prompt</span
			>
			<span
				class="col-start-1 row-start-1 transition-opacity duration-150 ease-out motion-reduce:transition-none"
				class:opacity-0={!copied}>Prompt copied</span
			>
		</span>
	</CopyButton>
{/if}
