<script lang="ts">
  import { Card } from "$lib/components/ui/card";
</script>

<section>
  <div class="bg-muted/50 py-24">
    <div class="mx-auto max-w-5xl px-6">
      <div>
        <h2 class="text-foreground text-4xl font-semibold">
          Effortless Task Management
        </h2>
        <p class="text-muted-foreground mb-12 mt-4 text-balance text-lg">
          Automate your tasks and workflows by connecting your favorite tools
          like Notion, Todoist, and more. AI-powered scheduling helps you stay
          on track and adapt to changing priorities.
        </p>
      </div>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
        <div class="space-y-4">
          <Card variant="soft" class="aspect-video overflow-hidden px-6">
            <Card  class="h-full translate-y-6" />
          </Card>
          <div class="sm:max-w-sm">
            <h3 class="text-foreground text-xl font-semibold">
              Marketing Campaigns
            </h3>
            <p class="text-muted-foreground my-4 text-lg">
              Effortlessly book and manage your meetings. Stay on top of your
              schedule.
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <Card variant="soft" class="aspect-video overflow-hidden p-6">
            <Card class="h-full" />
          </Card>
          <div class="sm:max-w-sm">
            <h3 class="text-foreground text-xl font-semibold">
              AI Meeting Scheduler
            </h3>
            <p class="text-muted-foreground my-4 text-lg">
              Effortlessly book and manage your meetings. Stay on top of your
              schedule.
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <Card variant="soft" class="aspect-video overflow-hidden">
            <Card class="translate-6 h-full" />
          </Card>
          <div class="sm:max-w-sm">
            <h3 class="text-foreground text-xl font-semibold">
              AI Meeting Scheduler
            </h3>
            <p class="text-muted-foreground my-4 text-lg">
              Effortlessly book and manage your meetings. Stay on top of your
              schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
