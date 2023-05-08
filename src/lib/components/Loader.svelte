<script lang="ts">
	export let size: 'small' | 'medium' = 'small';

	$: style = size === 'small' ? 'h-4 w-4' : 'h-6 w-6';
</script>

<div class="flex items-center">
	<div
		class="animate-spin border border-2 border-blue-600 border-l-blue-200 rounded-full {style}"
	/>
</div>
