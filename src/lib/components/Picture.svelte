<script lang="ts">
	export let src;
	export let alt;
	export let imageRatio;
	export let containerClass;
	export let id;
	export let openModal: (id: string) => void;

	const open = (id: string) => {
		openModal(id);
		console.log(id);
	};
</script>

<div class={containerClass}>
	<img on:click={() => open(id)} class={imageRatio} {src} {alt} />
</div>

<style lang="postcss">
	img {
		max-width: none;
		cursor: pointer;
	}

	@media (prefers-reduced-motion: no-preference) {
		img {
			opacity: 0;
			scale: 0.8;
			animation: fade-in linear forwards;
			animation-timeline: view();
			animation-range: 50px 32%;
		}

		@keyframes fade-in {
			to {
				opacity: 1;
				scale: 1;
			}
		}
	}
</style>
