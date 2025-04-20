<script lang="ts">
  const features = [
    {
      title: "1. Prototype",
      subtitle: "Build fast, test early",
      description:
        "Quickly spin up a working model with libraries for popular frameworks like React.",
    },
    {
      title: "2. Present",
      subtitle: "Showcase your vision",
      description:
        "Use intuitive plug & play features to prepare a live demo and deploy from our platform.",
    },
    {
      title: "3. Iterate",
      subtitle: "Refine and improve",
      description:
        "Continuously enhance your product by integrating with over a hundred tools.",
    },
    {
      title: "4. Deploy",
      subtitle: "Launch with confidence",
      description:
        "Deploy securely with encryption, ensuring data compliance and user consent.",
    },
  ];
</script>

<div class="mx-auto w-full max-w-6xl px-3 py-20">
  <dl class="grid grid-cols-4 gap-10">
    {#each features as item}
      <div class="col-span-full sm:col-span-2 lg:col-span-1">
        <span
          class="rounded-lg bg-blue-50/50 px-3 py-1.5 font-semibold leading-4 tracking-tighter shadow-sm shadow-blue-500/20 ring-1 ring-blue-200/20 dark:bg-blue-900/20 dark:ring-blue-800/30 sm:text-sm"
        >
          <span
            class="bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent dark:from-blue-200 dark:to-blue-400"
          >
            {item.title}
          </span>
        </span>
        <dt class="mt-6 font-semibold text-gray-900 dark:text-gray-50">
          {item.subtitle}
        </dt>
        <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-400">
          {item.description}
        </dd>
      </div>
    {/each}
  </dl>
</div>
