<script lang="ts">
	import { all_mists_logocloud } from "$lib/all_mists/logocloud";

	const block = all_mists_logocloud.find((item) => item.slug === "two");

	if (!block) {
		throw new Error("Missing preview block for two in all_mists_logocloud");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
