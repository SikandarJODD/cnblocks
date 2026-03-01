<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/veil/button';
	import Logo from '$lib/components/web/Logo.svelte';
	import { cn } from '$lib/utils';
	import { ChevronRight, Menu, X } from '@lucide/svelte';

	const menuItems = [
		{ name: 'Features', href: '#link' },
		{ name: 'Pricing', href: '#link' },
		{ name: 'Company', href: '#link' }
	];

	let menuState = false;
	let isScrolled = false;
	let isLarge = false;

	onMount(() => {
		const media = window.matchMedia('(min-width: 64rem)');

		const handleScroll = () => {
			isScrolled = window.scrollY > 75;
		};

		const handleMedia = () => {
			isLarge = media.matches;
		};

		handleScroll();
		handleMedia();
		window.addEventListener('scroll', handleScroll);
		media.addEventListener('change', handleMedia);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			media.removeEventListener('change', handleMedia);
		};
	});
</script>

<header>
	<nav data-state={menuState ? 'active' : undefined} class="fixed z-20 w-full">
		<div class="mx-auto max-w-7xl px-6">
			<div class="relative flex flex-wrap items-center justify-between gap-6 py-6 lg:gap-0">
				<div
					class={cn(
						'flex justify-between gap-6 duration-200 max-lg:w-full',
						isScrolled && 'lg:opacity-0 lg:blur-[4px]'
					)}
				>
					<div class="hidden size-fit lg:block">
						<ul class="flex gap-1 max-lg:flex-col">
							{#each menuItems as item}
								<li>
									<Button
										variant="ghost"
										size="sm"
										class="w-full text-base max-lg:h-12 max-lg:justify-start max-lg:text-lg"
										href={item.href}
									>
										<span>{item.name}</span>
									</Button>
								</li>
							{/each}
						</ul>
					</div>
					<a href="/" aria-label="home" class="flex items-center space-x-2 lg:hidden">
						<Logo />
					</a>

					<button
						onclick={() => (menuState = !menuState)}
						aria-label={menuState ? 'Close Menu' : 'Open Menu'}
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

				{#if isLarge}
					<div
						class={cn(
							'absolute inset-0 z-50 m-auto flex size-fit h-11 items-center rounded-lg transition-all duration-500',
							isScrolled
								? 'gap-4 bg-card shadow-lg shadow-foreground/6.5 ring-1 ring-border backdrop-blur'
								: 'gap-0 bg-transparent'
						)}
					>
						<a href="/" aria-label="home" class="px-3.5">
							<Logo />
						</a>

						<div
							class={cn(
								'flex origin-left items-center overflow-hidden rounded-full transition-all duration-500',
								isScrolled
									? 'blur-0 max-w-[32rem] opacity-100'
									: 'max-w-0 -translate-x-8 scale-95 opacity-0 blur-[4px]'
							)}
						>
							<ul class="flex gap-1 max-lg:flex-col">
								{#each menuItems as item}
									<li>
										<Button
											variant="ghost"
											size="sm"
											class="w-full text-base max-lg:h-12 max-lg:justify-start max-lg:text-lg"
											href={item.href}
										>
											<span>{item.name}</span>
										</Button>
									</li>
								{/each}
							</ul>
							<Button size="sm" class="mx-2 gap-1 pr-1" href="#">
								<span>Get started</span>
								<ChevronRight class="opacity-50" />
							</Button>
						</div>
					</div>
				{/if}

				<div
					class="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl bg-card p-6 shadow-2xl shadow-zinc-300/20 ring-1 ring-border in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-transparent lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent"
				>
					<div class="lg:hidden">
						<ul class="flex gap-1 max-lg:flex-col">
							{#each menuItems as item}
								<li>
									<Button
										variant="ghost"
										size="sm"
										class="w-full text-base max-lg:h-12 max-lg:justify-start max-lg:text-lg"
										href={item.href}
									>
										<span>{item.name}</span>
									</Button>
								</li>
							{/each}
						</ul>
					</div>
					<div
						class={cn(
							'flex w-full flex-col space-y-3 duration-200 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit',
							isScrolled && 'lg:opacity-0 lg:blur-[4px]'
						)}
					>
						<Button variant="ghost" size="sm" href="#">
							<span>Login</span>
						</Button>
						<Button size="sm" href="#">
							<span>Sign Up</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
