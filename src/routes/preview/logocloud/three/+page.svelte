<script lang="ts">
	import { logocloud } from "$lib/all_blocks/logo-cloud";

	const block = logocloud.find((item) => item.title === "three");

	if (!block) {
		throw new Error("Missing preview block for three in logocloud");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
