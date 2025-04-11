<script>
  let { place, selectPlace, isActive } = $props();
</script>

<button
  onclick={() => {
    selectPlace(place.id);
  }}
  class={isActive ? "active" : ""}
>
  {place.name}
</button>

<style>
  button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: #aaa 0 1px 2px;
    transition: all ease 0.2s;
    background-color: #eee;
    font-size: medium;
    font-weight: 500;
    &:hover {
      box-shadow: #aaa 0 2px 5px;
      transform: translateY(-2px);
    }
    &:active {
      box-shadow: #aaa 0 1px 4px;
      transform: translateY(0px);
    }
  }
  .active {
    background-color: var(--primary-color);
    color: white;
  }
</style>
