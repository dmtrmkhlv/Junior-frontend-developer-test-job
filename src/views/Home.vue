<template>
  <div class="wrapper">
    <Header />
    <div class="main">
      <Form />
      <CardList />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Form from '@/components/Form.vue'
  import CardList from '@/components/CardList.vue'


  export default {
    name: 'Home',
    components: {
      Header,
      Form,
      CardList
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Source Sans Pro', sans-serif;
    color: #3F3F3F;
    background: rgba(255, 254, 251, 0.8);
    ;
  }

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }

  .main {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 720px) {
    .main {
      flex-wrap: wrap;
    }
  }
</style>