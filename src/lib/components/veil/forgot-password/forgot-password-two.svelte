<script lang="ts">
	import { Bolt as Logo } from "$lib/svgs/index";
	import { Button } from "$lib/components/ui/veil/button";
	import { Input } from "$lib/components/ui/veil/input";
	import { Label } from "$lib/components/ui/label";
</script>

<section class="flex min-h-screen bg-background px-4 py-16 md:py-24">
	<div class="m-auto w-full max-w-sm rounded-2xl border bg-muted p-8">
		<div>
			<Button
				href="/"
				aria-label="go home"
				variant="ghost"
				size="sm"
				class="h-auto p-0 hover:bg-transparent"
			>
				<Logo class="h-6 w-fit" />
			</Button>
			<h1 class="mt-6 font-serif text-2xl font-medium">Forgot password?</h1>
			<p class="mt-1 text-sm text-muted-foreground">
				No worries, we'll send you reset instructions
			</p>
		</div>

		<form action="" class="mt-8 space-y-5">
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
			<Button href="/" variant="link" class="px-1 font-medium text-primary">Sign in</Button>
		</p>
	</div>
</section>
