<script>
	import github from '$lib/images/github.svg';
</script>

<header>
	<span/>
	<h1>
  		Ed in photography
	</h1>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
		font-family: 'Reenie Beanie', cursive;
		font-size: 40px;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
</style>
