<template>
<div class="card-holder col-sm-4 mb-3">
  <div class="card mx-auto">


    <div v-if="editView == false" class="card-body">
      <h5 class="card-title mb-3">{{fullName}}</h5>
      <h5 class="card-title mb-3">#{{player.number}}</h5>
      <h5 class="card-title mb-3">{{player.plusMinus}}</h5>
      <div class="button-group" >
          <button @click="editView = true" type="button" class="btn btn-success">Edit</button>
          <button @click="$emit('delete')" type="button" class="btn btn-success">Delete</button>
      </div>
    </div>

    <div v-if="editView == true" class='form'>
  <div class="mb-3">
    <div class="row m-4">
        <div class="col">
            
            <input type="text" class="form-control" placeholder="First name" aria-label="First name" v-model="newPlayer.firstName">
        </div>
        <div class="col">
            
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" v-model="newPlayer.lastName"> 
        </div>

    <div class="row mt-3">
        <div class="col-12">
            
            <input type="text" class="form-control w-50 mx-auto" placeholder="number" aria-label="number" v-model="newPlayer.number"> 
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-12">
            
            <input type="text" class="form-control w-50 mx-auto" placeholder="+/-" aria-label="plusMinus" v-model="newPlayer.plusMinus"> 
        </div>
      </div>
    </div>
  </div>

  <div class="button-group" >
          <button @click="updateButton" type="button" class="btn btn-success">Update</button>
          <button @click="editView = false" type="button" class="btn btn-success">Back</button>
      </div>

</div>



  </div>
</div>

</template>

<script setup>
  const { player } = defineProps(['player'])
  const emit = defineEmits(['update'])

  const newPlayer = player
  const fullName = `${player.firstName} ${player.lastName}`
  let editView = ref(false)

  const updateButton = () => {
    
    console.log(player)
    console.log(newPlayer)
    if (player != newPlayer) {
      emit('update', player)
    } 
    editView.value = false
    
  }


  
</script>

<style scoped>
    .card-title {
        text-align: center;
    }
    .button-group, .button-holder {
        text-align: center !important;
    }

</style>