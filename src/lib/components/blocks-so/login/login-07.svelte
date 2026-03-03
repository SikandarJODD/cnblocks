<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Separator } from "$lib/components/ui/separator";
	import { ArrowRight, Eye, EyeOff, Lock, Mail } from "@lucide/svelte";
	import GoogleIcon from "./google-icon.svelte";
	import LogoIcon from "./logo-icon.svelte";

	let isVisible = $state(false);

	const toggleVisibility = () => {
		isVisible = !isVisible;
	};
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="mx-auto w-full max-w-xs space-y-6">
		<div class="space-y-2 text-center">
			<LogoIcon class="mx-auto h-16 w-16" />
			<h1 class="text-3xl font-semibold">Welcome back</h1>
			<p class="text-muted-foreground">
				Sign in to access to your dashboard, settings and projects.
			</p>
		</div>

		<div class="space-y-5">
			<Button variant="outline" class="w-full justify-center gap-2">
				<GoogleIcon class="h-4 w-4" />
				Sign in with Google
			</Button>

			<div class="flex items-center gap-2">
				<Separator class="flex-1" />
				<span class="text-sm text-muted-foreground"> or sign in with email </span>
				<Separator class="flex-1" />
			</div>

			<div class="space-y-6">
				<div>
					<Label for="email">Email</Label>
					<div class="relative mt-2.5">
						<Input
							id="email"
							class="peer ps-9"
							placeholder="ephraim@blocks.so"
							type="email"
						/>
						<div
							class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
						>
							<Mail size={16} aria-hidden="true" />
						</div>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<Label for="password">Password</Label>
						<a href="#" class="text-sm text-primary hover:underline">
							Forgot Password?
						</a>
					</div>
					<div class="relative mt-2.5">
						<Input
							id="password"
							class="ps-9 pe-9"
							placeholder="Enter your password"
							type={isVisible ? "text" : "password"}
						/>
						<div
							class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
						>
							<Lock size={16} aria-hidden="true" />
						</div>
						<button
							class="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 transition-[color,box-shadow] outline-none hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
							type="button"
							onclick={toggleVisibility}
							aria-label={isVisible ? "Hide password" : "Show password"}
							aria-pressed={isVisible}
							aria-controls="password"
						>
							{#if isVisible}
								<EyeOff size={16} aria-hidden="true" />
							{:else}
								<Eye size={16} aria-hidden="true" />
							{/if}
						</button>
					</div>
				</div>

				<div class="flex items-center gap-2 pt-1">
					<Checkbox id="remember-me" />
					<Label for="remember-me">Remember for 30 days</Label>
				</div>
			</div>

			<Button class="w-full">
				Sign in
				<ArrowRight class="h-4 w-4" />
			</Button>

			<div class="text-center text-sm">
				No account?{" "}
				<a href="#" class="font-medium text-primary hover:underline"> Create an account </a>
			</div>
		</div>
	</div>
</div>
