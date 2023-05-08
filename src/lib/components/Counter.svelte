<script lang="ts">
let count: number = 0

const increment = () => ++count
const decrement = () => --count
</script>

<div class="flex my-4">
  <button
    class="text-sm bg-zinc-300 px-2 py-1 rounded-l"
    on:click={decrement}
  >
    -
  </button>
  <span class="text-xs px-2 py-1 bg-zinc-200">{count}</span>
  <button
    class="text-sm bg-zinc-300 px-2 py-1 rounded-r"
    on:click={increment}
  >
    +
  </button>
</div>