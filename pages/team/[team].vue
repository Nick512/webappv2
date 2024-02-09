<template>
    <NavBar />
    <div class="team-title mx-auto">
        <div class='title-content fw-bold'><h2 class="team-title-text">{{ team.name }}</h2></div>
    </div>
    <div class="record-box rounded w-75 mx-auto">
        <div class="record fw-bold"><h1>RECORD:<br>{{ team.record }}</h1></div>
    </div>
    <div class="team-title mx-auto">
        <div class='title-content fw-bold'><h3 class="team-title-text">Players:</h3></div>
    </div>
    <table class="table table-striped table-hover w-75 mx-auto">
        <thead>
            <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Number</th>
            <th scope="col">+/-</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="player in team.players" v-bind:key="player.id">
            <td scope="row">{{ player.firstName }}</td>
            <td> {{ player.lastName }}</td>
            <td>{{ player.number }}</td>
            <td>{{ player.plusMinus }}</td>
            </tr>
        </tbody>
    </table>
</template>
    
<script setup>

    //Get Team Info
    const route = useRoute()
    
    const { data } = await useFetch(`/api/getteaminfo?team=${route.params.team}`)
    let team = data.value.team[0]
    console.log(team)

    //Create record
    team.record = `${team.wins}/${team.loses}`
    

</script>
        
    
    <style scoped>
    .team-title {
      margin-top: 20px;
      background-color: rgb(216, 215, 215)
    }
    .title-content {
        padding: 10px;
    }
    .team-title-text {
        text-align: center !important;
    }
    .record {
        padding-top: 20px;
        text-align: center;
    }
    </style>
    