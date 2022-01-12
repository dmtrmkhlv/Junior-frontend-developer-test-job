<template>
  <div class="card__list">
    foreach
    <Card />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
  export default {
    name: 'CardList',
    components: {
    Card
  }
    // props: {
    //   msg: String
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>