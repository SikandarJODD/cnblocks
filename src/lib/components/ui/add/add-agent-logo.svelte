<script lang="ts">
	import PnpmLogo from "#lib/components/logos/pnpm.svelte";
	import NpmLogo from "#lib/components/logos/npm.svelte";
	import YarnLogo from "#lib/components/logos/yarn.svelte";
	import BunLogo from "#lib/components/logos/bun.svelte";
	import type { Agent } from "#lib/components/ui/add/add.svelte.js";
	import { cn } from "#lib/utils.js";

	let { agent, class: className }: { agent: Agent; class?: string } = $props();
</script>

{#if agent === "pnpm"}
	<PnpmLogo class={cn("grayscale", className)} />
{:else if agent === "npm"}
	<NpmLogo class={cn("grayscale", className)} />
{:else if agent === "yarn"}
	<YarnLogo class={cn("grayscale", className)} />
{:else if agent === "bun"}
	<BunLogo class={cn("grayscale", className)} />
{/if}
