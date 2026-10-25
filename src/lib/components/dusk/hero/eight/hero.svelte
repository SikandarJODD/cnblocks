<script lang="ts">
	import { G2, Google, Trustpilot } from "#lib/svgs/index.js";
	import Header from "./header.svelte";
	import ProfileCard from "./profile-card.svelte";
</script>

<Header />

<main class="overflow-x-hidden">
	<section class="bg-[#fcfaf6] pt-40 pb-24 md:pt-56 dark:bg-transparent">
		<div class="relative mx-auto max-w-7xl px-6">
			<h1 class="text-center text-4xl font-medium tracking-tight text-balance">
				Family money, finally organized. <br />
				<span class="text-stone-500 dark:text-muted-foreground">
					Plan budgets, bills, and savings together
				</span>
			</h1>

			<div
				class="relative mx-auto mt-6 aspect-square max-w-4xl overflow-hidden sm:aspect-3/2"
			>
				<ProfileCard
					name="Théo Balick"
					alt="Théo's avatar"
					imageSrc="https://avatars.githubusercontent.com/u/68236786?v=4"
					class="z-11 scale-85"
					cardClass="bg-zinc-900/80 text-zinc-50 dark:bg-card/75 dark:text-foreground"
					rightMaskClass="border-white/35 dark:border-foreground/35"
				/>

				<ProfileCard
					name="Shadcn"
					alt="Shadcn avatar"
					imageSrc="https://avatars.githubusercontent.com/u/124599?v=4"
					class="origin-top -translate-y-1 scale-75"
					cardClass="bg-zinc-800/90 text-zinc-50 dark:bg-card/75 dark:text-foreground"
				/>

				<img
					src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
					width="1280"
					height="1000"
					class="size-full rounded-[2rem] object-cover shadow-[0_32px_90px_-48px_rgba(82,62,38,0.45)] ring-1 ring-stone-900/5 max-sm:scale-150 dark:hidden"
				/>

				<img
					src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
					width="1280"
					height="1000"
					class="hidden size-full mask-y-from-80% mask-x-from-80% object-cover max-sm:scale-150 dark:block dark:mix-blend-lighten"
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
