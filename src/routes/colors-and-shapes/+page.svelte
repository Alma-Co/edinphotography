

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
	import Picture from '../Picture.svelte';

	const { imagesBlock } = data as Data;
	const { images } = imagesBlock[0];
	"h-[100px] sm:h-[140px] md:h-[170px] lg:h-[200px] xl:h-[250px]"
	'object-contain w-full'
	const imageRatio = 'border-white border-4 rounded-sm object-cover w-full'
</script>
<svelte:head>
	<title>Colors and shapes</title>
	<meta name="description" content="About this app" />
</svelte:head>
<!-- NORMAL : flex flex-row gap-5 flex-wrap -->
<section>
	<div class="grid grid-rows-3 grid-cols-4 gap-3">
		<!-- {#each images as object} -->
			<Picture imageRatio={imageRatio} containerClass={"col-start-1 col-end-2 row-start-1 row-end-2"} src={images[0].image} alt={images[0].imageAlt || null} />
			<Picture imageRatio={imageRatio} containerClass={"col-start-2 col-end-3 row-start-1 row-end-2 flex"} src={images[4].image} alt={images[1].imageAlt || null} />
			<Picture imageRatio={imageRatio} containerClass={"col-start-1 col-end-2 row-start-2 row-end-3"} src={images[2].image} alt={images[2].imageAlt || null} />
			<Picture imageRatio={imageRatio} containerClass={"col-start-2 col-end-3 row-start-2 row-end-3"} src={images[1].image} alt={images[3].imageAlt || null} />
			<Picture imageRatio={imageRatio} containerClass={"col-start-3 col-end-4 row-start-2 row-end-3"} src={images[1].image} alt={images[0].imageAlt || null} />
			<Picture imageRatio={imageRatio} containerClass={"col-start-4 col-end-5 row-start-2 row-end-3"} src={images[3].image} alt={images[1].imageAlt || null} />
			<Picture imageRatio={imageRatio} containerClass={"col-start-3 col-end-4 row-start-3 row-end-4"} src={images[0].image} alt={images[2].imageAlt || null} />
			<Picture imageRatio={imageRatio} containerClass={"col-start-4 col-end-4 row-start-3 row-end-4"} src={images[2].image} alt={images[3].imageAlt || null} />

	 </div>
	 <div class="grid grid-rows-2 grid-cols-4 gap-3">
		<!-- {#each images as object} -->
		
		<!-- {/each} -->
	 </div>
</section>


<style>
	section {
		width: 100%;
		height: 100%;
	}

</style>