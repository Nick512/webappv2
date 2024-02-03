<template>
    <NavBar />
    <HomeBody :title="league" :cards="data" :path="path"/> 
</template>

<script setup>

const path = '/team/'

const route = useRoute()

const league = route.params.league

const { data } = await useFetch(`/api/teams/${league}`)

console.log(data.team)

</script>
<style scoped>
  a {
    color: #42b983;
  }
</style>
