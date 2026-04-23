<script lang="ts">
	import { Bolt as Logo } from "$lib/svgs/index";
	import { Button } from "$lib/components/ui/veil/button";
	import { Card } from "$lib/components/ui/veil/card";
	import { Input } from "$lib/components/ui/veil/input";
	import { Label } from "$lib/components/ui/label";
</script>

<section class="flex grid min-h-screen grid-rows-[auto_1fr] bg-background px-4">
	<div class="mx-auto w-full max-w-7xl border-b py-3">
		<Button
			href="/"
			aria-label="go home"
			variant="ghost"
			size="sm"
			class="inline-block h-auto border-t-2 border-transparent py-3 hover:bg-transparent"
		>
			<Logo class="w-fit" />
		</Button>
	</div>

	<div class="m-auto w-full max-w-sm">
		<div class="text-center">
			<h1 class="font-serif text-4xl font-medium">Forgot password?</h1>
			<p class="mt-2 text-sm text-muted-foreground">
				Enter your email and we'll send you a reset link
			</p>
		</div>
		<Card variant="outline" class="mt-6 p-8">
			<form action="" class="space-y-5">
				<div class="space-y-3">
					<Label for="email" class="text-sm">Email</Label>
					<Input
						type="email"
						id="email"
						name="email"
						placeholder="you@example.com"
						required
					/>
				</div>

				<Button class="w-full" type="submit">Send Reset Link</Button>
			</form>
		</Card>

		<p class="mt-6 text-center text-sm text-muted-foreground">
			Remember your password?
			<Button href="/" variant="link" class="px-1 font-medium text-primary">Sign in</Button>
		</p>
	</div>
</section>
