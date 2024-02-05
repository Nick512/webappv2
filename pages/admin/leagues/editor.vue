<template>
    <NavBar />
    <h2>{{ this.$route.query.league }}</h2>
    <form class="w-50 top-form mx-auto p-3">
  <div class="row mb-3">
    <label for="inputName" class="col-sm-2 col-form-label">League Name:</label>
    <div class="col-sm-10">
      <input v-model="this.$route.query.league" type="string" class="form-control" id="inputName">
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
</form>

<h3>Teams</h3>
<div class="button-holder w-50 mx-auto">
<button v-if="addTeamView == false" @click="this.addTeamView = true" class="btn btn-success mb-3">Add Team</button>
<form v-if="addTeamView == true">
  <div class="mb-3">
    <input type="text" class="form-control" id="newTeam" v-model="this.newTeam.name" placeholder="New Team Name">
  </div>
</form>
<button v-if="addTeamView == true" @click="createTeam" class="btn btn-success mb-3">Create</button>
</div>



<div class="row card-holder w-75 mx-auto"><TeamCard v-for="team in this.teams" :bind:key="team.id" :team="team" /></div>

    


</template>

<script setup >
  const deleteLeague = async (league) => {
    const { data: responseData } = await useFetch('/api/deleteleague', {
            method: 'post',
            body: { name: this.$route.query.league }
        })
  }
</script>

<script>
    export default {
    name: 'LeagueEditor',
    data () {
        return {
            teams: [
            {id: 1, name: 'Lakers'}, {id: 2, name: 'Raptors'}, {id: 3, name: 'Pacers'}, {id: 4, name: 'Bucks'}, {id: 5, name: 'Pistons'}
          ],
          newTeam: {
            name: ''
          },
          addTeamView: false 
        }
    },
    methods: {
        createTeam () {
            this.teams.push(newTeam)
            this.addTeamView = false
            this.newTeam = {
                name: ''
            }
        }
    }
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