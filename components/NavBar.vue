<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" aria-label="Thirteenth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a class="navbar-brand col-lg-3 me-0" href="/"></a>
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link active" aria-current="page">Home</NuxtLink>
            </li>
          </ul>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            
            
        <NuxtLink v-if="!user" to="/login">
            <button class="btn btn-success">
                Login
            </button>
        </NuxtLink>

        <button v-if="user" @click="logOut" class="btn btn-success">
            Log Out
        </button>
        
        
          </div>
        </div>
      </div>
    </nav>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const logOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
  navigateTo('/')
}
</script>

<style scoped>
    .navbar {
        background-color: #42b983 !important;
    }
</style>