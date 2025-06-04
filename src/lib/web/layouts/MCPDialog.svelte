<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import Code from "$lib/components/web/code/code.svelte";
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <Button size="sm" variant="secondary"
      ><svg
        class="size-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        fill-rule="evenodd"
        aria-labelledby="mcp-logo-title mcp-logo-description"
        viewBox="0 0 24 24"
        ><title id="mcp-logo-title">ModelContextProtocol</title><desc
          id="mcp-logo-description">MCP logo</desc
        ><path
          d="M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z"
        ></path><path
          d="M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z"
        ></path></svg
      >
      MCP</Button
    >
  </Dialog.Trigger>
  <Dialog.Content class="md:max-w-xl">
    <Dialog.Header>
      <Dialog.Title>Setup MCP Server</Dialog.Title>
      <Dialog.Description>
        Use the code below to setup MCP in your project.
      </Dialog.Description>
    </Dialog.Header>
    <div>
      <Tabs.Root value="cursor">
        <Tabs.List>
          <Tabs.Trigger value="cursor">Cursor</Tabs.Trigger>
          <Tabs.Trigger value="windsurf">Windsurf</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="cursor" class="text-sm">
          Add the following code to your <code
            class="font-mono text-primary bg-secondary rounded-sm px-1 py-0.5"
            >.cursor/mcp.json</code
          > file.
        </Tabs.Content>
        <Tabs.Content value="windsurf" class="text-sm">
          Add the following code to your <code
            class="font-mono text-primary bg-secondary rounded-sm px-1 py-0.5"
            >.codeium/windsurf/mcp_config.json</code
          > file.
        </Tabs.Content>
      </Tabs.Root>
      <div class="mt-4 border rounded-xl">
        {@render MCPCode()}
      </div>
    </div>
  </Dialog.Content>
</Dialog.Root>

{#snippet MCPCode()}
  <Code
    lang="bash"
    code={`{
  "mcpServers": {
    "jsrepo": {
      "command": "npx",
      "args": ["jsrepo", "mcp"]
    }
  }
}`}
    class="mb-4 border-none"
    hideCopy={false}
  />
{/snippet}
