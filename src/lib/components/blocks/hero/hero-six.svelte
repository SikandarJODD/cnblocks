<script>
	import Header from "#lib/components/blocks/header/header-six.svelte";
	import Button from "#lib/components/ui/button/button.svelte";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import Mail from "@lucide/svelte/icons/mail";
	import SendHorizonal from "@lucide/svelte/icons/send-horizontal";
</script>

<div>
	<Header />
	<main>
		<section class="overflow-hidden">
			<div class="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
				<div class="lg:flex lg:items-center lg:gap-12">
					<div
						class="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left"
					>
						<a
							href="/"
							class="mx-auto flex w-fit items-center gap-2 rounded-(--radius) border p-1 pr-3 lg:ml-0"
						>
							<span
								class="rounded-[calc(var(--radius)-0.25rem)] bg-muted px-2 py-1 text-xs"
								>New</span
							>
							<span class="text-sm">Introduction Tailark Html</span>
							<span class="block h-4 w-px bg-border"></span>

							<ArrowRight class="size-4" />
						</a>

						<h1 class="mt-10 text-4xl font-bold text-balance md:text-5xl xl:text-5xl">
							Production Ready Digital Marketing blocks
						</h1>
						<p class="mt-8">
							Error totam sit illum. Voluptas doloribus asperiores quaerat aperiam.
							Quidem harum omnis beatae ipsum soluta!
						</p>

						<div>
							<form
								action=""
								class="mx-auto my-10 max-w-sm lg:my-12 lg:mr-auto lg:ml-0"
							>
								<div
									class="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border bg-background pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-muted"
								>
									<Mail
										class="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5"
									/>

									<input
										placeholder="Your mail address"
										class="h-14 w-full bg-transparent pl-12 focus:outline-none"
										type="email"
									/>

									<div class="md:pr-1.5 lg:pr-0">
										<Button aria-label="submit" class="rounded-(--radius)">
											<span class="hidden md:block">Get Started</span>
											<SendHorizonal
												class="relative mx-auto size-5 md:hidden"
												strokeWidth={2}
											/>
										</Button>
									</div>
								</div>
							</form>

							<ul class="list-inside list-disc space-y-2">
								<li>Faster</li>
								<li>Modern</li>
								<li>100% Customizable</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
					<div class="relative">
						<div
							class="absolute -inset-17 z-1 bg-radial-[at_65%_25%] from-transparent to-background to-40%"
						></div>
						<img
							class="hidden dark:block"
							src="/music.png"
							alt="app illustration"
							width={2796}
							height={2008}
						/>
						<img
							class="dark:hidden"
							src="/music-light.png"
							alt="app illustration"
							width={2796}
							height={2008}
						/>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>
