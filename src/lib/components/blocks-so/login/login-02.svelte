<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import GoogleIcon from './google-icon.svelte';
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<h2 class="text-center text-xl font-semibold text-foreground">Log in or create account</h2>
			<form action="#" method="post" class="mt-6 space-y-4">
				<div>
					<Label
						for="email-login-02"
						class="text-sm font-medium text-foreground dark:text-foreground"
					>
						Email
					</Label>
					<Input
						type="email"
						id="email-login-02"
						name="email-login-02"
						autocomplete="email"
						placeholder="ephraim@blocks.so"
						class="mt-2"
					/>
				</div>
				<div>
					<Label
						for="password-login-02"
						class="text-sm font-medium text-foreground dark:text-foreground"
					>
						Password
					</Label>
					<Input
						type="password"
						id="password-login-02"
						name="password-login-02"
						autocomplete="current-password"
						placeholder="**************"
						class="mt-2"
					/>
				</div>
				<Button type="submit" class="mt-4 w-full py-2 font-medium">Sign in</Button>
			</form>

			<div class="relative my-6">
				<div class="absolute inset-0 flex items-center">
					<Separator class="w-full" />
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-background px-2 text-muted-foreground"> or with </span>
				</div>
			</div>

			<Button
				variant="outline"
				class="flex w-full items-center justify-center space-x-2 py-2"
				href="#"
			>
				<GoogleIcon class="size-5" aria-hidden="true" />
				<span class="text-sm font-medium">Sign in with Google</span>
			</Button>

			<p class="mt-4 text-xs text-muted-foreground dark:text-muted-foreground">
				By signing in, you agree to our{' '}
				<a href="#" class="underline underline-offset-4"> terms of service </a>{' '}
				and{' '}
				<a href="#" class="underline underline-offset-4"> privacy policy </a>
				.
			</p>
		</div>
	</div>
</div>
