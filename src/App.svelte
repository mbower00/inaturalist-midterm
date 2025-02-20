<script>
  import SearchForm from "./lib/SearchForm.svelte";
  import LoadingSpinner from "./lib/LoadingSpinner.svelte";
  import {searchPlaces} from "./lib/external-services.mjs"

  let placesPromise = $state()
  
  async function search(query) {
    placesPromise = searchPlaces(query)
  }
</script>

<SearchForm {search}/>
<LoadingSpinner />
{#await placesPromise}
  <LoadingSpinner />
{:then places } 
  {#each places as place}
    <p>{place.name}</p>
  {/each}
{/await}