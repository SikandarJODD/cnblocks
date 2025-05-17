<script lang="ts">
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "$lib/components/ui/avatar";

  const testimonials = [
    {
      name: "Méschac Irung",
      role: "Creator",
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      content:
        "Using Tailark has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility.",
    },
    {
      name: "Théo Balick",
      role: "Frontend Dev",
      avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
      content:
        "Tailark has transformed the way I develop web applications. The flexibility to customize every aspect is amazing.",
    },
    {
      name: "Glodie Lukose",
      role: "Frontend Dev",
      avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
      content:
        "The extensive collection of UI components has significantly accelerated my workflow. Tailark is a game-changer.",
    },
  ];
</script>

<section >
  <div class="bg-muted py-24">
    <div class="@container mx-auto w-full max-w-5xl px-6">
      <div class="mb-12">
        <h2 class="text-foreground text-4xl font-semibold">
          What Our Clients Say
        </h2>
        <p class="text-muted-foreground my-4 text-balance text-lg">
          Discover why our clients love working with us. Read their testimonials
          about our dedication to excellence, innovative solutions, and
          exceptional customer service.
        </p>
      </div>
      <div class="@lg:grid-cols-2 @3xl:grid-cols-3 grid gap-6">
        {#each testimonials as testimonial}
          <div>
            <div
              class="bg-background rounded-2xl rounded-bl border border-transparent px-4 py-3 ring-1"
            >
              <p class="text-foreground">{testimonial.content}</p>
            </div>
            <div class="mt-4 flex items-center gap-2">
              <Avatar class=" size-6 border border-transparent shadow ring-1">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div class="text-foreground text-sm font-medium">
                {testimonial.name}
              </div>
              <span
                aria-hidden="true"
                class="bg-foreground/25 size-1 rounded-full"
              ></span>
              <span class="text-muted-foreground text-sm"
                >{testimonial.role}</span
              >
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
