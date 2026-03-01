<script lang="ts">
	import { all_mists_content } from "$lib/all_mists/content";

	const block = all_mists_content.find((item) => item.slug === "four");

	if (!block) {
		throw new Error("Missing preview block for four in all_mists_content");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
