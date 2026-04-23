<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import { Marquee } from "$lib/components/magic/marquee";
	import { ProgressiveBlur } from "$lib/components/magic/progressive-blur";
	// Hero Header Component

	import { cn } from "$lib/utils";
	import Menu from "@lucide/svelte/icons/menu";
	import X from "@lucide/svelte/icons/x";
	import { scrollY } from "svelte/reactivity/window";
	import Mail from "@lucide/svelte/icons/mail";
	import SendHorizonal from "@lucide/svelte/icons/send-horizontal";

	let menuItems = [
		{ name: "Features", href: "#a" },
		{ name: "Solution", href: "#a" },
		{ name: "Pricing", href: "#a" },
		{ name: "About", href: "#a" },
	];
	let menuState = $state(false);
	let isScrolled = $derived.by(() => {
		if (scrollY.current !== undefined && scrollY.current > 50) {
			return true;
		}
		return false;
	});

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
	} from "$lib/svgs";
</script>

<div>
	<!-- Scroll below to see the snippet code  -->
	{@render heroheader()}
	<main
		class="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]"
	>
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
									class="relative h-96 overflow-hidden rounded-3xl border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50"
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

{#snippet heroheader()}
	<header>
		<nav class="fixed z-20 w-full px-2">
			<div
				class={[
					"mx-auto mt-2 max-w-6xl rounded-2xl px-6 transition-all duration-300 lg:px-12",
					isScrolled &&
						"max-w-4xl rounded-2xl border bg-background/50 backdrop-blur-lg lg:px-5",
				]}
			>
				<div
					class="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4"
				>
					<div class="flex w-full justify-between lg:w-auto">
						<a href="/" aria-label="home" class="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 24 24"
								fill="none"
								role="img"
								color="currentColor"
							>
								<path
									d="M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z"
									stroke="currentColor"
									stroke-width="1.5"
								></path>
								<path
									d="M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z"
									stroke="currentColor"
									stroke-width="1.5"
								></path>
								<path
									d="M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z"
									stroke="currentColor"
									stroke-width="1.5"
								></path>
								<path
									opacity="0.4"
									d="M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z"
									stroke="currentColor"
									stroke-width="1.5"
								></path>
							</svg>
						</a>

						<button
							onclick={() => (menuState = !menuState)}
							aria-label={menuState == true ? "Close Menu" : "Open Menu"}
							class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
						>
							<Menu
								class={[
									"m-auto size-6 duration-200",
									menuState && "scale-0 rotate-180 opacity-0",
								]}
							/>
							<X
								class={[
									"absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200",
									menuState && "scale-100 rotate-0 opacity-100",
								]}
							/>
						</button>
					</div>

					<div class="absolute inset-0 m-auto hidden size-fit lg:block">
						<ul class="flex gap-8 text-sm">
							{#each menuItems as item, index}
								<li>
									<a
										href={item.href}
										class="block text-muted-foreground duration-150 hover:text-accent-foreground"
									>
										<span>{item.name}</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
					<div
						class={[
							"mb-6 w-full  flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
							menuState ? "block lg:flex" : "hidden lg:flex",
						]}
					>
						<div class="lg:hidden">
							<ul class="space-y-6 text-base">
								{#each menuItems as item, index}
									<li>
										<a
											href={item.href}
											class="block text-muted-foreground duration-150 hover:text-accent-foreground"
										>
											<span>{item.name}</span>
										</a>
									</li>
								{/each}
							</ul>
						</div>
						<div
							class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit"
						>
							<Button
								variant="outline"
								size="sm"
								class={cn(isScrolled && "lg:hidden")}
								href="/"
							>
								Login
							</Button>
							<Button href="/" size="sm" class={cn(isScrolled && "lg:hidden")}
								>Sign Up</Button
							>
							<Button
								size="sm"
								href="/"
								class={cn(isScrolled ? "lg:inline-flex" : "hidden")}
							>
								Get Strated
							</Button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
{/snippet}
