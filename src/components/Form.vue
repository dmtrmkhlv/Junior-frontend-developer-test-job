<template>
  <form action="#" method="post" ref="formPost" id="form__post" novalidate="true" v-on:submit.prevent="submitForm">
    <label for="form__name">Наименование товара
      <div class="mark"></div>
    </label>
    <input v-model="form.product_name" type="text" name="form__name" id="form__name"
      placeholder="Введите наименование товара" v-bind:class="{ input__error: this.errors.product_name }" />
    <p v-if="errors.product_name" class="form__error">
      Поле является обязательным
    </p>
    <label for="form__description">Описание товара</label>
    <textarea v-model="form.product_description" name="form__description" id="form__description"
      placeholder="Введите описание товара" cols="30" rows="5"></textarea>
    <label for="form__link">Ссылка на изображение товара
      <div class="mark"></div>
    </label>
    <input v-model="form.product_img" type="url" name="form__link" id="form__link" placeholder="Введите ссылку"
      v-bind:class="{ input__error: this.errors.product_img }" />
    <p v-if="errors.product_img" class="form__error">
      Поле является обязательным
    </p>
    <label for="form__price">Цена товара
      <div class="mark"></div>
    </label>
    <input v-model="rewritePrice" type="text" name="form__price" id="form__price" placeholder="Введите цену"
      v-bind:class="{ input__error: this.errors.product_price }" />
    <p v-if="errors.product_price" class="form__error">
      Только цифры
    </p>
    <button v-bind:disabled="isDisabled" type="submit">Добавить товар</button>
    <div v-if="this.showLoader" class="form__send">
      <img src="img/loader.gif" alt="loader">
    </div>
    <div v-if="this.showSuccess" class="form__send">
      <p>Товар успешно добавлен</p>
      <button v-on:click="showSuccess = false" type="reset">Ok</button>
    </div>
  </form>
</template>

<script>
  export default {
    name: "Form",
    data() {
      return {
        form: {
          product_name: "",
          product_description: "",
          product_img: "",
          product_price: "",
          product_id: "",
        },
        errors: {
          product_name: false,
          product_img: false,
          product_price: false,
        },
        showLoader: false,
        showSuccess: false
      };
    },
    computed: {
      isDisabled: function () {
        let sendStatus;
        if (
          this.form.product_name &&
          this.form.product_img &&
          this.validLink(this.form.product_img) &&
          this.form.product_price
        ) {
          sendStatus = false;
        } else {
          sendStatus = true;
        }
        return sendStatus;
      },
      rewritePrice: {
        get() {
          return this.form.product_price;
        },
        set(value) {
          let valueArr = value.replace(/\s/g, "").split("");
          for (let i = valueArr.length; i >= 0; i = i - 3) {
            valueArr.splice(i, 0, " ");
          }
          this.form.product_price = valueArr.join("").trim();
        },
      }
    },
    methods: {
      submitForm() {
        if (
          this.form.product_name &&
          this.form.product_img &&
          this.validLink(this.form.product_img) &&
          this.form.product_price &&
          this.validPrice(this.form.product_price)
        ) {
          let randomId = Date.now();
          this.form.product_id = randomId;
          this.showLoader = true;
          this.$store.dispatch("addToGoodList", this.form).then((res) => {
            if (res == "200") {
              this.showLoader = false;
              this.showSuccess = true;

              this.form = {
                product_name: "",
                product_description: "",
                product_img: "",
                product_price: "",
                product_id: "",
              };

              this.errors = {
                product_name: false,
                product_img: false,
                product_price: false,
              };
            }
          })
        } else {
          if (!this.form.product_name) {
            this.errors.product_name = true;
          }
          if (!this.validLink(this.form.product_img)) {
            this.errors.product_img = true;
          }
          if (!this.validPrice(this.form.product_price)) {
            this.errors.product_price = true;
          }
        }
      },
      validLink(link) {
        let reg = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gmi;
        return reg.test(link);
      },
      validPrice(price) {
        let reg = /^\d+$/;
        return reg.test(Number(price.replace(/\s/g, "")));
      },
    },
  };
</script>
<style scoped lang="scss">
  #form__post {
    min-width: 332px;
    min-height: 440px;
    height: fit-content;
    padding: 24px;
    box-sizing: border-box;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    overflow: hidden;

    input,
    textarea {
      background: #fffefb;
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
      color: #3f3f3f;

      &:focus-visible {
        outline: none;
        border: 1px solid #7bae73;
      }

      &::placeholder {
        font-size: 12px;
        line-height: 15px;
        text-align: left;
        color: #b4b4b4;
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
      color: #49485e;
      margin-bottom: 4px;
      position: relative;

      .mark {
        position: absolute;
        width: 4px;
        height: 4px;
        top: -2px;
        right: -6px;
        background: #ff8484;
        border-radius: 4px;
      }
    }

    .form__error {
      color: #ff8484;
      font-size: 8px;
      line-height: 10px;
      letter-spacing: -0.02em;
      transform: translateY(-14px);
    }

    .input__error {
      border: 1px solid #ff8484;
    }

    .form__send {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #b4b4b4a4;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      button {
        width: 20%;
        margin-top: 32px;
      }
    }

    button {
      align-self: center;
      padding: 10px;
      width: 100%;
      border: none;
      border-radius: 10px;
      background: #7bae73;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
      cursor: pointer;

      &:disabled {
        background: #eeeeee;
        color: #b4b4b4;
        cursor: unset;
      }
    }
  }

  @media screen and (max-width: 720px) {
    #form__post {
      width: 100%;
      margin-left: 2%;
      margin-right: 2%;
      min-width: unset;
    }
  }
</style>