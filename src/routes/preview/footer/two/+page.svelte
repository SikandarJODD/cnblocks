<script lang="ts">
	import { footer } from "#lib/all_blocks/footer.js";

	const block = footer.find((item) => item.title === "two");

	if (!block) {
		throw new Error("Missing preview block for two in footer");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
