<script lang="ts">
	import '$lib/styles/global.css';
	import { navigating } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import Loader from '$lib/components/Loader.svelte';

	export let data;
</script>

<Navbar links={data.links} />
<main class="container mx-auto px-4">
	<slot />

	{#if $navigating}
		<div class="fixed bottom-5 right-5 z-10">
			<Loader size="small" />
		</div>
	{/if}
</main>
