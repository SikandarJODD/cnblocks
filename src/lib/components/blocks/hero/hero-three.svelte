<script>
	import Header from "#lib/components/blocks/header/header-three.svelte";
	import Button from "#lib/components/ui/button/button.svelte";
	import { Marquee } from "#lib/components/magic/marquee/index.js";
	import { ProgressiveBlur } from "#lib/components/magic/progressive-blur/index.js";
	import Mail from "@lucide/svelte/icons/mail";
	import SendHorizonal from "@lucide/svelte/icons/send-horizontal";

	import {
		Beacon,
		Bolt,
		Cisco,
		Claude,
		Figma,
		FirebaseFull,
		Hulu,
		Spotify,
		SupabaseFull,
		VercelFull,
	} from "#lib/svgs/index.js";
</script>

<div>
	<Header />
	<main class="overflow-hidden">
		<section>
			<div class="relative mx-auto max-w-6xl px-6 pt-32 pb-20 lg:pt-48">
				<div class="relative z-10 mx-auto max-w-4xl text-center">
					<h1 class="text-5xl font-medium text-balance md:text-6xl">
						Healthier daily routine
					</h1>
					<p class="mx-auto mt-6 max-w-2xl text-lg text-pretty">
						Tailwindcss highly customizable components for building modern websites and
						applications that look and feel the way you mean it.
					</p>

					<div class="mt-12">
						<form action="" class="mx-auto max-w-sm">
							<div
								class="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border bg-background pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-muted"
							>
								<Mail
									class="pointer-events-none absolute inset-y-0 left-4 my-auto size-4"
								/>

								<input
									placeholder="Your mail address"
									class="h-12 w-full bg-transparent pl-12 focus:outline-none"
									type="email"
								/>

								<div class="md:pr-1.5 lg:pr-0">
									<Button
										aria-label="submit"
										size="sm"
										class="rounded-(--radius)"
									>
										<span class="hidden md:block">Get Started</span>
										<SendHorizonal
											class="relative mx-auto size-5 md:hidden"
											strokeWidth={2}
										/>
									</Button>
								</div>
							</div>
						</form>

						<div
							aria-hidden={true}
							class="relative mx-auto mt-32 max-w-2xl bg-radial from-primary/50 to-transparent to-55% text-left dark:from-primary/25"
						>
							<div
								class="absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-4xl border border-border/50 bg-background mask-[linear-gradient(to_bottom,#000_50%,transparent_90%)] p-2 sm:-translate-x-6"
							>
								<div
									class="relative h-96 overflow-hidden rounded-3xl border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,currentColor,currentColor_1px,transparent_1px,transparent_6px)] before:text-border before:opacity-50"
								></div>
							</div>
							<div
								class="mx-auto w-80 translate-x-4 rounded-4xl border border-border/50 bg-muted mask-[linear-gradient(to_bottom,#000_50%,transparent_90%)] p-2 backdrop-blur-3xl sm:translate-x-8 dark:bg-background/50"
							>
								<div
									class="space-y-2 overflow-hidden rounded-3xl border bg-background p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl"
								>
									<!-- App Component -->
									<div class="relative space-y-3 rounded-2xl bg-white/5 p-4">
										<div class="flex items-center gap-1.5 text-orange-400">
											<svg
												class="size-5"
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												viewBox="0 0 32 32"
											>
												<g fill="none">
													<path
														fill="#ff6723"
														d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"
													></path>
													<path
														fill="#ffb02e"
														d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"
													></path>
												</g>
											</svg>
											<div class="text-sm font-medium">Steps</div>
										</div>
										<div class="space-y-3">
											<div
												class="border-b border-white/10 pb-3 text-sm font-medium text-foreground"
											>
												This year, you're walking more on average than you
												did in 2023.
											</div>
											<div class="space-y-3">
												<div class="space-y-1">
													<div class="space-x-1">
														<span
															class="align-baseline text-xl font-medium text-foreground"
															>8,081</span
														>
														<span class="text-xs text-muted-foreground"
															>Steps/day</span
														>
													</div>
													<div
														class="flex h-5 items-center rounded bg-linear-to-l from-emerald-400 to-indigo-600 px-2 text-xs text-white"
													>
														2024
													</div>
												</div>
												<div class="space-y-1">
													<div class="space-x-1">
														<span
															class="align-baseline text-xl font-medium text-foreground"
															>5,412</span
														>
														<span class="text-xs text-muted-foreground"
															>Steps/day</span
														>
													</div>
													<div
														class="flex h-5 w-2/3 items-center rounded bg-muted px-2 text-xs text-foreground dark:bg-white/20"
													>
														2023
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- App Component End -->
									<div
										class="rounded-2xl bg-muted p-4 pb-16 dark:bg-white/5"
									></div>
								</div>
							</div>
							<div
								class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[16px_16px] mix-blend-overlay dark:opacity-5"
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- <LogoCloud /> -->
		<section class="bg-background pb-16 md:pb-32">
			<div class="group relative m-auto max-w-6xl px-6">
				<div class="flex flex-col items-center md:flex-row">
					<div class="inline md:max-w-44 md:border-r md:pr-6">
						<p class="text-end text-sm">Powering the best teams</p>
					</div>
					<div class="relative py-6 **:fill-foreground md:w-[calc(100%-11rem)]">
						<Marquee>
							<Bolt height={22} width={56} />
							<VercelFull height={22} width={84} />
							<SupabaseFull class="h-6" />
							<Hulu height={18} width={56} />
							<Spotify height={24} width={80} />
							<FirebaseFull height={24} width={80} />
							<Beacon height={24} width={80} />
							<Claude height={26} width={90} />
							<Figma height={24} width={24} />
							<Cisco height={30} width={60} />
						</Marquee>

						<div
							aria-hidden={true}
							class="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"
						></div>
						<div
							aria-hidden={true}
							class="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"
						></div>
						<ProgressiveBlur
							class="pointer-events-none absolute top-0 left-0 h-full w-20"
							direction="left"
							blurIntensity={1}
						/>
						<ProgressiveBlur
							class="pointer-events-none absolute top-0 right-0 h-full w-20"
							direction="right"
							blurIntensity={1}
						/>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>
