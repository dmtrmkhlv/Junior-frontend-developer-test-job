<template>
  <div class="card__item" v-bind:data-id="data.product_id">
    <img v-bind:src="data.product_img" v-bind:alt="data.product_name">
    <h3>{{data.product_name}}</h3>
    <p>{{data.product_description}}</p>
    <p>{{data.product_price}} руб.</p>
    <button v-on:click="onRemoveFromCatalog">X</button>
  </div>
</template>

<script>
  export default {
    props: ['data', 'action'],
    name: 'Card',
      methods: {
        onRemoveFromCatalog() {
          this.$store.dispatch('deleteFromeGoodList', this.data.product_id)
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>