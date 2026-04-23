<script lang="ts">
	import { Button } from "$lib/components/ui/veil/button";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import Mail from "@lucide/svelte/icons/mail";

	type Props = {
		title?: string;
		description?: string;
		emailPlaceholder?: string;
		subscribeLabel?: string;
		subscribeHref?: string;
	};

	let {
		title = "Stay in the Loop",
		description = "Get the latest updates, tips, and exclusive offers delivered straight to your inbox.",
		emailPlaceholder = "Enter your email",
		subscribeLabel = "Subscribe",
		subscribeHref = "#link",
	}: Props = $props();
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-2xl px-6">
		<div class="grid items-center gap-8 text-center @xl:text-left">
			<div>
				<h2 class="font-serif text-3xl font-medium text-balance md:text-4xl">{title}</h2>
				<p class="mt-3 text-balance text-muted-foreground">{description}</p>
			</div>

			<div class="flex w-full max-w-sm gap-2 @max-xl:mx-auto @max-md:flex-col">
				<div
					class="relative flex flex-1 items-center overflow-hidden rounded-md border border-transparent ring ring-input not-dark:bg-card focus-within:border-primary focus-within:ring-[3px] focus-within:ring-ring/15"
				>
					<Mail
						class="pointer-events-none absolute left-2.5 size-3.5 text-muted-foreground"
					/>
					<input
						type="email"
						placeholder={emailPlaceholder}
						autocomplete="email"
						class="h-8 w-full bg-transparent pr-2.5 pl-8 text-sm outline-none autofill:bg-primary"
					/>
				</div>
				<Button href={subscribeHref} class="shrink-0 pr-1.5">
					{subscribeLabel}
					<ChevronRight class="opacity-50" />
				</Button>
			</div>
		</div>
	</div>
</section>
