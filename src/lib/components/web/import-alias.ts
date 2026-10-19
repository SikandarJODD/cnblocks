import type { BlockCodeNode, BlockCodeTree } from "#lib/tree/types.js";

export type ImportAliasStyle = "dollar" | "hash";

const SVELTEKIT_ALIASES = ["$app", "$env", "$service-worker"];
const MODULE_SPECIFIER = /(\b(?:from|import)\s*(?:\(\s*)?)(["'])([$#][^"']+)\2/g;

function isSvelteKitAlias(specifier: string) {
	return SVELTEKIT_ALIASES.some(
		(alias) => specifier === alias || specifier.startsWith(`${alias}/`)
	);
}

export function transformImportAliases(source: string, style: ImportAliasStyle) {
	return source.replace(
		MODULE_SPECIFIER,
		(match, prefix: string, quote: string, specifier: string) => {
			if (isSvelteKitAlias(specifier)) return match;

			if (style === "hash" && specifier.startsWith("$")) {
				return `${prefix}${quote}#${specifier.slice(1)}${quote}`;
			}

			if (style === "dollar" && specifier.startsWith("#")) {
				return `${prefix}${quote}$${specifier.slice(1)}${quote}`;
			}

			return match;
		}
	);
}

function transformCodeTreeNode(node: BlockCodeNode, style: ImportAliasStyle): BlockCodeNode {
	if (node.type === "folder") {
		return {
			...node,
			children: node.children.map((child) => transformCodeTreeNode(child, style)),
		};
	}

	return node.code ? { ...node, code: transformImportAliases(node.code, style) } : node;
}

export function transformCodeTreeImports(
	tree: BlockCodeTree,
	style: ImportAliasStyle
): BlockCodeTree {
	return {
		...tree,
		nodes: tree.nodes.map((node) => transformCodeTreeNode(node, style)),
	};
}
