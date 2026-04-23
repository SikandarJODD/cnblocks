<script lang="ts">
	import HeaderThree from "$lib/components/veil/header/header-three.svelte";
	import { Button } from "$lib/components/ui/veil/button";
	import AudioLines from "@lucide/svelte/icons/audio-lines";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import MessageCircle from "@lucide/svelte/icons/message-circle";
	import Mic2 from "@lucide/svelte/icons/mic-2";
	import Plus from "@lucide/svelte/icons/plus";

	const prompts = [
		"How do I integrate Supabase authentication?",
		"Set up real-time subscriptions with Firebase",
		"Connect Slack notifications to my app",
		"Implement Twilio SMS verification",
		"Add Linear issue tracking integration",
		"Set up Figma design sync",
		"Deploy to Vercel with environment variables",
		"Configure Clerk user management",
		"Build an AI assistant with Claude",
		"Create a webhook endpoint for Stripe",
		"Set up OAuth with multiple providers",
		"Implement rate limiting for API endpoints",
	];
</script>

<HeaderThree />
<main class="overflow-hidden">
	<section class="bg-background">
		<div class="relative py-40">
			<div
				class="absolute inset-0 aspect-2/3 mask-radial-[75%_100%] mask-radial-from-45% mask-radial-to-75% mask-radial-at-top opacity-75 blur-xl md:aspect-square lg:aspect-video dark:opacity-5"
			>
				<img
					src="https://images.unsplash.com/photo-1685013640715-8701bbaa2207?q=80&w=2198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="hero background"
					width="2198"
					height="1685"
					class="h-full w-full object-cover object-top"
				/>
			</div>
			<div class="relative z-10 mx-auto w-full max-w-5xl sm:pl-6">
				<div class="flex items-center justify-between max-md:flex-col">
					<div class="max-w-md max-sm:px-6">
						<h1 class="font-serif text-4xl font-medium text-balance sm:text-5xl">
							Ship faster. Integrate smarter.
						</h1>
						<p class="mt-4 text-balance text-muted-foreground">
							Veil is your all-in-one engine for adding seamless integrations to your
							app.
						</p>

						<Button class="mt-6 pr-1.5" href="#link">
							<span class="text-nowrap">Start Building</span>
							<ChevronRight class="opacity-50" />
						</Button>
					</div>
					<div
						aria-hidden={true}
						class="relative mask-y-from-50% max-md:mx-auto max-md:*:scale-90"
					>
						{#each prompts as prompt}
							<div
								class="flex items-center gap-2 px-14 py-2 text-sm text-muted-foreground"
							>
								<MessageCircle class="size-3.5 opacity-50" />
								<span class="text-nowrap">{prompt}</span>
							</div>
						{/each}
						<div
							class="absolute inset-0 m-auto mt-auto flex h-fit min-w-sm justify-between gap-3 rounded-full bg-card p-2 shadow-xl ring-1 shadow-foreground/6.5 ring-border sm:inset-2 dark:shadow-black/6.5"
						>
							<div class="flex items-center gap-2">
								<div
									class="flex size-9 cursor-pointer rounded-full *:m-auto *:size-4 hover:bg-muted"
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
			</div>
		</div>
	</section>
</main>
