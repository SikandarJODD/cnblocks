<script lang="ts">
	import { footer } from "#lib/all_blocks/footer.js";

	const block = footer.find((item) => item.title === "five");

	if (!block) {
		throw new Error("Missing preview block for five in footer");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
