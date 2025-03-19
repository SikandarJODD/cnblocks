<script>
  import { cn } from "$lib/utils";
  let {
    code = "",
    class: _class = "",
  } = $props();

  import { codeToHtml } from "shiki";
  import { onMount } from "svelte";

  let htmlCode = $state("");
  onMount(async () => {
    htmlCode = await codeToHtml(code, {
      lang: "svelte",
      themes: {
        dark: "aurora-x",
        light: 'github-light',
      },
    });
  });
</script>

<div
  class={cn(
    "[&_code]:text-[13px]/2 [&_pre]:max-h-(--pre-max-height) [&_code]:font-mono [&_pre]:min-h-[20rem] [&_pre]:overflow-auto [&_pre]:border-l  [&_pre]:p-4 [&_pre]:leading-snug dark:[&_pre]:!bg-zinc-900/50",
    _class
  )}
>
  {@html htmlCode}
</div>

