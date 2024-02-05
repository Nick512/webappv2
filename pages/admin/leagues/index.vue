<template>
    <NavBar />
    <AdminButtons />
    <table v-if="mode != 'edit'" class="table table-striped table-hover w-75 mx-auto">
        <thead>
    <tr>
        <th scope="col">League ID</th>
        <th scope="col">League Name</th>
        <th scope="col">Number of Teams</th>
        <th scope="col">Edit</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="league in data.leagues" v-bind:key="league.name">
        <th scope="row">{{ league.id }}</th>
        <td> {{ league.name }}</td>
        <td>{{ league.numOfTeams }}</td>
            <td><NuxtLink :to="{ path: '/admin/leagues/editor', query: { league: league.name }}" ><button class="btn btn-success w-50 editButton">o</button></NuxtLink></td>
    </tr>
    </tbody>

    </table>

    <form v-if="mode == 'add'" class="w-75 mx-auto rounded">
        <div class="form-group w-75 p-2 mx-auto">
            <input v-model="newLeague.name" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of League">
        </div>
        <button @click="newLeagueSubmit(newLeague)" type="submit" class="btn btn-success">Add League</button>
    </form>

    <form v-if="mode == 'edit'" class="w-75 mx-auto rounded">
        <div class="form-group w-75 p-2 mx-auto">
            <input v-model="leagueEdit.name" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <button type="submit" class="btn btn-success">Update</button>
    </form>


    <div class="button-row w-50 mx-auto">
        <button @click="mode = 'add'" v-if="mode == 'view'" class="btn btn-success w-50 m-2">Add League</button>
    </div>
</template>

<script setup>

    let mode = ref('view')

    let { data } = await useFetch('/api/getLeagues')

    let newLeague = reactive({
        name: ''
    })

    const newLeagueSubmit = async(newLeague) => {
        const { data: responseData } = await useFetch('/api/newleague', {
            method: 'post',
            body: { name: newLeague.name }
        })

        newLeague = {
            name: ''
        }
    }

    
    const editView = (league) => {
                leagueEdit = league
               // this.$router.push({ path: `/admin/leagues/editor?league=`+league.name})
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