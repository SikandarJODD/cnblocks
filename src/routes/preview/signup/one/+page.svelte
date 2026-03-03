<script lang="ts">
	import { signup } from "$lib/all_blocks/signup";

	const block = signup.find((item) => item.title === "one");

	if (!block) {
		throw new Error("Missing preview block for one in signup");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
