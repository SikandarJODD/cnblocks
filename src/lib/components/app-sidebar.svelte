<script lang="ts" module>
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import BotIcon from "@lucide/svelte/icons/bot";
	import ChartPieIcon from "@lucide/svelte/icons/chart-pie";
	import FrameIcon from "@lucide/svelte/icons/frame";
	import LifeBuoyIcon from "@lucide/svelte/icons/life-buoy";
	import MapIcon from "@lucide/svelte/icons/map";
	import SendIcon from "@lucide/svelte/icons/send";
	import Settings2Icon from "@lucide/svelte/icons/settings-2";
	import SquareTerminalIcon from "@lucide/svelte/icons/square-terminal";

	const data = {
		user: {
			name: "Bhide Svelte",
			desc: "I Love Svelte",
			avatar: "https://pbs.twimg.com/profile_images/1734257897247514625/IaW4s_ba_400x400.jpg",
			visit: "https://github.com/SikandarJODD/cnblocks"
		},
		guide: [
			{
				title: "Introduction",
				url: "#",
			},
			{
				title: "Installation",
				url: "#",
			},
			{
				title: "Mist Theme Setup",
				url: "#",
			},
			{
				title: "Veil Theme Setup",
				url: "#",
			},
			{
				title: "MCP Server Setup",
				url: "#",
			},
		],
		footer: [
			{
				title: "Send Feedback",
				url: "#",
				icon: SendFeedback,
			},
			{
				title: "Sponsor Project",
				url: "#",
				icon: SponsorProject,
			},
		],
		templates: [
			{
				name: "Startup Template",
				url: "#",
				badge: "basic",
			},
			{
				name: "Startup Template Veil Theme",
				url: "#",
				badge: "veil",
			},
			{
				name: "Mist Variant",
				url: "#",
				badge: "mist",
			},
		],
	};
</script>

<script lang="ts">
	import NavMain from "./nav-main.svelte";
	import NavProjects from "./nav-projects.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavUser from "./nav-user.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import CommandIcon from "@lucide/svelte/icons/command";
	import type { ComponentProps } from "svelte";
	import SendFeedback from "$lib/svgs/send-feedback.svelte";
	import SponsorProject from "$lib/svgs/sponsor-project.svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref variant="inset" {...restProps}>
	<Sidebar.Content>
		<NavMain items={data.guide} />
		<NavProjects projects={data.templates} />
		<NavSecondary items={data.footer} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>
