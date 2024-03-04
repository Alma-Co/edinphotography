<script>
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
	import './styles.css';
	import "../app.css";
	export const prerender = true;
	import Autolayer from './Autolayer.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<Autolayer>
		<Header />
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer/>
	</Autolayer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
	}

	main {
		display: flex;
		flex-direction: row;
		width: 100%;
	}
</style>
