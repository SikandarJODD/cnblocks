<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { Beacon, Bolt, Cisco, Hulu, Spotify, Supabase, Vercel } from "$lib/svgs";

	type LogoGroup = "ai" | "hosting" | "payments" | "streaming";
	type LogoItem = {
		key: string;
		component: any;
		className: string;
		props?: Record<string, unknown>;
	};

	const logos: Record<LogoGroup, LogoItem[]> = {
		ai: [
			{ key: "bolt", component: Bolt, className: "h-3.5 w-full" },
			{ key: "beacon", component: Beacon, className: "h-3.5 w-full" },
			{ key: "hulu", component: Hulu, className: "h-3.5 w-full" },
		],
		hosting: [
			{ key: "supabase", component: Supabase, className: "size-5" },
			{ key: "spotify", component: Spotify, className: "h-5 w-full" },
			{
				key: "vercel",
				component: Vercel,
				className: "h-3.5 w-full",
				props: { variant: "full" },
			},
		],
		payments: [
			{ key: "hulu", component: Hulu, className: "h-3.5 w-full" },
			{
				key: "vercel",
				component: Vercel,
				className: "h-3.5 w-full",
				props: { variant: "full" },
			},
			{ key: "spotify", component: Spotify, className: "h-5 w-full" },
		],
		streaming: [
			{ key: "cisco", component: Cisco, className: "h-5 w-full" },
			{ key: "hulu", component: Hulu, className: "h-3.5 w-full" },
			{ key: "spotify", component: Spotify, className: "h-5 w-full" },
		],
	};

	const groups = Object.keys(logos) as LogoGroup[];
	let currentIndex = 0;
	let currentGroup: LogoGroup = groups[currentIndex];
	let timer: ReturnType<typeof setInterval> | undefined;

	onMount(() => {
		timer = setInterval(() => {
			currentIndex = (currentIndex + 1) % groups.length;
			currentGroup = groups[currentIndex];
		}, 2500);
	});

	onDestroy(() => {
		if (timer) clearInterval(timer);
	});
</script>

<section class="bg-background py-12">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mx-auto grid h-8 max-w-2xl grid-cols-3 items-center gap-8">
			{#each logos[currentGroup] as logo, i (`${currentGroup}-${logo.key}-${i}`)}
				{@const IconLogo = logo.component}
				<div
					class="logo-item flex items-center justify-center **:fill-foreground!"
					style={`animation-delay: ${i * 100}ms`}
				>
					<IconLogo class={logo.className} {...logo.props} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.logo-item {
		animation: logo-enter 450ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	@keyframes logo-enter {
		from {
			opacity: 0;
			transform: translateY(12px);
			filter: blur(6px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
			filter: blur(0);
		}
	}
</style>
