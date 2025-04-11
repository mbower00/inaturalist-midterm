<script>
  import SearchForm from "./lib/SearchForm.svelte";
  import LoadingSpinner from "./lib/LoadingSpinner.svelte";
  import PlaceList from "./lib/PlaceList.svelte";
  import IdentificationsList from "./lib/IdentificationsList.svelte";
  import { selectedPlace } from "./lib/state.svelte";
  import {
    searchPlaces,
    getIdentifications,
  } from "./lib/external-services.mjs";

  let placesPromise = $state();
  let identificationsPromise = $state();
  let afterDateSelection = $state(null);
  let beforeDateSelection = $state(null);

  async function search(query) {
    selectedPlace.id = null;
    identificationsPromise = null;
    placesPromise = searchPlaces(query).then((data) => {
      console.log(data);
      return data;
    });
  }

  async function selectPlace(placeId) {
    if (placeId === null) {
      return;
    }
    selectedPlace.id = placeId;
    identificationsPromise = getIdentifications(
      placeId,
      afterDateSelection,
      beforeDateSelection
    ).then((data) => {
      console.log(data);
      return data;
    });
  }
</script>

<h1>iNaturalist</h1>

<SearchForm {search} />
<h3 class="observed">observed</h3>
<div class="after-date-wrapper">
  <label for="after-date-input">on or after</label>
  <input
    class="date-input"
    bind:value={afterDateSelection}
    type="date"
    oninput={() => {
      selectPlace(selectedPlace.id);
    }}
    id="after-date-input"
  />
</div>
<div class="before-date-wrapper">
  <label for="before-date-input">on or before</label>
  <input
    class="date-input"
    oninput={() => {
      selectPlace(selectedPlace.id);
    }}
    bind:value={beforeDateSelection}
    type="date"
    id="before-date-input"
  />
</div>
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
  .date-input {
    font-size: medium;
    padding: 5px;
    display: block;
  }
  .observed {
    margin: 20px 0 0 0;
    text-align: center;
    color: #333;
  }
  .after-date-wrapper,
  .before-date-wrapper {
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      color: #333;
      font-size: small;
    }
  }
</style>
