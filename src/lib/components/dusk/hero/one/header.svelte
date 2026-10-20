<script lang="ts">
	import X from "@lucide/svelte/icons/x";
	import Logo from "#lib/components/web/Logo.svelte";
	import { Button } from "#lib/components/ui/dusk/button/index.js";
	import { watch } from "runed";

	const menuItems = [
		{ name: "Product", href: "#link" },
		{ name: "Solutions", href: "#link" },
		{ name: "Pricing", href: "#link" },
		{ name: "Company", href: "#link" },
	];

	let menuState = $state(false);
	let menuButton: HTMLButtonElement;
	const id = $props.id();
	const menuId = `${id}-menu`;

	watch(
		() => menuState,
		(isOpen) => {
			if (!isOpen) return;

			const mediaQuery = window.matchMedia("(max-width: 1023px)");
			const updateOverflow = () => {
				document.documentElement.classList.toggle("overflow-hidden", mediaQuery.matches);
			};

			updateOverflow();
			mediaQuery.addEventListener("change", updateOverflow);

			return () => {
				mediaQuery.removeEventListener("change", updateOverflow);
				document.documentElement.classList.remove("overflow-hidden");
			};
		}
	);

	function closeMenu() {
		menuState = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape" && menuState) {
			closeMenu();
			menuButton.focus();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<header>
	<nav
		data-state={menuState && "active"}
		class="fixed top-0 z-20 w-full border-b bg-background max-lg:data-[state=active]:bottom-0"
	>
		<div class="mx-auto max-w-7xl px-6">
			<div class="relative flex flex-wrap items-center justify-between py-4 max-lg:gap-6">
				<div class="flex w-full justify-between lg:w-auto">
					<a href="/" aria-label="home" class="flex items-center space-x-2">
						<Logo />
					</a>

					<button
						bind:this={menuButton}
						onclick={() => (menuState = !menuState)}
						aria-label={menuState ? "Close Menu" : "Open Menu"}
						aria-controls={menuId}
						aria-expanded={menuState}
						class="relative z-20 block cursor-pointer after:absolute after:-inset-4 lg:hidden"
					>
						<span
							aria-hidden="true"
							class="m-auto flex size-4.5 flex-col items-center justify-center gap-[7px] transition-[transform,opacity] duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0 motion-reduce:transition-none"
						>
							<span class="h-0.5 w-full rounded-full bg-foreground"></span>
							<span class="h-0.5 w-full rounded-full bg-foreground"></span>
						</span>

						<X
							aria-hidden="true"
							class="absolute inset-0 m-auto size-6 -translate-x-[3px] -rotate-180 scale-0 opacity-0 transition-[transform,opacity] duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100 motion-reduce:transition-none"
						/>
					</button>
				</div>

				<div class="absolute inset-0 m-auto hidden size-fit lg:block">
					<ul class="flex gap-8 text-sm">
						{#each menuItems as item}
							<li>
								<a
									href={item.href}
									class="block text-muted-foreground transition-colors duration-150 hover:text-accent-foreground"
								>
									<span>{item.name}</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<div
					id={menuId}
					class="mb-6 hidden w-full flex-wrap items-center justify-end max-lg:space-y-8 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:in-data-[state=active]:flex"
				>
					<div class="lg:hidden">
						<ul>
							{#each menuItems as item}
								<li>
									<a
										href={item.href}
										onclick={closeMenu}
										class="block py-3 text-2xl font-medium text-foreground"
									>
										<span>{item.name}</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>

					<div class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
						<Button href="#" size="sm" variant="outline" onclick={closeMenu}>Login</Button>
						<Button href="#" size="sm" onclick={closeMenu}>Get Started</Button>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
