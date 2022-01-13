<template>
  <header class="header">
    <h1>Добавление товара</h1>
    <select name="sortGoods" id="sortGoods" class="select__sort">
      <option value="0">По умолчанию</option>
      <option value="min">По убыванию цены</option>
      <option value="max">По возрастанию цены</option>
    </select>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 32px;
    padding-bottom: 16px;
    box-sizing: border-box;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }

  select {
    background: #FFFEFB;
    box-shadow: 0px 2px 5px 0px #0000001A;
    border: none;
    border-radius: 4px;
    padding: 10px 28px 11px 16px;
    height: 36px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
  }

  @media screen and (max-width: 720px) {
    .header {
      flex-wrap: wrap;
      margin: 3% 2% 0 2%;
      padding-top: 0;
    }
  }
</style>