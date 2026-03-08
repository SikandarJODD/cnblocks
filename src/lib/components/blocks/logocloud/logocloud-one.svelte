<script lang="ts">
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
</script>

<section class="bg-background py-16">
	<div class="mx-auto max-w-5xl px-6">
		<h2 class="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
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
