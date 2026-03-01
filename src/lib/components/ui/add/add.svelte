<script lang="ts">
	import type { Snippet } from 'svelte';
	import { useAdd } from './add.svelte.js';
	import { box } from 'svelte-toolbelt';

	type Props = {
		item: string;
		withoutRegistry?: boolean;
		children: Snippet;
	};

	let { item, withoutRegistry = false, children }: Props = $props();

	useAdd({
		item: box.with(() => item),
		withoutRegistry: box.with(() => withoutRegistry)
	});
</script>

{@render children?.()}
