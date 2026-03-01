<script>
	import { Spotify, Supabase, Bolt, Hulu, Linear, Cisco, Vercel, Beacon } from '$lib/svgs';
</script>

<section class="@container bg-background py-12">
	<div class="mx-auto max-w-xl px-6">
		<div
			class="grid grid-cols-3 gap-x-8 gap-y-12 *:flex *:items-center *:justify-center **:fill-foreground @xl:grid-cols-4"
		>
			<div>
				<Vercel class="h-3.5 w-full" />
			</div>
			<div>
				<Spotify class="h-4.5 w-full" />
			</div>

			<div>
				<Supabase class="size-5" />
			</div>
			<div>
				<Hulu class="h-3.5 w-full" />
			</div>
			<div>
				<Bolt class="h-4 w-full" />
			</div>
			<div>
				<Linear class="size-4" />
			</div>
			<div>
				<Cisco class="h-5 w-full" />
			</div>
			<div>
				<Beacon class="h-3.5 w-full" />
			</div>
		</div>
	</div>
</section>
