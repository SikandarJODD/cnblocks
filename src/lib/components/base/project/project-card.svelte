<script lang="ts">
	import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
	import Github from "#lib/components/logos/github.svelte";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";

	type Props = {
		name: string;
		description: string;
		href: string;
		source: string;
	};

	let { name, description, href, source }: Props = $props();
</script>

<Card.Root
	role="article"
	class="flex h-full flex-col rounded-lg shadow-none transition-colors hover:bg-muted/40"
>
	<Card.Header class="gap-1 p-3 pb-0">
		<Card.Title role="heading" aria-level={3}>{name}</Card.Title>
		<Card.Description class="leading-normal text-pretty">{description}</Card.Description>
	</Card.Header>

	<Card.Content class="mt-auto flex-row gap-1 p-3 pt-3">
		<Button
			variant="secondary"
			size="sm"
			{href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Visit ${name}`}
		>
			Visit
			<ArrowUpRight strokeWidth={1.6} data-icon="inline-end" aria-hidden="true" />
		</Button>
		<Button
			variant="ghost"
			size="sm"
			class="text-muted-foreground hover:text-foreground"
			href={source}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`View ${name} source on GitHub`}
		>
			<Github />
			GitHub
		</Button>
	</Card.Content>
</Card.Root>
