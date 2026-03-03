import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REGISTRY_PATH = path.join(ROOT, "registry.json");
const MAP_PATH = path.join(ROOT, "src", "lib", "generated", "registry-namespaces.ts");
const STATIC_DIR = path.join(ROOT, "static");
const REGISTRY_ITEM_SCHEMA = "https://shadcn-svelte.com/schema/registry-item.json";

function readJson(filePath) {
	return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function normalizePath(value) {
	return String(value).replace(/\\/g, "/");
}

function getClassifyPath(file) {
	if (file?.relativePath) return normalizePath(file.relativePath);
	return normalizePath(file?.path ?? "");
}

function classify(files) {
	const normalized = files.map((file) => getClassifyPath(file));
	const hasVeil = normalized.some((filePath) => filePath.includes("src/lib/components/veil/"));
	const hasMist = normalized.some((filePath) => filePath.includes("src/lib/components/mist/"));
	if (hasVeil && hasMist) {
		throw new Error(`Ambiguous namespace for files: ${normalized.join(", ")}`);
	}
	if (hasVeil) return "v";
	if (hasMist) return "m";
	return "r";
}

function parseGeneratedNamespaceMap(source) {
	const match = source.match(/registryNamespaces = (\{[\s\S]*\}) as const;/);
	if (!match) {
		throw new Error("Could not parse registryNamespaces object from generated map");
	}
	return JSON.parse(match[1]);
}

function assert(condition, message) {
	if (!condition) throw new Error(message);
}

function verifyManifestFile(manifestPath, expectedName) {
	assert(fs.existsSync(manifestPath), `Missing manifest file: ${manifestPath}`);
	const manifest = readJson(manifestPath);
	assert(manifest.$schema === REGISTRY_ITEM_SCHEMA, `Invalid schema in ${manifestPath}`);
	assert(manifest.name === expectedName, `Unexpected manifest name in ${manifestPath}`);
	assert(
		Array.isArray(manifest.files) && manifest.files.length > 0,
		`Missing files in ${manifestPath}`
	);
}

function countJsonFiles(dirPath) {
	if (!fs.existsSync(dirPath)) return 0;
	return fs
		.readdirSync(dirPath, { withFileTypes: true })
		.filter((entry) => entry.isFile() && entry.name.endsWith(".json")).length;
}

function main() {
	const registry = readJson(REGISTRY_PATH);
	assert(Array.isArray(registry.items), "registry.json missing items array");

	const mapSource = fs.readFileSync(MAP_PATH, "utf8");
	const namespaceMap = parseGeneratedNamespaceMap(mapSource);

	const names = new Set();
	let veilCount = 0;
	let veilStatsCount = 0;
	const namespaceCounts = { r: 0, v: 0, m: 0 };

	for (const item of registry.items) {
		assert(item?.name, "Found registry item without name");
		assert(!names.has(item.name), `Duplicate item name: ${item.name}`);
		names.add(item.name);

		const expectedNamespace = classify(item.files ?? []);
		const mappedNamespace = namespaceMap[item.name];
		assert(
			mappedNamespace === expectedNamespace,
			`Namespace mismatch for ${item.name}: expected ${expectedNamespace}, got ${mappedNamespace}`
		);
		namespaceCounts[expectedNamespace] += 1;

		const canonicalPath = path.join(STATIC_DIR, expectedNamespace, `${item.name}.json`);
		verifyManifestFile(canonicalPath, item.name);

		if (item.name.startsWith("veil-")) {
			veilCount += 1;
		}
		if (item.name.startsWith("veil-stats-")) {
			veilStatsCount += 1;
		}
	}

	assert(
		Object.keys(namespaceMap).length === registry.items.length,
		"Namespace map count does not match registry item count"
	);
	assert(veilCount === 60, `Expected 60 Veil items, found ${veilCount}`);
	assert(veilStatsCount === 4, `Expected 4 Veil stats items, found ${veilStatsCount}`);
	assert(
		veilCount - veilStatsCount === 56,
		`Expected 56 non-stats Veil items, found ${veilCount - veilStatsCount}`
	);
	assert(
		countJsonFiles(path.join(STATIC_DIR, "r")) === namespaceCounts.r,
		"static/r count mismatch"
	);
	assert(
		countJsonFiles(path.join(STATIC_DIR, "v")) === namespaceCounts.v,
		"static/v count mismatch"
	);
	assert(
		countJsonFiles(path.join(STATIC_DIR, "m")) === namespaceCounts.m,
		"static/m count mismatch"
	);
	assert(countJsonFiles(path.join(STATIC_DIR, "mist")) === 0, "Expected static/mist to be empty");

	if (namespaceMap.marquee !== undefined) {
		assert(namespaceMap.marquee === "r", "Expected marquee namespace to be r");
	}

	console.log(
		`Registry namespace verification passed: total=${registry.items.length}, veil=${veilCount}, nonStatsVeil=${veilCount - veilStatsCount}`
	);
}

main();
