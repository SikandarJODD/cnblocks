<script lang="ts">
	import { integration } from '$lib/all_blocks/integration';

	const block = integration.find((item) => item.title === 'two');

	if (!block) {
		throw new Error('Missing preview block for two in integration');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
