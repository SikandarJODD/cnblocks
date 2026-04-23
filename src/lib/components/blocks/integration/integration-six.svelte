<script lang="ts">
	import { Gemini, GooglePaLM, Replit } from "../logos/logos";
	import Button from "$lib/components/ui/button/button.svelte";
	import type { LucideIcon } from "@lucide/svelte";
	import Plus from "@lucide/svelte/icons/plus";
</script>

<section>
	<div class="bg-muted py-24 md:py-32 dark:bg-background">
		<div class="mx-auto max-w-5xl px-6">
			<div
				class="mx-auto max-w-md mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6"
			>
				<div
					class="rounded-xl border bg-background px-6 pt-3 pb-12 shadow-xl dark:bg-muted/50"
				>
					{@render IntegrationCardv6({
						icon: Gemini,
						name: "Gemini",
						description: "The AI model that powers Google's search engine.",
					})}

					{@render IntegrationCardv6({
						icon: Replit,
						name: "Replit",
						description: "The AI model that powers Google's search engine.",
					})}

					{@render IntegrationCardv6({
						icon: GooglePaLM,
						name: "GooglePaLM",
						description: "The AI model that powers Google's search engine.",
					})}
				</div>
			</div>
			<div class="mx-auto mt-6 max-w-lg space-y-6 text-center">
				<h2 class="text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
					Integrate with your favorite LLMs
				</h2>
				<p class="text-muted-foreground">
					Connect seamlessly with popular platforms and services to enhance your workflow.
				</p>

				<Button variant="outline" size="sm">Get started</Button>
			</div>
		</div>
	</div>
</section>

{#snippet IntegrationCardv6({
	icon,
	name,
	description,
}: {
	icon: LucideIcon;
	name: string;
	description: string;
})}
	{@const Icon = icon}
	<div
		class="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0"
	>
		<div
			class="flex size-12 items-center justify-center rounded-lg border border-foreground/5 bg-muted"
		>
			<Icon />
		</div>
		<div class="space-y-0.5">
			<h3 class="text-sm font-medium">{name}</h3>
			<p class="line-clamp-1 text-sm text-muted-foreground">{description}</p>
		</div>
		<Button variant="outline" size="icon" aria-label="Add integration">
			<Plus class="size-4" />
		</Button>
	</div>
{/snippet}
