<script lang="ts">
	import { all_mists_cta } from "$lib/all_mists/cta";

	const block = all_mists_cta.find((item) => item.slug === "two");

	if (!block) {
		throw new Error("Missing preview block for two in all_mists_cta");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
