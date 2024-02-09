<template>
<div class="card-holder col-sm-4 mb-3">
  <div class="card mx-auto">


    <div v-if="editView == false" class="card-body">
      <h5 class="card-title mb-2">{{fullName}}</h5>
      <h5 class="card-title mb-2">#{{player.number}}</h5>
      <h5 class="card-title mb-2">{{player.plusMinus}}</h5>
      <div class="button-group" >
          <button @click="editView == true" type="button" class="btn btn-success">Edit</button>
          <button @click="$emit('delete')" type="button" class="btn btn-success">Delete</button>
      </div>
    </div>

    <div class='form' v-if="editView == true">
  <div class="mb-3">
    <div class="row m-4">
        <div class="col">
            <label class="form-label">First Name:</label>
            <input type="text" class="form-control" placeholder="First name" aria-label="First name" v-model="player.firstName">
        </div>
        <div class="col">
            <label class="form-label">Last Name:</label>
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" v-model="player.lastName"> 
        </div>

    <div class="row mt-3">
        <div class="col-12">
            <label class="form-label">Number:</label>
            <input type="text" class="form-control w-50 mx-auto" placeholder="number" aria-label="number" v-model="player.number"> 
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-12">
            <label class="form-label">+/-</label>
            <input type="text" class="form-control w-50 mx-auto" placeholder="+/-" aria-label="plusMinus" v-model="player.plusMinus"> 
        </div>
      </div>
    </div>
  </div>

<div class="button-holder col-12">
    <button class="btn btn-success mb-3 w-23 mx-auto">Update</button>
</div>

</div>



  </div>
</div>

</template>

<script setup>
  const { player } = defineProps(['player'])
  const fullName = `${player.firstName} ${player.lastName}`
  let editView = ref(true)

  //Edit Name of Player
 

  
</script>

<style scoped>
    .card-title {
        text-align: center;
    }
    .button-group, .button-holder {
        text-align: center !important;
    }

</style>