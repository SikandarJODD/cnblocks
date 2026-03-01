<script lang="ts">
	import { forgot_password } from '$lib/all_blocks/forgot-password';

	const block = forgot_password.find((item) => item.title === 'one');

	if (!block) {
		throw new Error('Missing preview block for one in forgot_password');
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
