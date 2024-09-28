<script lang="ts">
	import { IconChevronRight, IconChevronLeft, IconX } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	export let gallery: { src: string; alt?: string; id: string; description?: string }[];
	export let pictureId: string;
	export let defaultModal: boolean;

	let startX = 0;
	let endX = 0;

	$: getPositionInArrayById = gallery.find((image) => image.id === pictureId);
	$: getIndexInArrayById = gallery.findIndex((image) => image.id === pictureId);

	const handleTouchStart = (event: any) => {
		startX = event.touches[0].clientX;
	};

	const handleTouchMove = (event: any) => {
		endX = event.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (startX - endX > 50) {
			// Swipe left
			if (getIndexInArrayById < gallery.length - 1) {
				pictureId = gallery[getIndexInArrayById + 1].id;
			}
		} else if (endX - startX > 50) {
			// Swipe right
			if (getIndexInArrayById > 0) {
				pictureId = gallery[getIndexInArrayById - 1].id;
			}
		}
	};

	onMount(() => {
		const modalContent = document.querySelector('.modal-content');

		if (!modalContent) return;
		modalContent.addEventListener('touchstart', handleTouchStart);
		modalContent.addEventListener('touchmove', handleTouchMove);
		modalContent.addEventListener('touchend', handleTouchEnd);

		return () => {
			modalContent.removeEventListener('touchstart', handleTouchStart);
			modalContent.removeEventListener('touchmove', handleTouchMove);
			modalContent.removeEventListener('touchend', handleTouchEnd);
		};
	});
</script>

<div class={defaultModal ? 'modal-open' : 'modal'}>
	<div class="modal-content">
		{#if getPositionInArrayById}
			{#if gallery[getIndexInArrayById].id !== gallery[0].id}
				<button
					on:click={() => (pictureId = gallery[getIndexInArrayById - 1].id)}
					class="buttons previous"
				>
					<IconChevronLeft size={60} stroke={1} />
				</button>
			{/if}
			<img
				class="modal-image"
				src={gallery[getIndexInArrayById].src}
				alt={gallery[getIndexInArrayById].alt}
			/>
			<p>{gallery[getIndexInArrayById].description}</p>
			{#if gallery[getIndexInArrayById].id !== gallery[gallery.length - 1].id}
				<button
					on:click={() => (pictureId = gallery[getIndexInArrayById + 1].id)}
					class="buttons next"
				>
					<IconChevronRight size={60} stroke={1} />
				</button>
			{/if}
		{/if}

		<button on:click={() => (defaultModal = false)} class="close">
			<IconX size={30} stroke={2} /></button
		>
	</div>
</div>

<style>
	.modal {
		display: none;
	}

	.modal-open {
		display: block;
		position: fixed;
		z-index: 10;
		left: 0;
		top: 0px;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.644);
	}

	.modal-content {
		background-color: rgb(0, 0, 0);
		margin: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		position: relative;
	}

	.modal-image {
		max-width: 85%;
		object-fit: contain;
	}

	.close {
		color: #625e5e;
		position: absolute;
		top: 10px;
		right: 10px;
		border: none;
		background: none;
		cursor: pointer;
	}

	.close:hover,
	.close:focus {
		color: #c2bebe;
		text-decoration: none;
		cursor: pointer;
	}

	.buttons {
		display: none;
		color: #625e5e;
		position: absolute;
		top: 50%;
		border: none;
		background: none;
		cursor: pointer;
		&.next {
			right: 30px;
		}
		&.previous {
			left: 30px;
		}
	}

	.buttons:hover {
		color: #c2bebe;
		cursor: pointer;
	}

	p {
		position: absolute;
		font-size: 10px;
		bottom: 40px;
		left: 40px;
	}

	@media (min-width: 905px) {
		.buttons {
			display: block;
		}

		.modal-open {
			padding-top: 60px;
		}
		.modal-content {
			position: relative;
			width: 100%;
			height: 97%;
			padding: 20px;
		}

		.close {
			top: 20px;
			right: 40px;
		}

		p {
			position: absolute;
			bottom: 20px;
			right: 20px;
		}
	}
</style>
