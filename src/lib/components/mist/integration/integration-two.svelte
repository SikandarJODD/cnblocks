<script lang="ts">
  import Gemini from "../logos/Gemini.svelte";
  import GooglePaLM from "../logos/GooglePaLM.svelte";
  import Replit from "../logos/Replit.svelte";
  import MediaWiki from "../logos/MediaWiki.svelte";
  import MagicUI from "../logos/MagicUI.svelte";
  import VSCodium from "../logos/VSCodium.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<section>
  <div class="mx-auto max-w-5xl px-6 py-8">
    <div class="space-y-6 text-center">
      <h2 class="text-foreground text-2xl font-semibold">
        Integrate with your favorite tools :
      </h2>
      <div
        class="*:bg-foreground/5 mx-auto flex max-w-xl flex-wrap justify-center gap-0.5 *:rounded *:p-6 *:first:rounded-l-xl *:last:rounded-r-xl"
      >
        <div>
          <Gemini class="m-auto size-8" />
        </div>
        <div>
          <GooglePaLM class="m-auto size-8" />
        </div>
        <div>
          <Replit class="m-auto size-8" />
        </div>
        <div>
          <MediaWiki class="m-auto size-8" />
        </div>
        <div>
          <MagicUI class="m-auto size-8" />
        </div>
        <div>
          <VSCodium class="m-auto size-8" />
        </div>
      </div>
      <Button variant="outline">More Integrations</Button>
    </div>
  </div>
</section>
