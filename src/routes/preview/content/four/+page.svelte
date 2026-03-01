<script lang="ts">
	import { content } from '$lib/all_blocks/content';

	const block = content.find((item) => item.title === 'four');

	if (!block) {
		throw new Error('Missing preview block for four in content');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
