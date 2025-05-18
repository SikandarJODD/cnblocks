<script lang="ts">
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "$lib/components/ui/avatar";
  import Quote from "@lucide/svelte/icons/quote";
</script>

<section>
  <div class="bg-muted py-24">
    <div class="mx-auto w-full max-w-2xl px-6 text-center">
      <div class="max-w-xl">
        <Quote
          class="fill-background stroke-background mx-auto size-8 drop-shadow-sm"
        />
        <blockquote class="mt-6">
          <p class="text-foreground text-xl">
            Using Tailark has been like unlocking a secret design superpower.
            It's the perfect fusion of simplicity and versatility, enabling us
            to create UIs that are as stunning as they are user-friendly.
          </p>
          <footer class="mt-6 flex flex-col items-center justify-center">
            <Avatar class=" size-12 border border-transparent shadow ring-1">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/68236786?v=4"
                alt="Théo Balick"
              />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <cite class="text-foreground mt-2 text-lg font-medium"
              >Théo Balick</cite
            >
            <span class="text-muted-foreground">@theo_b</span>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</section>
