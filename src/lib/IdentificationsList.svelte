<script>
  import IdentificationCard from "./IdentificationCard.svelte";
  let { identifications } = $props();
</script>

{#each identifications as identification}
  <IdentificationCard {identification} />
{/each}
