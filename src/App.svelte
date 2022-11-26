<script lang="ts">
  import Background from "./components/Background.svelte"
  import TopSites from "./components/TopSites.svelte"
</script>

<main>
  <Background />
  <TopSites />
</main>

<style>
  main {
    padding: 8px;
    box-sizing: border-box;
    width: 100vw;
    height: 97vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
</style>
