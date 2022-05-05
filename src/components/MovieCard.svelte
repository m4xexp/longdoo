<script lang="ts">
	export let movie: any;
</script>

<div class="movie__card">
	<a sveltekit:prefetch sveltekit:noscroll href={`/movie/${movie.id}`}
		><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></a
	>
	<div class="description">
		<h2>{movie.title}</h2>
		<p>Released {movie.release_date}</p>
	</div>
</div>

<style scoped>
	img {
		width: 100%;
		height: 36vh;
		object-fit: cover;
		border-radius: 1rem;
		margin: 0 0 1rem 0;
	}

	h2 {
		font-size: 0.9rem;
	}

	p {
		font-size: 0.7rem;
	}

	.movie__card {
		display: flex;
		flex-direction: column;
		justify-self: space-around;
		padding: 1rem;
	}

	.description {
		height: 5vh;
	}
</style>
