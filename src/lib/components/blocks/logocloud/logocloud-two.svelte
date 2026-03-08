<script lang="ts">
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import {
		Beacon,
		Bolt,
		Claude,
		Firebase,
		FirebaseFull,
		Hulu,
		Spotify,
		Supabase,
		SupabaseFull,
		Vercel,
		VercelFull,
	} from "$lib/svgs";
</script>

<section class="bg-background py-16">
	<div class="group relative m-auto max-w-5xl px-6">
		<div
			class="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100"
		>
			<a href="/" class="block text-sm duration-150 hover:opacity-75">
				<span> Meet Our Customers</span>

				<ChevronRight class="ml-1 inline-block size-3" />
			</a>
		</div>
		<div
			class="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-x-12 gap-y-8 transition-all duration-500 **:fill-foreground group-hover:opacity-50 group-hover:blur-xs sm:gap-x-16 sm:gap-y-14 md:grid-cols-4"
		>
			<div class="flex items-center">
				<Bolt class="mx-auto h-5 w-full" />
			</div>
			<div class="flex items-center">
				<VercelFull class="mx-auto h-4 w-full" />
			</div>
			<div class="flex items-center">
				<SupabaseFull class="mx-auto h-6" />
			</div>
			<div class="flex items-center">
				<Hulu class="mx-auto h-4 w-full" />
			</div>
			<div class="flex items-center">
				<Spotify class="mx-auto h-6 w-full" />
			</div>
			<div class="flex items-center">
				<FirebaseFull class="mx-auto h-6 w-full" />
			</div>
			<div class="flex items-center">
				<Beacon class="mx-auto h-4 w-full" />
			</div>
			<div class="flex items-center">
				<Claude class="mx-auto h-5 w-full" />
			</div>
		</div>
	</div>
</section>
