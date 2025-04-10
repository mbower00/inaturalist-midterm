<script>
  let searchQuery = $state("");
  let { search } = $props();

  function submitSearch(event) {
    event.preventDefault();
    event.target.reset();
    search(searchQuery);
  }
</script>

<section>
  <form onsubmit={submitSearch}>
    <!-- using code from https://www.w3schools.com/html/html_form_attributes.asp -->
    <input
      id="searchBar"
      placeholder="Search Places"
      type="text"
      bind:value={searchQuery}
    />
    <button>
      <!-- code copied from https://fonts.google.com/icons?selected=Material+Symbols+Outlined:search:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%231f1f1f 
      material-icons class added from https://developers.google.com/fonts/docs/material_icons -->
      <span class="material-icons material-symbols-outlined"> search </span>
    </button>
  </form>
</section>

<style>
  section {
    margin: 0 auto;
    width: fit-content;
  }
  form {
    position: relative;
    margin: 50px;
    width: fit-content;
  }
  input {
    font-size: x-large;
    padding: 6px;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    position: absolute;
    right: 4px;
    top: 9px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    :hover {
      color: var(--primary-color);
    }
  }
</style>
