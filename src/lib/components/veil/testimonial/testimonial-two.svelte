<script lang="ts">
  import { Card } from "$lib/components/ui/veil/card";

  const testimonials = [
    {
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      name: "Meschac Irung",
      role: "Frontend Engineer at Acme",
      quote:
        "Tailark has been a game-changer for our team. It has helped us to build a modern and scalable web application.",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
      name: "Theo Balick",
      role: "Founder, CEO - Acme",
      quote:
        "Tailark has been a game-changer for our team. It has helped us to build a modern and scalable web application.",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
      name: "Sarah Johnson",
      role: "DevOps Engineer",
      quote:
        "Tailark has been a game-changer for our team. It has helped us to build a modern and scalable web application.",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/34567890?v=4",
      name: "Aisha Patel",
      role: "Data Scientist",
      quote:
        "Tailark has been a game-changer for our team. It has helped us to build a modern and scalable web application.",
    },
  ];
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="space-y-4">
      <h2 class="text-balance font-serif text-4xl font-medium">
        What Our Customers Say
      </h2>
      <p class="text-muted-foreground text-balance">
        Hear from the teams and individuals who have transformed their workflow
        with our platform.
      </p>
    </div>
    <div class="@xl:grid-cols-2 mt-12 grid gap-3">
      {#each testimonials as testimonial, index}
        <Card
          variant="outline"
          class="text-foreground flex items-end gap-3 rounded-2xl p-4 text-sm"
        >
          <div
            class="before:border-foreground/10 relative size-5 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              class="rounded-full object-cover"
              width={40}
              height={40}
            />
          </div>
          <div class="space-y-6">
            <p class="text-foreground text-lg">{testimonial.quote}</p>

            <div class="space-y-1">
              <p class="text-muted-foreground text-sm font-medium">
                {testimonial.name}
              </p>
              <p class="text-muted-foreground text-xs">{testimonial.role}</p>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
