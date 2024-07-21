<script lang="ts">
	import './styles.css';
	import "../app.css";
	import Header from '../components/Header.svelte';
	import Autolayer from '../components/Autolayer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="app">
	<Autolayer>
		<!-- <Header /> -->
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
