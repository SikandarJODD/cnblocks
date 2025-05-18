<script>
	import { page } from '$app/state';

    let { children } = $props()
</script>

{#key `${page.params.categoryid}-${page.params.componentid}`}
    {@render children()}
{/key}