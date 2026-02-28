import { tv, type VariantProps } from "tailwind-variants";
import Root from "./code.svelte";
import Overflow from "./code-overflow.svelte";
import CopyButton from "./code-copy-button.svelte";
import MultipleCode from "./multiple-code.svelte";

import type { CodeCopyButtonProps, CodeRootProps } from "./types";
import type { SupportedLanguage } from "./shiki";

export const codeVariants = tv({
	base: "not-prose relative h-full overflow-auto rounded-lg border",
	variants: {
		variant: {
			default: "border-border bg-card",
			secondary: "bg-secondary/50 border-transparent",
		},
	},
});

export type CodeVariant = VariantProps<typeof codeVariants>["variant"];

export type CodeBlock = {
	filename: string;
	filecode: string;
	lang?: SupportedLanguage;
	isExpand?: boolean;
	highlight?: (number | [number, number])[];
	hideLines?: boolean;
};

export {
	Root,
	CopyButton,
	Overflow,
	MultipleCode,
	type CodeRootProps as RootProps,
	type CodeCopyButtonProps as CopyButtonProps,
};
