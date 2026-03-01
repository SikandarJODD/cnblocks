<script lang="ts">
  import { forgot_password } from "$lib/all_blocks/forgot-password";

  const block = forgot_password.find((item) => item.title === "two");

  if (!block) {
    throw new Error("Missing preview block for two in forgot_password");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
