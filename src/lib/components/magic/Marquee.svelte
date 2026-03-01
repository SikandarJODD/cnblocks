<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type MarqueeProps = {
		pauseOnHover?: boolean;
		vertical?: boolean;
		repeat?: number;
		reverse?: boolean;
		class?: string;
		children?: Snippet;
	};
	let {
		pauseOnHover = false,
		vertical = false,
		repeat = 4,
		reverse = false,
		class: _class = '',
		children
	}: MarqueeProps = $props();
</script>

<div
	class={cn(
		'group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:16s] [--gap:3rem]',
		{
			'flex-row': !vertical,
			'flex-col': vertical
		},
		_class
	)}
>
	{#each { length: repeat } as _, i (i)}
		<div
			class={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
				'animate-marquee flex-row': !vertical,
				'animate-marquee-vertical flex-col': vertical,
				'group-hover:[animation-play-state:paused]': pauseOnHover
			})}
			style="animation-direction:{reverse ? 'reverse' : 'normal'};
      "
		>
			{@render children?.()}
		</div>
	{/each}
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes marquee-vertical {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(-100%);
		}
	}

	.animate-marquee {
		animation: marquee var(--duration) linear infinite;
	}

	.animate-marquee-vertical {
		animation: marquee-vertical var(--duration) linear infinite;
	}
</style>
