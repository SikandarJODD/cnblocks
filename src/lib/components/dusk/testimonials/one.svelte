<script lang="ts">
	import { Play } from "@lucide/svelte";
	import Button from "#lib/components/ui/dusk/button/button.svelte";
	import { Gemini, OpenAI } from "#lib/svgs/index.ts";
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
		<div class="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
			<h2 class="text-4xl font-medium tracking-tight text-balance lg:text-5xl">
				By makers, loved by thousand developers
			</h2>
		</div>

		<div class="grid gap-3 lg:grid-cols-5">
			<div
				class="relative overflow-hidden rounded-xl bg-stone-100 p-8 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border after:border-foreground/10 lg:col-span-3 lg:row-span-2"
			>
				<video
					autoplay
					loop
					muted
					playsinline
					class="absolute inset-0 ml-auto h-full w-2/3 mask-l-from-foreground object-cover"
					src="https://videos.pexels.com/video-files/7732814/7732814-hd_1920_1080_25fps.mp4"
				></video>

				<div class="relative flex min-h-100 flex-col justify-between">
					<p class="max-w-lg text-3xl text-black">
						Congrats on your launch! Looks awesome! Still can't wait for your "animated
						AI gradient circle"
					</p>

					<div class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
						<OpenAI class="size-10 fill-black" />
						<div class="border-l border-black/10 pl-4">
							<p class="text-sm font-medium text-black">Shekinah Tshiokufila</p>
							<span class="block text-sm text-black/65">Software Engineer</span>
						</div>
						<Button
							size="icon"
							variant="secondary"
							class="self-end bg-black/20 inset-ring inset-ring-black/10"
							aria-label="Play testimonial video"
						>
							<Play
								fill="white"
								stroke="white"
								class="translate-x-px drop-shadow-md drop-shadow-black/25"
							/>
						</Button>
					</div>
				</div>
			</div>

			<div
				class="relative grid min-h-100 gap-8 overflow-hidden rounded-xl bg-emerald-600 p-8 inset-ring inset-ring-foreground/10 lg:col-span-2 lg:row-span-2 lg:grid-rows-subgrid"
			>
				<div class="pointer-events-none absolute inset-0 bg-linear-to-b to-black/25"></div>
				<p class="max-w-lg text-3xl text-balance">
					Great work on tailfolio template. This is one of the best personal website that
					I have seen so far!
				</p>

				<div class="relative grid grid-cols-[auto_1fr] items-center gap-4 self-end">
					<Gemini class="size-10" />
					<div class="border-l border-foreground/10 pl-4">
						<p class="text-sm font-medium">Shekinah Tshiokufila</p>
						<span class="block text-sm text-foreground/65">Software Engineer</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
