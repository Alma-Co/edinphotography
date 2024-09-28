<script lang="ts">
	import './styles.css';
	import '../app.css';
	import Autolayer from '$lib/components/Autolayer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="app">
	<Autolayer>
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
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
