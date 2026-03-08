<script lang="ts">
	import { Cisco, Slack, Spotify, Vercel } from "$lib/svgs";
</script>

<section>
	<div class="mx-auto max-w-5xl px-6 py-8">
		<div class="flex flex-wrap items-center gap-4">
			<p class="text-center text-muted-foreground">Trusted by teams at :</p>
			<div class="flex items-center justify-center gap-8">
				<div class="flex items-center justify-center">
					<Vercel class="h-4 w-full text-foreground" variant="full" />
				</div>

				<div class="flex items-center justify-center">
					<Cisco class="h-3 w-full text-foreground" />
				</div>
				<div class="flex items-center justify-center">
					<Slack class="h-3 w-full" />
				</div>
				<div class="flex items-center justify-center">
					<Spotify class="h-4 w-full" />
				</div>
			</div>
		</div>
	</div>
</section>
