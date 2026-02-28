<script lang="ts">
	import { cn } from "$lib/utils";

	type ComponentProps = Record<string, unknown> & { class?: string };
	const { class: className = "", ...restProps }: ComponentProps = $props();
</script>

<hr {...restProps} class={cn("border-border my-12 border-t", className)} />
