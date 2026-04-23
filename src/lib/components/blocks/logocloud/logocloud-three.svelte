<script lang="ts">
	import { Marquee } from "$lib/components/magic/marquee";
	import { ProgressiveBlur } from "$lib/components/magic/progressive-blur";
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
	} from "$lib/svgs";

	import { cn } from "$lib/utils";

	export const GRADIENT_ANGLES = {
		top: 0,
		right: 90,
		bottom: 180,
		left: 270,
	};

	type ProgressiveBlurProps = {
		direction?: keyof typeof GRADIENT_ANGLES;
		blurLayers?: number;
		class?: string;
		blurIntensity?: number;
	};
</script>

<section class="overflow-hidden bg-background py-16">
	<div class="group relative m-auto max-w-7xl px-6">
		<div class="flex flex-col items-center md:flex-row">
			<div class="md:max-w-44 md:border-r md:pr-6">
				<p class="text-end text-sm">Powering the best teams</p>
			</div>
			<div class="relative py-6 **:fill-foreground md:w-[calc(100%-11rem)]">
				<Marquee>
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
				</Marquee>

				<div
					aria-hidden={true}
					class="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"
				></div>
				<div
					aria-hidden={true}
					class="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"
				></div>

				<ProgressiveBlur
					direction="left"
					blurIntensity={1}
					class="pointer-events-none absolute top-0 left-0 h-full w-20"
				/>
				<ProgressiveBlur
					direction="right"
					blurIntensity={1}
					class="pointer-events-none absolute top-0 right-0 h-full w-20"
				/>
			</div>
		</div>
	</div>
</section>
