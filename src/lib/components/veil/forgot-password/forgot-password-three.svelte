<script lang="ts">
	import { Bolt as Logo } from "$lib/svgs/index";
	import { Button } from "$lib/components/ui/veil/button";
	import { Input } from "$lib/components/ui/veil/input";
	import { Label } from "$lib/components/ui/label";
</script>

<section class="flex min-h-screen bg-background px-4 py-16 md:py-24">
	<div class="m-auto w-full max-w-xs">
		<div class="text-center">
			<Button
				href="/"
				aria-label="go home"
				variant="ghost"
				size="sm"
				class="inline-block h-auto py-3 hover:bg-transparent"
			>
				<Logo class="mx-auto w-fit" />
			</Button>
			<h1 class="mt-3 font-serif text-4xl font-medium">Reset password</h1>
		</div>

		<form action="" class="mt-12 space-y-4">
			<div class="space-y-2">
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

		<p class="mt-8 text-center text-sm text-muted-foreground">
			Remember your password?
			<Button href="#" variant="link" class="px-1 font-medium text-primary">Sign in</Button>
		</p>
	</div>
</section>
