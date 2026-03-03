<script lang="ts">
	import SEOComponent from "$lib/seo/SEO.svelte";
	import DocsPageShell from "$lib/components/layout/DocsPageShell.svelte";
	import {
		H2,
		H3,
		Paragraph,
		Link,
		UnorderedList,
		ListItem,
	} from "$lib/components/markdown/index";
	import { docsV2PageMap } from "$lib/config/docs-v2";
	import Button from "$lib/components/ui/button/button.svelte";

	const pageMeta = docsV2PageMap.sponsors;

	const sponsors = [
		{
			name: "Yashash Pugalia",
			avatar: "https://avatars.githubusercontent.com/u/89068816?v=4",
			href: "https://github.com/yashash-pugalia",
		},
	];
</script>

<SEOComponent
	title={pageMeta.seo.title}
	description={pageMeta.seo.description}
	keywords={pageMeta.seo.keywords}
/>

<DocsPageShell
	title="Sponsors"
	description="Support development of Svelte Shadcn Blocks and help keep the project sustainable."
>
	<section class="space-y-4">
		<H2 id="current-sponsors">Current Sponsors</H2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-6">
			{#each sponsors as sponsor}
				<a
					href={sponsor.href}
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-col items-center justify-center rounded-xl border bg-card p-3"
				>
					<img
						class="size-16 rounded-full object-cover"
						src={sponsor.avatar}
						alt={sponsor.name}
						loading="lazy"
					/>
					<span class="mt-2 text-center text-sm font-medium">{sponsor.name}</span>
				</a>
			{/each}
		</div>
	</section>

	<section class="space-y-4">
		<H2 id="how-to-support">How To Support</H2>
		<UnorderedList>
			<ListItem>Become a recurring sponsor on GitHub.</ListItem>
			<ListItem>Share the project with your developer network.</ListItem>
			<ListItem>Contribute docs, bug fixes, and component improvements.</ListItem>
		</UnorderedList>
		<div class="flex flex-wrap gap-3">
			<Button href="https://github.com/sponsors/SikandarJODD" target="_blank"
				>Donate on GitHub</Button
			>
			<Button
				variant="outline"
				target="_blank"
				href="https://twitter.com/intent/tweet?text=I%E2%80%99m%20using%20Svelte%20Shadcn%20Blocks%20for%20my%20marketing%20pages.%20Check%20it%20out%20https%3A%2F%2Fsv-blocks.vercel.app"
			>
				Share on Twitter
			</Button>
		</div>
	</section>

	<section class="space-y-4">
		<H3 id="feedback-and-requests">Feedback and Requests</H3>
		<Paragraph>
			For feature requests and sponsorship-related questions, open an issue or discussion on{" "}
			<Link
				href="https://github.com/SikandarJODD/cnblocks"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub
			</Link>.
		</Paragraph>
	</section>
</DocsPageShell>
