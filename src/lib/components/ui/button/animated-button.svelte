<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ButtonProps } from './button.svelte';

	let {
		class: _class,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		{href}
		class={cn(
			'group relative grid overflow-hidden rounded-md px-4 py-2 transition-colors duration-200 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]',
			_class
		)}
	>
		<span>
			<span
				class="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:[inset:0_auto_auto_50%] before:aspect-square before:w-[200%] before:[translate:-50%_-15%] before:rotate-[-90deg]
        before:animate-kitrotate before:bg-[conic-gradient(from_0deg,transparent_0_330deg,blue_360deg)] before:content-[''] dark:before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]"
				>,</span
			>
		</span>
		<span
			class="backdrop absolute inset-[0.9px] rounded-md bg-secondary transition-colors duration-200 group-hover:bg-neutral-200 dark:bg-neutral-900 dark:group-hover:bg-neutral-900"
		></span>
		<span class="z-10 text-center text-sm font-medium text-primary">
			{@render children?.()}
		</span>
	</a>
{:else}
	<button
		class={cn(
			'group relative grid overflow-hidden rounded-md px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200',
			_class
		)}
	>
		<span>
			<span
				class="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:[inset:0_auto_auto_50%] before:aspect-square before:w-[200%] before:[translate:-50%_-15%] before:rotate-[-90deg] before:animate-kitrotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-['']"
			></span>
		</span>
		<span
			class="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900"
		></span>
		<span class="z-10 text-sm font-medium text-neutral-400">
			{@render children?.()}
		</span>
	</button>
{/if}
