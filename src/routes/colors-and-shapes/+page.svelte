

<script lang="ts">

	interface Image {
	  image: string;
	  imageAlt: string | null;
	}

	interface ImagesBlock {
	  images: Image[];
	  disposition: string;
	}

	interface Data {
	  date: string;
	  title: string;
	  subtitle: string;
	  imagesBlock: ImagesBlock[];
	}

	import data from '$lib/data/colors-and-shapes.json';
	import GridImage from '../GridImage.svelte';
	const { imagesBlock } = data as Data;

</script>
<svelte:head>
	<title>Colors and shapes</title>
	<meta name="description" content="colors and shapes pictures" />
</svelte:head>
<!-- NORMAL : flex flex-row gap-5 flex-wrap -->
<section>
	<div class="grid grid-cols-4 gap-3">
	{#each imagesBlock as block}
		<GridImage {block} />
	{/each}
	</div>
</section>


<style>
	section {
		width: 100%;
		height: 100%;
	}

</style>