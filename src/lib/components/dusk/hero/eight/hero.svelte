<script lang="ts">
	import { G2, Google, Trustpilot } from "#lib/svgs/index.js";
	import Header from "./header.svelte";
	import ProfileCard from "./profile-card.svelte";
</script>

<Header />

<main class="overflow-x-hidden">
	<section class="pt-40 pb-24 md:pt-56">
		<div class="relative mx-auto max-w-7xl px-6">
			<h1 class="text-center text-4xl font-medium tracking-tight text-balance">
				Family money, finally organized. <br />
				<span class="text-muted-foreground">Plan budgets, bills, and savings together</span>
			</h1>

			<div
				class="relative mx-auto mt-6 aspect-square max-w-4xl overflow-hidden sm:aspect-3/2"
			>
				<ProfileCard
					name="Théo Balick"
					alt="Théo's avatar"
					imageSrc="https://avatars.githubusercontent.com/u/68236786?v=4"
					class="z-11 scale-85"
					cardClass="bg-card/75"
					rightMaskClass="border-foreground/35"
				/>

				<ProfileCard
					name="Shadcn"
					alt="Shadcn avatar"
					imageSrc="https://avatars.githubusercontent.com/u/124599?v=4"
					class="origin-top -translate-y-1 scale-75"
					cardClass="bg-white/90"
				/>

				<img
					src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Background"
					width="1280"
					height="1000"
					class="size-full mask-y-from-80% mask-x-from-80% object-cover max-sm:scale-150 dark:mix-blend-lighten"
				/>
			</div>
		</div>

		<div class="mt-12">
			<p class="text-center text-lg text-muted-foreground">
				Trusted by over 100,000 families
			</p>

			<div class="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-6">
				<div class="flex items-center gap-2">
					<Google class="size-5" />
					<p class="text-lg font-medium text-foreground"><span>4.8</span> Google</p>
				</div>

				<div class="flex items-center gap-2">
					<Trustpilot class="size-5" />
					<p class="text-lg font-medium text-foreground"><span>4.6</span> Trustpilot</p>
				</div>

				<div class="flex items-center gap-2">
					<G2 class="size-5" />
					<p class="text-lg font-medium text-foreground"><span>4.5</span> G2</p>
				</div>
			</div>
		</div>
	</section>
</main>
