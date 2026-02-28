<script lang="ts">
  const members = [
    {
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      name: "Meschac Irung",
      role: "Frontend Engineer at Acme",
      bio: "Passionate about intuitive UIs and web performance. Specializes in React and TypeScript with 5+ years of experience.",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
      name: "Theo Balick",
      role: "Founder, CEO - Acme",
      bio: "Serial entrepreneur transforming team collaboration. Previously led product at two successful startups.",
    },
  ];
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="space-y-4">
      <h2 class="text-balance font-serif text-4xl font-medium">
        Meet Our Founders
      </h2>
      <p class="text-muted-foreground text-balance">
        The visionary leaders behind our mission to transform how teams work and
        collaborate.
      </p>
    </div>
    <div class="mt-12 grid gap-12 text-sm">
      {#each members as member, index}
        <div class="relative grid grid-cols-[auto_1fr] gap-4">
          <div
            aria-hidden
            class="max-h-26 absolute -inset-x-6 inset-y-1 border-y"
          ></div>
          <div
            aria-hidden
            class="w-26 absolute -inset-y-6 inset-x-1 border-x"
          ></div>
          <div
            class="before:border-foreground/10 shadow-foreground/6.5 dark:shadow-black/6.5 relative size-28 shrink-0 rounded-xl shadow-md before:absolute before:inset-0 before:rounded-xl before:border"
          >
            <img
              src={member.avatar}
              alt={member.name}
              class="rounded-xl object-cover"
              width={120}
              height={120}
            />
          </div>

          <div class="flex flex-col justify-between gap-6 py-1">
            <div class="space-y-0.5">
              <p class="text-foregroun text-base font-medium">{member.name}</p>
              <p class="text-muted-foreground text-sm">{member.role}</p>
            </div>

            <p class="text-muted-foreground text-balance text-sm">
              {member.bio}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
