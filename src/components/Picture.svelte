<script lang="ts">
      export let src;
      export let alt;
      export let imageRatio;
      export let containerClass;
      export let id;
      export let openModal: (id:string) => void;

      const open = (id:string) => {
        openModal(id);
        console.log(id);
      }
</script>

<div class={containerClass}>
    <img on:click={() => (open(id))} class ={imageRatio} {src} {alt} />
</div>

<style lang="postcss">
    img {
        max-width: none;
        cursor:pointer;
    }
</style>