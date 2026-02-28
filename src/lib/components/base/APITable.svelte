<script lang="ts">
	import Table from "../markdown/Table.svelte";
	import Thead from "../markdown/Thead.svelte";
	import Tbody from "../markdown/Tbody.svelte";
	import Tr from "../markdown/Tr.svelte";
	import Th from "../markdown/Th.svelte";
	import Td from "../markdown/Td.svelte";
	import InfoPopover from "./InfoPopover.svelte";
	import { cn } from "$lib/utils";
	import { H3 } from "../markdown";

	type PropDef = {
		name: string;
		type: string;
		default?: string;
		required?: boolean;
		description?: string;
	};

	type PropsTable = {
		name: string;
		desc?: string;
		props: PropDef[];
	};

	let {
		data,
	}: {
		data: PropsTable | PropDef[];
	} = $props();

	const isPropsTable = (data: PropsTable | PropDef[]): data is PropsTable => {
		return "props" in data;
	};

	let tableData = $derived(isPropsTable(data) ? data.props : data);
	let tableHeaders = ["Name", "Type", "Default", "Description"];
	let tableKeys = ["name", "type", "default", "description"];
</script>

{#if isPropsTable(data)}
	<div class="space-y-2">
		<H3 id={data.name} class="mt-0 text-xl font-semibold">
			{data.name}
		</H3>
		{#if data.desc}
			<p class="text-muted-foreground m-0 leading-relaxed">
				{data.desc}
			</p>
		{/if}
	</div>
{/if}

<Table>
	<Thead>
		<Tr>
			{#each tableHeaders as header (header)}
				<Th>{header}</Th>
			{/each}
		</Tr>
	</Thead>
	<Tbody>
		{#each tableData as row, i (i)}
			<Tr>
				{#each tableKeys as key, index (key)}
					<Td>
						<span class="inline-flex items-center">
							<code
								class={cn(
									"bg-muted/40 text-foreground  rounded-sm border px-1.5 py-0.5 font-normal"
								)}
							>
								{key === "default" && row.required
									? "required"
									: (row as any)[key] || ""}
							</code>
							{#if index === 0 && row.description}
								<InfoPopover description={row.description} />
							{/if}
						</span>
					</Td>
				{/each}
			</Tr>
		{/each}
	</Tbody>
</Table>
