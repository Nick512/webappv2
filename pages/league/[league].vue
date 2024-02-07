<template>
    <NavBar />
    <HomeBody :title="league" :cards="data.teams" :path="path"/> 
</template>

<script setup>

//Get Teams
const path = '/team/'
const route = useRoute()
const league = route.params.league
const { data } = await useFetch(`/api/teams/${league}`)



</script>
<style scoped>
  a {
    color: #42b983;
  }
</style>
