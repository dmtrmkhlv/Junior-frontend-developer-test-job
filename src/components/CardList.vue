<template>
  <div class="card__list">

    <Card v-for="good of goodList" v-bind:key="good.id" v-bind:data="good" />

  </div>
</template>

<script>
  import Card from '@/components/Card.vue'
  export default {
    name: 'CardList',
    components: {
      Card
    },
    computed: {
      goodList() {
        return this.$store.getters.getGoodList;
      }
    }
  }
</script>

<style scoped lang="scss">
  .card__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 16px;
    position: relative;
  }

  @media screen and (max-width: 720px) {
    .card__list {
      margin: 3% 2% 0 2%;
    }
  }
</style>