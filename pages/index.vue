<template>
    <NavBar />
    <HomeBody :title='title' :cards="leagues" :path="path" /> 
</template>
    
    <script>
    export default {
      name: 'Home',
      data () {
        return {
          title: 'Leagues',
          path: '/league/',
          leagues: [
      { 
        id: 1,
        name: 'NBA' },
      { 
        id: 2,
        name: 'NFL' },
        { 
        id: 3,
        name: 'MLB' },
        { 
        id: 4,
        name: 'OHL' },
        { 
        id: 5,
        name: 'MLS' }
      ]}
        }
      }
    
    </script>
    
    <style scoped>
    a {
      color: #42b983;
    }
    </style>
    