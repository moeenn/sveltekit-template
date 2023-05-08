<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import InputError from '$lib/components/InputError.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';

	export let data;
	const { form: f, errors, constraints, enhance } = superForm(data.form);

	export let form
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div>
	<div class="py-4 rounded">
		<div class="flex justify-between">
			<h1 class="text-2xl mb-4 font-serif">Login</h1>
		</div>

		<ErrorMessage message={form?.error} />

		<form class="flex flex-col space-y-8" method="POST" use:enhance>
			<div class="space-y-5">
				<fieldset class="flex flex-col space-y-2">
					<label class="text-xs" for="email">Email</label>
					<input
						class="bg-gray-100 text-sm px-3 py-2 rounded"
						type="email"
						name="email"
						bind:value={$f.email}
						{...$constraints.email}
					/>
					<InputError message={$errors.email} />
				</fieldset>

				<fieldset class="flex flex-col space-y-2">
					<label for="password" class="text-xs">Password</label>
					<input
						class="bg-gray-100 text-sm px-3 py-2 rounded"
						name="password"
						type="password"
						bind:value={$f.password}
						{...$constraints.password}
					/>
					<InputError message={$errors.password} />
				</fieldset>
			</div>

			<button class="bg-blue-600 text-white text-sm px-3 py-2 rounded flex">
				<div class="mx-auto flex flex-row space-x-2">
					<span class="my-auto">Login</span>
				</div>
			</button>
		</form>
	</div>
</div>
