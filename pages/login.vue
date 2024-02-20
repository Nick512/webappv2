<template>
    <NavBar />
    <div class="container w-100 h-100">
    
      <div class="form w-75 mx-auto rounded">
  <div class="form-group w-75 mx-auto">
    <input v-model="username" type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username">
  </div>
  <div class="form-group w-75 mx-auto">
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="button-holder w-50 mx-auto">
  <button @click="login" type="submit" class="btn btn-success w-50">Submit</button>
</div>
</div>
</div>

</template>
    
    <script setup>
      const supabase = useSupabaseClient()
      const user = useSupabaseUser()
      watchEffect(() => {
        if (user.value) {
          navigateTo('/admin')
          }
        })

      let username = ref('')
      let password = ref('')
      const login = async () => {
        const {error} = await supabase.auth.signInWithPassword({
          email: username.value,
          password: password.value,
          options: {
          redirectTo: 'http://localhost:3000/confirm',
          }
        })
        
      }
    </script>

    <style scoped>


      
      .form {
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

      .button-holder {
        text-align: center !important;
      }

    </style>
    
  