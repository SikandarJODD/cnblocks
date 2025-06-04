<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";

  let sponsors = [
    {
      name: "Yashash Pugalia",
      avatar: "https://avatars.githubusercontent.com/u/89068816?v=4",
      href: "https://github.com/yashash-pugalia",
    },
  ];
</script>

<svelte:head>
  <title>Sponsors | Shadcn Marketing Blocks</title>
  <meta
    name="description"
    content="Welcome to Shadcn Marketing Blocks! This is a collection of marketing components built with Svelte 5, Tailwind CSS v4 and Shadcn Svelte."
  />
  <meta
    name="keywords"
    content="svelte, shadcn, marketing blocks, installation, jsrepo"
  />
</svelte:head>

<main class="space-y-6 xl:mb-24">
  <div class="space-y-3">
    <h1 class="text-3xl font-bold -tracking-wide text-primary">Sponsors</h1>
    <div class="grid grid-cols-2 gap-4 border-t py-4 md:grid-cols-6">
      {#each sponsors as member, index}
        <a
          href={member.href}
          target="_blank"
          class="flex flex-col items-center justify-center space-y-1 rounded-xl"
        >
          <div
            class="bg-secondary size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5"
          >
            <img
              class="aspect-square rounded-full object-cover"
              src={member.avatar}
              alt={member.name}
              loading="lazy"
            />
          </div>
          <span class="mt-2 block text-sm text-center">{member.name}</span>
        </a>
      {/each}
    </div>
  </div>
  <div class="space-y-4">
    <div class="space-y-3.5">
      <a
        href="#sponsor"
        id="sponsor"
        class="text-xl font-medium -tracking-wide text-primary"
      >
        Become a Sponsor | Share it on Social Media 😊
      </a>
      <p
        class="text-[16px] font-normal leading-relaxed text-black/80 dark:text-muted-foreground"
      >
        Your support helps us to continue improving and maintaining the project.
      </p>
      <div class="space-x-2">
        <Button href="https://github.com/sponsors/SikandarJODD" target="_blank"
          >Donate on Github</Button
        >
        <Button
          variant="outline"
          target="_blank"
          href="https://twitter.com/intent/tweet?text=I%E2%80%99m%20loving%20these%20free%20Svelte%20marketing%20components%21%0A%0ACheck%20them%20out%20https%3A%2F%2Fsv-blocks.vercel.app%0A%0AThanks%20%40Sikandar_Bhide"
          >Share on Twitter</Button
        >
      </div>
    </div>
  </div>
</main>
