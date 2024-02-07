<template>
    <div class="col-sm-4">
     <div class="card league-card">
       <div @click="$emit('cardClick')" class="card-body">
         <p class="card-text">{{ title }}</p>
       </div>
     </div>
   </div>
 </template>

 
 <script>
 
 export default {
   props: ['title', 'path'],
   name: 'InfoCard',
   methods: {
     route () {
       this.$router.push({ path: this.path+this.title  })
       
     }
   }
   }
 </script>
 
 <style scoped>
 
 .link {
   text-decoration: none;
   color: inherit;
 }
 .league-card{
         margin-bottom: 20px;
     }
 </style>