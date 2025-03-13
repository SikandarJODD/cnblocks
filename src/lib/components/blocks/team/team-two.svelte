<script>
  const members = [
    {
      name: "Liam Brown",
      role: "Founder - CEO",
      avatar: "https://alt.tailus.io/images/team/member-one.webp",
      link: "#",
    },
    {
      name: "Elijah Jones",
      role: "Co-Founder - CTO",
      avatar: "https://alt.tailus.io/images/team/member-two.webp",
      link: "#",
    },
    {
      name: "Isabella Garcia",
      role: "Sales Manager",
      avatar: "https://alt.tailus.io/images/team/member-three.webp",
      link: "#",
    },
    {
      name: "Henry Lee",
      role: "UX Engeneer",
      avatar: "https://alt.tailus.io/images/team/member-four.webp",
      link: "#",
    },
    {
      name: "Ava Williams",
      role: "Interaction Designer",
      avatar: "https://alt.tailus.io/images/team/member-five.webp",
      link: "#",
    },
    {
      name: "Olivia Miller",
      role: "Visual Designer",
      avatar: "https://alt.tailus.io/images/team/member-six.webp",
      link: "#",
    },
  ];
</script>

<section class="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
  <div class="mx-auto max-w-5xl border-t px-6">
    <span
      class="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950"
      >Team</span
    >
    <div class="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
      <div class="sm:w-2/5">
        <h2 class="text-3xl font-bold sm:text-4xl">Our dream team</h2>
      </div>
      <div class="mt-6 sm:mt-0">
        <p>
          During the working process, we perform regular fitting with the client
          because he is the only person who can feel whether a new suit fits or
          not.
        </p>
      </div>
    </div>
    <div class="mt-12 md:mt-24">
      <div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {#each members as member, index}
          <div  class="group overflow-hidden">
            <img
              class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
              src={member.avatar}
              alt="team member"
              width="826"
              height="1239"
            />
            <div class="px-2 pt-2 sm:pb-0 sm:pt-4">
              <div class="flex justify-between">
                <h3
                  class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider"
                >
                  {member.name}
                </h3>
                <span class="text-xs">_0{index + 1}</span>
              </div>
              <div class="mt-1 flex items-center justify-between">
                <span
                  class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >{member.role}</span
                >
                <a
                  href={member.link}
                  class="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {" "}
                  Linktree
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
