<script lang="ts">
	import '$lib/styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data
</script>

<Navbar links={data.links} />
<main class="container mx-auto px-4">
	<slot />
</main>
