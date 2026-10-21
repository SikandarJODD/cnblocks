<script lang="ts">
	import Header from "./header.svelte";
	import LogoCloud from "./logo-cloud.svelte";
</script>

<Header />

<main class="overflow-hidden">
	<section>
		<div class="relative mx-auto px-4 pt-32 pb-4 lg:pt-44">
			<div class="mx-auto max-w-7xl px-6">
				<h1
					class="relative z-10 mx-auto max-w-xl text-center text-4xl font-medium tracking-tight text-balance"
				>
					<span class="text-muted-foreground">Train Smarter. Recover faster with</span> a personal
					coach
				</h1>

				<LogoCloud />
			</div>

			<div class="relative mt-12 overflow-hidden rounded-2xl py-20">
				<img
					src="/women-meditating-in-mountains.png"
					alt="Woman meditating in the mountains"
					width="2000"
					height="1331"
					class="absolute inset-0 size-full object-cover grayscale"
				/>

				<div class="relative z-10">
					<div
						aria-hidden="true"
						class="absolute inset-0 mx-auto aspect-27/58 max-w-72 rounded-4xl border border-black/15 bg-zinc-900/75 shadow-2xl ring ring-foreground/15 backdrop-blur after:absolute after:-inset-3 after:rounded-[2.5rem] after:border after:border-foreground/10"
					></div>

					<div
						aria-hidden="true"
						class="relative mx-auto aspect-27/58 max-w-72 overflow-hidden"
					>
						<img
							src="/strava.png"
							alt=""
							width="1284"
							height="2778"
							class="size-full rounded-4xl object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
