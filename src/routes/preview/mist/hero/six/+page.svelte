<script lang="ts">
	import { all_mists_heros } from "$lib/all_mists/hero";

	const block = all_mists_heros.find((item) => item.slug === "six");

	if (!block) {
		throw new Error("Missing preview block for six in all_mists_heros");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
