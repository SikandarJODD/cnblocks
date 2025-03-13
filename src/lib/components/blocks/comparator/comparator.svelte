<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { Cpu, Sparkles } from "@lucide/svelte";
  const tableData = [
    {
      feature: "Feature 1",
      free: true,
      pro: true,
      startup: true,
    },
    {
      feature: "Feature 2",
      free: true,
      pro: true,
      startup: true,
    },
    {
      feature: "Feature 3",
      free: false,
      pro: true,
      startup: true,
    },
    {
      feature: "Tokens",
      free: "",
      pro: "20 Users",
      startup: "Unlimited",
    },
    {
      feature: "Video calls",
      free: "",
      pro: "12 Weeks",
      startup: "56",
    },
    {
      feature: "Support",
      free: "",
      pro: "Secondes",
      startup: "Unlimited",
    },
    {
      feature: "Security",
      free: "",
      pro: "20 Users",
      startup: "Unlimited",
    },
  ];
</script>

<section class="py-16 md:py-32">
  <div class="mx-auto max-w-5xl px-6">
    <div class="w-full overflow-auto lg:overflow-visible">
      <table
        class="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]"
      >
        <thead class="bg-background sticky top-0">
          <tr class="*:py-4 *:text-left *:font-medium">
            <th class="lg:w-2/5"></th>
            <th class="space-y-3">
              <span class="block">Free</span>

              <Button variant="outline" size="sm">Get Started</Button>
            </th>
            <th class="bg-muted rounded-t-(--radius) space-y-3 px-4">
              <span class="block">Pro</span>
              <Button size="sm">Get Started</Button>
            </th>
            <th class="space-y-3">
              <span class="block">Startup</span>
              <Button variant="outline" size="sm">Get Started</Button>
            </th>
          </tr>
        </thead>
        <tbody class="text-caption text-sm">
          <tr class="*:py-3">
            <td class="flex items-center gap-2 font-medium">
              <Cpu class="size-4" />
              <span>Features</span>
            </td>
            <td></td>
            <td class="bg-muted border-none px-4"></td>
            <td></td>
          </tr>
          {#each tableData.slice(-4) as row, index}
            <tr class="*:border-b *:py-3">
              <td class="text-muted-foreground">{row.feature}</td>
              <td>
                {#if typeof row.free === 'boolean' && row.free}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                {:else}
                  {row.free}
                {/if}
              </td>
              <td class="bg-muted border-none px-4">
                <div class="-mb-3 border-b py-3">
                  {#if typeof row.pro === 'boolean' && row.pro}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  {:else}
                    {row.pro}
                  {/if}
                </div>
              </td>
              <td>
                {#if typeof row.startup ==='boolean' && row.startup}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                {:else}
                  {row.startup}
                {/if}
              </td>
            </tr>
          {/each}
          <tr class="*:pb-3 *:pt-8">
            <td class="flex items-center gap-2 font-medium">
              <Sparkles class="size-4" />
              <span>AI Models</span>
            </td>
            <td></td>
            <td class="bg-muted border-none px-4"></td>
            <td></td>
          </tr>
          {#each tableData as row}
            <tr class="*:border-b *:py-3">
              <td class="text-muted-foreground">{row.feature}</td>
              <td>
                {#if typeof row.free === 'boolean' && row.free}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                {/if}
              </td>
              <td class="bg-muted border-none px-4">
                <div class="-mb-3 border-b py-3">
                  {#if typeof row.pro === 'boolean' && row.pro}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  {:else}
                    {row.pro}
                  {/if}
                </div>
              </td>
              <td>
                {#if typeof row.startup ==='boolean' && row.startup}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                {:else}
                  {row.startup}
                {/if}
              </td>
            </tr>
          {/each}
          <tr class="*:py-6">
            <td></td>
            <td></td>
            <td class="bg-muted rounded-b-(--radius) border-none px-4"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
