<template>
	<div class="container">
		<table>
			<tr>
				<th v-for='column in columns' v-on:click='sortTable(column)'>
					{{ column }}
					<div class="arrow" v-if="column == sortColumn" v-bind:class="ascending ? 'arrow_up' : 'arrow_down'"></div>
				</th>
			</tr>
			<tr v-for='row in filteredRoot'>
				<td v-for="column in columns">{{row[column]}}</td>
			</tr>
		</table>
	</div>
	
</template>

<script>

export default {
	props: ['searchQuery'],
  data: function() {
    return {
			selected: 'admin',
			sortColumn: '',
			ascending: false,
			rows: [
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
	methods: {
		sortTable: function sortTable(column) {
      if (this.sortColumn === column) {
				this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = column;
      }

      var ascending = this.ascending;

      this.rows.sort(function(a, b) {
        if (a[column] > b[column]) {
          return ascending ? 1 : -1
        } else if (a[column] < b[column]) {
          return ascending ? -1 : 1
        }
        return 0;
      })
    }
	},
	computed: {
		filteredUsers: function() {
			return this.rows.filter(function(user) {
				return user.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
			}.bind(this));
		},
		filteredRoot: function() {
			return this.rows.filter(function(user){
				// alert(user.root);
				if (user.root.toLowerCase() == 'admin') {
					return 1;
				} else {
					return -1;
				}
			}.bind(this));
		},
		columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
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
		position: relative;
		flex: 1 0 0;
	}

	table tr:nth-child(even) {
		background-color: #fdfdfd;
	}

	.arrow {
		position: absolute;
		width: 0;
		height: 0;
		top: 50%;
		left: 56%;
		margin-top: -2.5px;
	}

	.arrow_up {
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid #767d94;
	}

	.arrow_down {
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;		
		border-top: 5px solid #767d94;
	}
</style>


