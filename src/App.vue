<template>
  <div id="app">

    <div class="container">
      <div class="inner">
        <search v-on:input="searchQuery = arguments[0]"></search>
        <data-select v-on:input="selected = arguments[0]"></data-select>
      </div>
      
      <data-list v-bind:searchQuery="searchQuery" v-bind:selected="selected"></data-list>
    </div>

    
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
        searchQuery: '',
        selected: ''
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
  .container {
    max-width: 1160px;
    margin: 0 auto;
  }

  .inner {
    display: flex;
  }
</style>



