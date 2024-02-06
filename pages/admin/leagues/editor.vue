<template>
    <NavBar />
    <h2>{{ league }}</h2>
    <div class="w-50 top-form mx-auto p-3">
  <div class="row mb-3">
    <label for="inputName" class="col-sm-2 col-form-label">League Name:</label>
    <div class="col-sm-10">
      <input v-model="league" type="string" class="form-control" id="inputName">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">League Enabled:</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="league-enable" id="gridRadios1" value="option1">
        <label class="form-check-label" for="league-enable">
          Disabled
        </label>
      </div>
    </div>
  </fieldset>
  <button class="btn btn-success">Update</button>
  <button @click="deleteLeague" class="btn btn-success delete-button">Delete</button>
</div>

<h3>Teams</h3>
<div class="button-holder w-50 mx-auto">
<button v-if="addTeamView == false" @click="addTeamView = true" class="btn btn-success mb-3">Add Team</button>
<div v-if="addTeamView == true">
  <div class="mb-3">
    <div v-if="error.minLength == true" class="alert alert-danger" role="alert">
          Team name must have 3 or more characters
    </div> 
    <input type="text" class="form-control" id="newTeam" v-model="newTeam.name" placeholder="New Team Name">
  </div>
</div>
<button v-if="addTeamView == true" @click="createTeam" class="btn btn-success mb-3">Create</button>
</div>



<div v-if="data" class="row card-holder w-75 mx-auto"><TeamCard @delete="deleteTeam(team)" v-for="team in data.teams" :bind:key="team.name" :team="team.name" /></div>

    


</template>

<script setup>
  const router = useRouter()
  const league = useRoute().query.league

  
  //Fetch teams
  let { data, refresh } = await useFetch(`/api/getteams?league=${league}`)
  
  const leagueEdit = async () => {

  }

  const deleteLeague = async () => {
    const { data: responseData } = await $fetch('/api/deleteleague', {
            method: 'post',
            body: { name: league }
        })

        router.push({path: '/admin/leagues'})
  }

  
  //Add Team Logic
  let addTeamView = ref(false)

  let error = ref({
    minLength: false
  })

  let newTeam = reactive({
    name: '',
    leagueName: league
  })

  const createTeam = async() => {
    if (newTeam.name.length >= 3) {
      const { data: responseData } = await $fetch('/api/newteam', {
                  method: 'post',
                  body: { team: newTeam }
              })
    } else {
        error.value.minLength = true
    }
    refresh()
    addTeamView.value = false
  }

  //Delete Team Logic
  const deleteTeam = async(team) => {
    const { data: responseData } = await $fetch('/api/deleteteam', {
                  method: 'post',
                  body: { team: team.name }
              })
              refresh()
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

</style>