

<script lang="ts">

	import data from '$lib/data/colors-and-shapes.json';
	import type { Data } from '$lib/models/types.svelte';
	import GridImage from '../GridImage.svelte';
	const { components } = data as Data;

</script>
<svelte:head>
	<title>Colors and shapes</title>
	<meta name="description" content="colors and shapes pictures" />
</svelte:head>

<section>
	{#each components as component}
		{#if component.type === 'grid'}
			<div class="grid grid-cols-4 gap-3">
				{#each component.imagesBlock as block}
					<GridImage {block} />
				{/each}
			</div>
		{/if}
	{/each}
</section>


<style>
	section {
		width: 100%;
		height: 100%;
	}

</style>