<script lang="ts">
	import { footer } from "#lib/all_blocks/footer.js";

	const block = footer.find((item) => item.title === "four");

	if (!block) {
		throw new Error("Missing preview block for four in footer");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
