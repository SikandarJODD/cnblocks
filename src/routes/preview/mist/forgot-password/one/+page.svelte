<script lang="ts">
  import { all_mists_forgot_password } from "$lib/all_mists/forgot_password";

  const block = all_mists_forgot_password.find((item) => item.slug === "one");

  if (!block) {
    throw new Error("Missing preview block for one in all_mists_forgot_password");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
