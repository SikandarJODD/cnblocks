import installation from "./installation.md?raw";
import mcp from "./mcp.md?raw";
import mistTheme from "./mist-theme.md?raw";
import veilTheme from "./veil-theme.md?raw";
import duskTheme from "./dusk-theme.md?raw";

export const markdownDocs = {
	installation,
	mcp,
	"mist-theme": mistTheme,
	"veil-theme": veilTheme,
	"dusk-theme": duskTheme,
} as const;

export type MarkdownDocSlug = keyof typeof markdownDocs;

export const markdownDocSlugs = Object.keys(markdownDocs) as MarkdownDocSlug[];

export function isMarkdownDocSlug(slug: string): slug is MarkdownDocSlug {
	return slug in markdownDocs;
}
