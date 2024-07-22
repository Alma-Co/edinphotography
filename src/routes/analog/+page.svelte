

<script lang="ts">
	import data from '$lib/data/analog.json';
	import type { Data } from '$lib/models/types.svelte';

	const { components } = data as Data;
	"h-[100px] sm:h-[140px] md:h-[170px] lg:h-[200px] xl:h-[250px]"
	'object-contain w-full'
	const imageRatio = 'border-white border-4 rounded-sm object-cover w-full h-[100px] sm:h-[140px] md:h-[170px] lg:h-[250px] xl:h-[300px]'
</script>
<svelte:head>
	<title>Analog</title>
	<meta name="description" content="analog pictures" />
</svelte:head>

<section>
	<div class="flex flex-row gap-5 flex-wrap">
	 </div>
</section>


<style>
	section {
		width: 100%;
		height: 100%;
	}

</style>