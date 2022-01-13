<template>
  <form action="#" method="post" id="form__post" v-on:submit.prevent="submitForm">
    <label for="form__name">Наименование товара <div class="mark"></div> </label>
    <input v-model="form.product_name" type="text" name="form__name" id="form__name"
      placeholder="Введите наименование товара">
    <label for="form__description">Описание товара</label>
    <textarea v-model="form.product_description" name="form__description" id="form__description"
      placeholder="Введите описание товара" cols="30" rows="10"></textarea>
    <label for="form__link">Ссылка на изображение товара <div class="mark"></div> </label>
    <input v-model="form.product_img" type="url" name="form__link" id="form__link" placeholder="Введите ссылку">
    <label for="form__price">Цена товара<div class="mark"></div> </label>
    <input v-model="form.product_price" type="number" name="form__price" id="form__price" min="0" step="0.01"
      placeholder="Введите цену">
    <button type="submit">Добавить товар</button>
  </form>
</template>

<script>
  export default {
    name: 'Form',
    data() {
      return {
        form: {
          product_name: '',
          product_description: '',
          product_img: '',
          product_price: '',
          product_id: ''
        }
      }
    },
    methods: {
      submitForm() {
        let randomId = Date.now();
        this.form.product_id = randomId;
        this.$store.dispatch('addToGoodList', this.form)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #form__post {
    width: 332px;
    min-height: 440px;
    padding: 24px;
    box-sizing: border-box;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input,
    textarea {
      background: #FFFEFB;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      width: 100%;
      padding: 10px 10px 11px 16px;
      box-sizing: border-box;
      margin-bottom: 16px;
      border: 1px solid #ffffff00;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: #3F3F3F;

      &::placeholder {
        font-size: 12px;
        line-height: 15px;
        text-align: left;
        color: #B4B4B4;
      }
    }

    textarea {
      resize: vertical;
    }

    label {
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: #49485E;
      margin-bottom: 4px;
      position: relative;

      .mark {
        position: absolute;
        width: 4px;
        height: 4px;
        top: -2px;
        right: -6px;
        background: #FF8484;
        border-radius: 4px;
      }
    }


    button {
      align-self: center;
      padding: 10px;
      width: 100%;
      border: none;
      border-radius: 10px;
      background: #7BAE73;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #FFFFFF;

      &:disabled {
        background: #EEEEEE;
        color: #B4B4B4;

      }
    }
  }
</style>