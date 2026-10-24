<script lang="ts">
	import Button from "#lib/components/ui/dusk/button/button.svelte";

	const members = [
		{
			name: "Marcus Chen",
			role: "Head of Product",
			avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "Sofia Ramirez",
			role: "Revenue Operations Lead",
			avatar: "https://images.unsplash.com/photo-1633625763717-045645e9e739?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "Ethan Brooks",
			role: "Founder & CEO",
			avatar: "https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "Maya Patel",
			role: "Customer Success Manager",
			avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "Nora Williams",
			role: "Product Designer",
			avatar: "https://images.unsplash.com/photo-1605661107759-587d4bfdf168?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "Daniel Kim",
			role: "Co-Founder & CTO",
			avatar: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "Julian Parker",
			role: "Staff Software Engineer",
			avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "Noah Wilson",
			role: "Sales Engineering Lead",
			avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid grid-cols-[auto_1fr] items-center gap-4">
			<span class="block text-sm text-muted-foreground">Team</span>
			<span class="h-px w-full bg-border"></span>
		</div>
		<div class="mt-12 grid gap-4 md:mt-24 md:grid-cols-2 md:gap-6 lg:gap-12">
			<div class="sm:w-2/5">
				<h2 class="text-4xl font-medium tracking-tight">Our dream team</h2>
			</div>
			<div class="space-y-4">
				<p class="text-lg text-muted-foreground">
					During the working process, we perform regular fitting with the client because
					he is the only person who can feel whether a new suit fits or not.
				</p>
				<Button variant="outline" href="/">See pending roles</Button>
			</div>
		</div>
		<div class="mt-12 md:mt-24">
			<div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
				{#each members as member (member.name)}
					<div class="group">
						<div
							class="aspect-square overflow-hidden transition-all duration-200 [clip-path:inset(0_0_0_0_round_12px)] group-hover:[clip-path:inset(0_0_4px_0_round_16px)]"
						>
							<img
								class="size-full object-cover object-top grayscale"
								src={member.avatar}
								alt={member.name}
								width="826"
								height="1239"
								sizes="(max-width: 768px) 100vw, 280px"
								loading="lazy"
							/>
						</div>
						<div class="pt-3">
							<h3 class="font-medium">{member.name}</h3>
							<p class="inline-block text-sm text-muted-foreground">{member.role}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
