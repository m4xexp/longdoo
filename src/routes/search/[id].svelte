<script context="module" lang="ts">
	export const load = async ({ params }: any) => {
		const res =
			await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5a795ebdafcf3f9747aadffdf14def0f&language=en-US&query=${params.id}&page=1&include_adult=false
        `);

		const data = await res.json();

		console.log(data);

		if (res.ok) {
			return {
				props: {
					searchedMovie: data.results
				}
			};
		}
	};
</script>

<script lang="ts">
	import MovieCard from '../../components/MovieCard.svelte';

	export let searchedMovie: any;
</script>

<div class="searched__movie">
	{#each searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style scoped>
	.searched__movie {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
		height: 40vh;
	}
</style>
