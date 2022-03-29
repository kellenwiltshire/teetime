<template>
	<h1>Golfer Name</h1>
	<div class="card">
		<form onsubmit="addGolfer" class="flex">
			<h3>Name</h3>
			<input v-model="golferName" />
			<h3>Tee Time Restriction?</h3>
			<input />
			<h3>Carpool</h3>
			<input />
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<script lang="ts">
export default {
	props: ['addGolfer', 'golferName'],
	data() {
		golferName: '';
	},
};
</script>

<style scoped>
.card {
	border-radius: 4px;
	box-shadow: 1px 1px 40px -10px #31505f30, 0px 1px 2px 0px #31505f30;
	background: white;
	margin-bottom: 24px;
}

.flex {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
}

input {
	width: 100%;
	padding: 14px;
	font-size: 16px;
	height: 100%;
	display: block;
}

button {
	background: #4fc08d;
	padding: 10px 22px;
	border: none;
	color: white;
	border-radius: 4px;
	margin: 8px;
	font-size: 16px;
	cursor: pointer;
	box-shadow: 1px 1px 15px -2px #212c4430;
	transition: 0.15s;
}

button:hover {
	background: #42aa7b;
}
</style>
