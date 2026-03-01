<script lang="ts">
	import HeaderFour from "$lib/components/veil/header/header-four.svelte";
	import { Button } from "$lib/components/ui/veil/button";
	import {
		AudioLines,
		ChevronRight,
		Github,
		ImageIcon,
		Lightbulb,
		Mic2,
		Paperclip,
		Plus,
		ShoppingBag,
		Telescope,
	} from "@lucide/svelte";
</script>

<HeaderFour />
<main class="overflow-hidden">
	<section class="bg-background">
		<div class="relative py-32">
			<div
				class="absolute inset-0 aspect-2/3 mask-t-from-50% mask-radial-[75%_100%] mask-radial-from-45% mask-radial-to-75% mask-radial-at-top md:aspect-square lg:aspect-9/4 dark:opacity-5"
			>
				<img
					src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="hero background"
					width="2268"
					height="1740"
					class="h-full w-full object-cover object-top"
				/>
			</div>
			<div class="relative z-10 mx-auto w-full max-w-5xl px-6">
				<div
					aria-hidden
					class="mb-6 ml-auto max-w-3xl min-w-2xl scale-90 mask-radial-[75%_100%] mask-radial-from-65% mask-radial-to-90% mask-radial-at-left py-12 pl-6 perspective-near sm:mb-12 md:pl-12 lg:mb-20"
				>
					<div
						class="relative flex h-56 -rotate-12 rotate-x-12 rotate-y-2 rotate-z-10 flex-col rounded-3xl border bg-muted py-4 pl-4"
					>
						<div
							class="absolute bottom-15 left-4 min-w-56 rounded-2xl bg-card p-1 shadow-xl shadow-foreground/10 ring-1 ring-border dark:shadow-black/25"
						>
							<div
								class="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65"
							>
								<Paperclip />
								<span>Add photos and files</span>
							</div>
							<span
								class="mx-3 my-0.5 block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[6px_1px] bg-bottom bg-repeat-x opacity-30 dark:opacity-15"
							/>
							<div
								class="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65"
							>
								<ImageIcon />
								<span>Create image</span>
							</div>
							<div
								class="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65"
							>
								<Lightbulb />
								<span>Thinking</span>
							</div>
							<div
								class="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65"
							>
								<Telescope />
								<span>Deep research</span>
							</div>
							<div
								class="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65"
							>
								<ShoppingBag />
								<span>Shopping research</span>
							</div>
							<div
								class="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65"
							>
								<Github />
								<span>Open source access</span>
							</div>
						</div>

						<div
							class="mt-auto flex h-fit justify-between gap-3 rounded-full bg-card p-2 shadow-xs shadow-foreground/6.5 ring-1 ring-border dark:shadow-black/6.5"
						>
							<div class="flex items-center gap-2">
								<div
									class="flex size-9 cursor-pointer rounded-full bg-muted *:m-auto *:size-4"
								>
									<Plus />
								</div>
								<div class="text-sm text-muted-foreground">Ask anything...</div>
							</div>
							<div class="flex items-center gap-0.5">
								<div
									class="flex size-9 cursor-pointer rounded-full *:m-auto *:size-4 hover:bg-muted"
								>
									<Mic2 />
								</div>
								<div
									class="flex size-9 cursor-pointer rounded-full bg-foreground text-background *:m-auto *:size-4 hover:brightness-110"
								>
									<AudioLines />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mx-auto max-w-md text-center">
					<h1 class="font-serif text-4xl font-medium text-balance sm:text-5xl">
						Ship faster. Integrate smarter.
					</h1>
					<p class="mt-4 text-balance text-muted-foreground">
						Veil is your all-in-one engine for adding seamless integrations to your app.
					</p>

					<Button class="mt-6 pr-1.5" href="#link">
						<span class="text-nowrap">Start Building</span>
						<ChevronRight class="opacity-50" />
					</Button>
				</div>
			</div>
		</div>
	</section>
</main>
