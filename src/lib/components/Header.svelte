<script lang="ts">
	import lulu from '$lib/images/lulu.svg';
	import Navbar from './Navbar.svelte';
</script>

<header class="relative flex flex-col items-center pb-12">
	<div class="flex flex-col justify-center items-center md:gap-2 text-xl mt-8">
		<a href="/">
			<img class="w-[60px] sm:w-[100px]" src={lulu} alt="Camera" />
		</a>
		<h1 class="text-1xl md:text-3xl font-medium">Ed in photography</h1>
	</div>

	<Navbar />
</header>

<style>
	h1 {
		font-family: 'Reenie Beanie';
		/* font-size: 2rem; */
		/* font-weight: 500; */
	}
</style>
