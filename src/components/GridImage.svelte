<script lang="ts">
    import Picture from './Picture.svelte';

    export let block;

    const imageRatio = 'border-white border-4 rounded-sm object-cover w-full'

    const { images, disposition } = block;	
    export let defaultModal: boolean;
    export let pictureId: string;
    export let openModal: (id:string) => void;

  
</script>

{#if disposition === "middle'"}
        {#each images as object, i}
            <Picture {openModal} 
                id={object.image.split('/').pop()?.split('.')[0]} 
                imageRatio={imageRatio} 
                containerClass={i=== 0 ? 'col-start-2 flex' : 'flex'} 
                src={object.image} 
                alt={object.imageAlt || null} 
            />
        {/each}
{:else if disposition === "line"}
        {#each images as object, i}
            <Picture 
                {openModal} 
                id={object.image.split('/').pop()?.split('.')[0]} 
                imageRatio={imageRatio} 
                containerClass={i=== 0 ? 'col-start-1 flex' : 'flex'} 
                src={object.image} 
                alt={object.imageAlt || null} 
            />
        {/each}
{:else if disposition === "right"}
        {#each images as object, i}
            <Picture 
                {openModal} 
                id={object.image.split('/').pop()?.split('.')[0]} 
                imageRatio={imageRatio} 
                containerClass={i=== 0 ? 'col-start-3 flex' : 'flex'} 
                src={object.image} 
                alt={object.imageAlt || null} 
            />
        {/each}
{:else if disposition === "left"}
        {#each images as object, i}
            <Picture {openModal} id={object.image.split('/').pop()?.split('.')[0]} imageRatio={imageRatio} containerClass={i=== 0 ? 'col-start-1 flex' : 'flex'} src={object.image} alt={object.imageAlt || null} />
        {/each}
{:else}
    {#each images as object}
            <Picture {openModal} id={object.image.split('/').pop()?.split('.')[0]} imageRatio={imageRatio} containerClass={'flex'} src={object.image} alt={object.imageAlt || null} />
    {/each}
{/if}

<style lang="postcss">
</style>
