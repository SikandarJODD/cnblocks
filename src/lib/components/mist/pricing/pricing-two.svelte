<script lang="ts">
  import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "$lib/components/ui/card";
  import Button from "$lib/components/ui/button/button.svelte";
  import Check from "@lucide/svelte/icons/check";
</script>

<div class="bg-muted relative py-16 md:py-32 [--color-primary:var(--color-indigo-500)]">
  <div class="mx-auto max-w-5xl px-6">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
        Pricing that scale with your business
      </h2>
      <p
        class="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg"
      >
        Choose the perfect plan for your needs and start optimizing your
        workflow today
      </p>
    </div>
    <div class="@container relative mt-12 md:mt-20">
      <Card class="@4xl:max-w-full relative mx-auto max-w-sm">
        <div class="@4xl:grid-cols-3 grid">
          <div>
            <CardHeader class="p-8">
              <CardTitle class="font-medium">Free</CardTitle>
              <span class="mb-0.5 mt-2 block text-2xl font-semibold"
                >$0 / mo</span
              >
              <CardDescription class="text-sm">Per editor</CardDescription>
            </CardHeader>
            <div class="border-y px-8 py-4">
              <Button class="w-full" variant="neutral">Get Started</Button>
            </div>

            <ul role="list" class="space-y-3 p-8">
              {#each ["Basic Analytics Dashboard", "5GB Cloud Storage", "Email and Chat Support"] as item}
                <li class="flex items-center gap-2">
                  <Check class="text-primary size-3" strokeWidth={3.5} />
                  {item}
                </li>
              {/each}
            </ul>
          </div>
          <div
            class=" bg-background rounded-(--radius) @3xl:mx-0 @3xl:-my-3 -mx-1 border-transparent shadow ring-1"
          >
            <div class="@3xl:py-3 @3xl:px-0 relative px-1">
              <CardHeader class="p-8">
                <CardTitle class="font-medium">Pro</CardTitle>
                <span class="mb-0.5 mt-2 block text-2xl font-semibold"
                  >$19 / mo</span
                >
                <CardDescription class="text-sm">Per editor</CardDescription>
              </CardHeader>
              <div class="@3xl:mx-0 -mx-1 border-y px-8 py-4">
                <Button class="w-full">Get Started</Button>
              </div>

              <ul role="list" class="space-y-3 p-8">
                {#each ["Everything in Free Plan", "5GB Cloud Storage", "Email and Chat Support", "Access to Community Forum", "Single User Access", "Access to Basic Templates", "Mobile App Access", "1 Custom Report Per Month", "Monthly Product Updates", "Standard Security Features"] as item}
                  <li class="flex items-center gap-2">
                    <Check class="text-primary size-3" strokeWidth={3.5} />
                    {item}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
          <div>
            <CardHeader class="p-8">
              <CardTitle class="font-medium">Pro Plus</CardTitle>
              <span class="mb-0.5 mt-2 block text-2xl font-semibold"
                >$49 / mo</span
              >
              <CardDescription class="text-sm">Per editor</CardDescription>
            </CardHeader>
            <div class="border-y px-8 py-4">
              <Button class="w-full" variant="neutral">Get Started</Button>
            </div>

            <ul role="list" class="space-y-3 p-8">
              {#each ["Everything in Pro Plan", "5GB Cloud Storage", "Email and Chat Support"] as item}
                <li class="flex items-center gap-2">
                  <Check class="text-primary size-3" strokeWidth={3.5} />
                  {item}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  </div>
</div>
