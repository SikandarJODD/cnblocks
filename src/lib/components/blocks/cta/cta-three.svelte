<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { Mail, SendHorizonal } from "@lucide/svelte";
</script>

<section class="py-16 md:py-32">
  <div class="mx-auto max-w-5xl px-6">
    <div class="text-center">
      <h2 class="text-balance text-4xl font-semibold lg:text-5xl">
        Start Building
      </h2>
      <p class="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

      <form action="" class="mx-auto mt-10 max-w-sm lg:mt-12">
        <div
          class="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2"
        >
          <Mail
            class="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5"
          />

          <input
            placeholder="Your mail address"
            class="h-14 w-full bg-transparent pl-12 focus:outline-none"
            type="email"
          />

          <div class="md:pr-1.5 lg:pr-0">
            <Button aria-label="submit" class="rounded-(--radius)">
              <span class="hidden md:block">Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="relative mx-auto size-5 md:hidden"
                ><path
                  d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
                /><path d="M6 12h16" /></svg
              >
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>
