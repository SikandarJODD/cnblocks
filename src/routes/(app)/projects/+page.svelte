<script lang="ts">
	import { page } from "$app/state";
	import { LibraryCard, ProjectCard } from "#lib/components/base/project/index.js";
	import { H1, H2, Paragraph } from "#lib/components/markdown/index.js";
	import { FaviconLink } from "#lib/components/ui/favicon-link/index.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	type Project = {
		name: string;
		description: string;
		href: string;
		source: string;
	};

	const title = "Projects & Libraries | Svelte Marketing Blocks";
	const description =
		"Explore open-source Svelte projects, UI libraries, animation collections, components, and developer tools created by Bhide Svelte.";
	const keywords = [
		"Svelte projects",
		"Svelte libraries",
		"Svelte components",
		"Svelte UI libraries",
		"Svelte animations",
		"shadcn-svelte",
		"open-source Svelte",
	];

	const projects: Project[] = [
		{
			name: "Svelte Animations",
			href: "https://sv-animations.vercel.app",
			description: "Svelte port of Magic UI, Spell UI, and Fancy Components.",
			source: "https://github.com/SikandarJODD/animations",
		},
		{
			name: "Svelte 4 Animations",
			href: "https://animation-svelte.vercel.app",
			description: "A collection of more than 200 animations for Svelte 4.",
			source: "https://github.com/SikandarJODD/svelte-animations",
		},
		{
			name: "Svelte Datatable Components",
			href: "https://sv-table.vercel.app",
			description:
				"Datatable components with filters, sorting, and documentation, powered by TanStack Table v9.",
			source: "https://github.com/SikandarJODD/sv-table",
		},
		{
			name: "Svelte Chan Components",
			href: "https://sv-chan.vercel.app",
			description:
				"A free, open-source Svelte 5 component library inspired by Chánh Đại’s portfolio, with previews, source code, and documentation.",
			source: "https://github.com/SikandarJODD/sv-chanhdai",
		},
		// {
		// 	name: "Svelte Marketing Blocks",
		// 	href: "https://sv-blocks.vercel.app",
		// 	description: "More than 150 marketing blocks built with shadcn-svelte.",
		// 	source: "https://github.com/SikandarJODD/cnblocks",
		// },
		{
			name: "Svelte Efferd Blocks",
			href: "https://sv-efferd.pages.dev",
			description: "More than 60 marketing blocks built with shadcn-svelte.",
			source: "https://github.com/SikandarJODD/sv-efferd",
		},
		{
			name: "Svelte Dot Matrix",
			href: "https://sv-matrix.vercel.app",
			description: "More than 50 dot matrix loaders for Svelte.",
			source: "https://github.com/SikandarJODD/sv-matrix",
		},
		{
			name: "Svelte Form Builder",
			href: "https://svelte-form-builder.vercel.app",
			description: "A drag-and-drop form builder for Svelte.",
			source: "https://github.com/SikandarJODD/form-builder",
		},
		{
			name: "Svelte Particles",
			href: "https://sv-particles.vercel.app/particles/button",
			description: "More than 60 useful shadcn-svelte particle and UI blocks.",
			source: "https://github.com/SikandarJODD/sv-particles",
		},
		{
			name: "Svelte Globe Examples",
			href: "https://sv-globe.vercel.app",
			description: "A collection of 3D globe examples built with Cobe and Svelte.",
			source: "https://github.com/SikandarJODD/sv-globe",
		},
		{
			name: "Svelte AI Elements",
			href: "https://sv-ai-elements.vercel.app",
			description:
				"An unofficial Svelte port of Vercel AI Elements with accessible, customizable building blocks for AI interfaces.",
			source: "https://github.com/SikandarJODD/ai-elements",
		},
	];

	const libraries: Project[] = [
		{
			name: "Svelte Agentation",
			href: "https://sv-agentation.com",
			description: "Provides the right context for AI and LLM workflows.",
			source: "https://github.com/SikandarJODD/sv-agentation",
		},
	];

	const withUtmSource = (href: string) =>
		`${href}${href.includes("?") ? "&" : "?"}utm_source=svelte-marketing-blocks`;

	let canonical = $derived(`${page.url.origin}${page.url.pathname}`);
	let socialImage = $derived(`${page.url.origin}/og.png`);
	const items = [...projects, ...libraries];
</script>

<MetaTags
	{title}
	{description}
	{canonical}
	{keywords}
	robots="index,follow"
	additionalRobotsProps={{ maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 }}
	openGraph={{
		type: "website",
		url: canonical,
		title,
		description,
		siteName: "Svelte Marketing Blocks",
		images: [
			{
				url: socialImage,
				width: 1200,
				height: 630,
				alt: "Projects and libraries by Bhide Svelte",
			},
		],
	}}
	twitter={{
		cardType: "summary_large_image",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
		title,
		description,
		image: socialImage,
		imageAlt: "Projects and libraries by Bhide Svelte",
	}}
/>

<JsonLd
	schema={{
		"@type": "CollectionPage",
		name: "Projects & Libraries",
		description,
		url: canonical,
		isPartOf: {
			"@type": "WebSite",
			name: "Svelte Marketing Blocks",
			url: page.url.origin,
		},
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: items.length,
			itemListElement: items.map((item, index) => ({
				"@type": "ListItem",
				position: index + 1,
				url: item.href,
				name: item.name,
				description: item.description,
			})),
		},
	}}
/>

<div class="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
	<article class="min-w-0 space-y-10">
		<header class="mx-auto max-w-2xl space-y-3 text-center">
			<H1 class="font-gmono text-3xl font-normal tracking-tight sm:text-4xl">
				Projects &amp; Libraries
			</H1>
			<Paragraph class="text-base leading-relaxed text-pretty sm:text-lg">
				Open-source Svelte projects, component collections, and tools. All built by
				<FaviconLink
					href="https://bhide.dev?utm_source=svelte-marketing-blocks"
					target="_blank"
					rel="noreferrer"
					faviconSrc="https://www.google.com/s2/favicons?domain=bhide.dev&sz=128"
					class="rounded-sm bg-ink/10 px-1.5 text-ink/80 transition-all duration-200 hover:text-ink dark:bg-[oklch(0.654_0.234_34.196)]/15 dark:text-[oklch(0.654_0.234_34.196)] dark:hover:bg-[oklch(0.654_0.234_34.196)]/25 dark:hover:text-[oklch(0.72_0.19_34.196)]"
				>
					Bhide Svelte
				</FaviconLink>.
			</Paragraph>
		</header>

		<section class="space-y-3" aria-labelledby="projects-heading">
			<H2 id="projects-heading" class="font-gmono font-normal">Projects</H2>
			<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
				{#each projects as project (project.name)}
					<ProjectCard
						name={project.name}
						description={project.description}
						href={withUtmSource(project.href)}
						source={project.source}
					/>
				{/each}
			</div>
		</section>

		<section class="space-y-3" aria-labelledby="libraries-heading">
			<H2 id="libraries-heading" class="font-gmono font-normal">Libraries</H2>
			<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
				{#each libraries as library (library.name)}
					<LibraryCard
						name={library.name}
						description={library.description}
						href={withUtmSource(library.href)}
						source={library.source}
					/>
				{/each}
			</div>
		</section>
	</article>
</div>
