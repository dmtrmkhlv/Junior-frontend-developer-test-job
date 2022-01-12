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
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'
import CardList from '@/components/CardList.vue'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    CardList
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Source Sans Pro, sans-serif;
  color: #3F3F3F;
  background: rgba(255, 254, 251, 0.8);
;
}
.wrapper{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}
.main{
  display: flex;
  justify-content: space-between;
}
</style>
