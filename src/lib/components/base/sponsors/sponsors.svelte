<script lang="ts">
	import Button from "#lib/components/ui/button/button.svelte";

	type Sponsor = {
		name: string;
		handle: string;
		avatar: string;
		github: string;
	};

	const sponsorUrl = "https://github.com/sponsors/SikandarJODD";

	const sponsors: Sponsor[] = [
		{
			name: "Guillermo Rauch",
			handle: "rauchg",
			avatar: "https://avatars.githubusercontent.com/u/13041?v=4",
			github: "https://github.com/rauchg",
		},
		{
			name: "Aidan Bleser",
			handle: "ieedan",
			avatar: "https://avatars.githubusercontent.com/u/117548273?v=4",
			github: "https://github.com/ieedan",
		},
		{
			name: "Nono Martínez Alonso",
			handle: "nonoesp",
			avatar: "https://avatars.githubusercontent.com/u/1243210?v=4",
			github: "https://github.com/nonoesp",
		},
		{
			name: "ZerGo0",
			handle: "ZerGo0",
			avatar: "https://avatars.githubusercontent.com/u/18653821?v=4",
			github: "https://github.com/ZerGo0",
		},
		{
			name: "Francisco Sainz",
			handle: "pacosw1",
			avatar: "https://avatars.githubusercontent.com/u/12486003?v=4",
			github: "https://github.com/pacosw1",
		},
		{
			name: "Joe Krump",
			handle: "joekrump",
			avatar: "https://avatars.githubusercontent.com/u/3317231?v=4",
			github: "https://github.com/joekrump",
		},
		{
			name: "Yashash Pugalia",
			handle: "yashash-pugalia",
			avatar: "https://avatars.githubusercontent.com/u/89068816?v=4",
			github: "https://github.com/yashash-pugalia",
		},
		{
			name: "Ever",
			handle: "ruizdiazever",
			avatar: "https://avatars.githubusercontent.com/u/29817086?v=4",
			github: "https://github.com/ruizdiazever",
		},
		{
			name: "Hunter Johnston",
			handle: "huntabyte",
			avatar: "https://avatars.githubusercontent.com/u/64506580?v=4",
			github: "https://github.com/huntabyte",
		},
		{
			name: "hahaha-helpme",
			handle: "hahaha-helpme",
			avatar: "https://avatars.githubusercontent.com/u/43705134?v=4",
			github: "https://github.com/hahaha-helpme",
		},
	];
</script>

<section class="space-y-5" aria-labelledby="sponsors">
	<div class="space-y-2">
		<h2 id="sponsors" class="scroll-m-20 font-gmono text-2xl text-foreground">Sponsors</h2>
		<p class="text-base leading-relaxed text-muted-foreground">
			Thankyouu everyone for supporting my work.
		</p>
	</div>

	<ul class="grid gap-x-6 gap-y-4 sm:grid-cols-2">
		{#each sponsors as sponsor (sponsor.handle)}
			<li>
				<a
					href={sponsor.github}
					target="_blank"
					rel="noreferrer"
					class="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
				>
					<img
						src={sponsor.avatar}
						alt=""
						class="size-10 rounded-full object-cover"
						loading="lazy"
						width="40"
						height="40"
					/>
					<span class="min-w-0">
						<span
							class="block truncate text-sm font-medium text-foreground group-hover:underline"
						>
							{sponsor.name}
						</span>
						<span class="block truncate text-xs text-muted-foreground"
							>@{sponsor.handle}</span
						>
					</span>
				</a>
			</li>
		{/each}
	</ul>

	<div class=" mt-8">
		<Button
			href={sponsorUrl}
			class="rounded-xl px-5 font-gmono [corner-shape:superellipse(1.4)]"
			>Sponsor my work</Button
		>
	</div>
</section>
