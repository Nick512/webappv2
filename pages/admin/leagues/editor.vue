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
<form v-if="addTeamView == true">
  <div class="mb-3">
    <input type="text" class="form-control" id="newTeam" v-model="newTeam.name" placeholder="New Team Name">
  </div>
</form>
<button v-if="addTeamView == true" @click="createTeam" class="btn btn-success mb-3">Create</button>
</div>



<div class="row card-holder w-75 mx-auto"><TeamCard v-for="team in data.teams" :bind:key="team.name" :team="team.name" /></div>

    


</template>

<script setup>

  const router = useRouter()

  const league = useRoute().query.league

  let { data } = await useFetch(`/api/getteams?league=${league}`)

  const leagueEdit = async () => {

  }

  const deleteLeague = async () => {
    const { data: responseData } = await $fetch('/api/deleteleague', {
            method: 'post',
            body: { name: league }
        })

        router.push({path: '/admin/leagues'})
  }

  


  let addTeamView = false

  let newTeam = {
    name: ''
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