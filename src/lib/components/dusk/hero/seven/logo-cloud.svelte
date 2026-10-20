<script lang="ts">
	import { Bolt, Hulu, Spotify, SupabaseFull, VercelFull } from "#lib/svgs/index.js";
</script>

<section class="bg-background py-12 lg:pt-28">
	<div class="relative m-auto max-w-7xl px-6">
		<div
			class="relative flex flex-col gap-6 **:fill-foreground lg:flex-row lg:items-center lg:gap-12"
		>
			<p class="shrink-0 text-muted-foreground lg:border-r lg:pr-12 lg:text-end">
				Powering the <br class="max-lg:hidden" /> best teams
			</p>

			<div
				class="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:justify-between"
			>
				<Bolt class="h-6 w-[58px]" />
				<VercelFull class="h-6 w-[100px]" />
				<SupabaseFull class="h-7 w-auto" />
				<Hulu class="h-5 w-[60px]" />
				<Spotify class="h-7 w-[90px]" />
			</div>
		</div>
	</div>
</section>
