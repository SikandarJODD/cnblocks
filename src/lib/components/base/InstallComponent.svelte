<script lang="ts" module>
	import type { CodeBlock } from "$lib/components/ui/code/index";

	export type DependencyItem = {
		label: string;
		url: string;
	};

	export type TailwindConfig = {
		code: CodeBlock | undefined;
	};

	export type InstallComponentProps = {
		installUrl: string;
		dependencies?: DependencyItem[];
		tailwindConfig?: TailwindConfig;
		codeBlocks?: CodeBlock[] | CodeBlock;
		class?: string;
		folderStructure?: string;
		packages?: string[];
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import * as Tabs from "$lib/components/ui/tabs";
	import { PMCommand } from "$lib/components/ui/pm-command";
	import Steps from "$lib/components/markdown/Steps.svelte";
	import Step from "$lib/components/markdown/Step.svelte";
	import SingleCodeFilename from "$lib/components/ui/code/single-code-filename.svelte";

	let {
		installUrl,
		dependencies = [],
		tailwindConfig,
		codeBlocks = [],
		class: className,
		folderStructure = "",
		packages = [],
	}: InstallComponentProps = $props();

	let activeTab = $state("cli");
</script>

<div class={cn("w-full", className)}>
	<Tabs.Root bind:value={activeTab}>
		<Tabs.List class="text-foreground h-auto gap-2 rounded-none bg-transparent px-0 py-1">
			<Tabs.Trigger
				value="cli"
				class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative border-none bg-transparent! px-4 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
			>
				CLI
			</Tabs.Trigger>
			<Tabs.Trigger
				value="manual"
				class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative border-none bg-transparent! px-4 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
			>
				Manual
			</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="cli" class="mt-4">
			<PMCommand command="execute" args={["shadcn-svelte@latest", "add", installUrl]} />
		</Tabs.Content>

		<Tabs.Content value="manual" class="mt-4" data-toc-ignore="true">
			<Steps class="mb-2">
				{#if packages.length > 0}
					<Step title="Install dependencies">
						<p class="mb-4">Install the required packages for this component:</p>
						<PMCommand command="add" args={packages} />
					</Step>
				{/if}

				{#if dependencies.length > 0}
					<Step title="Install Dependencies">
						<p class="mb-4">Install the following dependencies:</p>
						<ul class="mb-4 list-inside list-disc space-y-1">
							{#each dependencies as dep}
								<li>
									<a
										href={dep.url}
										target="_blank"
										rel="noopener noreferrer"
										class="text-primary hover:underline"
									>
										{dep.label}
									</a>
								</li>
							{/each}
						</ul>
					</Step>
				{/if}

				{#if codeBlocks}
					<Step title="Copy the Source Code" titleBaseClass="mb-0">
						<p class="mb-4 text-sm">
							Copy and paste the following code into your project:
						</p>
						<div class="space-y-4">
							{#if Array.isArray(codeBlocks)}
								{#each codeBlocks as codeBlock}
									<SingleCodeFilename code={codeBlock} />
								{/each}
							{:else}
								<SingleCodeFilename code={codeBlocks} />
							{/if}
						</div>
					</Step>
				{/if}

				<!-- Tailwind CSS Configuration -->
				{#if tailwindConfig?.code}
					<Step title="Add Tailwind CSS">
						<p class="mb-4">
							Add the following to your <code
								class="bg-muted rounded px-1.5 py-0.5 text-sm"
								>routes/layout.css</code
							> file:
						</p>
						<SingleCodeFilename code={tailwindConfig.code} />
					</Step>
				{/if}

				<!-- Folder Structure -->

				{#if folderStructure}
					<!-- <H3 id="folder-structure">Folder Structure</H3> -->
					<Step title="Folder Structure">
						<SingleCodeFilename
							code={{
								filename: "Folder Structure",
								filecode: folderStructure,
								lang: "bash",
								hideLines: true,
							}}
						/>
					</Step>
				{/if}
			</Steps>
		</Tabs.Content>
	</Tabs.Root>
</div>
