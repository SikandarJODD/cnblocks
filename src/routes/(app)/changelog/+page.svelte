<script lang="ts">
	import { changelog } from "$lib/data";
	import Calendar from "@lucide/svelte/icons/calendar";
	let changelog_data = changelog.toSorted((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-10">
	{#each changelog_data as item}
		<div class="grid w-full grid-cols-1 gap-4 rounded-xl border p-4 lg:grid-cols-7">
			<div class="h-full md:col-span-2">
				<div class="sticky top-20 flex items-center gap-2">
					<Calendar strokeWidth={1.4} size={20} />
					{new Date(item.date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</div>
			</div>
			<div class="md:col-span-5">
				<h3 class="text-xl font-medium">
					{item.title}
				</h3>
				<p class="mb-2 text-sm text-gray-500">
					{item.desc}
				</p>
				<div
					class="prose dark:prose-invert prose-a:inline-block prose-a:rounded-sm prose-a:bg-secondary prose-a:px-2 prose-a:py-1 prose-a:text-xs prose-a:no-underline prose-a:hover:opacity-80 mt-4"
				>
					{@html item.content}
				</div>
			</div>
		</div>
	{/each}
</div>
