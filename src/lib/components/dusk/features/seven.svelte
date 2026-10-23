<script lang="ts">
	import DottedMap from "dotted-map";

	const map = new DottedMap({ height: 55, grid: "diagonal" });
	const points = map.getPoints();
</script>

<section class="overflow-hidden px-4 py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-2 lg:px-6">
		<h2 class="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground"><span class="text-foreground">See the whole pipeline.</span><br /> Activity and health in one view.</h2>
		<div class="mt-8 grid rounded-xl border md:mt-16 md:grid-cols-2">
			<div class="row-span-2 grid grid-rows-subgrid gap-6 md:gap-0">
				<div class="p-6 sm:p-12"><p class="text-lg font-medium text-balance text-muted-foreground"><span class="text-foreground">Account activity, mapped globally.</span> See where deals are moving and which regions your team should prioritize next.</p></div>
				<div aria-hidden="true" class="relative">
					<div class="absolute inset-0 z-10 m-auto size-fit -translate-y-full"><div class="relative z-1 flex size-fit w-fit items-center gap-2 rounded-(--radius) bg-zinc-900/75 px-3 py-1 text-xs font-medium text-muted-foreground shadow-lg shadow-black/6.5 ring ring-foreground/6.5 backdrop-blur"><span class="text-lg">🇨🇩</span> Last connection from <span class="text-foreground">DR Congo</span></div><div class="absolute inset-2 -bottom-2 mx-auto rounded-(--radius) bg-background px-3 py-4 text-xs font-medium shadow-md shadow-black/5 ring ring-foreground/6.5"></div></div>
					<div class="relative overflow-hidden opacity-25 mask-radial-at-center mask-radial-from-25% mask-radial-[50%_50%]"><svg viewBox="0 0 120 60" class="bg-background">{#each points as point}<circle cx={point.x} cy={point.y} r="0.15" fill="currentColor" />{/each}</svg></div>
				</div>
			</div>

			<div class="row-span-2 grid grid-rows-subgrid gap-6 overflow-hidden border-t p-6 sm:p-12 md:gap-0 md:border-0 md:border-l dark:bg-transparent">
				<div class="relative z-10"><p class="text-lg font-medium text-balance text-muted-foreground"><span class="text-foreground">Every conversation in one thread.</span> Email, chat, and support history stay on the account so nobody works from memory.</p></div>
				<div aria-hidden="true" class="mask-radial-at-top-left mask-radial-[90%_80%] mask-radial-from-75%"><div class="relative mx-auto flex aspect-video flex-col justify-between rounded-xl border bg-card pb-6"><div class="mb-6 flex gap-1.5 border-b p-3"><div class="size-1.5 rounded-full bg-foreground/10"></div><div class="size-1.5 rounded-full bg-foreground/10"></div><div class="size-1.5 rounded-full bg-foreground/10"></div></div><div class="mx-6 mt-auto h-32 rounded-xl bg-foreground/2 shadow-xl ring ring-foreground/6.5"></div></div></div>
			</div>

			<div class="col-span-full border-y p-12 lg:py-20"><p class="text-center text-4xl font-semibold lg:text-7xl">99.99% <span class="text-muted-foreground">Uptime</span></p></div>

			<div class="relative col-span-full">
				<div class="absolute z-10 max-w-lg px-6 pt-6 pr-12 md:px-12 md:pt-12"><p class="mb-8 text-lg font-medium text-balance">Pipeline health, updated in real time. <span class="text-muted-foreground">Spot stalled deals and weak engagement before they slip past quarter end.</span></p></div>
				<div aria-hidden="true" class="relative h-120 overflow-hidden md:h-96">
					<svg viewBox="0 0 600 300" preserveAspectRatio="none" class="size-full">
						<defs>
							<linearGradient id="dusk-feature-mobile" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#60a5fa" stop-opacity="0.8" /><stop offset="55%" stop-color="#60a5fa" stop-opacity="0.1" /></linearGradient>
							<linearGradient id="dusk-feature-desktop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2563eb" stop-opacity="0.8" /><stop offset="55%" stop-color="#2563eb" stop-opacity="0.1" /></linearGradient>
						</defs>
						<g class="stroke-border" stroke-width="1"><line x1="0" y1="75" x2="600" y2="75" /><line x1="0" y1="150" x2="600" y2="150" /><line x1="0" y1="225" x2="600" y2="225" /></g>
						<path d="M0 245 H100 V245 H200 V205 H300 V125 H400 V208 H500 V25 H600 V300 H0 Z" fill="url(#dusk-feature-mobile)" fill-opacity="0.45" />
						<path d="M0 245 H100 V245 H200 V232 H300 V198 H400 V200 H500 V150 H600 V300 H0 Z" fill="url(#dusk-feature-desktop)" fill-opacity="0.5" />
						<path d="M0 245 H100 V245 H200 V205 H300 V125 H400 V208 H500 V25" fill="none" stroke="#60a5fa" stroke-width="2" />
						<path d="M0 245 H100 V245 H200 V232 H300 V198 H400 V200 H500 V150" fill="none" stroke="#2563eb" stroke-width="2" />
					</svg>
					<div class="absolute right-[15%] top-1/3 rounded-lg border bg-background/90 p-3 text-xs shadow-lg backdrop-blur"><div class="font-medium">April</div><div class="mt-1 text-blue-400">Mobile&nbsp; 800</div><div class="text-blue-600">Desktop&nbsp; 400</div></div>
				</div>
			</div>
		</div>
	</div>
</section>
