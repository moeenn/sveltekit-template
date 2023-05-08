<script lang="ts">
	import '$lib/styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<main class="container mx-auto px-4">
	<slot />
</main>
