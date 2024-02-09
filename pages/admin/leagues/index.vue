<template>
    <NavBar />
    <AdminButtons />
    <table class="table table-striped table-hover w-75 mx-auto">
        <thead>
    <tr>
        <th scope="col">League ID</th>
        <th scope="col">League Name</th>
        <th scope="col">Number of Teams</th>
        <th scope="col">Disabled</th>
        <th scope="col">Edit</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="league in leagues" v-bind:key="league.name">
        <th scope="row">{{ league.id }}</th>
        <td> {{ league.name }}</td>
        <td>{{ league.numOfTeams }}</td>
        <td>{{ league.disabled }}</td>
        <td><NuxtLink :to="{ path: '/admin/leagues/editor', query: { league: league.name, disabled: league.disabled }}" ><button class="btn btn-success w-50 editButton">o</button></NuxtLink></td>
    </tr>
    </tbody>

    </table>
    <div class="w-75 mx-auto rounded">
        <div class="form-group w-75 p-2 mx-auto">
            <div v-if="error.minlength == true" class="alert alert-danger" role="alert">
                League name must have 3 or more characters
            </div>            
            <input v-model="newLeague.name" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of League">
        </div>
        <div class="button-holder">
            <button @click="newLeagueSubmit(newLeague)" class="btn btn-success">Add League</button>
        </div>
    </div>
</template>

<script setup>

const router = useRouter()

    let { data } = await useFetch('/api/getLeagues')

    let leagues = data.value.leagues

    let error = ref({
        minlength: false
    })

    let newLeague = reactive({
        name: ''
    })

    const newLeagueSubmit = async(newLeague) => {
        if (newLeague.name.length >= 3) {
            try {
            const { data: responseData } = await $fetch('/api/newleague', {
                method: 'post',
                body: { name: newLeague.name }
            })}
            catch(error) {
                throw error
            }
            location.reload()
        newLeague.name = ''
        } else {
            error.value.minlength = true
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

      .button-holder {
        text-align: center !important;
        padding-top: 10px
      }
</style>