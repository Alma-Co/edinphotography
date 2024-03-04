<script>
// @ts-nocheck
      export let src;
      export let alt;
      export let imageRatio;
      export let containerClass;
</script>

<div class={containerClass}>
    <img class={imageRatio} {src} {alt} />
</div>

<style lang="postcss">
    img {
        max-width: none;
    }
</style>