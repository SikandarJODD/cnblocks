<script lang="ts">
	import { Beacon, Bolt, Hulu, Spotify, SupabaseFull, VercelFull } from "#lib/svgs/index.js";
</script>

<div
	class="relative mt-24 flex flex-wrap items-center justify-center gap-8 **:fill-muted-foreground md:gap-x-16"
>
	<Bolt class="h-[22px] w-[54px]" />
	<VercelFull class="h-[22px] w-[84px]" />
	<SupabaseFull class="h-6 w-auto" />
	<Hulu class="h-[18px] w-14" />
	<Spotify class="h-[26px] w-[84px]" />
	<Beacon class="h-6 w-20" />
</div>
