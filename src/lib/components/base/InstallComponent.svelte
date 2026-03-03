<script lang="ts" module>
	export type InstallComponentProps = {
		installUrl: string;
		class?: string;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import * as Tabs from "$lib/components/ui/tabs";
	import { PMCommand } from "$lib/components/ui/pm-command";
	import Steps from "$lib/components/markdown/Steps.svelte";
	import Step from "$lib/components/markdown/Step.svelte";
	import SingleCodeFilename from "$lib/components/ui/code/single-code-filename.svelte";

	let { installUrl, class: className }: InstallComponentProps = $props();

	let activeTab = $state("cli");
</script>

<div class={cn("w-full", className)}>
	<Tabs.Root bind:value={activeTab}>
		<Tabs.List class="h-auto gap-2 rounded-none bg-transparent px-0 py-1 text-foreground">
			<Tabs.Trigger
				value="cli"
				class="relative border-none bg-transparent! px-4 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
			>
				CLI
			</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="cli" class="mt-4">
			<PMCommand command="execute" args={["shadcn-svelte@latest", "add", installUrl]} />
		</Tabs.Content>
	</Tabs.Root>
</div>
