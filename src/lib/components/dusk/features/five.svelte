<script lang="ts">
	import Button from "#lib/components/ui/dusk/button/button.svelte";
	import Activity from "@lucide/svelte/icons/activity";
	import ArrowRightLeft from "@lucide/svelte/icons/arrow-right-left";
	import ArrowUp from "@lucide/svelte/icons/arrow-up";
	import Bell from "@lucide/svelte/icons/bell";
	import Calendar from "@lucide/svelte/icons/calendar";
	import ChevronDown from "@lucide/svelte/icons/chevron-down";
	import Clock from "@lucide/svelte/icons/clock";
	import CloudDownload from "@lucide/svelte/icons/cloud-download";
	import HardDriveDownload from "@lucide/svelte/icons/hard-drive-download";
	import History from "@lucide/svelte/icons/history";
	import Link2 from "@lucide/svelte/icons/link-2";
	import ListChecks from "@lucide/svelte/icons/list-checks";
	import Mail from "@lucide/svelte/icons/mail";
	import Mic2 from "@lucide/svelte/icons/mic-2";
	import MonitorDown from "@lucide/svelte/icons/monitor-down";
	import Plug from "@lucide/svelte/icons/plug";
	import Plus from "@lucide/svelte/icons/plus";
	import Users from "@lucide/svelte/icons/users";
	import Zap from "@lucide/svelte/icons/zap";
	import { onMount, type Component } from "svelte";

	const features = [
		{ id: "workflow-agents", label: "Workflow agents" },
		{ id: "alerts", label: "Alerts" },
		{ id: "timeline", label: "Timeline" },
		{ id: "integrations", label: "Integrations" },
	] as const;

	type FeatureId = (typeof features)[number]["id"];
	type Highlight = { icon: Component<{ class?: string }>; label: string };

	const featureHighlights: Record<FeatureId, Highlight[]> = {
		"workflow-agents": [
			{ icon: ArrowRightLeft, label: "Automated handoff routing" },
			{ icon: ListChecks, label: "Account playbooks" },
			{ icon: Zap, label: "Follow-up task agents" },
		],
		alerts: [
			{ icon: Bell, label: "Renewal reminders" },
			{ icon: Clock, label: "Stalled deal signals" },
			{ icon: Activity, label: "Quiet account alerts" },
		],
		timeline: [
			{ icon: History, label: "Full activity history" },
			{ icon: Users, label: "Team-visible notes" },
			{ icon: Mail, label: "Cross-channel threads" },
		],
		integrations: [
			{ icon: Plug, label: "Gmail and Outlook sync" },
			{ icon: Calendar, label: "Calendar availability" },
			{ icon: Link2, label: "Billing and Stripe data" },
		],
	};

	const profileImage = "https://images.unsplash.com/photo-1782366951390-d6798e902db7?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	let activeId: FeatureId = $state("workflow-agents");

	function scrollToFeature(id: FeatureId) {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
		activeId = id;
	}

	onMount(() => {
		const sections = features
			.map(({ id }) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				const nextId = visible[0]?.target.id as FeatureId | undefined;
				if (nextId) activeId = nextId;
			},
			{ rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.35, 0.55, 0.75] }
		);
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	});
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<h2 class="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground"><span class="text-foreground">Built for the full workflow.</span><br /> One connected revenue product.</h2>
		<div class="mt-16 grid gap-6 md:mt-32 lg:grid-cols-[auto_1fr]">
			<div class="sticky top-24 h-fit w-56 max-lg:hidden">
				<div class="text-sm text-muted-foreground">Product</div>
				<div class="-ml-4 mt-4 flex flex-col *:justify-start">
					{#each features as feature (feature.id)}
						<Button type="button" variant="ghost" data-state={activeId === feature.id ? "active" : undefined} onclick={() => scrollToFeature(feature.id)} class="hover:bg-transparent not-data-[state=active]:text-muted-foreground">{feature.label}</Button>
					{/each}
				</div>
			</div>

			<div class="flex flex-col gap-16 md:gap-32">
				<div id="workflow-agents" class="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
					{@render FeatureCopy("Workflow agents", "Seamless handoffs.", "Email, chat, and support history stay on the account so nobody works from memory.", featureHighlights["workflow-agents"])}
					<div class="relative flex aspect-square rounded-3xl border border-border/50 bg-foreground/2 p-3 md:col-span-3"><div class="relative m-auto max-w-sm aspect-76/59 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700"><img src="/payments.png" class="hidden rounded-[15px] dark:block" alt="Payments illustration" width="1207" height="929" /></div></div>
				</div>

				<div id="alerts" class="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
					{@render FeatureCopy("Alerts", "Proactive alerts.", "Surface renewals, quiet accounts, and stalled deals before they slip past quarter end.", featureHighlights.alerts)}
					<div class="relative flex aspect-square rounded-3xl border border-border/50 bg-foreground/2 p-3 md:col-span-3">{@render AIInputIllustration()}</div>
				</div>

				<div id="timeline" class="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
					{@render FeatureCopy("Timeline", "Shared timeline.", "Sales, success, and support work from one account view so every handoff keeps context.", featureHighlights.timeline)}
					<div class="relative flex aspect-square rounded-3xl border border-border/50 bg-foreground/2 p-3 md:col-span-3">{@render DynamicIslandIllustration()}</div>
				</div>

				<div id="integrations" class="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
					{@render FeatureCopy("Integrations", "Connected stack.", "Sync email, calendar, and billing tools so customer data stays current across your workflow.", featureHighlights.integrations)}
					<div class="relative flex aspect-square rounded-3xl border border-border/50 bg-zinc-100 p-3 md:col-span-3">{@render DownloadIllustration()}</div>
				</div>
			</div>
		</div>
	</div>
</section>

{#snippet FeatureCopy(title: string, lead: string, copy: string, items: Highlight[])}
	<div class="flex flex-col justify-between pb-4 md:col-span-2">
		<div class="md:pr-6 lg:pr-0"><h3 class="mb-6 text-sm font-medium text-muted-foreground">{title}</h3><p class="text-lg font-medium text-balance text-muted-foreground"><span class="text-foreground">{lead}</span> {copy}</p></div>
		<ul class="mt-8 divide-y text-muted-foreground *:flex *:items-center *:gap-3 *:py-3">{#each items as item (item.label)}{@const Icon = item.icon}<li><Icon class="size-4" />{item.label}</li>{/each}</ul>
	</div>
{/snippet}

{#snippet DownloadIllustration()}
	<div class="absolute inset-0 z-1 m-auto size-fit scale-95"><Button variant="secondary" class="ml-1 bg-background/25 backdrop-blur inset-ring inset-ring-foreground/25" size="sm"><HardDriveDownload class="opacity-75" /><span class="border-r pr-2">Download</span><ChevronDown class="opacity-50" /></Button><div class="mt-3 min-w-52 rounded-2xl bg-white p-1 shadow-xl shadow-black/6.5 ring ring-black/6.5 *:cursor-pointer"><div class="peer flex gap-2 rounded-xl px-3 py-1.5 hover:bg-black/5"><MonitorDown class="size-4 translate-y-0.5 text-black" /><div><div class="text-xs font-medium text-black">Computer</div><div class="text-xs text-black/50">16.1MB left</div></div></div><div class="flex gap-2 rounded-xl px-3 py-1.5 not-peer-hover:bg-black/5"><CloudDownload class="size-4 translate-y-0.5 text-black" /><div><div class="text-xs font-medium text-black">Cloud</div><div class="text-xs text-black/50">Unlimited</div></div></div></div></div>
{/snippet}

{#snippet AIInputIllustration()}
	<div aria-hidden="true" class="absolute inset-8 z-1 m-auto h-fit max-w-sm scale-95"><div class="mt-auto h-fit rounded-3xl bg-card p-3 shadow-xl shadow-black/15 ring ring-foreground/15"><div class="p-2 pb-3 text-sm text-muted-foreground">Ask Tailark what you need...</div><div class="flex justify-between"><div class="flex gap-1"><div class="flex size-7 rounded-full hover:bg-muted *:m-auto *:size-4"><Plus /></div><div class="flex size-7 rounded-full hover:bg-muted *:m-auto *:size-4"><Mic2 /></div></div><div class="flex size-7 rounded-full bg-foreground text-background *:m-auto *:size-4"><ArrowUp /></div></div></div></div>
{/snippet}

{#snippet DynamicIslandIllustration()}
	<div aria-hidden="true" class="absolute inset-x-8 bottom-0 z-1 mx-auto mt-auto h-2/3 w-10/12 max-w-96 origin-bottom scale-95 rounded-t-[4rem] border border-border/50 px-4 pt-4 mask-b-from-background"><div class="h-full overflow-hidden rounded-t-[3rem] bg-foreground/2 p-3 shadow-lg shadow-black/15 ring ring-foreground/10"><div class="relative rounded-[2.25rem] bg-card p-2 shadow-xl shadow-black/6.5 ring ring-foreground/10"><div class="flex gap-2"><div class="relative size-18 overflow-hidden rounded-[1.75rem] shadow-md before:absolute before:inset-0 before:rounded-[1.75rem] before:border before:border-black/20"><img src={profileImage} alt="Théo Balick" width="136" height="136" /></div><div class="py-1 pr-4"><div class="text-sm font-medium">Théo Balick</div><div class="mt-1.5 flex gap-3"><div><div class="text-xs text-foreground/50">Expenses</div><div class="text-sm font-semibold">$32.65k</div></div><div class="h-7 w-px bg-border"></div><div><div class="text-xs text-foreground/50">Income</div><div class="text-sm font-semibold">$2.65k</div></div></div></div></div></div></div></div>
{/snippet}
