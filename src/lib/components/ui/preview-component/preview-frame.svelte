<script lang="ts">
	import type { Snippet } from "svelte";
	import * as Frame from "$lib/components/ui/frame/index.js";
	import { Button } from "$lib/components/ui/button";
	import * as Add from "$lib/components/ui/add";
	import { AGENTS, type Agent } from "$lib/components/ui/add";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import type { CodeBlock } from "$lib/components/ui/code";
	import MultipleCode from "$lib/components/ui/code/multiple-code.svelte";
	import SingleCodeFilename from "$lib/components/ui/code/single-code-filename.svelte";
	import { resolveCommand } from "package-manager-detector/commands";
	import { getRegistryItemUrl } from "$lib/utils/registry-url";
	import { cn } from "$lib/utils";
	import Eye from "@lucide/svelte/icons/eye";
	import CodeXml from "@lucide/svelte/icons/code-xml";
	import Maximize from "@lucide/svelte/icons/maximize";

	interface PreviewFrameProps {
		children: Snippet;
		componentName: string;
		addItem?: string;
		installUrl?: string;
		installUrlBase?: string;
		installCommand?: string;
		registryOptions?: readonly string[];
		registry?: string;
		agent?: Agent;
		code?: CodeBlock | CodeBlock[];
		previewHref?: string;
		openPreviewInNewTab?: boolean;
		showFullscreenButton?: boolean;
		themeSetupHref?: string;
		themeSetupText?: string;
		class?: string;
		panelClass?: string;
	}

	let {
		children,
		componentName,
		addItem,
		installUrl,
		installUrlBase = "https://sv-blocks.vercel.app",
		installCommand,
		registryOptions = ["@sv/cnblocks"],
		registry,
		agent = "pnpm",
		code,
		previewHref,
		openPreviewInNewTab = true,
		showFullscreenButton = Boolean(previewHref),
		themeSetupHref = "/docs/installation",
		themeSetupText = "Need theme tweaks? Follow the theme setup guide.",
		class: className = "",
		panelClass = "",
	}: PreviewFrameProps = $props();

	type PreviewMode = "preview" | "code";
	let mode: PreviewMode = $state("preview");
	let hasCode = $derived(Boolean(code));
	let currentAgent: Agent = $derived(agent);
	let currentRegistry: string = $derived(registry ?? registryOptions[0] ?? "@sv/cnblocks");

	const getLegacyItemFromCommand = (command?: string) => {
		if (!command) return "";
		const tokens = command.trim().split(/\s+/);
		const target = tokens[tokens.length - 1] ?? "";
		if (target.startsWith("http")) {
			const file = target.split("/").pop() ?? target;
			return file.replace(/\.json$/, "");
		}
		if (target.includes("/")) {
			return target.split("/").pop() ?? target;
		}
		return target;
	};

	let resolvedAddItem = $derived(addItem ?? getLegacyItemFromCommand(installCommand));
	const getInstallBase = (base: string) => base.replace(/\/+$/, "").replace(/\/(r|v|m)$/i, "");
	let resolvedInstallUrl = $derived(
		installUrl ??
			(resolvedAddItem
				? getRegistryItemUrl(getInstallBase(installUrlBase), resolvedAddItem)
				: "")
	);
	let fullInstallCommand = $derived.by(() => {
		if (!resolvedInstallUrl) return "";
		const command = resolveCommand(currentAgent, "execute", [
			"shadcn-svelte@latest",
			"add",
			resolvedInstallUrl,
		]);
		return command
			? `${command.command} ${command.args.join(" ")}`
			: `npx shadcn-svelte@latest add ${resolvedInstallUrl}`;
	});
	let showRegistryOptions = $derived(registryOptions.length > 1);
</script>

