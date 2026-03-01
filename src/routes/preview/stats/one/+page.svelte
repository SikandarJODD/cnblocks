<script lang="ts">
	import { stats } from '$lib/all_blocks/stats';

	const block = stats.find((item) => item.title === 'one');

	if (!block) {
		throw new Error('Missing preview block for one in stats');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
