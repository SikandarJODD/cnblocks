type CreateCopyPromptOptions = {
	installUrl: string;
	componentName: string;
};

export function createCopyPrompt({ installUrl, componentName }: CreateCopyPromptOptions) {
	return `Install:
pnpm dlx shadcn-svelte@latest add ${installUrl}

Steps:
1. Detect the project's package manager and run the equivalent command using pnpm dlx, npx, yarn dlx, or bunx to add ${componentName}.
2. Review the installed dependencies and imports.
3. Show me how to use the component.

When finished, name the installed component and list every file added or changed.`;
}
