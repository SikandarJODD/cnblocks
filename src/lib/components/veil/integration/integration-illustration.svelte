<script>
  import {
    Bolt as Logo,
    Clerk,
    Firebase,
    Linear,
    Slack,
    Supabase,
    Vercel
  } from "$lib/svgs/index";
</script>

<div
  aria-hidden
  class="**:fill-foreground mx-auto flex h-44 max-w-lg flex-col justify-between"
>
  <div class="@lg:px-6 relative flex h-10 items-center justify-between gap-12">
    <div class="bg-border absolute inset-0 my-auto h-px"></div>

    <div
      class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring"
    >
      <Vercel class="size-3.5" />
    </div>
    <div
      class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring"
    >
      <Slack class="size-3.5" />
    </div>
  </div>
  <div class="@lg:px-24 relative flex h-10 items-center justify-between px-12">
    <div class="bg-border absolute inset-0 my-auto h-px"></div>
    <div
      class="bg-linear-to-r mask-l-from-15% mask-l-to-40% mask-r-from-75% mask-r-to-75% from-primary absolute inset-0 my-auto h-px w-1/2 via-amber-500 to-pink-400"
    ></div>
    <div
      class="bg-linear-to-r mask-r-from-15% mask-r-to-40% mask-l-from-75% mask-l-to-75% absolute inset-0 my-auto ml-auto h-px w-1/2 from-indigo-500 via-emerald-500 to-blue-400"
    ></div>

    <div
      class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring"
    >
      <Clerk class="size-3.5" />
    </div>
    <div class="border-foreground/15 rounded-full border border-dashed p-2">
      <div
        class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring"
      >
        <Logo class="h-4" />
      </div>
    </div>
    <div
      class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring"
    >
      <Linear class="size-3.5" />
    </div>
  </div>
  <div class="@lg:px-6 relative flex h-10 items-center justify-between gap-12">
    <div class="bg-border absolute inset-0 my-auto h-px"></div>

    <div
      class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring"
    >
      <Supabase class="size-3.5" />
    </div>
    <div
      class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring"
    >
      <Firebase class="size-3.5" />
    </div>
  </div>
</div>
