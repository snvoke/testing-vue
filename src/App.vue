<template>
  <div id="app">

    <div class="inner">
      <NewSearch></NewSearch>
      <NewSelect></NewSelect>
    </div>

    <NewTable></NewTable>    
  </div>
</template>

<script>
  import Hello from './components/Hello.vue'
  import Search from './components/Search.vue'
  import SelectBlock from './components/SelectBlock.vue'

  export default {
    name: 'app',
    components: {
      NewTable: Hello,
      NewSearch: Search,
      NewSelect: SelectBlock
    }
  }
</script>

<style scoped>
  .inner {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
</style>



