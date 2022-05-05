<script lang="ts">
	import MovieCard from '../components/MovieCard.svelte';

	export let popular: any;
</script>

<section>
	<h3>Popular movies</h3>
	<div class="popular__movies">
		{#each popular as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</section>

<style>
	h3 {
		padding: 0 1rem;
	}

	.popular__movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
</style>
