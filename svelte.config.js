import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: ({ id }) => {
				// Many gallery blocks intentionally use "#a" placeholder anchors.
				if (id === "a") return;
			},
		},
	},
	// vitePlugin: {
	//   inspector: {
	//     toggleKeyCombo: "meta-shift",
	//     holdMode: true,
	//     showToggleButton: "always",
	//     toggleButtonPos: "bottom-right",
	//   },
	// },
	vitePlugin: {
		inspector: {
			// change shortcut
			toggleKeyCombo: 'ctrl-shift',
			// hold and release key to toggle inspector mode
			holdMode: true,
			// show or hide the inspector option
			showToggleButton: 'always',
			// inspector position
			toggleButtonPos: 'bottom-right'
		}
	}
};

export default config;
