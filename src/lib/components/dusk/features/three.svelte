<script lang="ts">
	import Button from "#lib/components/ui/dusk/button/button.svelte";
	import { Card } from "#lib/components/ui/dusk/card/index.js";
	import ArrowUp from "@lucide/svelte/icons/arrow-up";
	import ChevronDown from "@lucide/svelte/icons/chevron-down";
	import CloudDownload from "@lucide/svelte/icons/cloud-download";
	import HardDriveDownload from "@lucide/svelte/icons/hard-drive-download";
	import Mic2 from "@lucide/svelte/icons/mic-2";
	import MonitorDown from "@lucide/svelte/icons/monitor-down";
	import Plus from "@lucide/svelte/icons/plus";

	const profileImage = "https://images.unsplash.com/photo-1782366951390-d6798e902db7?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<h2 class="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground"><span class="text-foreground">Context before every reply.</span><br /> Grounded in real account history.</h2>
		<div class="mt-8 grid gap-x-3 gap-y-6 **:data-[slot=card]:bg-background md:mt-16 md:grid-cols-2 lg:grid-cols-3">
			<div class="row-span-2 grid grid-cols-subgrid gap-4">
				<Card class="relative aspect-9/12 overflow-hidden">
					{@render AIInputIllustration()}
					<img src="https://images.unsplash.com/photo-1656012710277-e103fe942e30?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Abstract background" width="670" height="670" class="absolute inset-0 size-full object-cover" />
				</Card>
				<p class="text-balance text-muted-foreground"><span class="text-foreground">Seamless handoffs. </span> Ownership changes without resetting the relationship.</p>
			</div>
			<div class="row-span-2 grid grid-cols-subgrid gap-4">
				<Card class="relative aspect-9/12 overflow-hidden bg-zinc-200!">{@render DynamicIslandIllustration()}</Card>
				<p class="text-balance text-muted-foreground"><span class="text-foreground">Proactive alerts. </span> Surface renewals and quiet accounts before they slip.</p>
			</div>
			<div class="row-span-2 grid grid-cols-subgrid gap-4">
				<Card class="relative aspect-9/12 overflow-hidden">
					{@render DownloadIllustration()}
					<video autoplay muted loop playsinline preload="none" src="https://videos.pexels.com/video-files/37957431/16106725_1440_2560_24fps.mp4" class="absolute inset-0 size-full object-cover" width="2700" height="1440"></video>
				</Card>
				<p class="text-balance text-muted-foreground"><span class="text-foreground">Shared timeline. </span> Sales, success, and support work from one account view.</p>
			</div>
		</div>
	</div>
</section>

{#snippet DownloadIllustration()}
	<div class="absolute inset-0 z-1 m-auto size-fit scale-95">
		<Button variant="secondary" class="ml-1 bg-background/25 backdrop-blur inset-ring inset-ring-foreground/25" size="sm"><HardDriveDownload class="opacity-75" /><span class="border-r pr-2">Download</span><ChevronDown class="opacity-50" /></Button>
		<div class="mt-3 min-w-52 rounded-2xl bg-white p-1 shadow-xl shadow-black/25 ring ring-black/10 *:cursor-pointer">
			<div class="peer flex gap-2 rounded-xl px-3 py-1.5 hover:bg-black/5"><MonitorDown class="size-4 translate-y-0.5 text-black" /><div class="space-y-0.5"><div class="text-xs font-medium text-black">Computer</div><div class="text-xs text-black/50">16.1MB left</div></div></div>
			<div class="flex gap-2 rounded-xl px-3 py-1.5 not-peer-hover:bg-black/5"><CloudDownload class="size-4 translate-y-0.5 text-black" /><div class="space-y-0.5"><div class="text-xs font-medium text-black">Cloud</div><div class="text-xs text-black/50">Unlimited</div></div></div>
		</div>
	</div>
{/snippet}

{#snippet AIInputIllustration()}
	<div aria-hidden="true" class="absolute inset-8 z-1 m-auto h-fit scale-95">
		<div class="mt-auto h-fit rounded-3xl bg-card p-3 shadow-xl shadow-black/25 ring ring-foreground/15">
			<div class="p-2 pb-3 text-sm text-muted-foreground">Ask Tailark what you need...</div>
			<div class="flex justify-between gap-3"><div class="flex items-center gap-1"><div class="flex size-7 cursor-pointer rounded-full hover:bg-muted *:m-auto *:size-4"><Plus /></div><div class="flex size-7 cursor-pointer rounded-full hover:bg-muted *:m-auto *:size-4"><Mic2 /></div></div><div class="flex size-7 cursor-pointer rounded-full bg-foreground text-background hover:brightness-110 *:m-auto *:size-4"><ArrowUp /></div></div>
		</div>
	</div>
{/snippet}

{#snippet DynamicIslandIllustration()}
	<div aria-hidden="true" class="absolute inset-x-8 bottom-0 z-1 mx-auto mt-auto h-2/3 w-10/12 origin-bottom scale-95 rounded-t-[4rem] border border-black/5 bg-black/2.5 px-4 pt-4">
		<div class="h-full overflow-hidden rounded-t-[3rem] bg-white p-3 shadow-lg shadow-black/15 ring ring-black/10">
			<div class="relative">
				<img src={profileImage} alt="" width="500" height="500" class="absolute inset-0 top-0 size-full object-cover opacity-45 blur-xl contrast-200" />
				<div class="relative rounded-[2.25rem] bg-white p-2 shadow-xl shadow-black/6.5 ring ring-black/10"><div class="flex gap-2"><div class="relative size-18 overflow-hidden rounded-[1.75rem] shadow-md before:absolute before:inset-0 before:rounded-[1.75rem] before:border before:border-black/20"><img src={profileImage} alt="Théo Balick" width="136" height="136" /></div><div class="py-1 pr-4"><div class="text-sm font-medium text-black">Théo Balick</div><div class="mt-1.5 flex items-center gap-3"><div><div class="text-xs text-black/50">Expenses</div><div class="mt-0.5 text-sm font-semibold text-black">$32.65k</div></div><div class="h-7 w-px bg-border"></div><div><div class="text-xs text-black/50">Income</div><div class="mt-0.5 text-sm font-semibold text-black">$2.65k</div></div></div></div></div></div>
			</div>
		</div>
	</div>
{/snippet}
