<script>
  import { Lightbulb, Pencil, PencilRuler } from "@lucide/svelte";
  import { setTheme } from "mode-watcher";
  import { onMount } from "svelte";
  onMount(() => {
    setTheme("veil");
  });
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="space-y-4">
      <h2 class="text-balance font-serif text-4xl font-medium">
        Create Content with AI Assistance
      </h2>
      <p class="text-muted-foreground">
        Our AI assistant helps you create better content faster. Generate ideas,
        improve your writing, and design layouts with simple prompts.
      </p>
    </div>
    <div class="@xl:grid-cols-3 mt-12 grid grid-cols-2 gap-6 text-sm">
      <div class="space-y-3 border-t pt-6">
        <Lightbulb class="text-muted-foreground size-4" />
        <p class="text-muted-foreground leading-5">
          <span class="text-foreground font-medium">Generate Ideas</span> Spark creativity
          with AI-powered content suggestions and inspiration.
        </p>
      </div>

      <div class="space-y-3 border-t pt-6">
        <Pencil class="text-muted-foreground size-4" />
        <p class="text-muted-foreground leading-5">
          <span class="text-foreground font-medium">Improve Writing</span> Enhance
          your text with smart editing suggestions and style refinements.
        </p>
      </div>

      <div class="space-y-3 border-t pt-6">
        <PencilRuler class="text-muted-foreground size-4" />
        <p class="text-muted-foreground leading-5">
          <span class="text-foreground font-medium">Design Layouts</span> Create
          visually appealing layouts that capture your audience's attention.
        </p>
      </div>
    </div>
  </div>
</section>
