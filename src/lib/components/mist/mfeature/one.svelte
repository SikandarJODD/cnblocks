<script lang="ts">
  import { Card } from "$lib/components/ui/card";
  import FeatureTable from "./feature-table.svelte";
</script>

<!-- Card Variant : soft  -->
<section class='[--color-primary:theme(color.indigo.500)] [--color-secondary:theme(color.indigo.100)] [--color-secondary-foreground:theme(color.indigo.600)] dark:[--color-primary:theme(color.indigo.400)] dark:[--color-secondary:theme(color.indigo.400)] dark:[--color-secondary-foreground:theme(color.indigo.500)]'>
  <div class="bg-muted/50 py-24">
    <div class="mx-auto w-full max-w-5xl px-6">
      <div>
        <h2 class="text-foreground text-4xl font-semibold">
          Effortless Task Management
        </h2>
        <p class="text-muted-foreground mb-12 mt-4 text-balance text-lg">
          Automate your tasks and workflows by connecting your favorite tools
          like Notion, Todoist, and more. AI-powered scheduling helps you stay
          on track and adapt to changing priorities.
        </p>
        <div class="bg-foreground/5 rounded-3xl p-6">
          <FeatureTable />
        </div>
      </div>

      <div
        class="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2"
      >
        <div>
          <h3 class="text-foreground text-xl font-semibold">
            Marketing Campaigns
          </h3>
          <p class="text-muted-foreground my-4 text-lg">
            Effortlessly plan and execute your marketing campaigns organized.
          </p>
          <Card variant="soft" class="aspect-video overflow-hidden px-6">
            <Card  class="h-full translate-y-6" />
          </Card>
        </div>
        <div>
          <h3 class="text-foreground text-xl font-semibold">
            AI Meeting Scheduler
          </h3>
          <p class="text-muted-foreground my-4 text-lg">
            Effortlessly book and manage your meetings. Stay on top of your
            schedule.
          </p>

          <Card variant="soft" class="aspect-video overflow-hidden">
            <Card  class="translate-6 h-full" />
          </Card>
        </div>
      </div>

      <blockquote
        class="before:bg-primary relative mt-12 max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full"
      >
        <p class="text-foreground text-lg">
          Wow, auto-generated pages are the kind of thing that you don't even
          know you need until you see it. It's like an AI-native CRM.
        </p>
        <footer class="mt-4 flex items-center gap-2">
          <cite>Méschac Irung</cite>
          <span aria-hidden="true" class="bg-foreground/15 size-1 rounded-full"
          ></span>
          <span class="text-muted-foreground">Creator</span>
        </footer>
      </blockquote>
    </div>
  </div>
</section>
