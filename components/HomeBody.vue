<template>
    <div class="card card-main rounded">
  <div class="card-body fw-bold">
    {{props.title}}
  </div>
  <div class="league-holder">
  <div class="row">
    <InfoCard @cardClick="cardClick(card)" v-for="card in props.cards" v-bind:key="card.id" :title="card.name" :path="props.path" />
</div>
</div>
</div>
</template>


<script setup>
const router = useRouter()
const props = defineProps(['title', 'cards', 'path'])

const cardClick = (item) => {
    router.push({ path: props.path+item.name  })
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