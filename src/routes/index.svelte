<script context="module">
	export const load = async () => {
		const res =
			await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5a795ebdafcf3f9747aadffdf14def0f&language=en-US&page=1
        `);

		const data = await res.json();
		if (res.ok) {
			return {
				props: {
					popular: data.results
				}
			};
		}
	};
</script>

<script lang="ts">
	import global from '../styles/global.css';
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovie from '../components/SearchMovie.svelte';
	import { fly } from 'svelte/transition';
	export let popular: any;
</script>

<section in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovie />
	<PopularMovies {popular} />
</section>
