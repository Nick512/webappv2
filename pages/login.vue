<template>
    <NavBar />
    <div class="container w-100 h-100">
    
      <form class="w-75 mx-auto rounded">
  <div class="form-group w-75 mx-auto">
    <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username">
  </div>
  <div class="form-group w-75 mx-auto">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <nuxt-link to='/admin'><button type="submit" class="btn btn-success w-50">Submit</button></nuxt-link>
</form>
</div>

</template>
    
    <script>
    export default {
      name: 'Home',
    }
    </script>

    <style scoped>


      
      form {
        background-color:rgb(216, 215, 215);
        margin-top: 20px;
        padding: 20px
      }

      .form-group{
        margin-top: 20px;

      }

      button {
        margin-top: 20px;
        margin-right: auto;
        margin-left: auto
      }

      input {
        text-align: center;
        border: 1px solid black
      }

    </style>
    
  