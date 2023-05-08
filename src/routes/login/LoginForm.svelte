<script lang="ts" context="module">
	export type Form = {
		email: string;
		password: string;
	};
</script>

<script lang="ts">
	export let handleSubmit: (form: Form) => void;
	let form: Form = {
		email: '',
		password: ''
	};
</script>

<form class="flex flex-col space-y-8" on:submit|preventDefault={() => handleSubmit(form)}>
	<div class="space-y-5">
		<fieldset class="flex flex-col space-y-2">
			<label class="text-xs" for="email">Email</label>
			<input
				class="bg-gray-100 text-sm px-3 py-2 rounded"
				type="email"
				name="email"
				required
				bind:value={form.email}
			/>
		</fieldset>

		<fieldset class="flex flex-col space-y-2">
			<label for="password" class="text-xs">Password</label>
			<input
				class="bg-gray-100 text-sm px-3 py-2 rounded"
				name="password"
				type="password"
				required
				min="8"
				bind:value={form.password}
			/>
		</fieldset>
	</div>

	<button class="bg-blue-600 text-white text-sm px-3 py-2 rounded flex">
		<div class="mx-auto flex flex-row space-x-2">
			<span class="my-auto">Login</span>
		</div>
	</button>
</form>
