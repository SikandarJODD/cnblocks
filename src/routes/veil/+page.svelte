<script lang="ts">
  import Integration1 from "$lib/components/veil/integration/integration-one.svelte";
  import Integration2 from "$lib/components/veil/integration/integration-two.svelte";
  import FooterOne from "$lib/components/veil/footer/footer-one.svelte";
  import FooterTwo from "$lib/components/veil/footer/footer-two.svelte";
  import FooterThree from "$lib/components/veil/footer/footer-three.svelte";
  import FooterFour from "$lib/components/veil/footer/footer-four.svelte";
  import FooterFive from "$lib/components/veil/footer/footer-five.svelte";
  import FooterSix from "$lib/components/veil/footer/footer-six.svelte";
  import { setTheme } from "mode-watcher";
  import { onMount } from "svelte";

  onMount(() => {
    setTheme("veil");
  });
</script>

<div class="bg-background">
  <Integration1 />
  <Integration2 />

  <div class="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6">
    <h2 class="text-foreground text-xl font-semibold">Veil Footers Preview</h2>

    <section class="overflow-hidden rounded-xl border">
      <div class="bg-muted text-muted-foreground border-b px-4 py-2 text-xs">footer-one</div>
      <FooterOne />
    </section>

    <section class="overflow-hidden rounded-xl border">
      <div class="bg-muted text-muted-foreground border-b px-4 py-2 text-xs">footer-two</div>
      <FooterTwo />
    </section>

    <section class="overflow-hidden rounded-xl border">
      <div class="bg-muted text-muted-foreground border-b px-4 py-2 text-xs">footer-three</div>
      <FooterThree />
    </section>

    <section class="overflow-hidden rounded-xl border">
      <div class="bg-muted text-muted-foreground border-b px-4 py-2 text-xs">footer-four</div>
      <FooterFour />
    </section>

    <section class="overflow-hidden rounded-xl border">
      <div class="bg-muted text-muted-foreground border-b px-4 py-2 text-xs">footer-five</div>
      <FooterFive />
    </section>

    <section class="overflow-hidden rounded-xl border">
      <div class="bg-muted text-muted-foreground border-b px-4 py-2 text-xs">footer-six</div>
      <FooterSix />
    </section>
  </div>
</div>
