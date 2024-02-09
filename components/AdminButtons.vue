<template>
    <div class="container w-100">
        <div class="view-selector row">
            <div class="button-holder col-sm-6">
                <NuxtLink to="/admin/users"><button class="btn btn-success w-50">Users</button></NuxtLink>
            </div>
            <div class="button-holder col-sm-6">
                <NuxtLink to="/admin/leagues"><button class="btn btn-success w-50">Leagues</button></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'AdminButtons',
}
</script>

<style scoped>
    .view-selector {
    margin-top: 20px;
    }  

    .button-holder {
        text-align: center !important;
    }
</style>