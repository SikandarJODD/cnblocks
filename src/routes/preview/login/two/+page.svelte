<script lang="ts">
	import { login } from "$lib/all_blocks/login";

	const block = login.find((item) => item.title === "two");

	if (!block) {
		throw new Error("Missing preview block for two in login");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
