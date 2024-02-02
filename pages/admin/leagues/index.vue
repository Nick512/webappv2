<template>
    <NavBar />
    <AdminButtons />
    <table v-if="this.mode != 'edit'" class="table table-striped table-hover w-75 mx-auto">
        <thead>
    <tr>
        <th scope="col">League ID</th>
        <th scope="col">League Name</th>
        <th scope="col">Number of Teams</th>
        <th scope="col">Edit</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="league in leagues" v-bind:key="league.name">
        <th scope="row">{{ league.id }}</th>
        <td> {{ league.name }}</td>
        <td>{{ league.teams }}</td>
            <td><NuxtLink :to="{ path: '/admin/leagues/editor', query: { league: league.name }}" ><button class="btn btn-success w-50 editButton">o</button></NuxtLink></td>
    </tr>
    </tbody>

    </table>

    <form v-if="this.mode == 'add'" class="w-75 mx-auto rounded">
        <div class="form-group w-75 p-2 mx-auto">
            <input v-model="newLeague.name" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of League">
        </div>
        <button @click="newLeagueSubmit" type="submit" class="btn btn-success">Add League</button>
    </form>

    <form v-if="this.mode == 'edit'" class="w-75 mx-auto rounded">
        <div class="form-group w-75 p-2 mx-auto">
            <input v-model="this.leagueEdit.name" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <button type="submit" class="btn btn-success">Update</button>
    </form>


    <div class="button-row w-50 mx-auto">
        <button @click="this.mode = 'add'" v-if="this.mode == 'view'" class="btn btn-success w-50 m-2">Add League</button>
    </div>
</template>

<script>

    export default {
        name: 'LeagueView',
        data () {
            return {
                mode: 'view',
                newLeague: {
                    leagueID: '',
                    name: '',
                    teams: 0
                },
                leagueEdit: {
                    name: ''
                },
                leagues: [
    { 
      id: 1,
      name: 'NBA', teams: 30 },
    { 
      id: 2,
      name: 'NFL', teams: 2 },
      { 
      id: 3,
      name: 'MLB', teams: 10 },
      { 
      id: 4,
      name: 'OHL', teams: 15 },
      { 
      id: 5,
      name: 'MLS', teams: 4 }
    ]
            }
        },
        methods: {
            newLeagueSubmit () {
                this.leagues.push(this.newLeague)
                this.newLeague = {
                name: '',
                teams: 0
            }
            this.mode = 'view'
            },

            editView (league) {
                this.leagueEdit = league
                this.$router.push({ path: `/admin/leagues/editor?league=`+league.name})
            }
        }
    }
</script>

<style scoped>
    table {
        margin-top: 30px;
        border: 1px solid rgb(151, 144, 144)
      }

      .editButton {
        border-radius: 50%
      }
</style>