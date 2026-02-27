<script lang="ts">
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";
  import { Input } from "$lib/components/ui/veil/input";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/veil/textarea";
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-3xl px-6">
    <div>
      <h1 class="text-balance font-serif text-4xl font-medium sm:text-5xl">
        Get in Touch
      </h1>
      <p class="text-muted-foreground mt-4 max-w-md text-balance">
        Have questions? We'd love to hear from you. Send us a message and we'll
        respond as soon as possible.
      </p>
    </div>

    <div class="@xl:grid-cols-5 mt-12 grid gap-8">
      <div class="@xl:col-span-2 space-y-6 *:space-y-2">
        <div>
          <p class="text-foreground text-sm font-medium">Email</p>
          <a
            href="mailto:hello@example.com"
            class="text-muted-foreground hover:text-primary text-sm"
          >
            hello@example.com
          </a>
        </div>

        <div>
          <p class="text-foreground text-sm font-medium">Phone</p>
          <a
            href="tel:+1234567890"
            class="text-muted-foreground hover:text-primary text-sm"
          >
            +1 (234) 567-890
          </a>
        </div>

        <div>
          <p class="text-foreground text-sm font-medium">Office</p>
          <p class="text-muted-foreground text-sm">
            123 Main Street, San Francisco, CA 94102
          </p>
        </div>
      </div>

      <Card variant="outline" class="@xl:col-span-3 p-6">
        <form action="" class="space-y-5">
          <div class="@md:grid-cols-2 grid gap-4">
            <div class="space-y-2">
              <Label for="name" class="text-sm">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div class="space-y-2">
              <Label for="email" class="text-sm">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div class="space-y-2">
            <Label for="subject" class="text-sm">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="How can we help?"
            />
          </div>

          <div class="space-y-2">
            <Label for="message" class="text-sm">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us more..."
              required
              class="min-h-28"
            />
          </div>

          <Button class="w-full" type="submit">Send Message</Button>
        </form>
      </Card>
    </div>
  </div>
</section>
