<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
  } from "$lib/components/ui/select";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
</script>

<section
  class="bg-muted dark:bg-muted/30 py-15 sm:py-24 lg:py-32 [--color-primary:var(--color-indigo-500)]"
>
  <div class="mx-auto max-w-4xl px-4 lg:px-0">
    <h1 class="text-4xl font-semibold lg:text-5xl">
      Help us route your inquiry
    </h1>
    <p class="text-muted-foreground mt-4 text-lg">
      We'll help you find the right plan and pricing for your business.
    </p>
    <div class="mt-12 grid gap-12 lg:grid-cols-5">
      <div class="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
        <div class="flex flex-col justify-between space-y-6">
          <div>
            <h2 class="mb-3 text-lg font-semibold">Collaborate</h2>
            <a
              href="mailto:hello@tailus.com"
              class="text-primary text-lg hover:underline"
            >
              hello@tailark.com
            </a>
            <p class="mt-3 text-sm">+243 000 000 000</p>
          </div>
        </div>
        <div class="flex flex-col justify-between space-y-6">
          <div>
            <h3 class="mb-3 text-lg font-semibold">Press</h3>
            <a
              href="mailto:press@tailark.com"
              class="text-primary text-lg hover:underline"
            >
              press@tailark.com
            </a>
            <p class="mt-3 text-sm">+243 000 000 000</p>
          </div>
        </div>
      </div>

      <form action="" class="@container lg:col-span-3">
        <Card class="p-8 sm:p-12">
          <h3 class="text-xl font-semibold">
            Let's get you to the right place
          </h3>
          <p class="mt-4 text-sm">
            Reach out to our sales team! We’re eager to learn more about how you
            plan to use our application.
          </p>

          <div class="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
            <div class="@md:grid-cols-2 grid gap-3 *:space-y-3">
              <div>
                <Label for="name" class="space-y-2">Full name</Label>
                <Input type="text" id="name"  placeholder="Your name" />
              </div>
              <div>
                <Label for="email">Work Email</Label>
                <Input type="email" id="email" required placeholder="Your email" />
              </div>
            </div>
            <div>
              <Label for="country">Country/Region</Label>
              <Select type="single">
                <SelectTrigger>Select a country</SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">DR Congo</SelectItem>
                  <SelectItem value="2">United States</SelectItem>
                  <SelectItem value="3">France</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="@md:grid-cols-2 grid gap-3 *:space-y-3">
              <div>
                <Label for="website">Company Website</Label>
                <Input type="url" id="website" placeholder="Your website" />
              </div>
              <div>
                <Label for="job">Job function</Label>
                <Select type="single">
                  <SelectTrigger>Select a job function</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Finance</SelectItem>
                    <SelectItem value="2">Education</SelectItem>
                    <SelectItem value="3">Legal</SelectItem>
                    <SelectItem value="4">More</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label for="msg">Message</Label>
              <Textarea id="msg" rows={3} placeholder="Enter your message" />
            </div>
            <Button variant="mdefault" size="default">Submit</Button>
          </div>
        </Card>
      </form>
    </div>
  </div>
</section>
