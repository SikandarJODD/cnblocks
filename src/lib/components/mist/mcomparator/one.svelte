<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import Check from "@lucide/svelte/icons/check";
  import Sparkles from "@lucide/svelte/icons/sparkles";
  import Star from "@lucide/svelte/icons/star";

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

<section class="bg-muted dark:bg-muted/20 py-16 md:py-32 [--color-primary:var(--color-indigo-500)]">
  <div class="mx-auto max-w-5xl px-6">
    <div class="w-full overflow-auto lg:overflow-visible">
      <table
        class="w-[200vw] border-separate border-spacing-x-3 md:w-full "
      >
        <thead class="bg-muted/95 dark:bg-transparent sticky top-0">
          <tr class="*:py-4 *:text-left *:font-medium">
            <th class="lg:w-2/5"></th>
            <th class="space-y-3">
              <span class="block">Free</span>

              <Button variant="neutral">Get Started</Button>
            </th>
            <th class="space-y-3">
              <span class="block">Pro</span>
              <Button variant='mdefault'>Get Started</Button>
            </th>
            <th class="space-y-3">
              <span class="block">Startup</span>
              <Button variant="neutral">Get Started</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="*:py-4">
            <td class="flex items-center gap-2 font-medium">
              <Star class="size-4" />
              <span>Features</span>
            </td>
            <td></td>
            <td class="border-none px-4"></td>
            <td></td>
          </tr>
          {#each tableData.slice(-4) as row}
            <tr class="*:border-b *:py-4">
              <td class="text-muted-foreground">{row.feature}</td>
              <td>
                {#if row.free === true}
                  <Check class="text-primary size-3" strokeWidth={3.5} />
                {:else}
                  {row.free}
                {/if}
              </td>
              <td>
                {#if row.pro === true}
                  <Check class="text-primary size-3" strokeWidth={3.5} />
                {:else}
                  {row.pro}
                {/if}
              </td>
              <td>
                {#if row.startup === true}
                  <Check class="text-primary size-3" strokeWidth={3.5} />
                {:else}
                  {row.startup}
                {/if}
              </td>
            </tr>
          {/each}
          <tr class="*:pb-4 *:pt-8">
            <td class="flex items-center gap-2 font-medium">
              <Sparkles class="size-4" />
              <span>AI Models</span>
            </td>
            <td></td>
            <td class="bg-muted dark:bg-transparent border-none px-4"></td>
            <td></td>
          </tr>
          {#each tableData as row}
            <tr class="*:border-b *:py-4">
              <td class="text-muted-foreground">{row.feature}</td>
              <td>
                {#if row.free === true}
                  <Check class="text-primary size-3" strokeWidth={3.5} />
                {/if}
              </td>
              <td>
                {#if row.pro === true}
                  <Check class="text-primary size-3" strokeWidth={3.5} />
                {:else}
                  {row.pro}
                {/if}
              </td>
              <td>
                {#if row.startup === true}
                  <Check class="text-primary size-3" strokeWidth={3.5} />
                {:else}
                  {row.startup}
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>
