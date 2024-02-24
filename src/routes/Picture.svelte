<script>
// @ts-nocheck
      export let src;
      export let alt;
</script>

<div class="p-2 bg-white">
    <img class="xs:h-[100px] sm:h-[140px] md:h-[170px] lg:h-[200px] xl:h-[250px]" {src} {alt} />
</div>

<style lang="postcss">
    img {
        max-width: none;
    }
</style>