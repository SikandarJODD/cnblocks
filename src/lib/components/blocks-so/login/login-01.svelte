<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Separator } from "$lib/components/ui/separator";
	import GoogleIcon from "./google-icon.svelte";
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<h2 class="text-center text-xl font-semibold text-foreground">
				Log in or create account
			</h2>
			<form action="#" method="post" class="mt-6">
				<Label for="email" class="font-medium text-foreground">Email</Label>
				<Input
					type="email"
					id="email"
					name="email"
					autocomplete="email"
					placeholder="john@company.com"
					class="mt-2"
				/>
				<Button type="submit" class="mt-4 w-full">Sign in</Button>
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
				class="inline-flex w-full items-center justify-center space-x-2"
			>
				<a href="#">
					<GoogleIcon class="size-5" aria-hidden={true} />
					<span class="text-sm font-medium">Sign in with Google</span>
				</a>
			</Button>

			<p class="mt-4 text-xs text-muted-foreground">
				By signing in, you agree to our{" "}
				<a href="#" class="underline underline-offset-4"> terms of service </a>{" "}
				and{" "}
				<a href="#" class="underline underline-offset-4"> privacy policy </a>
				.
			</p>
		</div>
	</div>
</div>
