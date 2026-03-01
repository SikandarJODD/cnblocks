import { error } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";
import { statsDocsBySlug, statsSlugs, type StatsSlug } from "../../../../veil/stats/data";

export const prerender = true;

export const entries: EntryGenerator = () => statsSlugs.map((slug) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const slug = params.slug as StatsSlug;
	const doc = statsDocsBySlug[slug];

	if (!doc) {
		throw error(404, "Preview not found");
	}

	return {
		slug,
		title: doc.title,
		description: doc.description,
		seo: doc.seo,
	};
};
