import { isMarkdownDocSlug, markdownDocs, markdownDocSlugs } from "#lib/content/docs/index.js";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types.js";

export const prerender = true;

export const entries = () => markdownDocSlugs.map((slug) => ({ slug }));

export const GET: RequestHandler = ({ params }) => {
	if (!isMarkdownDocSlug(params.slug)) {
		error(404, "Markdown document not found");
	}

	return new Response(markdownDocs[params.slug], {
		headers: {
			"cache-control": "public, max-age=0, s-maxage=86400",
			"content-type": "text/markdown; charset=utf-8",
		},
	});
};
