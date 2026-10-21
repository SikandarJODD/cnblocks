<script lang="ts">
	import { Beacon, Bolt, Hulu, Spotify, SupabaseFull, VercelFull } from "#lib/svgs/index.js";
</script>

<section class="bg-background pt-4 pb-16">
	<div class="relative m-auto max-w-7xl px-6 **:fill-foreground">
		<div class="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 lg:justify-between">
			<Bolt class="h-6 w-[58px]" />
			<VercelFull class="h-6 w-[100px]" />
			<SupabaseFull class="h-7 w-auto" />
			<Hulu class="h-5 w-[60px]" />
			<Spotify class="h-7 w-[90px]" />
			<Beacon class="h-[26px] w-[92px]" />
		</div>
	</div>
</section>
