<script>
	import HeroOne from "$lib/components/mist/mhero/one/hero-one.svelte";
	import MContentOne from "$lib/components/mist/mcontent/one.svelte";
	import MFeatureOne from "$lib/components/mist/mfeature/one.svelte";
	import MCtaOne from "$lib/components/mist/mcta/one.svelte";
</script>

<div class="min-h-screen bg-white dark:bg-gray-900">
	<!-- Hero Section -->
	<section class="relative">
		<HeroOne />
	</section>

	<!-- Content Section -->
	<section class="px-4 py-16 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<MContentOne />
		</div>
	</section>

	<!-- Features Section -->
	<section class="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-800">
		<div class="mx-auto max-w-7xl">
			<MFeatureOne />
		</div>
	</section>

	<!-- CTA Section -->
	<section class="px-4 py-16 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<MCtaOne />
		</div>
	</section>
</div>

<style>
	/* Add any custom styles here */
	section {
		scroll-margin-top: 2rem;
	}
</style>
