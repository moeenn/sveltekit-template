<script lang="ts">
export let data
</script>

<div class="bg-gray-100 py-5 rounded">

  <div class="p-4">
    <div>
      <span>ID</span>
      <span>{data.user.id}</span>
    </div>
    <div>
      <span>Email</span>
      <span>{data.user.email}</span>
    </div>
  </div>
</div>
