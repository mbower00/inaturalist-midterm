<script>
  import PlaceCard from "./PlaceCard.svelte";
  let { places, selectPlace } = $props();
</script>

{#each places as place}
  <PlaceCard {place} {selectPlace} />
{/each}
