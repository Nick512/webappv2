<template>
    <NavBar />
    <div class="team-title mx-auto">
        <div class='title-content fw-bold'><h2>{{ team.title }}</h2></div>
    </div>
    <div class="record-box rounded w-75 mx-auto">
        <div class="record fw-bold"><h1>RECORD:<br>{{ team.record }}</h1></div>
    </div>
    <div class="team-title mx-auto">
        <div class='title-content fw-bold'><h3>Players:</h3></div>
    </div>
    <table class="table table-striped table-hover w-75 mx-auto">
        <thead>
            <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">+/-</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="player in team.players" v-bind:key="player.name">
            <td scope="row">{{ player.firstname }}</td>
            <td> {{ player.lastname }}</td>
            <td>{{ player.plusminus }}</td>
            </tr>
        </tbody>
    </table>
    <div class="team-title mx-auto">
        <div class='title-content fw-bold'><h3>Schedule</h3></div>
    </div>
</template>
    
    <script>
    export default {
      name: 'Team',
      data () {
        return {
          team: {
            title: 'Lakers',
            record: '10-7',
            players: [ {
                firstname: 'player',
                lastname: '1',
                plusminus: '+2'
                },
                {
                firstname: 'player',
                lastname: '2',
                plusminus: '0'
                },
                {
                firstname: 'player',
                lastname: '3',
                plusminus: '-2'
                }
            ],
            scheudle: [
                {

                }
            ]
          },
          path: '/team/'
        }
      }
    }
    </script>
    
    <style scoped>
    .team-title {
      margin-top: 20px;
      background-color: rgb(216, 215, 215)
    }
    .title-content {
        padding: 10px;
    }
    .record {
        padding-top: 20px
    }
    </style>
    