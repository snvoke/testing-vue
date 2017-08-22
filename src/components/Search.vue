<template>
  <div class="search-block">
		<input id="input-search" type="text" placeholder="Search users" v-model="searchQuery">
		<button id='btn-search' type='submit' v-on:click="greeting"> {{ text }} </button>
  </div>
</template>

<script>
export default {
  name: 'searchBlock',

  data: function() {
		return {
			searchQuery: '',
			text: 'search'
		}
	},

	methods: {
		greeting(event) {
			event.preventDefault();
			alert('hello');
		}
	}
}
</script>

<style scoped>
	.search-block {
		display: flex;
		flex-wrap: wrap;
		flex: 1 0 0;
		max-width: 800px;
		margin-bottom: 20px;
	}

	input {
		flex: 1 0 0;
		margin-right: 10px;
		padding: 10px;
		border: 0;
		border-bottom: 1px solid lightgrey;
		outline: 0;
	}

	input:focus {
		border-color: #2575ed;
	}

	button {
		outline: none;
		border: 1px solid lightgray;
		background-color: #f2f3f6;
	}
</style>


