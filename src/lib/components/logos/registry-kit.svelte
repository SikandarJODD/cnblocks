<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		class?: string;
		width?: number;
		height?: number;
		wordmark?: boolean;
	};

	let { class: className, wordmark = false, ...rest }: Props = $props();
</script>

{#if wordmark}
	<svg
		class={cn('size-4', className)}
		viewBox="0 0 155 179"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<path
			d="M42.144 138V48.4H59.68V86.16H60.32L76.32 48.4H94.368L75.68 91.152L95.264 138H75.808L60.576 98.832H59.68V138H42.144Z"
			class="fill-black dark:fill-white"
		/>
		<path d="M87.144 138V48.4H104.68V138H87.144Z" class="fill-black dark:fill-white" />
		<path
			d="M116.608 63.76H97.28V48.4H153.344V63.76H134.016V138H116.608V63.76Z"
			class="fill-black dark:fill-white"
		/>
		<path
			d="M6.144 48.4H40.192C45.568 50.192 50.1333 53.52 53.888 58.384C57.728 63.1627 59.648 69.0507 59.648 76.048C59.648 87.4827 55.1253 95.888 46.08 101.264L59.008 138H41.088L30.208 105.36H23.424V138H6.144V48.4ZM23.424 63.76V91.024H34.432C35.8827 90.6827 37.4613 89.232 39.168 86.672C40.96 84.0267 41.856 80.9547 41.856 77.456C41.856 73.9573 41.088 70.8853 39.552 68.24C38.1013 65.5947 36.6507 64.1013 35.2 63.76H23.424Z"
			fill="#F0DB4F"
		/>
	</svg>
{:else}
	<svg
		class={cn('size-4', className)}
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<g clip-path="url(#clip0_437_28)">
			<path
				d="M42.144 93V3.39999H59.68V41.16H60.32L76.32 3.39999H94.368L75.68 46.152L95.264 93H75.808L60.576 53.832H59.68V93H42.144Z"
				class="fill-black dark:fill-white"
			/>
			<path
				d="M6.144 3.39999H40.192C45.568 5.192 50.1333 8.52 53.888 13.384C57.728 18.1627 59.648 24.0507 59.648 31.048C59.648 42.4827 55.1253 50.888 46.08 56.264L59.008 93H41.088L30.208 60.36H23.424V93H6.144V3.39999ZM23.424 18.76V46.024H34.432C35.8827 45.6827 37.4613 44.232 39.168 41.672C40.96 39.0267 41.856 35.9547 41.856 32.456C41.856 28.9573 41.088 25.8853 39.552 23.24C38.1013 20.5947 36.6507 19.1013 35.2 18.76H23.424Z"
				fill="#F0DB4F"
			/>
		</g>
		<defs>
			<clipPath id="clip0_437_28">
				<rect width="96" height="96" fill="white" />
			</clipPath>
		</defs>
	</svg>
{/if}
