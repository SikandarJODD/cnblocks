<script>
  import Zap from "@lucide/svelte/icons/zap";
  import Activity from "@lucide/svelte/icons/activity";
  import DraftingCompass from "@lucide/svelte/icons/drafting-compass";
  import Mail from "@lucide/svelte/icons/mail";
</script>

<section class="py-16 md:py-32">
  <div class="mx-auto max-w-6xl px-6">
    <div
      class="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24"
    >
      <div class="lg:col-span-2">
        <div class="md:pr-6 lg:pr-0">
          <h2 class="text-4xl font-semibold lg:text-5xl">
            Built for Scaling teams
          </h2>
          <p class="mt-6">
            Orrupti aut temporibus assumenda atque ab, accusamus sit, molestiae
            veniam laboriosam pariatur.
          </p>
        </div>
        <ul class="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
          <li>
            <Mail class="size-5" />
            Email and web support
          </li>
          <li>
            <Zap class="size-5" />
            Fast response time
          </li>
          <li>
            <Activity class="size-5" />
            Menitoring and analytics
          </li>
          <li>
            <DraftingCompass class="size-5" />
            Architectural review
          </li>
        </ul>
      </div>
      <div
        class="border-border/50 relative rounded-3xl border p-3 lg:col-span-3"
      >
        <div
          class="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700"
        >
          <img
            src="/payments.png"
            class="hidden rounded-[15px] dark:block"
            alt="payments illustration dark"
            width={1207}
            height={929}
          />
          <img
            src="/payments-light.png"
            class="rounded-[15px] shadow dark:hidden"
            alt="payments illustration light"
            width={1207}
            height={929}
          />
        </div>
      </div>
    </div>
  </div>
</section>
