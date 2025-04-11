<script>
  import PlaceCard from "./PlaceCard.svelte";
  let { places, selectPlace } = $props();

  let activePlace = $state(null);
  function activatePlace(i) {
    activePlace = i;
  }
</script>

<div class="place-list">
  {#each places as place, i}
    <PlaceCard
      isActive={activePlace === i}
      {place}
      selectPlace={(id) => {
        selectPlace(id);
        activatePlace(i);
      }}
    />
  {/each}
</div>

<style>
  .place-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    /* padding: 0 25px; */
    margin: 30px auto 30px auto;
    gap: 18px;
  }
</style>
