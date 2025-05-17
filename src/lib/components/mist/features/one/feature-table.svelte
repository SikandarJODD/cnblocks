<script lang="ts">
  import { cn } from "$lib/utils";
  const AIDEN_BLESER = "https://avatars.githubusercontent.com/u/117548273?v=4";
  const BHIDE_SVELTE = "https://avatars.githubusercontent.com/u/93428946?v=4";
  const RICH_HARRIS = "https://avatars.githubusercontent.com/u/1162160?v=4";
  const HUNTER_JOHNSTON =
    "https://avatars.githubusercontent.com/u/64506580?v=4";

  const customers = [
    {
      id: 1,
      date: "10/31/2023",
      status: "Paid",
      statusVariant: "success",
      name: "Aiden Blesser",
      avatar: AIDEN_BLESER,
      revenue: "$410",
    },
    {
      id: 2,
      date: "10/21/2023",
      status: "Ref",
      statusVariant: "warning",
      name: "Rich Harris",
      avatar: RICH_HARRIS,
      revenue: "$5173",
    },
    {
      id: 3,
      date: "10/15/2023",
      status: "Paid",
      statusVariant: "success",
      name: "Hunter Johnston",
      avatar: HUNTER_JOHNSTON,
      revenue: "$450",
    },
    {
      id: 4,
      date: "10/12/2023",
      status: "Cancelled",
      statusVariant: "danger",
      name: "Bhide Svelte",
      avatar: BHIDE_SVELTE,
      revenue: "$916",
    },
  ];
  let { class: _class = "" } = $props();
</script>

<div
  class={cn(
    "bg-background shadow-foreground/5 inset-ring-1 relative w-full overflow-hidden rounded-xl border border-transparent p-6 shadow-md ring-1",
    _class
  )}
>
  <div class="mb-6">
    <div class="flex gap-1.5">
      <div class="bg-muted size-2 rounded-full border border-black/5"></div>
      <div class="bg-muted size-2 rounded-full border border-black/5"></div>
      <div class="bg-muted size-2 rounded-full border border-black/5"></div>
    </div>
    <div class="mt-3 text-lg font-medium">Customers</div>
    <p class="mt-1 text-sm">
      New users by First user primary channel group (Default Channel Group)
    </p>
  </div>
  <table
    class="w-max table-auto border-collapse lg:w-full"
    data-rounded="medium"
  >
    <thead class="dark:bg-background bg-gray-950/5">
      <tr class="*:border *:p-3 *:text-left *:text-sm *:font-medium">
        <th class="rounded-l-[--card-radius]">#</th>
        <th>Date</th>
        <th>Status</th>
        <th>Customer</th>
        <th class="rounded-r-[--card-radius]">Revenue</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      {#each customers as customer, index}
        <tr class="*:border *:p-2">
          <td>{customer.id}</td>
          <td>{customer.date}</td>
          <td>
            <span
              class={cn(
                "rounded-full px-2 py-1 text-xs",
                customer.statusVariant == "success" &&
                  "bg-lime-500/15 text-lime-800",
                customer.statusVariant == "danger" &&
                  "bg-red-500/15 text-red-800",
                customer.statusVariant == "warning" &&
                  "bg-yellow-500/15 text-yellow-800"
              )}>{customer.status}</span
            >
          </td>
          <td>
            <div class="text-title flex items-center gap-2">
              <div class="size-6 overflow-hidden rounded-full">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  width="120"
                  height="120"
                  loading="lazy"
                />
              </div>
              <span class="text-foreground">{customer.name}</span>
            </div>
          </td>
          <td>{customer.revenue}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
