<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";

  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "$lib/components/ui/avatar";
  import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
  } from "$lib/components/ui/hover-card";

  const members = [
    {
      src: "https://avatars.githubusercontent.com/u/93428946?v=4",
      name: "Bhide Svelte",
      role: "Svelte Developer",
    },
    {
      src: "https://avatars.githubusercontent.com/u/117548273?v=4",
      name: "Aiden Bleser",
      role: "Creator of jsrepo",
    },
    {
      src: "https://avatars.githubusercontent.com/u/47919550?v=4",
      name: "Meschac Irung",
      role: "Frontend Engineer",
    },
    {
      src: "https://avatars.githubusercontent.com/u/1162160?v=4",
      name: "Rich Harris",
      role: "Creator of Svelte",
    },
    {
      src: "https://avatars.githubusercontent.com/u/64506580?v=4",
      name: "Hunter Johnson",
      role: "Creator of Shadcn-Svelte",
    },
    {
      src: "https://avatars.githubusercontent.com/u/38083522?v=4",
      name: "Matia",
      role: "Joy of Code",
    },
    {
      src: "https://avatars.githubusercontent.com/u/23456789?v=4",
      name: "Aditya Karle",
      role: "UI/UX Designer",
    },
    {
      src: "https://avatars.githubusercontent.com/u/34567890?v=4",
      name: "Saloni Maheshwari",
      role: "Data Scientist",
    },
    {
      src: "https://avatars.githubusercontent.com/u/45678901?v=4",
      name: "Carlos Rodriguez",
      role: "Product Manager",
    },
    {
      src: "https://avatars.githubusercontent.com/u/56789012?v=4",
      name: "Emma Wilson",
      role: "Content Strategist",
    },
  ];
</script>

<section>
  <div class="bg-muted/50 dark:bg-muted/30 py-24">
    <div class="@container mx-auto w-full max-w-5xl px-6">
      <div class="mb-12">
        <h2 class="text-foreground text-4xl font-semibold">Meet Our Team</h2>
        <p class="text-muted-foreground my-4 text-balance text-lg">
          Our talented professionals bring diverse expertise and passion to
          every project. Together, we collaborate to deliver exceptional results
          and innovative solutions for our clients.
        </p>
        <Button variant="outline" class="pr-2">
          We're hiring
          <ChevronRight class="opacity-50" />
        </Button>
      </div>

      <div
        class="@sm:grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4 grid gap-6 md:gap-y-10"
      >
        {#each members as member, index}
          <HoverCard openDelay={300}>
            <HoverCardTrigger
              class="grid cursor-pointer grid-cols-[auto_1fr] items-center gap-2.5"
            >
              <Avatar class=" size-6 border border-transparent shadow ring-1">
                <AvatarImage src={member.src} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <span class="text-foreground font-medium">{member.name}</span>
            </HoverCardTrigger>

            <HoverCardContent data-theme="mist">
              <div class="space-y-3">
                <div class="flex justify-between">
                  <Avatar
                    class="rounded-(--radius)  size-10 border border-transparent shadow ring-1"
                  >
                    <AvatarImage src={member.src} alt={member.name} />
                    <AvatarFallback class="rounded-(--radius)"
                      >{member.name.charAt(0)}</AvatarFallback
                    >
                  </Avatar>
                  <Button
                    href="https://x.com/Sikandar_Bhide"
                    variant="ghost"
                    aria-label="X Account"
                  >
                    <svg
                      class="fill-muted-foreground stroke-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1200"
                      height="1227"
                      fill="none"
                      viewBox="0 0 1200 1227"
                      ><path
                        fill="#fff"
                        d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                      /></svg
                    >
                  </Button>
                </div>

                <div>
                  <span class="text-foreground font-medium">{member.name}</span>
                  <div class="text-muted-foreground text-sm">{member.role}</div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        {/each}
      </div>
    </div>
  </div>
</section>
