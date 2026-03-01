<script lang="ts">
	import { login } from "$lib/all_blocks/login";

	const block = login.find((item) => item.title === "three");

	if (!block) {
		throw new Error("Missing preview block for three in login");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
