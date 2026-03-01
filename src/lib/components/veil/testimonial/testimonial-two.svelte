<script lang="ts">
	import { Card } from '$lib/components/ui/veil/card';

	const testimonials = [
		{
			avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
			name: 'Meschac Irung',
			role: 'Frontend Engineer at Acme',
			quote:
				'Tailark has been a game-changer for our team. It has helped us to build a modern and scalable web application.'
		},
		{
			avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
			name: 'Theo Balick',
			role: 'Founder, CEO - Acme',
			quote:
				'Tailark has been a game-changer for our team. It has helped us to build a modern and scalable web application.'
		},
		{
			avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
			name: 'Sarah Johnson',
			role: 'DevOps Engineer',
			quote:
				'Tailark has been a game-changer for our team. It has helped us to build a modern and scalable web application.'
		},
		{
			avatar: 'https://avatars.githubusercontent.com/u/34567890?v=4',
			name: 'Aisha Patel',
			role: 'Data Scientist',
			quote:
				'Tailark has been a game-changer for our team. It has helped us to build a modern and scalable web application.'
		}
	];
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-2xl px-6">
		<div class="space-y-4">
			<h2 class="font-serif text-4xl font-medium text-balance">What Our Customers Say</h2>
			<p class="text-balance text-muted-foreground">
				Hear from the teams and individuals who have transformed their workflow with our platform.
			</p>
		</div>
		<div class="mt-12 grid gap-3 @xl:grid-cols-2">
			{#each testimonials as testimonial, index}
				<Card
					variant="outline"
					class="flex items-end gap-3 rounded-2xl p-4 text-sm text-foreground"
				>
					<div
						class="relative size-5 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/10"
					>
						<img
							src={testimonial.avatar}
							alt={testimonial.name}
							class="rounded-full object-cover"
							width={40}
							height={40}
						/>
					</div>
					<div class="space-y-6">
						<p class="text-lg text-foreground">{testimonial.quote}</p>

						<div class="space-y-1">
							<p class="text-sm font-medium text-muted-foreground">
								{testimonial.name}
							</p>
							<p class="text-xs text-muted-foreground">{testimonial.role}</p>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>
