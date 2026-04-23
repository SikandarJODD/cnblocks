<script lang="ts">
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import "../app.css";
	import { activeElement, PressedKeys } from "runed";

	let { children } = $props();
	let keys = new PressedKeys();
	keys.onKeys(["d"], () => {
		if (
			activeElement.current?.localName === "input" ||
			activeElement.current?.localName === "textarea"
		)
			return;
		toggleMode();
	});
</script>

<ModeWatcher />

{@render children()}
