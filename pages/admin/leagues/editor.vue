<template>
    <NavBar />
    {{ this.$route.query.league }}
</template>

<script>
    export default {
    name: 'LeagueEditor'
    }
</script>