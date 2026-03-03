<script lang="ts">
	import { onMount } from "svelte";
	import { Button } from "$lib/components/ui/veil/button";
	import Logo from "$lib/components/web/Logo.svelte";
	import { cn } from "$lib/utils";
	import { Menu, X } from "@lucide/svelte";

	const menuItems = [
		{ name: "Features", href: "#link" },
		{ name: "Pricing", href: "#link" },
		{ name: "Company", href: "#link" },
	];

	let menuState = false;
	let isScrolled = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});
</script>

<header>
	<nav
		data-state={menuState ? "active" : undefined}
		class={cn(
			"fixed z-20 w-full transition-all duration-300",
			isScrolled && "border-b border-black/5 bg-background/75 backdrop-blur-lg"
		)}
	>
		<div class="mx-auto max-w-5xl px-6">
			<div class="relative flex flex-wrap items-center justify-between gap-6 py-6 lg:gap-0">
				<div class="flex w-full justify-between gap-6 lg:w-auto">
					<a href="/" aria-label="home" class="flex items-center space-x-2">
						<Logo />
					</a>

					<button
						onclick={() => (menuState = !menuState)}
						aria-label={menuState ? "Close Menu" : "Open Menu"}
						class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
					>
						<Menu
							class="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0"
						/>
						<X
							class="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100"
						/>
					</button>
				</div>

				<div class="absolute inset-0 m-auto hidden size-fit lg:block">
					<ul class="flex gap-1">
						{#each menuItems as item}
							<li>
								<Button
									variant="ghost"
									size="sm"
									href={item.href}
									class="text-base"
								>
									<span>{item.name}</span>
								</Button>
							</li>
						{/each}
					</ul>
				</div>

				<div
					class="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent"
				>
					<div class="lg:hidden">
						<ul class="space-y-6 text-base">
							{#each menuItems as item}
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
							variant="ghost"
							size="sm"
							class={cn(isScrolled && "lg:hidden")}
							href="#"
						>
							<span>Login</span>
						</Button>
						<Button size="sm" class={cn(isScrolled && "lg:hidden")} href="#">
							<span>Sign Up</span>
						</Button>
						<Button
							size="sm"
							class={cn(isScrolled ? "lg:inline-flex" : "hidden")}
							href="#"
						>
							<span>Get Started</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
