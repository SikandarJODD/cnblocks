<script lang="ts">
	import { Card } from "$lib/components/ui/veil/card";
	import { Shield } from "@lucide/svelte";
	import { Clerk, Firebase, Linear, Slack, Supabase, Vercel } from "$lib/svgs/index";
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-2xl px-6">
		<div>
			<h2 class="font-serif text-4xl font-medium text-balance">
				Powerful Features for Modern Teams
			</h2>
			<p class="mt-4 text-balance text-muted-foreground">
				Everything you need to build, connect, and scale your integrations effortlessly.
			</p>
		</div>
		<div class="mt-12 grid gap-3 *:p-6 @xl:grid-cols-2">
			<Card variant="outline" class="row-span-2 grid grid-rows-subgrid">
				<div class="space-y-2">
					<h3 class="font-medium text-foreground">Seamless Integrations</h3>
					<p class="text-sm text-muted-foreground">
						Connect your favorite tools and services with just a few clicks.
					</p>
				</div>
				<div aria-hidden={true} class="flex h-44 flex-col justify-between pt-8 **:fill-foreground">
					<div class="relative flex h-10 items-center gap-12 px-6">
						<div class="absolute inset-0 my-auto h-px bg-border"></div>

						<div
							class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
						>
							<Vercel class="size-3.5" />
						</div>
						<div
							class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
						>
							<Slack class="size-3.5" />
						</div>
					</div>
					<div class="relative flex h-10 items-center justify-between gap-12 pr-6 pl-17">
						<div class="absolute inset-0 my-auto h-px bg-border"></div>

						<div
							class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
						>
							<Clerk class="size-3.5" />
						</div>
						<div
							class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
						>
							<Linear class="size-3.5" />
						</div>
					</div>
					<div class="relative flex h-10 items-center gap-20 px-8">
						<div class="absolute inset-0 my-auto h-px bg-border"></div>

						<div
							class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
						>
							<Supabase class="size-3.5" />
						</div>
						<div
							class="relative flex h-8 items-center rounded-full bg-card px-3 shadow-sm ring shadow-black/6.5 ring-border"
						>
							<Firebase class="size-3.5" />
						</div>
					</div>
				</div>
			</Card>
			<Card variant="outline" class="row-span-2 grid grid-rows-subgrid overflow-hidden">
				<div class="space-y-2">
					<h3 class="font-medium text-foreground">Real-time Sync</h3>
					<p class="text-sm text-muted-foreground">
						Keep your data synchronized across all platforms automatically.
					</p>
				</div>
				<div aria-hidden={true} class="relative h-44 translate-y-6">
					<div class="absolute inset-0 mx-auto w-px bg-foreground/15"></div>
					<div class="absolute -inset-x-16 top-6 aspect-square rounded-full border"></div>
					<div
						class="absolute -inset-x-16 top-6 aspect-square rounded-full border border-primary mask-r-from-50% mask-r-to-50% mask-l-from-50% mask-l-to-90%"
					></div>
					<div class="absolute -inset-x-8 top-24 aspect-square rounded-full border"></div>
					<div
						class="absolute -inset-x-8 top-24 aspect-square rounded-full border border-lime-500 mask-r-from-50% mask-r-to-90% mask-l-from-50% mask-l-to-50%"
					></div>
				</div>
			</Card>
			<Card variant="outline" class="row-span-2 grid grid-rows-subgrid overflow-hidden">
				<div class="space-y-2">
					<h3 class="font-medium text-foreground">Developer First</h3>
					<p class="mt-2 text-sm text-muted-foreground">
						Built with developers in mind, featuring comprehensive APIs and SDKs.
					</p>
				</div>
				<div
					aria-hidden={true}
					class="flex h-44 justify-between pt-12 pb-6 *:h-full *:w-px *:bg-foreground/15"
				>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div class="bg-primary!"></div>
				</div>
			</Card>
			<Card variant="outline" class="row-span-2 grid grid-rows-subgrid">
				<div class="space-y-2">
					<h3 class="font-medium">Enterprise Ready</h3>
					<p class="text-sm text-muted-foreground">
						Scale confidently with enterprise-grade security and reliability.
					</p>
				</div>

				<div
					class="pointer-events-none relative -ml-7 flex size-44 items-center justify-center pt-5"
				>
					<Shield class="absolute inset-0 top-2.5 size-full stroke-[0.1px] opacity-15" />
					<Shield class="size-32 stroke-[0.1px]" />
				</div>
			</Card>
		</div>
	</div>
</section>
