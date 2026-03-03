<script lang="ts">
	import { Button } from "$lib/components/ui/veil/button";
	import { mode, resetMode, setMode } from "mode-watcher";
	import { Monitor, Moon, Sun } from "@lucide/svelte";
	import { fade, fly, scale } from "svelte/transition";

	type ThemeOption = "system" | "light" | "dark";

	let hoveredTheme = $state<ThemeOption | null>(null);

	const selectedTheme = $derived.by<ThemeOption>(() => {
		const current = mode.current;
		return current === "light" || current === "dark" || current === "system"
			? current
			: "system";
	});

	const activeTheme = $derived(hoveredTheme ?? selectedTheme);

	const tooltipLabel = $derived.by(() => {
		switch (activeTheme) {
			case "light":
				return "Switch to light theme";
			case "dark":
				return "Switch to dark theme";
			case "system":
			default:
				return "Switch to system theme";
		}
	});

	function isActive(theme: ThemeOption): boolean {
		return activeTheme === theme;
	}

	function isSelected(theme: ThemeOption): boolean {
		return selectedTheme === theme;
	}
</script>

<div class="w-fit">
	<div class="mb-2 -ml-2 flex">
		<div class="relative">
			<Button
				size="icon"
				variant="ghost"
				aria-label="switch to system theme"
				aria-pressed={isSelected("system")}
				class={isSelected("system") ? "text-foreground" : ""}
				onmouseenter={() => (hoveredTheme = "system")}
				onmouseleave={() => (hoveredTheme = null)}
				onfocus={() => (hoveredTheme = "system")}
				onblur={() => (hoveredTheme = null)}
				onclick={resetMode}
			>
				<Monitor />
			</Button>
			{#if isActive("system")}
				<span
					in:scale={{ start: 0.8, duration: 120 }}
					out:scale={{ start: 1, duration: 120 }}
					class="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground"
				></span>
			{/if}
		</div>

		<div class="relative">
			<Button
				size="icon"
				variant="ghost"
				aria-label="switch to light theme"
				aria-pressed={isSelected("light")}
				class={isSelected("light") ? "text-foreground" : ""}
				onmouseenter={() => (hoveredTheme = "light")}
				onmouseleave={() => (hoveredTheme = null)}
				onfocus={() => (hoveredTheme = "light")}
				onblur={() => (hoveredTheme = null)}
				onclick={() => setMode("light")}
			>
				<Sun />
			</Button>
			{#if isActive("light")}
				<span
					in:scale={{ start: 0.8, duration: 120 }}
					out:scale={{ start: 1, duration: 120 }}
					class="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground"
				></span>
			{/if}
		</div>

		<div class="relative">
			<Button
				size="icon"
				variant="ghost"
				aria-label="switch to dark theme"
				aria-pressed={isSelected("dark")}
				class={isSelected("dark") ? "text-foreground" : ""}
				onmouseenter={() => (hoveredTheme = "dark")}
				onmouseleave={() => (hoveredTheme = null)}
				onfocus={() => (hoveredTheme = "dark")}
				onblur={() => (hoveredTheme = null)}
				onclick={() => setMode("dark")}
			>
				<Moon />
			</Button>
			{#if isActive("dark")}
				<span
					in:scale={{ start: 0.8, duration: 120 }}
					out:scale={{ start: 1, duration: 120 }}
					class="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground"
				></span>
			{/if}
		</div>
	</div>

	{#if hoveredTheme}
		<div
			aria-live="polite"
			class="w-fit text-xs leading-none text-muted-foreground"
			in:fade={{ duration: 150 }}
			out:fade={{ duration: 120 }}
		>
			<span in:fly={{ y: 3, duration: 150 }} out:fly={{ y: -2, duration: 120 }}>
				{tooltipLabel}
			</span>
		</div>
	{/if}
</div>
