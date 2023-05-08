<script lang="ts">
export let size: "small" | "medium" = "small" 
</script>

<div class="flex items-center">
  <div
    class="animate-spin border border-2 border-blue-600 border-l-blue-200 rounded-full"
    class:small="{ size === 'small' }"
    class:medium="{ size === 'medium' }"
  ></div>
</div>

<style>
  .small {
    @apply h-4 w-4;
  }

  .medium {
    @apply h-6 w-6;
  }
</style>