<script>
  import {
    Bolt as Logo,
    Clerk,
    Firebase,
    Linear,
    Slack,
    Supabase,
    Vercel,
  } from "$lib/svgs/index";
</script>

<div
  aria-hidden
  class="**:fill-foreground @max-md:scale-85 relative mx-auto flex size-96"
>
  <div
    class="bg-card shadow-black/6.5 ring-border absolute relative inset-0 m-auto flex size-12 items-center rounded-full shadow-sm ring *:m-auto"
  >
    <Logo class="size-5" />
  </div>
  <div
    class="rotate-120 *:-rotate-120 absolute inset-0 flex items-center justify-between gap-12"
  >
    <div
      class="border-foreground/10 absolute inset-4 rounded-full border border-dashed"
    />

    <div
      class="bg-muted relative flex size-9 items-center rounded-full border backdrop-blur *:m-auto"
    >
      <Firebase class="size-3.5" />
    </div>
    <div
      class="bg-card shadow-black/6.5 ring-border relative flex size-9 items-center rounded-full shadow-sm ring *:m-auto"
    >
      <Supabase class="size-3.5" />
    </div>
  </div>
  <div class="absolute inset-12 flex items-center justify-between gap-12">
    <div
      class="border-foreground/10 absolute inset-4 rounded-full border border-dashed"
    />

    <div
      class="bg-muted relative flex size-9 items-center rounded-full border backdrop-blur *:m-auto"
    >
      <Vercel class="size-3.5" />
    </div>
    <div
      class="bg-card shadow-black/6.5 ring-border relative flex size-9 items-center rounded-full shadow-sm ring *:m-auto"
    >
      <Slack class="size-3.5" />
    </div>
  </div>
  <div
    class="absolute inset-24 flex rotate-45 items-center justify-between gap-12 *:-rotate-45"
  >
    <div
      class="border-foreground/10 absolute inset-4 rounded-full border border-dashed"
    />

    <div
      class="bg-card shadow-black/6.5 ring-border relative flex size-9 items-center rounded-full shadow-sm ring *:m-auto"
    >
      <Clerk class="size-3.5" />
    </div>
    <div
      class="bg-muted relative flex size-9 items-center rounded-full border backdrop-blur *:m-auto"
    >
      <Linear class="size-3.5" />
    </div>
  </div>
</div>
