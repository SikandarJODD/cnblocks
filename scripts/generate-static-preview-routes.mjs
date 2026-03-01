import fs from 'node:fs/promises';
import path from 'node:path';

const numberWords = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen',
	'twenty'
];

const corePreviewConfig = [
	{ category: 'hero', modulePath: '$lib/all_blocks/hero', exportName: 'hero', count: 9 },
	{ category: 'feature', modulePath: '$lib/all_blocks/features', exportName: 'feature', count: 14 },
	{ category: 'content', modulePath: '$lib/all_blocks/content', exportName: 'content', count: 7 },
	{
		category: 'integration',
		modulePath: '$lib/all_blocks/integration',
		exportName: 'integration',
		count: 8
	},
	{ category: 'stats', modulePath: '$lib/all_blocks/stats', exportName: 'stats', count: 4 },
	{ category: 'cta', modulePath: '$lib/all_blocks/cta', exportName: 'cta', count: 3 },
	{ category: 'pricing', modulePath: '$lib/all_blocks/pricing', exportName: 'pricing', count: 5 },
	{ category: 'team', modulePath: '$lib/all_blocks/team', exportName: 'team', count: 2 },
	{
		category: 'comparator',
		modulePath: '$lib/all_blocks/comparator',
		exportName: 'comparator',
		count: 1
	},
	{
		category: 'logocloud',
		modulePath: '$lib/all_blocks/logo-cloud',
		exportName: 'logocloud',
		count: 3
	},
	{ category: 'faq', modulePath: '$lib/all_blocks/faq', exportName: 'faq', count: 4 },
	{ category: 'footer', modulePath: '$lib/all_blocks/footer', exportName: 'footer', count: 5 },
	{ category: 'contact', modulePath: '$lib/all_blocks/contact', exportName: 'contact', count: 2 },
	{ category: 'signup', modulePath: '$lib/all_blocks/signup', exportName: 'signup', count: 3 },
	{ category: 'login', modulePath: '$lib/all_blocks/login', exportName: 'login', count: 3 },
	{
		category: 'forgot-password',
		modulePath: '$lib/all_blocks/forgot-password',
		exportName: 'forgot_password',
		count: 2
	},
	{
		category: 'testimonial',
		modulePath: '$lib/all_blocks/testimonial',
		exportName: 'testimonials',
		count: 4
	}
];

const mistPreviewConfig = [
	{
		category: 'hero',
		modulePath: '$lib/all_mists/hero',
		exportName: 'all_mists_heros',
		sourceFile: 'src/lib/all_mists/hero.ts'
	},
	{
		category: 'feature',
		modulePath: '$lib/all_mists/feature',
		exportName: 'all_mists_features',
		sourceFile: 'src/lib/all_mists/feature.ts'
	},
	{
		category: 'content',
		modulePath: '$lib/all_mists/content',
		exportName: 'all_mists_content',
		sourceFile: 'src/lib/all_mists/content.ts'
	},
	{
		category: 'integration',
		modulePath: '$lib/all_mists/integrations',
		exportName: 'all_mists_integrations',
		sourceFile: 'src/lib/all_mists/integrations.ts'
	},
	{
		category: 'stats',
		modulePath: '$lib/all_mists/stats',
		exportName: 'all_mists_stats',
		sourceFile: 'src/lib/all_mists/stats.ts'
	},
	{
		category: 'cta',
		modulePath: '$lib/all_mists/cta',
		exportName: 'all_mists_cta',
		sourceFile: 'src/lib/all_mists/cta.ts'
	},
	{
		category: 'pricing',
		modulePath: '$lib/all_mists/pricing',
		exportName: 'all_mists_pricing',
		sourceFile: 'src/lib/all_mists/pricing.ts'
	},
	{
		category: 'team',
		modulePath: '$lib/all_mists/team',
		exportName: 'all_mists_team',
		sourceFile: 'src/lib/all_mists/team.ts'
	},
	{
		category: 'comparator',
		modulePath: '$lib/all_mists/comparator',
		exportName: 'all_mists_comparator',
		sourceFile: 'src/lib/all_mists/comparator.ts'
	},
	{
		category: 'logocloud',
		modulePath: '$lib/all_mists/logocloud',
		exportName: 'all_mists_logocloud',
		sourceFile: 'src/lib/all_mists/logocloud.ts'
	},
	{
		category: 'testimonial',
		modulePath: '$lib/all_mists/testimonial',
		exportName: 'all_mists_testimonial',
		sourceFile: 'src/lib/all_mists/testimonial.ts'
	},
	{
		category: 'footer',
		modulePath: '$lib/all_mists/footer',
		exportName: 'all_mists_footer',
		sourceFile: 'src/lib/all_mists/footer.ts'
	},
	{
		category: 'contact',
		modulePath: '$lib/all_mists/contact',
		exportName: 'all_mists_contact',
		sourceFile: 'src/lib/all_mists/contact.ts'
	},
	{
		category: 'signup',
		modulePath: '$lib/all_mists/signup',
		exportName: 'all_mists_signup',
		sourceFile: 'src/lib/all_mists/signup.ts'
	},
	{
		category: 'login',
		modulePath: '$lib/all_mists/login',
		exportName: 'all_mists_login',
		sourceFile: 'src/lib/all_mists/login.ts'
	},
	{
		category: 'forgot-password',
		modulePath: '$lib/all_mists/forgot_password',
		exportName: 'all_mists_forgot_password',
		sourceFile: 'src/lib/all_mists/forgot_password.ts'
	}
];

