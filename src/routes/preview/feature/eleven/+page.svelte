<script lang="ts">
	import { feature } from '$lib/all_blocks/features';

	const block = feature.find((item) => item.title === 'eleven');

	if (!block) {
		throw new Error('Missing preview block for eleven in feature');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
