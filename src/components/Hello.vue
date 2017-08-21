<template>
	<table>
		<tr>
			<th v-for='column in columns'> {{ column }} </th>
		</tr>
		<tr v-for='user in users'>
			<td> {{ user.name }} </td>
			<td> {{ user.email }} </td>
			<td> {{ user.root }} </td>
		</tr>
	</table>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
			search: '',
			columns: ["name", "email", "root"],
			users: [
				{ name: 'John', email: "john@gmail.com", root: 'superAdmin' },
				{ name: 'Jane', email: "jane@gmail.com", root: 'superAdmin' },
				{ name: 'Paul', email: "paul@gmail.com", root: 'Admin' },
				{ name: 'Kate', email: "kate@gmail.com", root: 'Admin' },
				{ name: 'Amanda', email: "amanda@gmail.com", root: 'User' },
				{ name: 'Steve', email: "steve@gmail.com", root: 'superAdmin' },
				{ name: 'Keith', email: "keith@gmail.com", root: 'User' },
				{ name: 'Don', email: "don@gmail.com", root: 'Admin' },
				{ name: 'Susan', email: "susan@gmail.com", root: 'superAdmin' }
			]
    }
	},
	computed: {
		filteredCustomers: function() {
			var self = this;
			return this.users.filter(function(cust) {
				return cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
			})
		}
	}
}
</script>

<style scoped>
	table {
		display: flex;
		flex-direction: column;
		width: 100%;
		border-collapse: collapse;
		text-align: center;
	}

	table tr {
		padding: 10px;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid lightgrey;
	}

	table tr:first-child {
		background-color: #f2f3f6;
		color: #767d94;
	}

	table td,
	table th {
		flex: 1 0 0;
	}
</style>


