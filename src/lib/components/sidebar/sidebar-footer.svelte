<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import ThemeToggle from "#lib/web/layouts/ThemeToggle.svelte";

	const sidebar = Sidebar.useSidebar();

	function closeMobileSidebar() {
		if (sidebar.isMobile) sidebar.setOpenMobile(false);
	}
</script>

<Sidebar.Footer class="p-0 md:p-2">
	<div class="flex items-center gap-1">
		<a
			href="https://x.com/Sikandar_Bhide"
			target="_blank"
			rel="noreferrer"
			class="flex size-10 touch-manipulation items-center justify-center rounded-md text-muted-foreground ring-sidebar-ring outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:size-8"
			aria-label="Follow on X"
			onclick={closeMobileSidebar}
		>
			<svg
				aria-hidden="true"
				class="size-[18px] md:size-4"
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path
					d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
				/>
			</svg>
		</a>
		<a
			href="https://github.com/SikandarJODD/cnblocks"
			target="_blank"
			rel="noreferrer"
			class="flex size-10 touch-manipulation items-center justify-center rounded-md text-muted-foreground ring-sidebar-ring outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:size-8"
			aria-label="View cnblocks on GitHub"
			onclick={closeMobileSidebar}
		>
			<svg
				aria-hidden="true"
				class="size-[18px] md:size-4"
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M12 2C6.477 2 2 6.486 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.218.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.344-3.369-1.344-.454-1.158-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.953 0-1.094.39-1.988 1.03-2.689-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.56 9.56 0 0 1 12 6.836a9.56 9.56 0 0 1 2.504.338c1.909-1.297 2.748-1.027 2.748-1.027.545 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.689 0 3.85-2.337 4.697-4.566 4.945.359.31.679.923.679 1.86 0 1.343-.012 2.426-.012 2.755 0 .268.18.58.688.482A10.023 10.023 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
		<div
			class="ms-auto [&_button]:size-10 [&_button]:touch-manipulation md:[&_button]:size-8 [&_svg]:size-[18px]! md:[&_svg]:size-[1.2rem]!"
		>
			<ThemeToggle />
		</div>
	</div>
</Sidebar.Footer>
