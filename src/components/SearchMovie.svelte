<script>
	import { goto } from '$app/navigation';

	let searchInput = '';
	let active = false;

	const handleSubmit = () => goto(`/search/${searchInput}`);
</script>

<form class="search" on:submit|preventDefault={handleSubmit}>
	<label for="search__movie">Search Movie</label>
	<input bind:value={searchInput} name="search__movie" type="text" placeholder="Search..." />

	{#if searchInput}
		<button>Search</button>
	{/if}
</form>
