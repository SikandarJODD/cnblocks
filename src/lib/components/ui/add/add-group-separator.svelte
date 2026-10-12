<script lang="ts">
	import type { ComponentProps } from "svelte";
	import { Separator } from "#lib/components/ui/separator/index.js";

	let { class: className, ...rest }: ComponentProps<typeof Separator> = $props();
</script>

<Separator orientation="vertical" class={className} {...rest} />
