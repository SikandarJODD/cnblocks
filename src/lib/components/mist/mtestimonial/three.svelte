<script lang="ts">
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "$lib/components/ui/avatar";
  import { cn } from "$lib/utils";
  import Star from "@lucide/svelte/icons/star";

  const testimonials = [
    {
      name: "Méschac Irung",
      role: "Creator",
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      content:
        "Using Tailark has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility.",
      stars: 5,
    },
    {
      name: "Théo Balick",
      role: "Frontend Dev",
      avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
      content:
        "Tailark has transformed the way I develop web applications. The flexibility to customize every aspect is amazing.",
      stars: 4,
    },
    {
      name: "Glodie Lukose",
      role: "Frontend Dev",
      avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
      content:
        "The extensive collection of UI components has significantly accelerated my workflow. Tailark is a game-changer.",
      stars: 5,
    },
  ];
</script>

<section class='[--color-primary:var(--color-indigo-500)]'>
  <div class="py-24">
    <div class="@container mx-auto w-full max-w-5xl px-6">
      <div class="@lg:grid-cols-2 @3xl:grid-cols-3 @3xl:gap-12 grid gap-6">
        {#each testimonials as testimonial}
          <div>
            <div class="flex gap-1">
              {#each Array.from({ length: 5 }) as _, i}
                <Star
                  class={cn(
                    "size-4",
                    i < testimonial.stars
                      ? "fill-primary stroke-primary"
                      : "fill-foreground/15 stroke-transparent"
                  )}
                />
              {/each}
            </div>
            <p class="text-foreground my-4">{testimonial.content}</p>
            <div class="flex items-center gap-2">
              <Avatar class="size-6 border border-transparent shadow ring-1">
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
