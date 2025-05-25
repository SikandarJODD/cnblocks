<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { Card } from "$lib/components/ui/card";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Textarea } from "$lib/components/ui/textarea";
</script>

<!--
@component

- A component that displays a contact form.

@example
```svelte
<ContactOne />
```


 -->

<section class="py-32">
  <div class="mx-auto max-w-3xl px-8 lg:px-0">
    <h1 class="text-center text-4xl font-semibold lg:text-5xl">
      Contact Sales
    </h1>
    <p class="mt-4 text-center">
      We'll help you find the right plan and pricing for your business.
    </p>

    <Card class="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
      <div>
        <h2 class="text-xl font-semibold">Let's get you to the right place</h2>
        <p class="mt-4 text-sm">
          Reach out to our sales team! We're eager to learn more about how you
          plan to use our application.
        </p>
      </div>

      <form action="" class="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
        <div>
          <Label for="name">Full name</Label>
          <Input type="text" id="name" required />
        </div>

        <div>
          <Label for="email">Work Email</Label>
          <Input type="email" id="email" required />
        </div>

        <div>
          <Label for="country">Country/Region</Label>
          <Select.Root type="single">
            <Select.Trigger>Select Country/Region</Select.Trigger>
            <Select.Content>
              <Select.Item value="1">DR Congo</Select.Item>
              <Select.Item value="2">United States</Select.Item>
              <Select.Item value="3">France</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div>
          <Label for="website">Company Website</Label>
          <Input type="url" id="website" />
          <span class="text-muted-foreground inline-block text-sm"
            >Must start with 'https'</span
          >
        </div>

        <div>
          <Label for="job">Job function</Label>
          <Select.Root type="single">
            <Select.Trigger>Select Job Function</Select.Trigger>
            <Select.Content>
              <Select.Item value="1">Finance</Select.Item>
              <Select.Item value="2">Education</Select.Item>
              <Select.Item value="3">Legal</Select.Item>
              <Select.Item value="4">More</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div>
          <Label for="msg">Message</Label>
          <Textarea id="msg" rows={3} />
        </div>

        <Button>Submit</Button>
      </form>
    </Card>
  </div>
</section>
