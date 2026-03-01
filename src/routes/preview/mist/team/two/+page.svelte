<script lang="ts">
	import { all_mists_team } from "$lib/all_mists/team";

	const block = all_mists_team.find((item) => item.slug === "two");

	if (!block) {
		throw new Error("Missing preview block for two in all_mists_team");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
