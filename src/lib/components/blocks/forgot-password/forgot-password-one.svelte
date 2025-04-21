<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import Logo from "$lib/components/web/Logo.svelte";
</script>

<section
  class="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent"
>
  <form
    action=""
    class="bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"
  >
    <div
      class="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6"
    >
      <div>
        <a href="/" aria-label="go home">
          <Logo />
        </a>
        <h1 class="mb-1 mt-4 text-xl font-semibold">Recover Password</h1>
        <p class="text-sm">Enter your email to receive a reset link</p>
      </div>

      <div class="mt-6 space-y-6">
        <div class="space-y-2">
          <Label for="email" class="block text-sm">Email</Label>
          <Input
            type="email"
            required
            name="email"
            id="email"
            placeholder="name@example.com"
          />
        </div>

        <Button class="w-full">Send Reset Link</Button>
      </div>

      <div class="mt-6 text-center">
        <p class="text-muted-foreground text-sm">
          We'll send you a link to reset your password.
        </p>
      </div>
    </div>

    <div class="p-3">
      <p class="text-accent-foreground text-center text-sm">
        Remembered your password?
        <Button href="/preview/login/two" variant="link" class="px-2">
          Log in
        </Button>
      </p>
    </div>
  </form>
</section>
