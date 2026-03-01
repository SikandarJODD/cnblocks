<script lang="ts">
	import { contact } from "$lib/all_blocks/contact";

	const block = contact.find((item) => item.title === "two");

	if (!block) {
		throw new Error("Missing preview block for two in contact");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
