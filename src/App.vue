<template>
  <div id="app">

    <search @input="searchQuery = arguments[0]"></search>
    <data-list :searchQuery="searchQuery"></data-list>

  </div>
</template>

<script>
  import DataList from './components/DataList.vue'
  import DataSelect from './components/DataSelect.vue'
  import Search from './components/Search.vue'

  export default {
    name: 'app',
    data: function() {
      return {
        searchQuery: ''
      }
    },
    components: {
      'data-list': DataList,
      'data-select': DataSelect,
      'search': Search,
    }
  }

</script>

<style scoped>

</style>



