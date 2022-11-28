<script lang="ts">
  import type { TopSites } from "webextension-polyfill"
  import UnknownFavicon from "../assets/circle-question-solid.svg?component"

  export let site: TopSites.MostVisitedURL
</script>

<a href={site.url} class="top-site">
  <div class="top-site__favicon">
    {#if site.favicon}
      <img src={site.favicon} alt="" />
    {:else}
      <UnknownFavicon
        width="32px"
        height="32px"
        fill="rgba(102, 102, 102, 0.75)"
      />
    {/if}
  </div>
  <div class="top-site__title">
    <span>{site.title}</span>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    color: white;
  }

  .top-site {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 12px 8px;
    border-radius: 8px;
    opacity: 0.8;
  }
  .top-site:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .top-site__favicon {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px var(--text-shadow-color);
  }

  .top-site__favicon img {
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
  }

  .top-site__title {
    padding: 8px 2px 0;
    display: flex;
    align-items: center;
    max-width: 5rem;
  }

  .top-site__title span {
    font-family: sans-serif;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-shadow: 1px 1px var(--text-shadow-color);
    width: 100%;
  }
</style>
