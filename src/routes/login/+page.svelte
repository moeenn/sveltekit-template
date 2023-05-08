<script lang="ts">
	import Loader from '$lib/components/Loader.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
	import LoginForm, { type Form } from './LoginForm.svelte';

	const handleSubmit = (form: Form) => console.log(form);
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div>
	<div class="py-4 rounded">
		<div class="flex justify-between">
			<h1 class="text-2xl mb-4 font-serif">Login</h1>
			<Loader size="small" />
		</div>

		<ErrorMessage message="Some Error message" />
		<LoginForm {handleSubmit} />
	</div>
</div>
