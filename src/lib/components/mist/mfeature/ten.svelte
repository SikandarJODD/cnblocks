<script lang="ts">
	import Card from "$lib/components/ui/card/card.svelte";

	import ArrowUp from "@lucide/svelte/icons/arrow-up";
	import Globe from "@lucide/svelte/icons/globe";
	import Plus from "@lucide/svelte/icons/plus";
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import Play from "@lucide/svelte/icons/play";
	import Signature from "@lucide/svelte/icons/signature";
	import Button from "$lib/components/ui/button/button.svelte";

	const AIDEN_BLESER = "https://avatars.githubusercontent.com/u/117548273?v=4";
	const BHIDE_SVELTE = "https://avatars.githubusercontent.com/u/93428946?v=4";
	const RICH_HARRIS = "https://avatars.githubusercontent.com/u/1162160?v=4";
	const HUNTER_JOHNSTON = "https://avatars.githubusercontent.com/u/64506580?v=4";

	let avatars = [
		{ src: BHIDE_SVELTE, alt: "Bhide Svelte" },
		{ src: AIDEN_BLESER, alt: "Aiden Blesser" },
		{ src: RICH_HARRIS, alt: "Rich Harris" },
		{ src: HUNTER_JOHNSTON, alt: "Hunter Johnston" },
	];
</script>

<section>
	<div class="py-24">
		<div class="mx-auto w-full max-w-3xl px-6">
			<h2 class="text-3xl font-semibold text-balance text-foreground md:text-4xl">
				<span class="text-muted-foreground">Empowering Marketing teams with</span> AI-driven solutions
			</h2>
			<div class="mt-12 grid gap-12 sm:grid-cols-2">
				<div class="col-span-full space-y-4">
					<Card variant="soft" class="overflow-hidden px-6 sm:col-span-2">
						<div class="mx-auto -mt-2 max-w-sm mask-b-from-75% px-2 pt-8">
							{@render AIAssistantIllustration()}
						</div>
					</Card>
					<div class="max-w-md sm:col-span-3">
						<h3 class="text-lg font-semibold text-foreground">
							Contextual AI Assistant
						</h3>
						<p class="mt-3 text-balance text-muted-foreground">
							A personalized AI companion that understands your codebase and helps
							solve complex...
						</p>
					</div>
				</div>
				<div class="grid grid-rows-[1fr_auto] space-y-4">
					<Card variant="soft" class="p-6">
						{@render MettingIllustration()}
					</Card>
					<div>
						<h3 class="text-lg font-semibold text-foreground">AI Code Generation</h3>
						<p class="mt-3 text-balance text-muted-foreground">
							Our advanced AI models transform natural language into production-ready
							code.
						</p>
					</div>
				</div>

				<div class="grid grid-rows-[1fr_auto] space-y-4">
					<Card variant="soft" class="overflow-hidden p-6">
						{@render CodeReviewIllustration()}
					</Card>
					<div>
						<h3 class="text-lg font-semibold text-foreground">
							Intelligent Code Review
						</h3>
						<p class="mt-3 text-balance text-muted-foreground">
							Our AI analyzes your code for bugs, security issues, and optimization
							opportunities.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{#snippet MettingIllustration()}
	<Card aria-hidden="true" class="mt-9 aspect-video p-4">
		<div class="relative hidden h-fit">
			<div
				class="absolute bottom-1.5 -left-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35"
			>
				PDF
			</div>
			<div
				class="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"
			></div>
		</div>
		<div class="mb-0.5 text-sm font-semibold">AI Strategy Meeting</div>
		<div class="mb-4 flex gap-2 text-sm">
			<span class="text-muted-foreground">2:30 - 3:45 PM</span>
		</div>
		<div class="mb-2 flex -space-x-1.5">
			<div class="flex -space-x-1.5">
				{#each avatars as avatar, index}
					<div
						class="size-7 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5"
					>
						<img
							class="aspect-square rounded-full object-cover"
							src={avatar.src}
							alt={avatar.alt}
							height="460"
							width="460"
						/>
					</div>
				{/each}
			</div>
		</div>
		<div class="text-sm font-medium text-muted-foreground">ML Pipeline Discussion</div>
	</Card>
{/snippet}

{#snippet CodeReviewIllustration()}
	<div aria-hidden="true" class="relative mt-6">
		<Card
			class="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3"
		>
			<div class="mb-3 flex items-center gap-2">
				<div
					class="size-6 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5"
				>
					<img
						class="aspect-square rounded-full object-cover"
						src={BHIDE_SVELTE}
						alt="Bhide Svelte"
						height="460"
						width="460"
					/>
				</div>
				<span class="text-sm font-medium text-muted-foreground">Bhide Svelte</span>

				<span class="text-xs text-muted-foreground/75">2m</span>
			</div>

			<div class="ml-8 space-y-2">
				<div class="h-2 rounded-full bg-foreground/10"></div>
				<div class="h-2 w-3/5 rounded-full bg-foreground/10"></div>
				<div class="h-2 w-1/2 rounded-full bg-foreground/10"></div>
			</div>

			<Signature class="mt-3 ml-8 size-5" />
		</Card>
		<Card
			class="absolute -top-4 right-0 flex aspect-3/5 w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3"
		>
			<div class="m-auto flex size-10 rounded-full bg-foreground/5">
				<Play class="m-auto size-4 fill-foreground/50 stroke-foreground/50" />
			</div>
		</Card>
	</div>
{/snippet}

{#snippet AIAssistantIllustration()}
	<Card
		aria-hidden
		class="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0"
	>
		<div class="w-fit">
			<Sparkles class="size-3.5 fill-purple-300 stroke-purple-300" />
			<p class="mt-2 line-clamp-2 text-sm">
				How can I optimize my neural network to reduce inference time while maintaining
				accuracy?
			</p>
		</div>
		<div class="-mx-3 mt-3 -mb-3 space-y-3 rounded-lg bg-foreground/5 p-3">
			<div class="text-sm text-muted-foreground">Ask AI Assistant</div>

			<div class="flex justify-between">
				<div class="flex gap-2">
					<Button
						variant="outline"
						size="icon"
						class="size-7 rounded-2xl bg-transparent shadow-none"
					>
						<Plus />
					</Button>
					<Button
						variant="outline"
						size="icon"
						class="size-7 rounded-2xl bg-transparent shadow-none"
					>
						<Globe />
					</Button>
				</div>

				<Button size="icon" class="size-7 rounded-2xl bg-black">
					<ArrowUp strokeWidth={3} />
				</Button>
			</div>
		</div>
	</Card>
{/snippet}
