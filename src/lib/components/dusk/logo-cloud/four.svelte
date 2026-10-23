<script lang="ts">
	import { Bolt, Hulu, Spotify, SupabaseFull, VercelFull } from "#lib/svgs/index.js";
</script>

<section class="bg-background py-12">
	<div class="relative m-auto max-w-7xl px-6">
		<div
			class="relative flex gap-6 **:fill-foreground max-lg:flex-col lg:items-center lg:gap-12"
		>
			<p class="shrink-0 text-muted-foreground lg:border-r lg:pr-12 lg:text-end">
				Powering the <br class="max-lg:hidden" /> best teams
			</p>

			<div class="flex w-full flex-wrap items-center justify-between gap-6">
				<Bolt height="24" width="58" />
				<VercelFull height="24" width="100" />
				<SupabaseFull class="h-7 w-auto" />
				<Hulu height="20" width="60" />
				<Spotify height="28" width="90" />
			</div>
		</div>
	</div>
</section>
