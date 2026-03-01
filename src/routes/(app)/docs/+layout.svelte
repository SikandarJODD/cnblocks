<script lang="ts">
	import Sidebar from '$lib/web/docs/Sidebar.svelte';

	let { children } = $props();
</script>

<div class="mx-auto mt-10 flex min-h-[52vh] max-w-6xl lg:gap-12">
	<div>
		<Sidebar />
	</div>
	<div class="h-fit w-full px-6">
		{@render children()}
	</div>
</div>
