<script lang="ts">
	import { all_mists_pricing } from "$lib/all_mists/pricing";

	const block = all_mists_pricing.find((item) => item.slug === "one");

	if (!block) {
		throw new Error("Missing preview block for one in all_mists_pricing");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
