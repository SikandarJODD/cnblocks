<script lang="ts">
	import { footer } from '$lib/all_blocks/footer';

	const block = footer.find((item) => item.title === 'three');

	if (!block) {
		throw new Error('Missing preview block for three in footer');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
