<script lang="ts">
	import type { Component, ComponentProps } from "svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import NavMain from "./nav-main.svelte";
	import NavProjects from "./nav-projects.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavUser from "./nav-user.svelte";
	import SendFeedback from "$lib/svgs/send-feedback.svelte";
	import SponsorProject from "$lib/svgs/sponsor-project.svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import {
		docsV2FooterActions,
		docsV2GuideItems,
		docsV2ResourceItems,
		docsV2TemplateItems,
		docsV2ThemeItems,
	} from "$lib/config/docs-v2";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

	const footerIcons: Record<(typeof docsV2FooterActions)[number]["key"], Component> = {
		feedback: SendFeedback,
		sponsor: SponsorProject,
	};

	const data = {
		user: {
			name: "Bhide Svelte",
			desc: "Svelte Shadcn Blocks",
			avatar: "https://pbs.twimg.com/profile_images/1734257897247514625/IaW4s_ba_400x400.jpg",
			visit: "https://github.com/SikandarJODD/cnblocks",
		},
		guide: docsV2GuideItems,
		themeSetup: docsV2ThemeItems,
		templates: docsV2TemplateItems.map((item) => ({
			name: item.title,
			url: item.url,
			badge: item.badge,
			external: item.external,
		})),
		resources: docsV2ResourceItems.map((item) => ({
			name: item.title,
			url: item.url,
			badge: item.badge,
			external: item.external,
		})),
		footer: docsV2FooterActions.map((item) => ({
			title: item.title,
			url: item.url,
			external: item.external,
			icon: footerIcons[item.key],
		})),
	};
</script>

<Sidebar.Root bind:ref class="md:mt-16 h-[calc(100vh-4rem)] [--sidebar-width:15rem]" {...restProps}>
	<Sidebar.Content class="overflow-hidden">
		<ScrollArea class="h-full pr-1" orientation="vertical" scrollbarYClasses="hidden">
			<div class="space-y-2 pb-3">
				<NavMain label="Guide" items={data.guide} />
				<NavMain label="Theme Setup" items={data.themeSetup} />
				<NavProjects label="Resources & Sponsors" projects={data.resources} />
			</div>
		</ScrollArea>
	</Sidebar.Content>
	<Sidebar.Footer class="gap-0!">
		<NavSecondary items={data.footer} class="mb-0 px-0" />
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>
