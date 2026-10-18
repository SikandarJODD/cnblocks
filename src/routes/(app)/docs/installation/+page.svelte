<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, H3, Link, Paragraph } from "#lib/components/markdown/index.js";
	import { PMCommand } from "#lib/components/ui/pm-command/index.js";
	import { docsV2PageMap } from "#lib/config/docs-v2.js";
	import { projectUrl } from "#lib/config/seo.js";
	import type { Agent } from "package-manager-detector";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	const pageMeta = docsV2PageMap.installation;
	const title = "Installation | Svelte Marketing Blocks";
	const description =
		"Install and configure Svelte Shadcn Blocks in a new or existing SvelteKit app.";

	let canonical = $derived(`${projectUrl}${page.url.pathname}`);
	let socialImage = $derived(`${projectUrl}/og.png`);
	let agent = $state<Agent>("pnpm");
</script>

<MetaTags
	{title}
	{description}
	{canonical}
	keywords={pageMeta.seo.keywords}
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
				alt: "Svelte Marketing Blocks installation guide",
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
		imageAlt: "Svelte Marketing Blocks installation guide",
	}}
/>

<JsonLd
	schema={{
		"@type": "WebPage",
		name: title,
		description,
		url: canonical,
		isPartOf: {
			"@type": "WebSite",
			name: "Svelte Marketing Blocks",
			url: projectUrl,
		},
	}}
/>

<div class="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
	<article
		class="min-w-0 space-y-12 [&_h2]:font-gmono [&_h2]:font-normal [&_h3]:font-gmono [&_h3]:font-normal"
	>
		<header class="space-y-3">
			<H1
				id="installation"
				class="font-gmono text-3xl font-normal tracking-tight sm:text-4xl"
			>
				Installation
			</H1>
			<Paragraph class="max-w-prose text-lg leading-relaxed text-pretty">
				{description}
			</Paragraph>
		</header>

		<section>
			<H2 id="create-project">1. Create a SvelteKit project</H2>
			<Paragraph class="mt-1 mb-6 max-w-prose text-muted-foreground">
				Create a new app, or continue with an existing SvelteKit project.
			</Paragraph>
			<PMCommand
				bind:agent
				command="execute"
				variant="secondary"
				args={["sv", "create", "my-app"]}
			/>
		</section>

		<section>
			<H2 id="add-tailwind">2. Add Tailwind CSS</H2>
			<Paragraph class="mt-1 mb-6 max-w-prose text-muted-foreground">
				Configure Tailwind CSS using the official Svelte CLI add-on.
			</Paragraph>
			<PMCommand
				bind:agent
				command="execute"
				variant="secondary"
				args={["sv", "add", "tailwindcss"]}
			/>
		</section>

		<section>
			<H2 id="initialize-shadcn">3. Initialize shadcn-svelte</H2>
			<Paragraph class="mt-1 mb-6 max-w-prose text-muted-foreground">
				Set up shadcn-svelte and choose the configuration that fits your project.
			</Paragraph>
			<PMCommand
				bind:agent
				command="execute"
				variant="secondary"
				args={["shadcn-svelte@latest", "init"]}
			/>
		</section>

		<section>
			<H2 id="install-block">4. Install a block</H2>
			<Paragraph class="mt-1 mb-6 max-w-prose text-muted-foreground">
				Choose the registry that matches the block family you want to use.
			</Paragraph>

			<div class="space-y-6">
				<div class="space-y-2">
					<H3 id="kit-block">Kit</H3>
					<PMCommand
						bind:agent
						command="execute"
						variant="secondary"
						args={[
							"shadcn-svelte@latest",
							"add",
							"https://sv-blocks.vercel.app/r/hero-one.json",
						]}
					/>
				</div>
				<div class="space-y-2">
					<H3 id="mist-block">Mist</H3>
					<PMCommand
						bind:agent
						command="execute"
						variant="secondary"
						args={[
							"shadcn-svelte@latest",
							"add",
							"https://sv-blocks.vercel.app/m/hero-one.json",
						]}
					/>
				</div>
				<div class="space-y-2">
					<H3 id="veil-block">Veil</H3>
					<PMCommand
						bind:agent
						command="execute"
						variant="secondary"
						args={[
							"shadcn-svelte@latest",
							"add",
							"https://sv-blocks.vercel.app/v/hero-one.json",
						]}
					/>
				</div>
			</div>
		</section>

		<section>
			<H2 id="copy-and-paste">Copy and paste instead</H2>
			<Paragraph class="mt-1 max-w-prose text-muted-foreground">
				Prefer not to use the CLI? Copy a component from its preview and paste it directly
				into your app.
			</Paragraph>
		</section>

		<section class="space-y-3">
			<H2 id="whats-next" class="font-gmono font-normal">What’s next?</H2>
			<Paragraph class="max-w-prose leading-relaxed">
				Explore the <Link href="/kit/hero">Kit blocks</Link>, or continue with the <Link
					href="/docs/mist-theme">Mist theme setup</Link
				> or <Link href="/docs/veil-theme">Veil theme setup</Link>.
			</Paragraph>
		</section>
	</article>
</div>
