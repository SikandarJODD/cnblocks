<script lang="ts">
	import { testimonials } from "#lib/all_blocks/testimonial.js";

	const block = testimonials.find((item) => item.title === "one");

	if (!block) {
		throw new Error("Missing preview block for one in testimonials");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
