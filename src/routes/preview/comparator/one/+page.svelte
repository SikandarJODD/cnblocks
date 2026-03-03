<script lang="ts">
	import { comparator } from "$lib/all_blocks/comparator";

	const block = comparator.find((item) => item.title === "one");

	if (!block) {
		throw new Error("Missing preview block for one in comparator");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
