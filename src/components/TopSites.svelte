<script lang="ts">
  import { topSites } from "webextension-polyfill"
  import TopSite from "./TopSite.svelte"

  const getTopSites = () => {
    return topSites.get({
      includeFavicon: true,
      limit: 10,
      newtab: true,
    })
  }
</script>

<section class="top-sites">
  {#await getTopSites() then sites}
    {#each sites as site}
      <TopSite {site} />
    {/each}
  {/await}
</section>

<style>
  .top-sites {
    list-style: none;
    display: grid;
    max-width: 75vw;
    width: fit-content;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    grid-gap: 0.5rem;
  }
</style>
