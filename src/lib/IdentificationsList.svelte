<script>
  import { onMount } from "svelte";
  import IdentificationCard from "./IdentificationCard.svelte";
  let { identifications } = $props();

  let filteredIdentifications = $state();

  function init() {
    let observationIds = [];
    // using code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
    filteredIdentifications = identifications?.filter((identification) => {
      const include = !observationIds.includes(identification.observation.id);
      observationIds.push(identification.observation.id);
      return include;
    });
  }

  onMount(init);
</script>

<div class="identifications-list">
  {#each filteredIdentifications as identification}
    <IdentificationCard {identification} />
  {/each}
</div>

<style>
  .identifications-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
    /* padding: 0 18px; */
    /* justify-items: center; */
    max-width: 800px;
    margin: 0 auto 32px auto;
    width: min-content;
  }

  @media (min-width: 700px) {
    .identifications-list {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
