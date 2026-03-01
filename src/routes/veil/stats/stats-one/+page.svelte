<script lang="ts">
	import ComponentDocPage from "$lib/components/base/ComponentDocPage.svelte";
	import { statsDocsBySlug } from "../data";

	const doc = statsDocsBySlug["stats-one"];
</script>

<ComponentDocPage {...doc} />
