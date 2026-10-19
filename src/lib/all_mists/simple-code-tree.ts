import { createBlockCodeTreeFromCode, type BlockCodeInput } from "#lib/tree/types.js";

type MistCodeFile = BlockCodeInput & {
	folderName?: string;
	sourcePath?: string;
};

type FolderNode = {
	isFile: boolean;
	children: Map<string, FolderNode>;
};

function addPath(root: FolderNode, path: string) {
	const segments = path.split("/").filter(Boolean);
	let current = root;

	for (const [index, segment] of segments.entries()) {
		let child = current.children.get(segment);

		if (!child) {
			child = { isFile: false, children: new Map() };
			current.children.set(segment, child);
		}

		if (index === segments.length - 1) {
			child.isFile = true;
		}

		current = child;
	}
}

function renderFolder(node: FolderNode, prefix = "    "): string[] {
	const entries = [...node.children.entries()];

	return entries.flatMap(([name, child], index) => {
		const isLast = index === entries.length - 1;
		const branch = isLast ? "└──" : "├──";
		const line = `${prefix}${branch} ${name}${child.isFile ? "" : "/"}`;

		if (child.isFile) {
			return [line];
		}

		const childPrefix = `${prefix}${isLast ? "    " : "│   "}`;
		return [line, ...renderFolder(child, childPrefix)];
	});
}

export function createMistFolderStructure(sourcePaths: string[]) {
	const root: FolderNode = { isFile: false, children: new Map() };

	for (const path of sourcePaths) {
		addPath(root, path);
	}

	return `# Folder structure

Here is the original folder structure:

    src/lib/
${renderFolder(root).join("\n")}
`;
}

function resolveSourcePath(sourceDirectory: string, file: MistCodeFile) {
	if (file.sourcePath) {
		return file.sourcePath;
	}

	const path = file.folderName ?? file.path ?? file.name ?? "component.svelte";

	if (path.startsWith("ui/")) {
		const uiPath = path.slice(3);
		const segments = uiPath.split("/");
		const componentName =
			segments.length === 1 ? segments[0].replace(/\.svelte$/, "") : segments[0];
		const fileName = segments.length === 1 ? segments[0] : segments.slice(1).join("/");
		return `components/ui/mist/${componentName}/${fileName}`;
	}

	return `components/mist/${sourceDirectory}/${path}`;
}

export function createSimpleMistCodeTreeFor(sourceDirectory: string) {
	return (files: MistCodeFile[]) => {
		const sourcePaths = files.map((file) => resolveSourcePath(sourceDirectory, file));
		const uiIndexPaths = sourcePaths
			.filter((path) => path.startsWith("components/ui/mist/"))
			.map((path) => `${path.slice(0, path.lastIndexOf("/"))}/index.ts`);
		const folderStructure = createMistFolderStructure([
			...sourcePaths,
			...new Set(uiIndexPaths),
		]);
		const codeFiles = files.map(({ folderName: _, sourcePath: __, ...file }) => file);

		return createBlockCodeTreeFromCode(
			[
				...codeFiles,
				{
					path: "folder-structure.md",
					code: folderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		);
	};
}
