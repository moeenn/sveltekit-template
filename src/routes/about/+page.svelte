<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="py-5">
	<h1 class="text-2xl mb-2 font-serif">About Us</h1>
	{#each data.users as user}
		<div class="flex flex-row space-x-5 text-sm py-2">
			<div class="flex-1">{user.name}</div>
			<div>{user.email}</div>
		</div>
	{/each}
</div>
