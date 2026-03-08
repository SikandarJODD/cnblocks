<script lang="ts">
	import { Cisco, Slack, Spotify, Vercel } from "$lib/svgs";
</script>

<section>
	<div class="mx-auto max-w-5xl px-6 py-8">
		<div>
			<p class="font-medium text-muted-foreground">Trusted by teams at :</p>
			<div class="mt-4 flex items-center gap-12">
				<div class="flex items-center justify-center">
					<Vercel class="h-5 w-full text-foreground" variant="full" />
				</div>

				<div class="flex items-center justify-center">
					<Cisco class="h-4 w-full text-foreground" />
				</div>
				<div class="flex items-center justify-center">
					<Slack class="h-4 w-full" />
				</div>
				<div class="flex items-center justify-center">
					<Spotify class="h-5 w-full" />
				</div>
			</div>
		</div>
	</div>
</section>
