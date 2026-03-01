<script lang="ts">
	import { content } from '$lib/all_blocks/content';

	const block = content.find((item) => item.title === 'three');

	if (!block) {
		throw new Error('Missing preview block for three in content');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
