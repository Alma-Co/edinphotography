<script>
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
	import './styles.css';
	export const prerender = true;
	import "../app.css";
</script>

<div class="app">
	<Header />
	
	<main>
		<Navbar />
		<slot />
	</main>
	<footer>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
</style>
