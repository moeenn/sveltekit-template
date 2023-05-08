<script lang="ts">
	export let message: string | string[] | undefined;
</script>

{#if message}
	<p class="text-xs text-red-700">{message}</p>
{/if}
