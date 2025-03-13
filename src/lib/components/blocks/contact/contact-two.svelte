<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { Card } from "$lib/components/ui/card";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Textarea } from "$lib/components/ui/textarea";
</script>

<section class="py-32">
  <div class="mx-auto max-w-4xl px-4 lg:px-0">
    <h1 class="mb-12 text-center text-4xl font-semibold lg:text-5xl">
      Help us route your inquiry
    </h1>

    <div
      class="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0"
    >
      <div class="flex flex-col justify-between space-y-8 p-6 sm:p-12">
        <div>
          <h2 class="mb-3 text-lg font-semibold">Collaborate</h2>
          <a
            href="mailto:hello@tailus.io"
            class="text-lg text-blue-600 hover:underline dark:text-blue-400"
          >
            hello@tailus.io
          </a>
          <p class="mt-3 text-sm">+243 000 000 000</p>
        </div>
      </div>
      <div class="flex flex-col justify-between space-y-8 p-6 sm:p-12">
        <div>
          <h3 class="mb-3 text-lg font-semibold">Press</h3>
          <a
            href="mailto:press@tailus.io"
            class="text-lg text-blue-600 hover:underline dark:text-blue-400"
          >
            press@tailus.io
          </a>
          <p class="mt-3 text-sm">+243 000 000 000</p>
        </div>
      </div>
    </div>

    <div
      class="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"
    ></div>
    <form action="" class="border px-4 py-12 lg:px-0 lg:py-24">
      <Card class="mx-auto max-w-lg p-8 sm:p-16">
        <h3 class="text-xl font-semibold">Let's get you to the right place</h3>
        <p class="mt-4 text-sm">
          Reach out to our sales team! We’re eager to learn more about how you
          plan to use our application.
        </p>

        <div class="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
          <div>
            <Label for="name" class="space-y-2">Full name</Label>
            <Input type="text" id="name" required />
          </div>
          <div>
            <Label for="email" class="space-y-2">Work Email</Label>
            <Input type="email" id="email" required />
          </div>
          <div>
            <Label for="country" class="space-y-2">Country/Region</Label>
            <Select.Root type="single">
              <Select.Trigger>Select a country</Select.Trigger>
              <Select.Content>
                <Select.Item value="1">DR Congo</Select.Item>
                <Select.Item value="2">United States</Select.Item>
                <Select.Item value="3">France</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
          <div>
            <Label for="website" class="space-y-2">Company Website</Label>
            <Input type="url" id="website" />
          </div>
          <div>
            <Label for="job" class="space-y-2">Job function</Label>
            <Select.Root type="single">
              <Select.Trigger>Select job function</Select.Trigger>
              <Select.Content>
                <Select.Item value="1">Finance</Select.Item>
                <Select.Item value="2">Education</Select.Item>
                <Select.Item value="3">Legal</Select.Item>
                <Select.Item value="4">More</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
          <div>
            <Label for="msg" class="space-y-2">Message</Label>
            <Textarea id="msg" rows={3} />
          </div>
          <Button>Submit</Button>
        </div>
      </Card>
    </form>
  </div>
</section>
