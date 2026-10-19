<script>
	import Header from "#lib/components/blocks/header/header-nine.svelte";
	import Button from "#lib/components/ui/button/button.svelte";

	import {
		Beacon,
		Bolt,
		Cisco,
		Claude,
		Figma,
		FirebaseFull,
		Hulu,
		Spotify,
		SupabaseFull,
		VercelFull,
	} from "#lib/svgs/index.js";
</script>

<div>
	<Header />
	<main>
		<div
			aria-hidden={true}
			class="absolute inset-0 isolate z-2 hidden opacity-50 contain-strict lg:block"
		>
			<div
				class="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
			></div>
			<div
				class="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
			></div>
			<div
				class="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
			></div>
		</div>

		<section class="overflow-hidden bg-white dark:bg-transparent">
			<div class="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
				<div class="relative z-10 mx-auto max-w-2xl text-center">
					<h1 class="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
						Modern Software testing reimagined
					</h1>
					<p class="mx-auto my-8 max-w-2xl text-xl">
						Officiis laudantium excepturi ducimus rerum dignissimos, and tempora nam
						vitae, excepturi ducimus iste provident dolores.
					</p>

					<Button href="/" size="lg">
						<span class="btn-label">Start Building</span>
					</Button>
				</div>
			</div>

			<div class="mx-auto -mt-16 max-w-7xl">
				<div class="-mr-16 pl-16 perspective-distant lg:-mr-56 lg:pl-56">
					<div class="[transform:rotateX(20deg);]">
						<div class="relative skew-x-[.36rad] lg:h-176">
							<div
								aria-hidden={true}
								class="absolute -inset-16 z-1 bg-linear-to-b from-background via-transparent to-background sm:-inset-32"
							></div>
							<div
								aria-hidden={true}
								class="absolute -inset-16 z-1 bg-white/50 bg-linear-to-r from-background via-transparent to-background sm:-inset-32 dark:bg-transparent"
							></div>

							<div
								aria-hidden={true}
								class="absolute -inset-16 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[24px_24px] text-zinc-400 sm:-inset-32 dark:text-white/20"
							></div>
							<div
								aria-hidden={true}
								class="absolute inset-0 z-11 bg-linear-to-l from-background"
							></div>
							<div
								aria-hidden={true}
								class="absolute inset-0 z-2 size-full items-center bg-radial-[125%_125%_at_50%_10%] from-transparent from-40% to-background to-100% px-5 py-24"
							></div>
							<div
								aria-hidden={true}
								class="absolute inset-0 z-2 size-full items-center bg-radial-[125%_125%_at_50%_10%] from-transparent from-40% to-background to-100% px-5 py-24"
							></div>

							<img
								class="relative z-1 rounded-(--radius) border dark:hidden"
								src="/card.png"
								alt="Tailark hero section"
								width={2880}
								height={2074}
							/>
							<img
								class="relative z-1 hidden rounded-(--radius) border dark:block"
								src="/dark-card.webp"
								alt="Tailark hero section"
								width={2880}
								height={2074}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="relative z-10 bg-muted/50 py-16 dark:bg-background">
			<div class="m-auto max-w-5xl px-6">
				<h2 class="text-center text-lg font-medium">
					Your favorite companies are our partners.
				</h2>
				<div
					class="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 **:fill-foreground sm:gap-x-16 sm:gap-y-12"
				>
					<Bolt height={22} width={56} />
					<VercelFull height={22} width={84} />
					<SupabaseFull class="h-6" />
					<Hulu height={18} width={56} />
					<Spotify height={24} width={80} />
					<FirebaseFull height={24} width={80} />
					<Beacon height={24} width={80} />
					<Claude height={26} width={90} />
					<Figma height={24} width={24} />
					<Cisco height={30} width={60} />
				</div>
			</div>
		</section>
	</main>
</div>
