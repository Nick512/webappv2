<template>
    <NavBar />
    <h2>{{ team.name }}</h2>
    <div class="w-50 top-form mx-auto p-3">
  <div class="row mb-3">
    <label for="inputName" class="col-sm-2 col-form-label">Team Name:</label>
    <div class="col-sm-10">
      <input v-model="newName" type="string" class="form-control" id="inputName">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Team Enabled:</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="league-enable" id="gridRadios1" v-model="status">
        <label class="form-check-label" for="league-enable">
          Disabled
        </label>
      </div>
    </div>
  </fieldset>
  <button @click="editTeam" class="btn btn-success">Update</button>
</div>

<h3>Players</h3>
<div class="button-holder w-50 mx-auto">
<button @click="addPlayerView = true" v-if="addPlayerView == false" class="btn btn-success mb-3">Add Player</button>
<div class='form' v-if="addPlayerView == true">
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
  <button @click="createPlayer" class="btn btn-success mb-3">Create</button>
</div>

</div>



<div class="row card-holder w-75 mx-auto"><PlayerCard v-for="player in team.players" :bind:key="player.name" :player="player" @delete="deletePlayer(player)" @update="updatePlayer"/></div>

    


</template>

<script setup>
    const route = useRoute()

    //Fetch Team info
    
    const { data, refresh } = await useFetch(`/api/getteaminfo?team=${route.params.team}`)

    let team = reactive(data.value.team[0])

    //Set team enable status
    let status = ref(team.disabled)

    //Update Team Name / Disable Team

    let newName = ref(team.name)

    const editTeam = async() => {
    const { error } = await $fetch('/api/editteam', {
            method: 'post',
            body: { id: route.params.team, name: team.name, disabled: team.disabled, newName: newName.value, status: status.value }
        })}

        //Create Player
        let newPlayer = reactive({
            firstName: '',
            lastName: '',
            number: '',
            plusMinus: '',
            teamName: team.name
        })

        let addPlayerView = ref(false)

        const createPlayer = async() => {
            
            //API Call
            const { data: responseData } = await $fetch('/api/newplayer', {
                method: 'post',
                body: { player: newPlayer }
            })  
            //Reset new player object
            newPlayer.firstName = ''
            newPlayer.lastName = ''
            newPlayer.number = ''
            newPlayer.plusMinus = ''

            //Set view back to normal
           location.reload()
            
  
        }

        //Delete Player Logic

        const deletePlayer = async(player) => {
          const { data: responseData } = await $fetch('/api/deleteplayer', {
                method: 'post',
                body: { player: player }
            })
            
            location.reload() 
        }
    
        //Update Player logic
        const updatePlayer = async(updatedPlayer) => {
          const { data: responseData } = await $fetch('/api/updateplayer', {
                method: 'post',
                body: { player: updatedPlayer }
            })
        }
</script>

<style scoped>
    h2, h3 {
        text-align: center;
        margin-top: 20px;
        padding-bottom: 20px;
    }
    .top-form {
        border: 1px solid black
    }
    .button-holder {
        text-align: center;
        margin-bottom: 20px
    }

    .delete-button {
      margin-left: 10px
    }

    .form {
        border: 1px solid black
    }

</style>