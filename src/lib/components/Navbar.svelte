<script lang="ts">
	const links = [
		{ id: 0, text: 'Login', href: '/login' },
		{ id: 2, text: 'About', href: '/about' },
		{ id: 3, text: 'Profile', href: '/profile' }
	];
</script>

<nav class="bg-blue-600 text-white py-4">
	<div class="container mx-auto px-4">
		<div class="flex flex-row justify-between">
			<a href="/">
				<h1 class="text-lg my-auto">Logo</h1>
			</a>

			<div class="flex flex-row space-x-3 my-auto">
				{#each links as link}
					<a class="px-3 py-2 text-xs rounded hover:bg-blue-500" href={link.href}>
						{link.text}
					</a>
				{/each}
			</div>
		</div>
	</div>
</nav>
