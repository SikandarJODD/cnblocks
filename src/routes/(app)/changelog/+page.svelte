<script lang="ts">
  import { changelog } from "$lib/data";
  import Calendar from "@lucide/svelte/icons/calendar";
  let changelog_data = changelog.toSorted((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
</script>

<div class="max-w-4xl mx-auto py-10 px-4 gap-4 flex flex-col">
  {#each changelog_data as item}
    <div
      class="grid grid-cols-1 gap-4 lg:grid-cols-7 border rounded-xl w-full p-4"
    >
      <div class="md:col-span-2 h-full">
        <div class="sticky top-20 flex gap-2 items-center">
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
        <p class="text-sm text-gray-500 mb-2">
          {item.desc}
        </p>
        <div
          class="prose dark:prose-invert prose-a:inline-block mt-4 prose-a:rounded-sm prose-a:bg-secondary prose-a:px-2 prose-a:py-1 prose-a:text-xs prose-a:no-underline prose-a:hover:opacity-80"
        >
          {@html item.content}
        </div>
      </div>
    </div>
  {/each}
</div>
