<script>
	import { Bolt as Logo, Clerk, Firebase, Linear, Slack, Supabase, Vercel } from '$lib/svgs/index';
</script>

<div aria-hidden class="mx-auto flex h-44 max-w-lg flex-col justify-between **:fill-foreground">
	<div class="relative flex h-10 items-center justify-between gap-12 @lg:px-6">
		<div class="absolute inset-0 my-auto h-px bg-border"></div>

		<div
			class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
		>
			<Vercel class="size-3.5" />
		</div>
		<div
			class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
		>
			<Slack class="size-3.5" />
		</div>
	</div>
	<div class="relative flex h-10 items-center justify-between px-12 @lg:px-24">
		<div class="absolute inset-0 my-auto h-px bg-border"></div>
		<div
			class="absolute inset-0 my-auto h-px w-1/2 bg-linear-to-r from-primary via-amber-500 to-pink-400 mask-r-from-75% mask-r-to-75% mask-l-from-15% mask-l-to-40%"
		></div>
		<div
			class="absolute inset-0 my-auto ml-auto h-px w-1/2 bg-linear-to-r from-indigo-500 via-emerald-500 to-blue-400 mask-r-from-15% mask-r-to-40% mask-l-from-75% mask-l-to-75%"
		></div>

		<div
			class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
		>
			<Clerk class="size-3.5" />
		</div>
		<div class="rounded-full border border-dashed border-foreground/15 p-2">
			<div
				class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
			>
				<Logo class="h-4" />
			</div>
		</div>
		<div
			class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
		>
			<Linear class="size-3.5" />
		</div>
	</div>
	<div class="relative flex h-10 items-center justify-between gap-12 @lg:px-6">
		<div class="absolute inset-0 my-auto h-px bg-border"></div>

		<div
			class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
		>
			<Supabase class="size-3.5" />
		</div>
		<div
			class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
		>
			<Firebase class="size-3.5" />
		</div>
	</div>
</div>
