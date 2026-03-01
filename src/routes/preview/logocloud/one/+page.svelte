<script lang="ts">
	import { logocloud } from '$lib/all_blocks/logo-cloud';

	const block = logocloud.find((item) => item.title === 'one');

	if (!block) {
		throw new Error('Missing preview block for one in logocloud');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
