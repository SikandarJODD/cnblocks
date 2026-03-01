<script lang="ts">
	import { stats } from '$lib/all_blocks/stats';

	const block = stats.find((item) => item.title === 'four');

	if (!block) {
		throw new Error('Missing preview block for four in stats');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
