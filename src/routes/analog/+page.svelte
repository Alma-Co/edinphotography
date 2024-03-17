

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

	import data from '$lib/data/analog.json';
	import Picture from '../Picture.svelte';

	const { imagesBlock } = data as Data;
	const { images } = imagesBlock[0];
	"h-[100px] sm:h-[140px] md:h-[170px] lg:h-[200px] xl:h-[250px]"
	'object-contain w-full'
	const imageRatio = 'border-white border-4 rounded-sm object-cover w-full h-[100px] sm:h-[140px] md:h-[170px] lg:h-[250px] xl:h-[300px]'
</script>
<svelte:head>
	<title>Analog</title>
	<meta name="description" content="analog pictures" />
</svelte:head>
<!-- NORMAL : flex flex-row gap-5 flex-wrap -->
<section>
	<div class="flex flex-row gap-5 flex-wrap">
		{#each images as object}
			<Picture imageRatio={imageRatio} containerClass={''} src={object.image} alt={object.imageAlt || null} />
		{/each}
	 </div>
</section>


<style>
	section {
		width: 100%;
		height: 100%;
	}

</style>