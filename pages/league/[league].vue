<template>
    <NavBar />
    <HomeBody :title="league" :cards="data.leagues" :path="path"/> 
</template>

<script setup>

const path = '/team/'

const route = useRoute()

const league = route.params.league

const { data } = await useFetch('/api/getLeagues')

</script>
<style scoped>
  a {
    color: #42b983;
  }
</style>
