export type RegistryNamespace = "r" | "v" | "m" | "d";

function sanitizeBase(originOrBase: string): string {
	return originOrBase.replace(/\/+$/, "").replace(/\/(r|v|m|d)$/i, "");
}

function sanitizeRegistryPath(registryPath?: string | null): RegistryNamespace {
	const normalized = (registryPath ?? "").replace(/^\/+|\/+$/g, "").toLowerCase();
	if (normalized === "m" || normalized === "v" || normalized === "d") return normalized;
	return "r";
}

export function getRegistryPathFromPathname(pathname?: string | null): RegistryNamespace {
	const cleanPathname = (pathname ?? "").split("?")[0].split("#")[0];
	const segments = cleanPathname.split("/").filter(Boolean);
	const familySegment = segments[0] === "preview" ? segments[1] : segments[0];

	if (familySegment === "mist") return "m";
	if (familySegment === "veil") return "v";
	if (familySegment === "dusk") return "d";
	return "r";
}

export function getRegistryItemUrl(
	originOrBase: string,
	pathname: string | null | undefined,
	itemId: string,
	registryPath?: string | null
): string {
	const namespace = registryPath
		? sanitizeRegistryPath(registryPath)
		: getRegistryPathFromPathname(pathname);
	const base = sanitizeBase(originOrBase);
	if (!base) {
		return `/${namespace}/${itemId}.json`;
	}
	return `${base}/${namespace}/${itemId}.json`;
}
