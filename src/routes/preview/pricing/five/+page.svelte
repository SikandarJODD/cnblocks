<script lang="ts">
	import { pricing } from '$lib/all_blocks/pricing';

	const block = pricing.find((item) => item.title === 'five');

	if (!block) {
		throw new Error('Missing preview block for five in pricing');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
