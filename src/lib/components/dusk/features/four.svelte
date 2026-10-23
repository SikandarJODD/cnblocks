<script lang="ts">
	import { Card } from "#lib/components/ui/dusk/card/index.js";

	const profileImage = "https://images.unsplash.com/photo-1782366951390-d6798e902db7?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<h2 class="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground"><span class="text-foreground">Handoffs without reset.</span><br /> Trust and context carry forward.</h2>
		<div class="mt-8 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
			<div class="lg:col-span-2">
				<Card class="relative aspect-3/2 overflow-hidden ring-0 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border after:border-foreground/5">
					<div class="relative z-10 max-w-md p-8"><p class="text-lg text-balance text-foreground/75"><span class="font-medium text-foreground">Seamless handoffs. </span> Ownership changes without resetting the relationship.</p></div>
					<img src="https://images.unsplash.com/photo-1630893795974-f4e2fa294391?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hand with an Apple Watch" width="800" height="800" class="absolute inset-0 size-full object-cover object-[50%_85%] opacity-50" />
				</Card>
			</div>
			<Card class="relative h-full min-h-96 overflow-hidden bg-zinc-100">
				<div class="relative z-10 max-w-sm p-8"><p class="text-lg text-balance text-zinc-950/75 selection:bg-zinc-950 selection:text-white"><span class="font-medium text-zinc-950">Proactive alerts. </span> Surface renewals and quiet accounts before they slip.</p></div>
				{@render DynamicIslandIllustration()}
			</Card>
		</div>
	</div>
</section>

{#snippet DynamicIslandIllustration()}
	<div aria-hidden="true" class="absolute inset-x-8 bottom-0 z-1 mx-auto mt-auto h-2/3 w-10/12 origin-bottom scale-95 rounded-t-[4rem] border border-black/5 bg-black/2.5 px-4 pt-4 mask-b-from-90%">
		<div class="h-full overflow-hidden rounded-t-[3rem] bg-white p-3 shadow-xl shadow-black/6.5 ring ring-black/10">
			<div class="relative">
				<img src={profileImage} alt="" width="500" height="500" class="absolute inset-0 top-0 size-full object-cover opacity-45 blur-xl contrast-200" />
				<div class="relative rounded-[2.25rem] bg-white p-2 shadow-xl shadow-black/6.5 ring ring-black/10"><div class="flex gap-2"><div class="relative size-18 overflow-hidden rounded-[1.75rem] shadow-md before:absolute before:inset-0 before:rounded-[1.75rem] before:border before:border-black/20"><img src={profileImage} alt="Théo Balick" width="136" height="136" /></div><div class="py-1 pr-4"><div class="text-sm font-medium text-black">Théo Balick</div><div class="mt-1.5 flex items-center gap-3"><div><div class="text-xs text-black/50">Expenses</div><div class="mt-0.5 text-sm font-semibold text-black">$32.65k</div></div><div class="h-7 w-px bg-border"></div><div><div class="text-xs text-black/50">Income</div><div class="mt-0.5 text-sm font-semibold text-black">$2.65k</div></div></div></div></div></div>
			</div>
		</div>
	</div>
{/snippet}
