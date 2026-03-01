<script lang="ts">
	import { integration } from "$lib/all_blocks/integration";

	const block = integration.find((item) => item.title === "four");

	if (!block) {
		throw new Error("Missing preview block for four in integration");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
