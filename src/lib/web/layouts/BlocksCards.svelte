<script lang="ts">
  import { category_blocks } from "$lib/all_blocks/category_block";
  import { Button } from "$lib/components/ui/button";
</script>

<div>
  <div
    class="flex gap-2.5 flex-wrap justify-center items-center max-w-5xl mx-auto my-20 px-4 md:px-8"
  >
    {#each category_blocks as { title, href, length }}
      <Button {href} size="extralg" variant="outline">
        {title}
        <span class="bg-secondary border px-2 rounded-xl font-display"
          >{length}</span
        >
      </Button>
    {/each}
  </div>
</div>
