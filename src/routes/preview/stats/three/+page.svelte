<script lang="ts">
	import { stats } from "$lib/all_blocks/stats";

	const block = stats.find((item) => item.title === "three");

	if (!block) {
		throw new Error("Missing preview block for three in stats");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
