<script lang="ts">
	import { AnimatePresence, motion, useReducedMotion } from "motion-sv";
	import type { Component } from "svelte";
	import type { SVGAttributes } from "svelte/elements";
	import Button from "#lib/components/ui/dusk/button/button.svelte";
	import { Claude, Gemini, OpenAI } from "#lib/svgs/index.ts";

	type Testimonial = {
		quote: string;
		highlight: string;
		author: string;
		role: string;
		Logo: Component<SVGAttributes<SVGSVGElement>>;
	};

	const testimonials: Testimonial[] = [
		{
			quote: "Tailark helped our revenue team move from scattered updates to one shared CRM view.",
			highlight: "We finally know which accounts need attention before deals stall.",
			author: "Maya Patel",
			role: "VP of Revenue, Claude",
			Logo: Claude,
		},
		{
			quote: "Our account managers use Tailark every morning to review pipeline health, open tasks, and customer history.",
			highlight: "The workflow feels focused without hiding the details teams need.",
			author: "Ethan Brooks",
			role: "Head of Customer Operations, Gemini",
			Logo: Gemini,
		},
		{
			quote: "Tailark gives our sales and success teams a cleaner way to coordinate follow-up across every account.",
			highlight: "It turns customer signals into clear next steps.",
			author: "Sofia Ramirez",
			role: "Revenue Operations Lead, OpenAI",
			Logo: OpenAI,
		},
	];

	let activeIndex = $state(0);
	const activeTestimonial = $derived(testimonials[activeIndex]);
	const reducedMotion = useReducedMotion();
	const initial = $derived(reducedMotion.current ? { opacity: 1 } : { opacity: 0 });
	const exit = $derived(reducedMotion.current ? { opacity: 1 } : { opacity: 0 });
	const transition = $derived({ duration: reducedMotion.current ? 0 : 0.3 });

	function previousTestimonial() {
		activeIndex = Math.max(0, activeIndex - 1);
	}

	function nextTestimonial() {
		activeIndex = Math.min(testimonials.length - 1, activeIndex + 1);
	}
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mx-auto max-w-3xl">
			<div class="mb-20 flex gap-2">
				<Button
					variant="outline"
					size="sm"
					class="h-7 px-4"
					aria-label="Read previous testimonial"
					onclick={previousTestimonial}
					disabled={activeIndex === 0}
				>
					{@render ArrowIcon({ class: "size-3! rotate-180" })}
					<!-- <ArrowIcon class="size-3!" /> -->
				</Button>
				<Button
					variant="outline"
					size="sm"
					class="h-7 px-4"
					aria-label="Read next testimonial"
					onclick={nextTestimonial}
					disabled={activeIndex === testimonials.length - 1}
				>
					{@render ArrowIcon({ class: "size-3! rotate-180" })}
				</Button>
			</div>

			<AnimatePresence mode="popLayout" initial={false}>
				{#key activeIndex}
					<motion.div {initial} animate={{ opacity: 1 }} {exit} {transition}>
						<p
							class="mb-20 text-2xl leading-snug font-medium text-muted-foreground md:text-4xl md:leading-tight"
						>
							{activeTestimonial.quote}
							<span class="rounded bg-emerald-500/10 px-1.5 text-emerald-500">
								{activeTestimonial.highlight}
							</span>
						</p>
					</motion.div>

					<motion.div
						{initial}
						animate={{ opacity: 1 }}
						{exit}
						{transition}
						class="flex items-center gap-4"
					>
						{@const Logo = activeTestimonial.Logo}
						<Logo class="size-10" />
						<div class="border-l pl-4">
							<p class="font-medium">{activeTestimonial.author}</p>
							<p class="text-sm text-muted-foreground">{activeTestimonial.role}</p>
						</div>
					</motion.div>
				{/key}
			</AnimatePresence>
		</div>
	</div>
</section>

{#snippet ArrowIcon({ class: className }: { class?: string })}
	<svg
		class={className}
		width="20"
		height="16"
		viewBox="0 0 20 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M8 1L1 8L8 15M1 8H19"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/snippet}
