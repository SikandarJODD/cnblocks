<script>
	const members = [
		{
			name: 'Méschac Irung',
			role: 'Creator',
			avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4'
		},
		{
			name: 'Théo Balick',
			role: 'Frontend Dev',
			avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4'
		},
		{
			name: 'Glodie Lukose',
			role: 'Frontend Dev',
			avatar: 'https://avatars.githubusercontent.com/u/99137927?v=4'
		},
		{
			name: 'Bernard Ngandu',
			role: 'Backend Dev',
			avatar: 'https://avatars.githubusercontent.com/u/31113941?v=4'
		}
	];
</script>

<section class="py-12 md:py-32">
	<div class="mx-auto max-w-3xl px-8 lg:px-0">
		<h2 class="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Our team</h2>

		<div>
			<h3 class="mb-6 text-lg font-medium">Leadership</h3>
			<div class="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
				{#each members as member, index}
					<div>
						<div class="size-20 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5">
							<img
								class="aspect-square rounded-full object-cover"
								src={member.avatar}
								alt={member.name}
								height="460"
								width="460"
								loading="lazy"
							/>
						</div>
						<span class="mt-2 block text-sm">{member.name}</span>
						<span class="block text-xs text-muted-foreground">{member.role}</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-6">
			<h3 class="mb-6 text-lg font-medium">Engineering</h3>
			<div data-rounded="full" class="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
				{#each members as member, index}
					<div>
						<div class="size-20 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5">
							<img
								class="aspect-square rounded-full object-cover"
								src={member.avatar}
								alt={member.name}
								height="460"
								width="460"
								loading="lazy"
							/>
						</div>
						<span class="mt-2 block text-sm">{member.name}</span>
						<span class="block text-xs text-muted-foreground">{member.role}</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-6">
			<h3 class="mb-6 text-lg font-medium">Marketing</h3>
			<div data-rounded="full" class="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
				{#each members as member, index}
					<div>
						<div class="size-20 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5">
							<img
								class="aspect-square rounded-full object-cover"
								src={member.avatar}
								alt={member.name}
								height="460"
								width="460"
								loading="lazy"
							/>
						</div>
						<span class="mt-2 block text-sm">{member.name}</span>
						<span class="block text-xs text-muted-foreground">{member.role}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
