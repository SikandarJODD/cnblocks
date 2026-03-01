<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

	const members = [
		{
			src: 'https://avatars.githubusercontent.com/u/93428946?v=4',
			name: 'Bhide Svelte',
			role: 'Svelte Developer'
		},
		{
			src: 'https://avatars.githubusercontent.com/u/117548273?v=4',
			name: 'Aiden Bleser',
			role: 'Creator of jsrepo'
		},
		{
			src: 'https://avatars.githubusercontent.com/u/47919550?v=4',
			name: 'Meschac Irung',
			role: 'Frontend Engineer'
		},
		{
			src: 'https://avatars.githubusercontent.com/u/1162160?v=4',
			name: 'Rich Harris',
			role: 'Creator of Svelte'
		},
		{
			src: 'https://avatars.githubusercontent.com/u/64506580?v=4',
			name: 'Hunter Johnson',
			role: 'Creator of Shadcn-Svelte'
		},
		{
			src: 'https://avatars.githubusercontent.com/u/38083522?v=4',
			name: 'Matia',
			role: 'Joy of Code'
		},
		{
			src: 'https://avatars.githubusercontent.com/u/23456789?v=4',
			name: 'Aditya Karle',
			role: 'UI/UX Designer'
		},
		{
			src: 'https://avatars.githubusercontent.com/u/34567890?v=4',
			name: 'Saloni Maheshwari',
			role: 'Data Scientist'
		},
		{
			src: 'https://avatars.githubusercontent.com/u/45678901?v=4',
			name: 'Carlos Rodriguez',
			role: 'Product Manager'
		},
		{
			src: 'https://avatars.githubusercontent.com/u/56789012?v=4',
			name: 'Emma Wilson',
			role: 'Content Strategist'
		}
	];
</script>

<section>
	<div class="bg-muted/50 py-24 dark:bg-muted/30">
		<div class="@container mx-auto w-full max-w-5xl px-6">
			<div class="mb-12">
				<h2 class="text-4xl font-semibold text-foreground">Meet Our Team</h2>
				<p class="my-4 text-lg text-balance text-muted-foreground">
					Our talented professionals bring diverse expertise and passion to every project. Together,
					we collaborate to deliver exceptional results and innovative solutions for our clients.
				</p>
				<Button href="" variant="outline" class="pr-2">
					We're hiring
					<ChevronRight class="opacity-50" />
				</Button>
			</div>

			<div class="grid gap-6 md:gap-y-10 @sm:grid-cols-2 @xl:grid-cols-3">
				{#each members as member, index}
					<div class="grid grid-cols-[auto_1fr] items-center gap-3">
						<Avatar class="size-10  rounded-(--radius) border border-transparent shadow ring-1">
							<AvatarImage src={member.src} alt={member.name} />
							<AvatarFallback class="rounded-(--radius)">{member.name.charAt(0)}</AvatarFallback>
						</Avatar>

						<div>
							<span class="font-medium text-foreground">{member.name}</span>
							<div class="text-sm text-muted-foreground">{member.role}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
