<script context="module" lang="ts">
	export const load = async ({ params }: any) => {
		let movieDetail = [];
		const res =
			await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=5a795ebdafcf3f9747aadffdf14def0f&language=en-US
        `);

		movieDetail = await res.json();

		return {
			props: {
				movieDetail
			}
		};
	};
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';

	export let movieDetail: any;
</script>

<div
	class="movie__details"
	in:fly={{
		y: 50,
		duration: 500,
		delay: 500
	}}
>
	<div class="img__container">
		<img
			src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
			alt={movieDetail.title}
		/>
	</div>
	<div class="text__container">
		<h1>{movieDetail.title}</h1>
		<p class="overview">{movieDetail.overview}</p>
		<p>
			<span>Release date:</span>
			{movieDetail.release_date} <br />
			<span>Budget:</span>
			{movieDetail.budget} <br />
			<span>Rating:</span>
			{movieDetail.vote_average} <br />
			<span>Runtime:</span>
			{movieDetail.runtime} <br />
		</p>
	</div>
</div>

<style scoped>
	img {
		width: 100%;
		border-radius: 1rem;
	}

	h1 {
		padding: 1rem 0rem 2rem;
	}

	p {
		padding: 1rem 0rem;
	}

	.img__container {
		width: 100%;
	}

	.movie__details {
		margin: 2rem 20%;
	}

	span {
		font-weight: bold;
	}
</style>
