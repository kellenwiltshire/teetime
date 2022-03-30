<template>
	<h1>Golfers</h1>
	<div class="card">
		<div class="flex">
			<!-- This to be replaced with Component -->
			<div
				v-for="(golfer, i) in golfers.listOfGolfers"
				:key="i"
				class="card-inner"
			>
				<p>{{ golfer.name }}</p>
			</div>
		</div>
		<button>Generate Tee Time Schedule</button>
	</div>
</template>

<script lang="ts">
import { courseStore } from '@/stores/courseStore';
import { golferStore } from '@/stores/golferStore';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'GolferList',
	setup() {
		const golfers = golferStore();
		const courseInfo = courseStore();
		return { golfers, courseInfo };
	},
	methods: {
		createSchedule() {
			const schedule = generateSchedule(this.golfers, this.courseInfo);
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

.card-inner {
	padding: 16px 24px;
}

.flex {
	display: flex;
	align-items: center;
	justify-content: space-between;
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
