<script lang="ts">
	import data from '$lib/data/colors-and-shapes.json';
	import type { Data, ImagesBlock } from '$lib/models/types.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import GridImage from '$lib/components/GridImage.svelte';
	import Picture from '$lib/components/Picture.svelte';
	const { components } = data as Data;

	const allImages = components.flatMap((component) =>
		component.imagesBlock.flatMap((block) =>
			block.images.map((image, index) => {
				const imageName = image.image.split('/').pop()?.split('.')[0];
				return {
					src: image.image,
					alt: image.imageAlt || imageName,
					id: imageName || `${index}`,
					description: image.description || ''
				};
			})
		)
	);

	let defaultModal = false;
	let pictureId = '';
	const openModal = (id: string) => {
		pictureId = id;
		defaultModal = true;
	};
</script>

<svelte:head>
	<title>Colors and shapes</title>
	<meta name="description" content="colors and shapes pictures" />
</svelte:head>

<section>
	{#each components as component}
		{#if component.type === 'grid'}
			<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
				{#each component.imagesBlock as block}
					<GridImage {openModal} bind:pictureId bind:defaultModal {block} />
				{/each}
			</div>
			{#if component.spacer && component.spacer.padding === 'small'}
				<div class="py-8"></div>
			{/if}
			{#if component.spacer && component.spacer.padding === 'large'}
				<div class="py-14"></div>
			{/if}
		{/if}
		{#if component.type === 'flex'}
			<div class="flex justify-center flex-wrap gap-3">
				{#each component.imagesBlock as { images }, i}
					{#each images as image, j}
						<Picture
							{openModal}
							id={image.image.split('/').pop()?.split('.')[0]}
							imageRatio={'border-white border-4 rounded-sm object-cover w-[350px]'}
							containerClass={'flex'}
							src={image.image}
							alt={image.imageAlt || null}
						/>
					{/each}
				{/each}
			</div>
			{#if component.spacer && component.spacer.padding === 'small'}
				<div class="py-8"></div>
			{/if}
			{#if component.spacer && component.spacer.padding === 'large'}
				<div class="py-14"></div>
			{/if}
		{/if}
	{/each}
	<Gallery gallery={allImages} bind:defaultModal bind:pictureId />
</section>

<style>
	section {
		width: 100%;
		height: 100%;
	}
</style>
