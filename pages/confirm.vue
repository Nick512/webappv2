
<template>
  <div>Waiting for login...</div>
</template>

<script setup>
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
      // Redirect to protected page
      return navigateTo('/admin')
  }
}, { immediate: true })
</script>