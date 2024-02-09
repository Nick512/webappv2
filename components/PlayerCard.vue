<template>
    <div class="card-holder col-sm-4 mb-3">
    <div class="card mx-auto">
  <div class="card-body">
    <h5 class="card-title mb-2">{{fullName}}</h5>
    <h5 class="card-title mb-2">#{{player.number}}</h5>
    <h5 class="card-title mb-2">{{player.plusMinus}}</h5>
    <div class="button-group" >
  <button @click="$emit('edit')" type="button" class="btn btn-success">Edit</button>
  <button @click="$emit('delete')" type="button" class="btn btn-success">Delete</button>
</div>
  </div>
</div>
</div>

</template>

<script setup>
  const { player } = defineProps(['player'])
  const fullName = `${player.firstName} ${player.lastName}`

  //Edit Name of Player

  
</script>

<style scoped>
    .card-title {
        text-align: center;
    }
    .button-group {
        text-align: center;
    }
</style>