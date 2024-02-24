<script>
	import image1 from '$lib/images/test1.jpg';
	import image2 from '$lib/images/test2.jpg';
	import image3 from '$lib/images/test3.jpg';
	import image4 from '$lib/images/test4.jpg';
	import image5 from '$lib/images/test5.jpg';
	import Picture from '../Picture.svelte';
	const images = [
		{
			picture: image1,
			alt: "alt 1",
			description: "here is a blablabla"
		},
		{
			picture: image2,
			alt: 'alt 2',
			description: "here is a blablabla"
		},
		{
			picture: image3,
			alt: 'alt 3',
			description: "here is a blablabla"
		},
		{
			picture: image4,
			alt: 'alt 4',
			description: "here is a blablabla"
		},
		{
			picture: image5,
			alt: 'alt 5',
			description: "here is a blablabla"
		},
	]
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<div class="flex flex-row gap-8 flex-wrap">
		{#each images as object}
			<Picture src={object.picture} alt={object.alt} />
		{/each}
	</div>
</section>


<style>
	section {
		width: 100%;
		height: 100%;
	}

</style>