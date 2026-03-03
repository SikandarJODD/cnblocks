<script lang="ts">
	import { hero } from "$lib/all_blocks/hero";

	const block = hero.find((item) => item.title === "nine");

	if (!block) {
		throw new Error("Missing preview block for nine in hero");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
