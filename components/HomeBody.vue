<template>
    <div class="card card-main rounded">
  <div class="card-body fw-bold">
    {{title}}
  </div>
  <div class="league-holder">
  <div class="row">
    <InfoCard v-for="card in cards" v-bind:key="card.id" :title="card.name" :path="path" />
</div>
</div>
</div>
</template>


<script>
export default {
    name: 'HomeBody',
    props: ['title', 'cards', 'path'],
}

</script>
<style scoped>
    .card-main {
        width: 80%;
        margin-top: 20px;
        margin-right: auto;
        margin-left: auto;
        background-color: rgb(216, 215, 215);
    }

    .league-holder{
        margin-right: 20px;
        margin-left: 20px;
    }
</style>