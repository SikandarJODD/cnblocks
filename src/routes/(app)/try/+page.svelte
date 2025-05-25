<script>
  import HeroOne from '$lib/components/mist/mhero/one/hero-one.svelte';
  import MContentOne from '$lib/components/mist/mcontent/one.svelte';
  import MFeatureOne from '$lib/components/mist/mfeature/one.svelte';
  import MCtaOne from '$lib/components/mist/mcta/one.svelte';
</script>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <!-- Hero Section -->
  <section class="relative">
    <HeroOne />
  </section>

  <!-- Content Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <MContentOne />
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <MFeatureOne />
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
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
