<template>
    <NavBar />
    <HomeBody :title='title' :cards="data.leagues" :path="path" /> 
</template>

<script setup>
  const title = 'Leagues'

  const path = '/league/'

  const { data } = await useFetch('/api/getLeagues')

</script>
    
    
    <style scoped>
    a {
      color: #42b983;
    }
    </style>
    