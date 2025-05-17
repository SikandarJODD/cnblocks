<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";

  import Layout from "@lucide/svelte/icons/layout";
  import Target from "@lucide/svelte/icons/target";
  import CalendarCheck from "@lucide/svelte/icons/calendar-check";
  import Sparkles from "@lucide/svelte/icons/sparkles";
</script>

<section
  class="[--color-primary:theme(color.indigo.500)] [--color-secondary:theme(color.indigo.100)] [--color-secondary-foreground:theme(color.indigo.600)]"
>
  <div class="py-24">
    <div class="mx-auto w-full max-w-5xl px-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card variant="soft" class="col-span-full overflow-hidden pl-6 pt-6">
          <Layout class="text-primary size-5" />
          <h3 class="text-foreground mt-5 text-lg font-semibold">
            AI Code Generation
          </h3>
          <p class="text-muted-foreground mt-3 max-w-xl text-balance">
            Our advanced AI models transform natural language into
            production-ready code, streamlining development workflows and
            enabling faster iteration.
          </p>
          <div class="mask-b-from-95% -ml-2 -mt-2 mr-0.5 pl-2 pt-2">
            <div
              class="bg-background rounded-tl-(--radius) relative mx-auto mt-8 h-96 overflow-hidden border border-transparent shadow ring-1"
            >
              <img
                src="/mist/tailark-3.png"
                alt="app screen"
                width="2880"
                height="1842"
                class="object-top-left h-full object-cover"
              />
            </div>
          </div>
        </Card>
        <Card variant="soft" class="p-6">
          <Target class="text-primary size-5" />
          <h3 class="text-foreground mt-5 text-lg font-semibold">
            AI Code Generation
          </h3>
          <p class="text-muted-foreground mt-3 text-balance">
            Our advanced AI models transform natural language into
            production-ready code.
          </p>
        </Card>

        <Card variant="soft" class="p-6">
          <CalendarCheck class="text-primary size-5" />
          <h3 class="text-foreground mt-5 text-lg font-semibold">
            Intelligent Code Review
          </h3>
          <p class="text-muted-foreground mt-3 text-balance">
            Our AI analyzes your code for bugs, security issues, and
            optimization opportunities.
          </p>
        </Card>
        <Card variant="soft" class="p-6">
          <Sparkles class="text-primary size-5" />
          <h3 class="text-foreground mt-5 text-lg font-semibold">
            Contextual AI Assistant
          </h3>
          <p class="text-muted-foreground mt-3 text-balance">
            A personalized AI companion that understands your codebase and helps
            solve complex...
          </p>
        </Card>
      </div>
    </div>
  </div>
</section>
