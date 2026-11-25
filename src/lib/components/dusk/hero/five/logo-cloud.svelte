<script lang="ts">
	import { Beacon, Bolt, Hulu, Spotify, SupabaseFull, VercelFull } from "#lib/svgs/index.js";
</script>

<section class="bg-background">
	<div class="relative m-auto max-w-7xl px-6 **:fill-foreground">
		<div
			class="flex flex-wrap items-center justify-center gap-x-11 gap-y-8 py-8 lg:justify-between lg:py-12"
		>
			<Hulu class="h-5 w-[60px]" />
			<VercelFull class="h-6 w-[100px]" />
			<Bolt class="h-6 w-[58px]" />
			<SupabaseFull class="h-7 w-auto" />
			<Beacon class="h-[26px] w-[92px]" />
			<Spotify class="h-7 w-[90px]" />
		</div>
	</div>
</section>
