<script lang="ts">
	import { Hulu, Spotify, SupabaseFull, VercelFull } from "#lib/svgs/index.js";
</script>

<section>
	<div class="mx-auto max-w-5xl px-6 py-8">
		<div class="flex flex-wrap items-center gap-4">
			<p class="text-center text-muted-foreground">Trusted by teams at :</p>
			<div class="flex items-center justify-center gap-8 **:fill-foreground">
				<Spotify aria-label="Spotify" role="img" class="h-[22px] w-[73px]" />
				<VercelFull aria-label="Vercel" role="img" class="h-5 w-[76px]" />
				<SupabaseFull aria-label="Supabase" role="img" class="h-[22px] w-auto" />
				<Hulu aria-label="Hulu" role="img" class="h-4 w-[50px]" />
			</div>
		</div>
	</div>
</section>
