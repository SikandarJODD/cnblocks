<script lang="ts">
	import type { ComponentProps } from "svelte";
	import * as DropdownMenu from "#lib/components/ui/dropdown-menu/index.js";

	let { class: className, ...rest }: ComponentProps<typeof DropdownMenu.Separator> = $props();
</script>

<DropdownMenu.Separator class={className} {...rest} />
