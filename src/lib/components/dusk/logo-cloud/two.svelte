<script lang="ts">
	import { Beacon, Bolt, Hulu, Spotify, SupabaseFull, VercelFull } from "#lib/svgs/index.js";
</script>

<section class="bg-background">
	<div class="relative m-auto max-w-7xl **:fill-foreground">
		<div
			class="grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-8 px-6 py-8 sm:grid-cols-3 lg:flex lg:justify-between lg:py-12"
		>
			<Hulu height="20" width="60" />
			<VercelFull height="24" width="100" />
			<Bolt height="24" width="58" />
			<SupabaseFull class="h-7 w-auto" />
			<Beacon height="26" width="92" />
			<Spotify height="28" width="90" />
		</div>
	</div>
</section>
