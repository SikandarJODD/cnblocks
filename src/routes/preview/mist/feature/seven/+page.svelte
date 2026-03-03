<script lang="ts">
	import { all_mists_features } from "$lib/all_mists/feature";

	const block = all_mists_features.find((item) => item.slug === "seven");

	if (!block) {
		throw new Error("Missing preview block for seven in all_mists_features");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
