<template>
    <NavBar />
    <AdminButtons />
    
  
  </template>
      
      <script>
      export default {
        name: 'Admin',
        data () {
          return {
            type: this.$route.params.type,
            mode: 'view'
          }
        }
  } 
      
      </script>
      