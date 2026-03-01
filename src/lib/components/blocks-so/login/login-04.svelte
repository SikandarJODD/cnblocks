<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import GitHubIcon from './github-icon.svelte';
	import GoogleIcon from './google-icon.svelte';
	import LogoIcon from './logo-icon.svelte';
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
		<div class="sm:mx-auto sm:w-full sm:max-w-md">
			<div class="flex items-center space-x-1.5">
				<LogoIcon class="h-7 w-7 text-foreground dark:text-foreground" aria-hidden="true" />
				<p class="text-lg font-medium text-foreground dark:text-foreground">Acme</p>
			</div>
			<h3 class="mt-6 text-lg font-semibold text-foreground dark:text-foreground">
				Sign in to your account
			</h3>
			<p class="mt-2 text-sm text-muted-foreground dark:text-muted-foreground">
				Don&apos;t have an account?{' '}
				<a
					href="#"
					class="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
				>
					Sign up
				</a>
			</p>
			<div class="mt-8 flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
				<Button
					variant="outline"
					class="flex-1 items-center justify-center space-x-2 py-2"
					href="#"
				>
					<GitHubIcon class="size-5" aria-hidden="true" />
					<span class="text-sm font-medium">Login with GitHub</span>
				</Button>
				<Button
					variant="outline"
					class="mt-2 flex-1 items-center justify-center space-x-2 py-2 sm:mt-0"
					href="#"
				>
					<GoogleIcon class="size-4" aria-hidden="true" />
					<span class="text-sm font-medium">Login with Google</span>
				</Button>
			</div>

			<div class="relative my-6">
				<div class="absolute inset-0 flex items-center">
					<Separator class="w-full" />
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-background px-2 text-muted-foreground"> or </span>
				</div>
			</div>

			<form action="#" method="post" class="mt-6 space-y-4">
				<div>
					<Label
						for="email-login-04"
						class="text-sm font-medium text-foreground dark:text-foreground"
					>
						Email
					</Label>
					<Input
						type="email"
						id="email-login-04"
						name="email-login-04"
						autocomplete="email"
						placeholder="ephraim@blocks.so"
						class="mt-2"
					/>
				</div>
				<div>
					<Label
						for="password-login-04"
						class="text-sm font-medium text-foreground dark:text-foreground"
					>
						Password
					</Label>
					<Input
						type="password"
						id="password-login-04"
						name="password-login-04"
						autocomplete="current-password"
						placeholder="********"
						class="mt-2"
					/>
				</div>
				<Button type="submit" class="mt-4 w-full py-2 font-medium">Sign in</Button>
			</form>
			<p class="mt-6 text-sm text-muted-foreground dark:text-muted-foreground">
				Forgot your password?{' '}
				<a
					href="#"
					class="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
				>
					Reset password
				</a>
			</p>
		</div>
	</div>
</div>