<div class={cn("mt-2 w-full", className)} data-toc-ignore>
	<Frame.Root class="overflow-hidden">
		<Frame.Header class="px-3 py-1.5 sm:px-4">
			<div class="flex flex-wrap items-center justify-between gap-2.5">
				<Frame.Title class="truncate text-sm font-medium">
					{componentName}
				</Frame.Title>
				<div class="flex items-center gap-1.5">
					{#if hasCode}
						<div
							class="inline-flex items-center gap-0.5 rounded-md border bg-muted/60 p-0.5"
						>
							<Button
								variant={mode === "preview" ? "secondary" : "ghost"}
								size="sm"
								class="h-7 px-2.5"
								onclick={() => (mode = "preview")}
								aria-label="Show preview"
							>
								<Eye class="size-3.5" />
							</Button>
							<Button
								variant={mode === "code" ? "secondary" : "ghost"}
								size="sm"
								class="h-7 px-2.5"
								onclick={() => (mode = "code")}
								aria-label="Show code"
							>
								<CodeXml class="size-3.5" />
							</Button>
						</div>
					{/if}

					{#if resolvedInstallUrl}
						<Add.Provider
							bind:agent={currentAgent}
							bind:registry={currentRegistry}
							{registryOptions}
						>
							<Add.Root item={resolvedInstallUrl} withoutRegistry>
								<Add.Group class="h-8 w-88 max-w-full">
									<Add.Button
										class="h-8 min-w-0 md:pr-2 md:pl-2 [&>div]:size-8"
									/>
									<Add.GroupSeparator class="h-4" />
									<Add.Dropdown class="size-8">
										<Add.DropdownContent>
											{#each AGENTS as addAgent (addAgent)}
												<Add.DropdownAgentOption agent={addAgent} />
											{/each}
											{#if showRegistryOptions}
												<Add.DropdownSeparator />
												{#each registryOptions as option (option)}
													<Add.DropdownRegistryOption registry={option} />
												{/each}
											{/if}
											<!-- <Add.DropdownSeparator /> -->
											<!-- <DropdownMenu.Label
                        class="text-muted-foreground px-2 py-1.5 text-[11px]"
                      >
                        Full install command
                      </DropdownMenu.Label>
                      <DropdownMenu.Item
                        disabled
                        class="cursor-default text-left data-[disabled]:opacity-100"
                      >
                        <span
                          class="font-mono text-xs leading-relaxed whitespace-normal break-all"
                        >
                          {fullInstallCommand}
                        </span>
                      </DropdownMenu.Item> -->
										</Add.DropdownContent>
									</Add.Dropdown>
								</Add.Group>
							</Add.Root>
						</Add.Provider>
					{/if}

					{#if previewHref && showFullscreenButton}
						<Button
							variant="outline"
							size="sm"
							class="h-7 w-7 p-0"
							href={previewHref}
							target={openPreviewInNewTab ? "_blank" : undefined}
							rel={openPreviewInNewTab ? "noopener noreferrer" : undefined}
							aria-label="Open fullscreen preview"
						>
							<Maximize class="size-3.5" />
						</Button>
					{/if}
				</div>
			</div>
		</Frame.Header>

		<Frame.Panel>
			{#if mode === "preview" || !hasCode}
				<div class={cn("min-h-64 w-full bg-background p-3 sm:p-4", panelClass)}>
					{#if children}
						{@render children?.()}
					{:else}
						<p class="text-sm leading-relaxed text-muted-foreground">
							No component provided. Please provide a component to render.
						</p>
					{/if}
				</div>
			{:else}
				<div class="bg-background p-3 sm:p-4">
					{#if Array.isArray(code)}
						<MultipleCode {code} />
					{:else if code}
						<SingleCodeFilename {code} />
					{/if}
				</div>
			{/if}
		</Frame.Panel>

		<!-- <Frame.Footer class="px-3 py-2 sm:px-4">
      <a
        href={themeSetupHref}
        class="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-xs transition-colors"
      >
        <Info class="size-3.5" />
        <span>{themeSetupText}</span>
      </a>
    </Frame.Footer> -->
	</Frame.Root>
</div>
