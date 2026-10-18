<script lang="ts">
	import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
	import Github from "#lib/components/logos/github.svelte";
	import { Button } from "#lib/components/ui/button/index.js";
	import { Card } from "#lib/components/ui/card/index.js";

	type Props = {
		name: string;
		description: string;
		href: string;
		source: string;
	};

	let { name, description, href, source }: Props = $props();
</script>

<Card
	role="article"
	class="flex h-full flex-col rounded-lg p-4 shadow-none transition-colors hover:bg-muted/40"
>
	<h3 class="font-gmono text-base font-normal tracking-tight text-foreground">{name}</h3>
	<p class="mt-1.5 text-sm leading-normal text-pretty text-muted-foreground">{description}</p>

	<div class="mt-3 flex items-center gap-1">
		<Button
			variant="secondary"
			{href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Visit ${name}`}
		>
			Visit
			<ArrowUpRight data-icon="inline-end" aria-hidden="true" />
		</Button>
		<Button
			variant="ghost"
			class="text-muted-foreground hover:text-foreground"
			href={source}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`View ${name} source on GitHub`}
		>
			<Github />
			GitHub
		</Button>
	</div>
</Card>
