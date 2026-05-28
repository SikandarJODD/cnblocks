<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	type MarqueeProps = {
		pauseOnHover?: boolean;
		vertical?: boolean;
		/**
		 * Copies of the children to render inside each of the two looping
		 * segments. The loop stays seamless only when one segment fully
		 * spans its container along the scroll axis; with short content in
		 * a long container the seam exposes empty space. Increase `repeat`
		 * until N copies (with their internal gaps) comfortably exceed the
		 * container along the direction axis.
		 *
		 * Total rendered copies of `children` = `2 * repeat`. Only the
		 * first copy is exposed to assistive tech; the rest are hidden via
		 * `aria-hidden` and `inert`. Clamped to `[1, 100]`.
		 */
		repeat?: number;
		reverse?: boolean;
		class?: string;
		children?: Snippet;
	};

	const MAX_REPEAT = 100;

	let {
		pauseOnHover = false,
		vertical = false,
		repeat = 4,
		reverse = false,
		class: _class = "",
		children,
	}: MarqueeProps = $props();

	const safeRepeat = $derived(
		Number.isFinite(repeat) ? Math.min(MAX_REPEAT, Math.max(1, Math.floor(repeat))) : 4
	);

	const directionClass = $derived(
		vertical
			? reverse
				? "marquee__scroller--down"
				: "marquee__scroller--up"
			: reverse
				? "marquee__scroller--right"
				: "marquee__scroller--left"
	);
</script>

<div
	class={cn(
		"marquee group flex w-full overflow-hidden p-2 [--duration:16s] [--gap:3rem]",
		vertical ? "flex-col" : "flex-row",
		_class
	)}
>
	<div
		class={cn(
			"marquee__scroller",
			vertical ? "marquee__scroller--vertical" : "marquee__scroller--horizontal",
			directionClass,
			pauseOnHover && "marquee__scroller--pause-on-hover"
		)}
	>
		<div
			class={cn(
				"marquee__segment",
				vertical ? "marquee__segment--vertical" : "marquee__segment--horizontal"
			)}
		>
			{#each Array(safeRepeat) as _, i (i)}
				{#if i === 0}
					{@render children?.()}
				{:else}
					<!-- Repeated copies fill the segment visually but must stay
					     invisible to assistive tech and unreachable by keyboard.
					     display:contents keeps the flex layout identical to copy 0. -->
					<div style="display: contents" aria-hidden="true" inert>
						{@render children?.()}
					</div>
				{/if}
			{/each}
		</div>

		<div
			aria-hidden="true"
			inert
			class={cn(
				"marquee__segment marquee__segment--duplicate",
				vertical ? "marquee__segment--vertical" : "marquee__segment--horizontal"
			)}
		>
			{#each Array(safeRepeat) as _, i (i)}
				{@render children?.()}
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes marquee-scroll-x {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
	@keyframes marquee-scroll-x-reverse {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0);
		}
	}
	@keyframes marquee-scroll-y {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-50%);
		}
	}
	@keyframes marquee-scroll-y-reverse {
		from {
			transform: translateY(-50%);
		}
		to {
			transform: translateY(0);
		}
	}

	.marquee__scroller {
		display: flex;
		flex-shrink: 0;
		animation-duration: var(--duration);
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		will-change: transform;
	}
	.marquee__scroller--horizontal {
		flex-direction: row;
		width: max-content;
	}
	.marquee__scroller--vertical {
		flex-direction: column;
		width: 100%;
		height: max-content;
	}

	.marquee__scroller--left {
		animation-name: marquee-scroll-x;
	}
	.marquee__scroller--right {
		animation-name: marquee-scroll-x-reverse;
	}
	.marquee__scroller--up {
		animation-name: marquee-scroll-y;
	}
	.marquee__scroller--down {
		animation-name: marquee-scroll-y-reverse;
	}

	.group:hover .marquee__scroller--pause-on-hover {
		animation-play-state: paused;
	}

	.marquee__segment {
		display: flex;
		flex-shrink: 0;
		gap: var(--gap);
	}
	.marquee__segment--horizontal {
		flex-direction: row;
		align-items: center;
		padding-inline-end: var(--gap);
	}
	.marquee__segment--vertical {
		flex-direction: column;
		width: 100%;
		padding-block-end: var(--gap);
	}

	/* Honor user motion preferences: stop the loop and hide the duplicated
	 * segment so the static fallback shows content once. */
	@media (prefers-reduced-motion: reduce) {
		.marquee__scroller {
			animation: none;
		}
		.marquee__segment--duplicate {
			display: none;
		}
	}
</style>
