import type { HTMLAttributes } from "svelte/elements";
import GitHub from "./github.svelte";
import CSS from "./css.svelte";
import TypeScript from "./typescript.svelte";
import Twitter from "./twitter.svelte";
import Svelte from "./svelte.svelte";
import Terminal from "./terminal.svelte";
import Code from "./code.svelte";
import MCP from "./mcp.svelte";
import Markdown from "./markdown.svelte";

export interface Props extends HTMLAttributes<SVGElement> {
	class?: string;
	width?: number;
	height?: number;
}

export { GitHub, CSS, TypeScript, Twitter, Svelte, Terminal, Code as CodeIcon, MCP, Markdown };
