<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Command from "$lib/components/ui/command/index";
  import { search_comp } from "$lib/config/search_comp";
  import { cn } from "$lib/utils";
  import Circle from "@lucide/svelte/icons/circle";
  import { onMount } from "svelte";
  let open = $state(false);

  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open = true;
      }
    }
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });

  function runCommand(cmd: () => void) {
    open = false;
    cmd();
  }
</script>

<Button
  variant="outline"
  class={cn("text-muted-foreground rounded-full md:w-40 lg:w-40")}
  onclick={() => (open = true)}
  size="sm"
>
  <span class="hidden lg:inline-flex">Search Component.. </span>
  <span class="inline-flex lg:hidden">Search...</span>
</Button>
<Command.Dialog bind:open>
  <Command.Input placeholder="Type a component name.." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    {#each search_comp as navItem}
      <Command.Group heading={navItem.name}>
        {#each navItem.subcom as item}
          <Command.Item
            class="capitalize"
            value={item.name}
            onSelect={() =>
              runCommand(() => {
                item.href && goto(item.href);
              })}
          >
            <div class="mr-2 flex h-4 w-4 items-center justify-center">
              <Circle class="h-3 w-3" />
            </div>
            {item.name}
          </Command.Item>
        {/each}
      </Command.Group>
    {/each}
  </Command.List>
</Command.Dialog>