const root = process.cwd();
const previewRoot = path.join(root, 'src/routes/preview');

const createCorePage = (modulePath, exportName, slug) => `<script lang="ts">
  import { ${exportName} } from "${modulePath}";

  const block = ${exportName}.find((item) => item.title === "${slug}");

  if (!block) {
    throw new Error("Missing preview block for ${slug} in ${exportName}");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
`;

const createMistPage = (modulePath, exportName, slug) => `<script lang="ts">
  import { ${exportName} } from "${modulePath}";

  const block = ${exportName}.find((item) => item.slug === "${slug}");

  if (!block) {
    throw new Error("Missing preview block for ${slug} in ${exportName}");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
`;

const getMistSlugs = async (sourceFile) => {
	const absSourcePath = path.join(root, sourceFile);
	const fileContent = await fs.readFile(absSourcePath, 'utf8');
	const matches = [...fileContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
	return [...new Set(matches.map((match) => match[1]))];
};

const writeRoutePage = async (targetDir, content) => {
	await fs.mkdir(targetDir, { recursive: true });
	await fs.writeFile(path.join(targetDir, '+page.svelte'), content, 'utf8');
};

const generateCoreRoutes = async () => {
	let generatedCount = 0;

	for (const item of corePreviewConfig) {
		const categoryDir = path.join(previewRoot, item.category);
		await fs.rm(categoryDir, { recursive: true, force: true });

		const slugs = numberWords.slice(0, item.count);
		for (const slug of slugs) {
			const routeDir = path.join(categoryDir, slug);
			await writeRoutePage(routeDir, createCorePage(item.modulePath, item.exportName, slug));
			generatedCount += 1;
		}
	}

	return generatedCount;
};

const generateMistRoutes = async () => {
	let generatedCount = 0;
	const mistRoot = path.join(previewRoot, 'mist');

	for (const item of mistPreviewConfig) {
		const categoryDir = path.join(mistRoot, item.category);
		await fs.rm(categoryDir, { recursive: true, force: true });

		const slugs = await getMistSlugs(item.sourceFile);
		for (const slug of slugs) {
			const routeDir = path.join(categoryDir, slug);
			await writeRoutePage(routeDir, createMistPage(item.modulePath, item.exportName, slug));
			generatedCount += 1;
		}
	}

	return generatedCount;
};

const run = async () => {
	const coreCount = await generateCoreRoutes();
	const mistCount = await generateMistRoutes();

	console.log(`Generated ${coreCount} core preview routes and ${mistCount} mist preview routes.`);
};

run().catch((error) => {
	console.error(error);
	process.exit(1);
});
