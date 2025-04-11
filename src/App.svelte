<script>
  import SearchForm from "./lib/SearchForm.svelte";
  import LoadingSpinner from "./lib/LoadingSpinner.svelte";
  import PlaceList from "./lib/PlaceList.svelte";
  import IdentificationsList from "./lib/IdentificationsList.svelte";
  import {
    searchPlaces,
    getIdentifications,
  } from "./lib/external-services.mjs";

  let placesPromise = $state();
  let identificationsPromise = $state();

  async function search(query) {
    identificationsPromise = null;
    placesPromise = searchPlaces(query).then((data) => {
      console.log(data);
      return data;
    });
  }

  async function selectPlace(place) {
    identificationsPromise = getIdentifications(place).then((data) => {
      console.log(data);
      return data;
    });
  }
</script>

<h1>iNaturalist</h1>

<SearchForm {search} />
{#await placesPromise}
  <LoadingSpinner />
{:then places}
  <PlaceList {places} {selectPlace} />
  {#await identificationsPromise}
    <LoadingSpinner />
  {:then identifications}
    <IdentificationsList {identifications} />
  {/await}
{/await}

<style>
  h1 {
    text-align: center;
    color: var(--primary-color);
  }
</style>
