<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent } from "$lib/components/ui/card";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import LogoIcon from "./logo-icon.svelte";
</script>

<div class="flex min-h-screen items-center justify-center">
  <div class="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <LogoIcon
        class="text-foreground dark:text-foreground mx-auto h-10 w-10"
        aria-hidden="true"
      />
      <h3 class="text-foreground dark:text-foreground mt-2 text-center text-lg font-bold">
        Create new account for workspace
      </h3>
    </div>

    <Card class="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
      <CardContent>
        <form action="#" method="post" class="space-y-4">
          <div>
            <Label
              for="name-login-05"
              class="text-foreground dark:text-foreground text-sm font-medium"
            >
              Name
            </Label>
            <Input
              type="text"
              id="name-login-05"
              name="name-login-05"
              autocomplete="name"
              placeholder="Name"
              class="mt-2"
            />
          </div>

          <div>
            <Label
              for="email-login-05"
              class="text-foreground dark:text-foreground text-sm font-medium"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email-login-05"
              name="email-login-05"
              autocomplete="email"
              placeholder="ephraim@blocks.so"
              class="mt-2"
            />
          </div>

          <div>
            <Label
              for="password-login-05"
              class="text-foreground dark:text-foreground text-sm font-medium"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password-login-05"
              name="password-login-05"
              autocomplete="new-password"
              placeholder="Password"
              class="mt-2"
            />
          </div>

          <div>
            <Label
              for="confirm-password-login-05"
              class="text-foreground dark:text-foreground text-sm font-medium"
            >
              Confirm password
            </Label>
            <Input
              type="password"
              id="confirm-password-login-05"
              name="confirm-password-login-05"
              autocomplete="new-password"
              placeholder="Password"
              class="mt-2"
            />
          </div>

          <div class="mt-2 flex items-start">
            <div class="flex h-6 items-center">
              <Checkbox
                id="newsletter-login-05"
                name="newsletter-login-05"
                class="size-4"
              />
            </div>
            <Label
              for="newsletter-login-05"
              class="text-muted-foreground dark:text-muted-foreground ml-3 text-sm leading-6"
            >
              Sign up to our newsletter
            </Label>
          </div>

          <Button type="submit" class="mt-4 w-full py-2 font-medium">
            Create account
          </Button>

          <p class="text-muted-foreground dark:text-muted-foreground text-center text-xs">
            By signing in, you agree to our{" "}
            <a
              href="#"
              class="text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90 capitalize"
            >
              Terms of use
            </a>{" "}
            and{" "}
            <a
              href="#"
              class="text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90 capitalize"
            >
              Privacy policy
            </a>
          </p>
        </form>
      </CardContent>
    </Card>

    <p class="text-muted-foreground dark:text-muted-foreground mt-6 text-center text-sm">
      Already have an account?{" "}
      <a
        href="#"
        class="text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90 font-medium"
      >
        Sign in
      </a>
    </p>
  </div>
</div>
