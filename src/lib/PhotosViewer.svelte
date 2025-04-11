<script>
  let { photos, name } = $props();
  let currentPhotoIndex = $state(0);
  // using code from https://svelte.dev/docs/svelte/$derived
  let currentPhotoURL = $derived(photos[currentPhotoIndex].url);
  let nextPhotoURL = $derived(photos[currentPhotoIndex + 1]?.url);
  let prevPhotoURL = $derived(photos[currentPhotoIndex - 1]?.url);
  let isPrev = $derived(currentPhotoIndex - 1 >= 0);
  let isNext = $derived(currentPhotoIndex + 1 < photos.length);

  function prevHandler() {
    currentPhotoIndex -= 1;
  }
  function nextHandler() {
    currentPhotoIndex += 1;
  }
</script>

<div class="photos-viewer">
  {#if isPrev}
    <button class="prev" onclick={prevHandler}>
      <!-- code copied from https://fonts.google.com/icons?selected=Material+Symbols+Outlined:chevron_left:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%231f1f1f
        material-icons class added from https://developers.google.com/fonts/docs/material_icons -->
      <span class="material-icons material-symbols-outlined">
        chevron_left
      </span>
    </button>
  {/if}
  <img src={currentPhotoURL} alt="photo of {name}" />
  {#if isNext}
    <button class="next" onclick={nextHandler}>
      <!-- code copied from https://fonts.google.com/icons?selected=Material+Symbols+Outlined:chevron_right:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%231f1f1f
          material-icons class added from https://developers.google.com/fonts/docs/material_icons -->
      <span class="material-icons material-symbols-outlined">
        chevron_right
      </span>
    </button>
  {/if}
</div>

<style>
  .photos-viewer {
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
    img {
      border-radius: 10px;
      box-shadow: #888 0 2px 4px;
    }
    button {
      position: absolute;
      background: none;
      border: none;
      font-family: monospace;
      padding: 0;
      font-weight: bold;
      cursor: pointer;
      color: #888;
      height: 24px;
      &:hover {
        color: var(--primary-color);
      }
    }
    .prev {
      left: -24px;
    }
    .next {
      right: -24px;
    }
  }
</style>
