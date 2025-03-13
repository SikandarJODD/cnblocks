<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "$lib/components/ui/card";
  import { Check } from "@lucide/svelte";

  let pricingList = {
    free: [
      "Basic Analytics Dashboard",
      "5GB Cloud Storage",
      "Email and Chat Support",
    ],
    startup: [
      "Everything in Pro Plan",
      "5GB Cloud Storage",
      "Email and Chat Support",
    ],
    pro: [
      "Everything in Free Plan",
      "5GB Cloud Storage",
      "Email and Chat Support",
      "Access to Community Forum",
      "Single User Access",
      "Access to Basic Templates",
      "Mobile App Access",
      "1 Custom Report Per Month",
      "Monthly Product Updates",
      "Standard Security Features",
    ],
  };
</script>

<section class="py-16 md:py-32">
  <div class="mx-auto max-w-6xl px-6">
    <div class="mx-auto max-w-2xl space-y-6 text-center">
      <h1 class="text-center text-4xl font-semibold lg:text-5xl">
        Pricing that Scales with You
      </h1>
      <p>
        Gemini is evolving to be more than just the models. It supports an
        entire to the APIs and platforms helping developers and businesses
        innovate.
      </p>
    </div>

    <div class="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
      <Card class="flex flex-col">
        <CardHeader>
          <CardTitle class="font-medium">Free</CardTitle>
          <span class="my-3 block text-2xl font-semibold">$0 / mo</span>
          <CardDescription class="text-sm">Per editor</CardDescription>
        </CardHeader>

        <CardContent class="space-y-4">
          <hr class="border-dashed" />

          <ul class="list-outside space-y-3 text-sm">
            {#each pricingList.free as item}
              <li class="flex items-center gap-2">
                <Check class="size-3" />
                {item}
              </li>
            {/each}
          </ul>
        </CardContent>

        <CardFooter class="mt-auto">
          <Button href="#" variant="outline" class="w-full">Get Started</Button>
        </CardFooter>
      </Card>

      <Card class="relative">
        <span
          class="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5"
          >Popular</span
        >

        <div class="flex flex-col">
          <CardHeader>
            <CardTitle class="font-medium">Pro</CardTitle>
            <span class="my-3 block text-2xl font-semibold">$19 / mo</span>
            <CardDescription class="text-sm">Per editor</CardDescription>
          </CardHeader>

          <CardContent class="space-y-4">
            <hr class="border-dashed" />
            <ul class="list-outside space-y-3 text-sm">
              {#each pricingList.pro as item}
                <li class="flex items-center gap-2">
                  <Check class="size-3" />
                  {item}
                </li>
              {/each}
            </ul>
          </CardContent>

          <CardFooter>
            <Button href="" class="w-full">Get Started</Button>
          </CardFooter>
        </div>
      </Card>

      <Card class="flex flex-col">
        <CardHeader>
          <CardTitle class="font-medium">Startup</CardTitle>
          <span class="my-3 block text-2xl font-semibold">$29 / mo</span>
          <CardDescription class="text-sm">Per editor</CardDescription>
        </CardHeader>

        <CardContent class="space-y-4">
          <hr class="border-dashed" />

          <ul class="list-outside space-y-3 text-sm">
            {#each pricingList.startup as item, index}
              <li class="flex items-center gap-2">
                <Check class="size-3" />
                {item}
              </li>
            {/each}
          </ul>
        </CardContent>

        <CardFooter class="mt-auto">
          <Button href="" variant="outline" class="w-full">Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>
