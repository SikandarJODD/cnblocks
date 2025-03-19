<script lang="ts">
  import { goto } from "$app/navigation";
  import { getAllBlockNames } from "$lib/all_blocks/all_blocks";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Command from "$lib/components/ui/command/index";
  import { cn } from "$lib/utils";
  import { Circle } from "@lucide/svelte";
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

  let all_names = getAllBlockNames();
</script>

<Button
  variant="outline"
  class={cn(
    "text-muted-foreground relative w-full justify-start text-sm sm:pr-12 md:w-40 lg:w-64"
  )}
  onclick={() => (open = true)}
>
  <span class="hidden lg:inline-flex"> Search documentation... </span>
  <span class="inline-flex lg:hidden">Search...</span>
  <kbd
    class="bg-muted pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
  >
    <span class="text-xs">⌘</span>K
  </kbd>
</Button>
<Command.Dialog bind:open>
  <Command.Input placeholder="Type a command or search" />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Links">
      {#each all_names as navItem}
        <Command.Item
          class="capitalize "
          value={navItem.title}
          onSelect={() =>
            runCommand(() => {
              navItem.href && goto(navItem.href);
            })}
        >
          <div class="mr-2 flex h-4 w-4 items-center justify-center">
            <Circle class="h-3 w-3" />
          </div>
          {navItem.title}
        </Command.Item>
      {/each}
    </Command.Group>
  </Command.List>
</Command.Dialog>
