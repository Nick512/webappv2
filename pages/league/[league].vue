<template>
    <NavBar />
    <HomeBody :title="$route.params.league" :cards="teams" :path="path"/> 
</template>
    
    <script>
    export default {
      name: 'Home',
  
      data () {
        return {
          teams: [
            {id: 1, name: 'Lakers'}, {id: 2, name: 'Raptors'}, {id: 3, name: 'Pacers'}, {id: 4, name: 'Bucks'}, {id: 5, name: 'Pistons'}
          ],
          path: '/team/'
        }
      }
    }
    </script>
    <style scoped>
    a {
      color: #42b983;
    }
    </style>
