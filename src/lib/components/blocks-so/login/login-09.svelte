<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Card, CardContent, CardFooter, CardHeader } from "$lib/components/ui/card";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Select, SelectContent, SelectItem, SelectTrigger } from "$lib/components/ui/select";
	import { BarChart, Code, Eye, EyeOff, User } from "@lucide/svelte";
	import LogoIcon from "./logo-icon.svelte";

	let showPassword = $state(false);
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="w-full max-w-md">
		<Card class="border-none pb-0 shadow-lg">
			<CardHeader class="flex flex-col items-center space-y-1.5 pt-6 pb-4">
				<LogoIcon class="h-12 w-12" />
				<div class="flex flex-col items-center space-y-0.5">
					<h2 class="text-2xl font-semibold text-foreground">Create an account</h2>
					<p class="text-muted-foreground">Welcome! Create an account to get started.</p>
				</div>
			</CardHeader>
			<CardContent class="space-y-6 px-8">
				<div class="space-y-2">
					<Label for="role">Role</Label>
					<Select value="designer" type="single">
						<SelectTrigger
							id="role"
							class="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
						>
							<span>Select role</span>
						</SelectTrigger>
						<SelectContent
							class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0"
						>
							<SelectItem value="designer">
								<User size={16} aria-hidden="true" />
								<span class="truncate">Product Designer</span>
							</SelectItem>
							<SelectItem value="developer">
								<Code size={16} aria-hidden="true" />
								<span class="truncate">Developer</span>
							</SelectItem>
							<SelectItem value="manager">
								<BarChart size={16} aria-hidden="true" />
								<span class="truncate">Product Manager</span>
							</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<Label for="firstName">First name</Label>
						<Input id="firstName" />
					</div>
					<div class="space-y-2">
						<Label for="lastName">Last name</Label>
						<Input id="lastName" />
					</div>
				</div>

				<div class="space-y-2">
					<Label for="username">Username</Label>
					<Input id="username" />
				</div>

				<div class="space-y-2">
					<Label for="email">Email address</Label>
					<Input id="email" type="email" />
				</div>

				<div class="space-y-2">
					<Label for="password">Password</Label>
					<div class="relative">
						<Input
							id="password"
							type={showPassword ? "text" : "password"}
							class="pr-10"
						/>
						<Button
							type="button"
							variant="ghost"
							size="icon"
							class="absolute top-0 right-0 h-full px-3 text-muted-foreground hover:bg-transparent"
							onclick={() => (showPassword = !showPassword)}
						>
							{#if showPassword}
								<EyeOff class="h-4 w-4" />
							{:else}
								<Eye class="h-4 w-4" />
							{/if}
						</Button>
					</div>
				</div>

				<div class="flex items-center space-x-2">
					<Checkbox id="terms" />
					<label for="terms" class="text-sm text-muted-foreground">
						I agree to the{" "}
						<a href="/" class="text-primary hover:underline"> Terms </a>{" "}
						and{" "}
						<a href="/" class="text-primary hover:underline"> Conditions </a>
					</label>
				</div>

				<Button class="w-full bg-primary text-primary-foreground"
					>Create free account</Button
				>
			</CardContent>
			<CardFooter class="flex justify-center border-t py-4!">
				<p class="text-center text-sm text-muted-foreground">
					Already have an account?{" "}
					<a href="/" class="text-primary hover:underline"> Sign in </a>
				</p>
			</CardFooter>
		</Card>
	</div>
</div>
