<script lang="ts">
  import type { Image } from "../lib/bgImage"

  export let bgImage: Image
</script>

{#if bgImage}
  <div class="bg-attribute">
    {#if bgImage.location}
      <div class="bg-attribute__location">
        <i class="fa-regular fa-location-dot" />
        {bgImage.location}
      </div>
    {/if}
    <div class="bg-attribute__links">
      Photo by <a href={bgImage.user.profileLink}>{bgImage.user.name}</a> on
      <a href={bgImage.imageLink}>Unsplash</a>
    </div>
  </div>
{/if}

<style>
  .bg-attribute {
    max-width: 20vw;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 14px;
    font-family: sans-serif;
    text-shadow: 1px 1px var(--text-shadow-color);
  }

  .bg-attribute__location {
    margin-left: 2rem;
    margin-right: 2rem;
    border-bottom: solid 1px;
  }

  .bg-attribute__links {
    margin: 0.5rem 2rem;
  }

  .bg-attribute__links a {
    color: white;
    pointer-events: initial;
  }

  .bg-attribute__links a:hover {
    color: #ccc;
  }
</style>
