<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Card, CardContent, CardFooter, CardHeader } from "$lib/components/ui/card";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import EyeIcon from "@lucide/svelte/icons/eye";
	import EyeOffIcon from "@lucide/svelte/icons/eye-off";
	import Key from "@lucide/svelte/icons/key";
	import LogoIcon from "./logo-icon.svelte";

	let isPasswordVisible = $state(false);

	const togglePasswordVisibility = () => {
		isPasswordVisible = !isPasswordVisible;
	};
</script>

<div class="flex min-h-screen items-center justify-center">
	<Card class="mx-4 w-full max-w-md pb-0">
		<CardHeader class="mt-4 mb-2 space-y-1 text-center">
			<div class="flex justify-center">
				<LogoIcon />
			</div>
			<div>
				<h2 class="text-2xl font-semibold">Sign in to Acme</h2>
				<p class="text-sm text-muted-foreground">
					Welcome back! Please enter your details.
				</p>
			</div>
		</CardHeader>
		<CardContent class="space-y-6">
			<div class="space-y-2">
				<Label for="email">Email address</Label>
				<Input id="email" type="email" placeholder="ephraim@blocks.so" />
			</div>
			<div class="space-y-0">
				<div class="mb-2 flex items-center justify-between">
					<Label for="password">Password</Label>
					<a href="/" class="text-sm text-primary hover:underline"> Reset password </a>
				</div>
				<div class="relative">
					<Input
						id="password"
						class="pe-9"
						placeholder="Enter your password"
						type={isPasswordVisible ? "text" : "password"}
					/>
					<button
						class="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 transition-[color,box-shadow] outline-none hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
						type="button"
						onclick={togglePasswordVisibility}
						aria-label={isPasswordVisible ? "Hide password" : "Show password"}
						aria-pressed={isPasswordVisible}
						aria-controls="password"
					>
						{#if isPasswordVisible}
							<EyeOffIcon size={16} aria-hidden="true" />
						{:else}
							<EyeIcon size={16} aria-hidden="true" />
						{/if}
					</button>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<Checkbox id="remember" checked />
				<Label for="remember" class="text-sm font-normal">Remember me</Label>
			</div>

			<div class="space-y-2">
				<Button class="w-full" type="submit">Sign In</Button>
				<Button variant="outline" class="w-full" type="button">
					<Key class="mr-2 h-4 w-4" />
					Single sign-on (SSO)
				</Button>
			</div>
		</CardContent>
		<CardFooter class="flex justify-center border-t py-4!">
			<p class="text-center text-sm text-muted-foreground">
				New to Acme?{" "}
				<a href="/" class="text-primary hover:underline"> Sign up </a>
			</p>
		</CardFooter>
	</Card>
</div>
