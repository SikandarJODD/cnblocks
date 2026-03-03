<script lang="ts">
	import { all_mists_contact } from "$lib/all_mists/contact";

	const block = all_mists_contact.find((item) => item.slug === "one");

	if (!block) {
		throw new Error("Missing preview block for one in all_mists_contact");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
