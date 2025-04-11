<script>
  import PlaceCard from "./PlaceCard.svelte";
  let { places, selectPlace } = $props();
</script>

<div class="place-list">
  {#each places as place, i}
    <PlaceCard
      {place}
      selectPlace={(id) => {
        selectPlace(id);
      }}
    />
  {/each}
</div>

<style>
  .place-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    justify-content: center;
    margin: 30px auto 30px auto;
    gap: 18px;
  }
</style>
