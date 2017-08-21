<template>
  <select name="select">
		<option v-for="option in options" v-bind:value="option.value"> {{ option.text }} </option>
	</select>
</template>

<script>
export default {
	name: 'selectValue',
	data () {
		return {
			options: [
				{ text: 'One', value: 'A'},
				{ text: 'Two', value: 'B'},
				{ text: 'Three', value: 'C'}
			]
		}
	}
}
</script>

<style scoped>
	select {
		width: 200px;
		margin-bottom: 20px;
		padding: 5px;
		background-color: #fff;
	}
</style>


