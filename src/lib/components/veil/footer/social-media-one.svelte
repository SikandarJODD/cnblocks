<script lang="ts">
	import { Button } from '$lib/components/ui/veil/button';
	import { Linkedin, Twitter, Youtube } from '@lucide/svelte';
	import type { Component } from 'svelte';

	type SocialMedia = 'twitter' | 'linkedin' | 'youtube';

	type SocialItem = {
		id: SocialMedia;
		label: string;
		href: string;
		icon: Component;
	};

	const socials: SocialItem[] = [
		{ id: 'twitter', label: 'Twitter', href: '#', icon: Twitter },
		{ id: 'linkedin', label: 'LinkedIn', href: '#', icon: Linkedin },
		{ id: 'youtube', label: 'YouTube', href: '#', icon: Youtube }
	];

	let hoveredSocialMedia = $state<SocialMedia | null>(null);

	const tooltipLabel = $derived.by(() => {
		switch (hoveredSocialMedia ?? 'twitter') {
			case 'twitter':
				return 'Follow us on Twitter';
			case 'linkedin':
				return 'Follow us on LinkedIn';
			case 'youtube':
				return 'Follow us on YouTube';
			default:
				return 'Follow us';
		}
	});
</script>

<div class="flex w-fit flex-col items-end">
	<div class="-mr-2 mb-2 flex">
		{#each socials as item (item.id)}
			<Button
				href={item.href}
				target="_blank"
				rel="noopener noreferrer"
				referrerpolicy="no-referrer"
				size="icon"
				variant="ghost"
				aria-label={'Follow us on ' + item.label}
				aria-pressed={hoveredSocialMedia === item.id}
				class={hoveredSocialMedia === item.id ? 'text-foreground' : ''}
				onmouseenter={() => (hoveredSocialMedia = item.id)}
				onmouseleave={() => (hoveredSocialMedia = null)}
				onfocus={() => (hoveredSocialMedia = item.id)}
				onblur={() => (hoveredSocialMedia = null)}
			>
				<item.icon />
			</Button>
		{/each}
	</div>

	<div
		aria-live="polite"
		class="w-fit text-xs leading-none text-muted-foreground transition-opacity duration-200"
		class:opacity-100={hoveredSocialMedia !== null}
		class:opacity-0={hoveredSocialMedia === null}
	>
		{tooltipLabel}
	</div>
</div>
