<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Input } from "$lib/components/ui/input";
	import { Separator } from "$lib/components/ui/separator";
	import LogoIcon from "./logo-icon.svelte";
</script>

<div class="flex min-h-screen items-center justify-center">
	<Card class="w-full max-w-sm rounded-4xl px-6 py-10 pt-14">
		<CardContent class="">
			<div class="flex flex-col items-center space-y-8">
				<LogoIcon />

				<div class="space-y-2 text-center">
					<h1 class="text-3xl font-semibold text-foreground">Welcome back!</h1>
					<p class="text-sm text-muted-foreground">
						First time here?{" "}
						<a href="#" class="text-foreground hover:underline"> Sign up for free </a>
					</p>
				</div>

				<div class="w-full space-y-4">
					<Input type="email" placeholder="Your email" class="w-full rounded-xl" />
					<div class="flex flex-col gap-2">
						<Button class="w-full rounded-xl" size="lg">Send me the magic link</Button>
						<Button variant="link" class="w-full text-sm text-muted-foreground">
							Sign in using password
						</Button>
					</div>

					<div class="flex items-center gap-4 py-2">
						<Separator class="flex-1" />
						<span class="text-sm text-muted-foreground">OR</span>
						<Separator class="flex-1" />
					</div>

					<Button variant="outline" class="w-full rounded-xl" size="lg">
						Single sign-on (SSO)
					</Button>
				</div>

				<p class="w-11/12 text-center text-xs text-muted-foreground">
					You acknowledge that you read, and agree, to our{" "}
					<a href="#" class="underline hover:text-foreground"> Terms of Service </a>{" "}
					and our{" "}
					<a href="#" class="underline hover:text-foreground"> Privacy Policy </a>
					.
				</p>
			</div>
		</CardContent>
	</Card>
</div>
