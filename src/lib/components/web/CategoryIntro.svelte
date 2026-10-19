<script lang="ts">
	let {
		category,
		name,
		description,
	}: {
		category: string;
		name: string;
		description: string;
	} = $props();
</script>

<section
	class="grid h-[192px] max-h-[192px] gap-3 px-5 py-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-center sm:gap-10 sm:px-8 sm:py-8 lg:px-10"
>
	<h1 class="text-2xl leading-tight font-medium tracking-tight">
		<span class="block text-muted-foreground">Shadcn {category}</span>
		<span class="block text-foreground">{name} blocks</span>
	</h1>
	<p class="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
		{description}
	</p>
</section>
