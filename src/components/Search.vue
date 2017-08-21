<template>
  <div class="search-block">
		<input id="input-search" type="text" placeholder="Search users" v-model="search">
		<button id='btn-search' type='submit' v-on:click="greeting"> {{ text }} </button>
  </div>
</template>

<script>
export default {
  name: 'searchBlock',
  data () {
		return {
			text: 'search'
		}
	},
	methods: {
		greeting(event) {
			event.preventDefault();

			alert('hello');
		},

		filterItem() {

		}
	}
}
</script>

<style scoped>
	.search-block {
		display: flex;
		flex-wrap: wrap;
		max-width: 400px;
		margin-bottom: 20px;
	}

	input {
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


