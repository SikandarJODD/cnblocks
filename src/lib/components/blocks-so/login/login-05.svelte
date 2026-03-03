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
				class="mx-auto h-10 w-10 text-foreground dark:text-foreground"
				aria-hidden="true"
			/>
			<h3 class="mt-2 text-center text-lg font-bold text-foreground dark:text-foreground">
				Create new account for workspace
			</h3>
		</div>

		<Card class="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
			<CardContent>
				<form action="#" method="post" class="space-y-4">
					<div>
						<Label
							for="name-login-05"
							class="text-sm font-medium text-foreground dark:text-foreground"
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
							class="text-sm font-medium text-foreground dark:text-foreground"
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
							class="text-sm font-medium text-foreground dark:text-foreground"
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
							class="text-sm font-medium text-foreground dark:text-foreground"
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
							class="ml-3 text-sm leading-6 text-muted-foreground dark:text-muted-foreground"
						>
							Sign up to our newsletter
						</Label>
					</div>

					<Button type="submit" class="mt-4 w-full py-2 font-medium"
						>Create account</Button
					>

					<p class="text-center text-xs text-muted-foreground dark:text-muted-foreground">
						By signing in, you agree to our{" "}
						<a
							href="#"
							class="text-primary capitalize hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
						>
							Terms of use
						</a>{" "}
						and{" "}
						<a
							href="#"
							class="text-primary capitalize hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
						>
							Privacy policy
						</a>
					</p>
				</form>
			</CardContent>
		</Card>

		<p class="mt-6 text-center text-sm text-muted-foreground dark:text-muted-foreground">
			Already have an account?{" "}
			<a
				href="#"
				class="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
			>
				Sign in
			</a>
		</p>
	</div>
</div>
