<template>
  <select name="select" v-on:input = "$emit('input', $event.target.value)">
		<option disabled value="">Выберите один из вариантов</option>
		<option v-for="option in options" v-bind:value="option.value"> {{ option.text }} </option>
	</select>
</template>

<script>
export default {
	data: function() {
		return {
			selected: '',
			options: [
				{ text: 'User', value: 'user'},
				{ text: 'Admin', value: 'admin'},
				{ text: 'superAdmin', value: 'superAdmin'}
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


