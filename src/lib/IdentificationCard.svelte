<script>
  import PhotosViewer from "./PhotosViewer.svelte";
  let { identification } = $props();
</script>

<div class="identification-card">
  {#if identification.observation.photos?.length > 0}
    <PhotosViewer
      photos={identification.observation.photos}
      name={identification.observation.taxon.name}
    />
  {/if}
  <h3>{identification.observation.taxon.name}</h3>
  <span class="observed">{identification.observation.observed_on}</span>
</div>

<style>
  .identification-card {
    position: relative;
    display: flex;
    align-items: center;
    box-shadow: #aaa 0 2px 4px;
    border-radius: 10px;
    padding: 18px 24px;
    gap: 24px;
    max-width: 226px;
  }
  .observed {
    position: absolute;
    font-size: xx-small;
    bottom: 3px;
    right: 6px;
    color: #555;
  }
  /* using code from https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens */
  h3 {
    padding: 0;
    margin: 0;
    font-weight: 500;
    color: #333;
    font-size: medium;
    hyphens: auto;
  }

  @media (min-width: 700px) {
    .identification-card {
      max-width: 260px;
    }
    h3 {
      font-size: larger;
    }
  }
</style>
