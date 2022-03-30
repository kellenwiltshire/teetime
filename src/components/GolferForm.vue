<template>
	<h1>Golfer Name</h1>
	<div class="card">
		<form @submit.prevent="(e) => updateGolfers" class="flex">
			<h3>Name</h3>
			<input type="text" name="name" v-model="golferName" required />
			<h3>Tee Time Restriction?</h3>
			<input type="checkbox" name="teeTime" v-model="restriction" />
			<h3>Carpool</h3>
			<input type="text" name="carpool" v-model="carpool" />
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<script lang="ts">
import { golferStore } from '@/stores/golferStore';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'GolferForm',
	setup() {
		const store = golferStore();

		return { store };
	},
	data() {
		return {
			golferName: '',
			carpool: '',
			restriction: false,
		};
	},
	methods: {
		updateGolfers(e: HTMLFormElement) {
			e.preventDefault();
			const golfer = {
				name: this.golferName,
				restriction: this.restriction,
				carpool: this.carpool,
			};
			this.store.addGolfer(golfer);
		},
	},
});
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
</style>
