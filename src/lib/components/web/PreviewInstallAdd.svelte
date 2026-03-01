<script lang="ts">
  import * as Add from "$lib/components/ui/add";
  import { AGENTS, type Agent } from "$lib/components/ui/add";
  import { cn } from "$lib/utils";
  import { getRegistryItemUrl, hasRegistryItem } from "$lib/utils/registry-url";

  interface PreviewInstallAddProps {
    itemId?: string;
    installUrlBase?: string;
    registryOptions?: readonly string[];
    registry?: string;
    class?: string;
  }

  let {
    itemId,
    installUrlBase = "https://sv-blocks.vercel.app",
    registryOptions = ["@sv/cnblocks"],
    registry,
    class: className = "",
  }: PreviewInstallAddProps = $props();

  let currentAgent: Agent = $state("pnpm");
  let currentRegistry: string = $state(
    registry ?? registryOptions[0] ?? "@sv/cnblocks",
  );

  const getInstallBase = (base: string) =>
    base.replace(/\/+$/, "").replace(/\/(r|v|m)$/i, "");

  let installUrl = $derived(
    itemId && hasRegistryItem(itemId)
      ? getRegistryItemUrl(getInstallBase(installUrlBase), itemId)
      : "",
  );
  let showRegistryOptions = $derived(registryOptions.length > 1);
</script>

{#if installUrl}
  <Add.Provider
    bind:agent={currentAgent}
    bind:registry={currentRegistry}
    {registryOptions}
  >
    <Add.Root item={installUrl} withoutRegistry>
      <Add.Group class={cn("h-8 w-88 max-w-full", className)}>
        <Add.Button class="h-8 min-w-0 md:pl-2 md:pr-2 [&>div]:size-8" />
        <Add.GroupSeparator class="h-4" />
        <Add.Dropdown class="size-8">
          <Add.DropdownContent>
            {#each AGENTS as addAgent (addAgent)}
              <Add.DropdownAgentOption agent={addAgent} />
            {/each}
            {#if showRegistryOptions}
              <Add.DropdownSeparator />
              {#each registryOptions as option (option)}
                <Add.DropdownRegistryOption registry={option} />
              {/each}
            {/if}
          </Add.DropdownContent>
        </Add.Dropdown>
      </Add.Group>
    </Add.Root>
  </Add.Provider>
{/if}
