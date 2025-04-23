<script lang="ts">
  import { changelog } from "$lib/data";
</script>

<div class="max-w-4xl mx-auto py-10">
  {#each changelog as item}
    <div class="grid grid-cols-1 md:grid-cols-7 w-full py-4">
      <div class="col-span-2 h-full">
        <div class="sticky top-20">
          {new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
      <div class="col-span-5">
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
