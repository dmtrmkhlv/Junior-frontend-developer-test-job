<template>
  <div class="card__item" v-bind:data-id="data.product_id">
    <img v-bind:src="data.product_img" v-bind:alt="data.product_name" />
    <p class="card__item_title">{{ data.product_name }}</p>
    <p class="card__item_desc">{{ data.product_description }}</p>
    <p class="card__item_price">{{ data.product_price }} руб.</p>
    <button class="card__item_button" v-on:click="onRemoveFromCatalog">
      <img src="img/delete_icon.svg" alt="X" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "Card",
  methods: {
    onRemoveFromCatalog() {
      this.$store.dispatch("deleteFromeGoodList", this.data.product_id);
    },
  },
};
</script>


<style scoped lang="scss">
.card {
  &__item {
    width: 30%;
    min-width: 332px;
    min-height: 423px;
    height: fit-content;
    margin-bottom: 16px;
    color: #3f3f3f;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &:hover &_button {
      opacity: 1;
    }

    img {
      width: 100%;
      border-radius: 4px 4px 0px 0px;
    }

    p {
      padding: 16px 16px 0 16px;
      box-sizing: border-box;
    }

    &_title {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }

    &_desc {
      font-size: 16px;
      line-height: 20px;
    }

    &_price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }

    &_button {
      opacity: 0;
      position: absolute;
      width: 32px;
      height: 32px;
      right: -10px;
      top: -10px;
      background: #ff8484;
      border: 1px solid #ff8484;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      transition: all 0.2s ease-in;
      cursor: pointer;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .card__item {
    width: 40%;
    max-width: 40%;

    &_button {
      right: 0;
      top: 0;
    }
  }
}

@media only screen and (max-width: 375px) {
  .card__item {
    width: 100%;
    max-width: 100%;
    min-width: unset;
  }
}
</style>