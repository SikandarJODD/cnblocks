<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<h3 class="text-center text-lg font-semibold text-foreground dark:text-foreground">
				Welcome Back
			</h3>
			<p class="text-center text-sm text-muted-foreground dark:text-muted-foreground">
				Enter your credentials to access your account.
			</p>
			<form action="#" method="post" class="mt-6 space-y-4">
				<div>
					<Label
						for="email-login-03"
						class="text-sm font-medium text-foreground dark:text-foreground"
					>
						Email
					</Label>
					<Input
						type="email"
						id="email-login-03"
						name="email-login-03"
						autocomplete="email"
						placeholder="ephraim@blocks.so"
						class="mt-2"
					/>
				</div>
				<div>
					<Label
						for="password-login-03"
						class="text-sm font-medium text-foreground dark:text-foreground"
					>
						Password
					</Label>
					<Input
						type="password"
						id="password-login-03"
						name="password-login-03"
						autocomplete="current-password"
						placeholder="**************"
						class="mt-2"
					/>
				</div>
				<Button type="submit" class="mt-4 w-full py-2 font-medium">Sign in</Button>
			</form>
			<p class="mt-6 text-sm text-muted-foreground dark:text-muted-foreground">
				Forgot your password?{' '}
				<a
					href="#"
					class="font-medium text-primary hover:text-primary/90 dark:text-primary dark:hover:text-primary/90"
				>
					Reset password
				</a>
			</p>
		</div>
	</div>
</div>
