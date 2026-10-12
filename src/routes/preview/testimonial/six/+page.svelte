<script lang="ts">
	import { testimonials } from "#lib/all_blocks/testimonial.js";

	const block = testimonials.find((item) => item.title === "six");

	if (!block) {
		throw new Error("Missing preview block for six in testimonials");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
