<script>
  import PhotosViewer from "./PhotosViewer.svelte";
  let { identification } = $props();
</script>

{#if identification.observation.photos?.length > 0}
  <PhotosViewer
    photos={identification.observation.photos}
    name={identification.observation.taxon.name}
  />
{/if}
<p>{identification.observation.taxon.name}</p>
