<script lang="ts">
	export let message: string | undefined;
</script>

{#if message}
	<div class="bg-red-200 p-3 mb-5 rounded">
		<p class="text-xs text-red-900">{message}</p>
	</div>
{/if}
