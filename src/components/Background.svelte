<script lang="ts">
  import { getBackgroundImage } from "../lib/bgImage"
  import BackgroundAttribute from "./BackgroundAttribute.svelte"
</script>

{#await getBackgroundImage() then bgImage}
  <div class="bg-img" style="background-image: url({bgImage.imageURL});">
    <BackgroundAttribute {bgImage} />
  </div>
{/await}

<style>
  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    pointer-events: none;
    z-index: -1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
</style>
