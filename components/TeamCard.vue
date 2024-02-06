<template>
    <div class="card-holder col-sm-4 mb-3">
    <div class="card mx-auto">
  <div class="card-body">
    <h5 class="card-title mb-4">{{team.team}}</h5>
    <div class="button-group" >
  <button type="button" class="btn btn-success">Edit</button>
  <button type="button" class="btn btn-success">Delete</button>
</div>
  </div>
</div>
</div>

</template>

<script setup>
  const team = defineProps(['team'])
</script>

<style scoped>
    .card-title {
        text-align: center;
    }
    .button-group {
        text-align: center;
    }
</style>