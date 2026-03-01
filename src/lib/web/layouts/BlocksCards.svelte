<script lang="ts">
	import { category_blocks } from '$lib/all_blocks/category_block';
	import { Button } from '$lib/components/ui/button';
</script>

<div>
	<div
		class="mx-auto my-20 flex max-w-5xl flex-wrap items-center justify-center gap-2.5 px-4 md:px-8"
	>
		{#each category_blocks as { title, href, length }}
			<Button {href} size="extralg" variant="outline">
				{title}
				<span class="rounded-xl border bg-secondary px-2 font-display">{length}</span>
			</Button>
		{/each}
	</div>
</div>
