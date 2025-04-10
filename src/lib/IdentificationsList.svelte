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

{#each filteredIdentifications as identification}
  <IdentificationCard {identification} />
{/each}
