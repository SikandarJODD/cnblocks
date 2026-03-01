import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [, , rawName, rawCount] = process.argv;
const MAX_COMPONENT_COUNT = 10;
const NUMBER_WORDS = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten'
];

function usage() {
	console.error('Usage: npm run create:veil -- <name> <count>');
	console.error('Example: npm run create:veil -- feature 30');
}

function normalizeName(input) {
	return input
		.trim()
		.toLowerCase()
		.replace(/[\s_]+/g, '-')
		.replace(/[^a-z0-9-]/g, '')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function parseCount(input) {
	if (!/^\d+$/.test(input)) {
		return null;
	}

	const parsed = Number.parseInt(input, 10);
	if (!Number.isInteger(parsed) || parsed <= 0) {
		return null;
	}

	return parsed;
}

async function main() {
	if (!rawName || !rawCount) {
		usage();
		process.exitCode = 1;
		return;
	}

	const normalizedName = normalizeName(rawName);
	if (!normalizedName) {
		console.error('Error: name is invalid after normalization.');
		usage();
		process.exitCode = 1;
		return;
	}

	const count = parseCount(rawCount);
	if (count === null) {
		console.error('Error: count must be a positive integer.');
		usage();
		process.exitCode = 1;
		return;
	}
	const effectiveCount = Math.min(count, MAX_COMPONENT_COUNT);
	if (count > MAX_COMPONENT_COUNT) {
		console.warn(
			`\x1b[33mWarning: requested ${count} components, but maximum is ${MAX_COMPONENT_COUNT}. Creating ${MAX_COMPONENT_COUNT} components.\x1b[0m`
		);
	}

	const tailarkBaseDir = path.join('src', 'lib', 'components', 'veil');
	const targetDir = path.join(tailarkBaseDir, normalizedName);
	await mkdir(targetDir, { recursive: true });

	let created = 0;
	let skipped = 0;

	for (let i = 1; i <= effectiveCount; i += 1) {
		const fileName = `${normalizedName}-${NUMBER_WORDS[i - 1]}.svelte`;
		const filePath = path.join(targetDir, fileName);

		try {
			await writeFile(filePath, '', { flag: 'wx' });
			created += 1;
		} catch (error) {
			if (error && typeof error === 'object' && 'code' in error && error.code === 'EEXIST') {
				skipped += 1;
				continue;
			}
			throw error;
		}
	}

	console.log('Tailark feature generation complete.');
	console.log(`Requested name: ${rawName}`);
	console.log(`Normalized name: ${normalizedName}`);
	console.log(`Target folder: ${targetDir}`);
	console.log(`Requested file count: ${count}`);
	console.log(`Processed file count: ${effectiveCount}`);
	console.log(`Created files: ${created}`);
	console.log(`Skipped existing files: ${skipped}`);
}

main().catch((error) => {
	console.error('Generation failed.');
	console.error(error instanceof Error ? error.message : String(error));
	process.exitCode = 1;
});
