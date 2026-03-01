<script>
	import { Button } from "$lib/components/ui/veil/button";
	import { ChevronRight } from "@lucide/svelte";
	import IntegrationIllustrationTwo from "./integration-illustration-two.svelte";
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-2xl">
		<IntegrationIllustrationTwo />
		<div class="mx-auto mt-12 max-w-md px-6 text-center text-balance">
			<h2 class="font-serif text-4xl font-medium">Connect Your Favorite Tools</h2>
			<p class="mt-4 mb-6 text-muted-foreground">
				Seamlessly integrate with the services you already use. Set up in minutes, not days.
			</p>
			<Button variant="secondary" size="sm" class="gap-1 pr-1.5">
				Learn more
				<ChevronRight />
			</Button>
		</div>
	</div>
</section>
