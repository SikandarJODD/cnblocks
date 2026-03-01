<script lang="ts">
	import { all_mists_integrations } from '$lib/all_mists/integrations';

	const block = all_mists_integrations.find((item) => item.slug === 'one');

	if (!block) {
		throw new Error('Missing preview block for one in all_mists_integrations');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
