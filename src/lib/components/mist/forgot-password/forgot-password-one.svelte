<script lang="ts">
  import Button, {
    buttonVariants,
  } from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import Logo from "$lib/web/layouts/Logo.svelte";
</script>

<section
  class="bg-linear-to-b from-muted to-background flex min-h-screen px-4 py-16 md:py-32 [--color-primary:var(--color-indigo-500)]"
>
  <form action="" class="max-w-92 m-auto h-fit w-full">
    <div class="p-6">
      <div>
        <a href="/mist" aria-label="go home">
          <Logo />
        </a>
        <h1 class="mt-6 text-balance text-xl font-semibold">
          Forgot Your Password?
        </h1>
        <p class="text-muted-foreground mt-1 text-sm">
          Enter your email to receive a reset link
        </p>
      </div>

      <div class="mt-6 space-y-6">
        <div class="space-y-2">
          <Label for="email" class="block text-sm">Email</Label>
          <Input
            type="email"
            required
            name="email"
            id="email"
            placeholder="Your email"
            class=" border-transparent ring-1"
          />
        </div>
        <!-- You can use variant='default'  -->
        <!-- I have added variant='mdefault' as new variant in button.svelte -->
        <Button class="w-full" variant="mdefault" size="default"
          >Send Reset Link</Button
        >
      </div>
    </div>
    <div class="px-6">
      <p class="text-muted-foreground text-sm">
        You remember your password ?
        <Button href="/login" variant="link" class="px-2">Sign In</Button>
      </p>
    </div>
  </form>
</section>
