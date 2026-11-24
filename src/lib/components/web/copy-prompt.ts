type CreateCopyPromptOptions = {
	installUrl: string;
	componentName: string;
};

export function createCopyPrompt({ installUrl, componentName }: CreateCopyPromptOptions) {
	return `Installation URL:
${installUrl}

Steps:
1. Install ${componentName} using the project's package manager.
2. Review the installed dependencies and imports.
3. Show me how to use the component.

When finished, name the installed component and list every file added or changed.`;
}
