<script lang="ts">
	import { hero } from "$lib/all_blocks/hero";

	const block = hero.find((item) => item.title === "eight");

	if (!block) {
		throw new Error("Missing preview block for eight in hero");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
