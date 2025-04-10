<script>
  let { place, selectPlace } = $props();
</script>

<button
  onclick={() => {
    selectPlace(place.id);
  }}
>
  {place.name}
</button>
