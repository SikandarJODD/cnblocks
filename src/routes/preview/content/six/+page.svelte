<script lang="ts">
	import { content } from "$lib/all_blocks/content";

	const block = content.find((item) => item.title === "six");

	if (!block) {
		throw new Error("Missing preview block for six in content");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
