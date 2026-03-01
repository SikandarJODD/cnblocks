<script lang="ts">
	import { contact } from '$lib/all_blocks/contact';

	const block = contact.find((item) => item.title === 'one');

	if (!block) {
		throw new Error('Missing preview block for one in contact');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
