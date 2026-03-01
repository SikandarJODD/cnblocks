<script lang="ts">
	import { pricing } from '$lib/all_blocks/pricing';

	const block = pricing.find((item) => item.title === 'three');

	if (!block) {
		throw new Error('Missing preview block for three in pricing');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
