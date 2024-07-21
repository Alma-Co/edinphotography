
<script lang="ts">
	import { IconMenu, IconX } from '@tabler/icons-svelte';
	import { page } from '$app/stores';
	import camera from '$lib/images/camera-love.svg';

	$: open = false;
</script>

<header class="relative flex flex-col items-center pb-12">
	<div class="flex flex-col gap-2 justify-center items-center text-xl mt-8">
		<h1 class="text-3xl md:text-5xl font-medium">
			Ed in photography 
		</h1>
		<div class="flex items-center gap-2">
		<span>--</span> 
		<img class="w-[15px] sm:w-[20px]" src={camera} alt="Camera" />
		<span>--</span> 
		</div>
	</div>

	<nav class={open ? 'nav-open' : 'hidden'}>

		<ul>
		<li aria-current={$page.url.pathname === '/colors-and-shapes' ? 'page' : undefined}>
			<a on:click={() => open = false} href="/colors-and-shapes">Colors and shapes</a>
		</li>
		<li aria-current={$page.url.pathname === '/places-and-moments' ? 'page' : undefined}>
			<a on:click={() => open = false} href="/places-and-moments">Places and moments</a>
		</li>
		<li aria-current={$page.url.pathname === '/analog' ? 'page' : undefined}>
			<a on:click={() => open = false} href="/analog">Analog</a>
		</li>
	</ul>
	</nav>

	<button on:click={() => open = !open}>
	{#if open}
        <IconX size={25} stroke={1} />
    {:else}
        <IconMenu size={25} stroke={1} />
    {/if}
	</button>
</header>

<style>

	h1 {
		font-family: 'Reenie Beanie';
		/* font-size: 2rem; */
		/* font-weight: 500; */
	}

	nav {
		display: none;
	}

	.nav-open {
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
	}


	ul {
		position: fixed;
		top: 0;
		left: 0;
		gap: 2rem;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		list-style: none;
		padding: 0 1rem;
		background-color: black;
		width: 100%;
		height: 30%;
		z-index: 5;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: var(--color-text);
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 0.12rem;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	nav a:hover {
		background-color: white;
		color: black;
		text-decoration: none;
	}

	button {
		right: 0.5rem;
		top: 1.2rem;
		position: absolute;
		background: none;
		border: none;
		color: var(--color-text);
		cursor: pointer;
		z-index: 10;
	}

	@media (min-width: 600px) {
		nav {
			display: flex;
		}

		button {
			display: none;
		}

		ul {
			position: static;
			gap: 2rem;
			padding-top: 2rem;
			margin: 0;
			list-style: none;
			flex-direction: row;
			background-color: transparent;
			z-index: 0;
		}
	}

	@media (min-width: 905px) {

		ul {
			gap: 3.5rem;
		}

		nav a {
			font-size: 1.2rem;
			padding: 0 0.5rem;
		}
	}
</style>

