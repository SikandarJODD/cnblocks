<script lang="ts">
  import Gemini from "../mlogos/Gemini.svelte";
  import GooglePaLM from "../mlogos/GooglePaLM.svelte";
  import Replit from "../mlogos/Replit.svelte";
  import MediaWiki from "../mlogos/MediaWiki.svelte";
  import MagicUI from "../mlogos/MagicUI.svelte";
  import VSCodium from "../mlogos/VSCodium.svelte";
</script>

<section>
  <div class="mx-auto max-w-5xl px-6 py-8">
    <div class="flex flex-wrap items-center gap-4">
      <p class="text-muted-foreground font-medium">Integrate with :</p>
      <div class="max-w-2xs flex flex-wrap gap-3 divide-x *:pr-3">
        <div>
          <Gemini class="m-auto size-5" />
        </div>
        <div>
          <GooglePaLM class="m-auto size-5" />
        </div>
        <div>
          <Replit class="m-auto size-5" />
        </div>
        <div>
          <MediaWiki class="m-auto size-5" />
        </div>
        <div>
          <MagicUI class="m-auto size-5" />
        </div>
        <div>
          <VSCodium class="m-auto size-5" />
        </div>
      </div>
    </div>
  </div>
</section>
