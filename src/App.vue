<template>
  <div id="app">
    <NewSearch></NewSearch>
    <NewSelect></NewSelect>
    <hello></hello>    
  </div>
</template>

<script>
  import Hello from './components/Hello.vue'
  import Search from './components/Search.vue'
  import SelectBlock from './components/SelectBlock.vue'

  export default {
    name: 'app',
    components: {
      Hello,
      NewSearch: Search,
      NewSelect: SelectBlock
    }
  }
</script>


