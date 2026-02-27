<script lang="ts">
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";
  import { Input } from "$lib/components/ui/veil/input";
  import { Label } from "$lib/components/ui/label";
  import * as Select from "$lib/components/ui/select";
  import { Textarea } from "$lib/components/ui/veil/textarea";
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="text-center">
      <h1 class="text-balance font-serif text-4xl font-medium sm:text-5xl">
        Contact Sales
      </h1>
      <p class="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
        Ready to get started? Our team will help you find the right plan for
        your business.
      </p>
    </div>

    <Card variant="outline" class="mt-12 p-8">
      <form action="" class="space-y-5">
        <div class="@md:grid-cols-2 grid gap-4">
          <div class="space-y-2">
            <Label for="firstName" class="text-sm">First name</Label>
            <Input type="text" id="firstName" name="firstName" required />
          </div>
          <div class="space-y-2">
            <Label for="lastName" class="text-sm">Last name</Label>
            <Input type="text" id="lastName" name="lastName" required />
          </div>
        </div>

        <div class="space-y-2">
          <Label for="email" class="text-sm">Work email</Label>
          <Input type="email" id="email" name="email" required />
        </div>

        <div class="space-y-2">
          <Label for="company" class="text-sm">Company</Label>
          <Input type="text" id="company" name="company" />
        </div>

        <div class="@md:grid-cols-2 grid gap-4">
          <div class="space-y-2">
            <Label for="size" class="text-sm">Company size</Label>
            <Select.Root type="single">
              <Select.Trigger
                class="ring-input focus-visible:ring-ring/15 bg-card h-8 shadow-none dark:bg-transparent"
              >
                Select
              </Select.Trigger>
              <Select.Content class="ring-border rounded-xl border-transparent ring-1">
                <Select.Item value="1-10">1-10 employees</Select.Item>
                <Select.Item value="11-50">11-50 employees</Select.Item>
                <Select.Item value="51-200">51-200 employees</Select.Item>
                <Select.Item value="201-500">201-500 employees</Select.Item>
                <Select.Item value="500+">500+ employees</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div class="space-y-2">
            <Label for="interest" class="text-sm">Interest</Label>
            <Select.Root type="single">
              <Select.Trigger
                class="ring-input focus-visible:ring-ring/15 bg-card h-8 shadow-none dark:bg-transparent"
              >
                Select
              </Select.Trigger>
              <Select.Content class="ring-border rounded-xl border-transparent ring-1">
                <Select.Item value="pricing">Pricing</Select.Item>
                <Select.Item value="demo">Product demo</Select.Item>
                <Select.Item value="partnership">Partnership</Select.Item>
                <Select.Item value="other">Other</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
        </div>

        <div class="space-y-2">
          <Label for="message" class="text-sm">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your needs..."
            class="min-h-28"
          />
        </div>

        <Button class="w-full" type="submit">Submit</Button>
      </form>
    </Card>

    <p class="text-muted-foreground mt-6 text-center text-sm">
      By submitting, you agree to our
      <a href="#" class="text-foreground underline">Privacy Policy</a>
    </p>
  </div>
</section>
