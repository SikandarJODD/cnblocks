<script lang="ts">
	import { Button } from "$lib/components/ui/veil/button";
	import { Card } from "$lib/components/ui/veil/card";
	import { Input } from "$lib/components/ui/veil/input";
	import { Label } from "$lib/components/ui/label";
	import { Textarea } from "$lib/components/ui/veil/textarea";
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-3xl px-6">
		<div>
			<h1 class="font-serif text-4xl font-medium text-balance sm:text-5xl">Get in Touch</h1>
			<p class="mt-4 max-w-md text-balance text-muted-foreground">
				Have questions? We'd love to hear from you. Send us a message and we'll respond as
				soon as possible.
			</p>
		</div>

		<div class="mt-12 grid gap-8 @xl:grid-cols-5">
			<div class="space-y-6 *:space-y-2 @xl:col-span-2">
				<div>
					<p class="text-sm font-medium text-foreground">Email</p>
					<a
						href="mailto:hello@example.com"
						class="text-sm text-muted-foreground hover:text-primary"
					>
						hello@example.com
					</a>
				</div>

				<div>
					<p class="text-sm font-medium text-foreground">Phone</p>
					<a
						href="tel:+1234567890"
						class="text-sm text-muted-foreground hover:text-primary"
					>
						+1 (234) 567-890
					</a>
				</div>

				<div>
					<p class="text-sm font-medium text-foreground">Office</p>
					<p class="text-sm text-muted-foreground">
						123 Main Street, San Francisco, CA 94102
					</p>
				</div>
			</div>

			<Card variant="outline" class="p-6 @xl:col-span-3">
				<form action="" class="space-y-5">
					<div class="grid gap-4 @md:grid-cols-2">
						<div class="space-y-2">
							<Label for="name" class="text-sm">Name</Label>
							<Input
								type="text"
								id="name"
								name="name"
								placeholder="Your name"
								required
							/>
						</div>
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
					</div>

					<div class="space-y-2">
						<Label for="subject" class="text-sm">Subject</Label>
						<Input
							type="text"
							id="subject"
							name="subject"
							placeholder="How can we help?"
						/>
					</div>

					<div class="space-y-2">
						<Label for="message" class="text-sm">Message</Label>
						<Textarea
							id="message"
							name="message"
							rows={4}
							placeholder="Tell us more..."
							required
							class="min-h-28"
						/>
					</div>

					<Button class="w-full" type="submit">Send Message</Button>
				</form>
			</Card>
		</div>
	</div>
</section>
