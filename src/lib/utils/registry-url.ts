import { registryNamespaces } from '$lib/generated/registry-namespaces';

export type RegistryNamespace = 'r' | 'v' | 'm';

export function getRegistryNamespace(itemId: string): RegistryNamespace {
	const namespaceMap: Record<string, RegistryNamespace> = registryNamespaces;
	const mapped = namespaceMap[itemId];
	if (mapped) return mapped;
	if (itemId.startsWith('mist-')) return 'm';
	if (itemId.startsWith('veil-')) return 'v';
	return 'r';
}

export function hasRegistryItem(itemId: string): boolean {
	return Object.hasOwn(registryNamespaces, itemId);
}

function sanitizeBase(originOrBase: string): string {
	return originOrBase.replace(/\/+$/, '').replace(/\/(r|v|m)$/i, '');
}

export function getRegistryItemUrl(originOrBase: string, itemId: string): string {
	const namespace = getRegistryNamespace(itemId);
	const base = sanitizeBase(originOrBase);
	if (!base) {
		return `/${namespace}/${itemId}.json`;
	}
	return `${base}/${namespace}/${itemId}.json`;
}
