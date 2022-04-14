<template>
	<h1>Golfers</h1>
	<div class="card">
		<ul>
			<!-- This to be replaced with Component -->
			<li v-for="(golfer, i) in golfers.listOfGolfers" :key="i">
				<div class="card-inner">
					<p>{{ golfer.name }}</p>
					<div @click="remove(i)" class="delete-name">&times;</div>
				</div>
			</li>
		</ul>
		<div class="flex">
			<button @click="createSchedule">Generate Tee Time Schedule</button>
			<button @click="resetGolfers" class="red">Remove All Golfers</button>
		</div>
	</div>
</template>

<script lang="ts">
import { courseStore } from '@/stores/courseStore';
import { golferStore } from '@/stores/golferStore';
import { scheduleStore } from '@/stores/scheduleStore';
import { defineComponent } from 'vue';
import generateSchedule from '@/utils/schedule';
import { checkStore } from '@/stores/checkStore';

export default defineComponent({
	name: 'GolferList',
	setup() {
		const golfers = golferStore();
		const courseInfo = courseStore();
		const schedStore = scheduleStore();
		const check = checkStore();

		return { golfers, courseInfo, schedStore, check };
	},
	methods: {
		createSchedule() {
			const schedule = generateSchedule(this.golfers.listOfGolfers, this.courseInfo.courseInfo);
			this.schedStore.updateSchedule(schedule);
			this.check.setIsSchedGenerated();
		},
		resetGolfers() {
			this.golfers.$reset();
			localStorage.removeItem('golfers');
		},
		remove(i: number) {
			this.golfers.listOfGolfers.splice(i, 1);

			localStorage.setItem('golfers', JSON.stringify(this.golfers.getGolfers));
		},
	},
});
</script>

<style scoped>
ul {
	margin-top: 0.75rem;
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 1.5rem;
	list-style: none;
}

li {
	display: flex;
	border-radius: 0.375rem;
	grid-column: span 1 / span 1;
	border-style: solid;
	border-width: 1px;
	border-color: gray;
	padding: 0.25rem;
}
.card-inner {
	display: flex;
	flex: 1 1 0%;
	align-items: center;
	justify-content: space-between;
	border-radius: 0.375rem;
}
.card {
	border-radius: 4px;
	box-shadow: 1px 1px 40px -10px #31505f30, 0px 1px 2px 0px #31505f30;
	background: white;
	margin-bottom: 24px;
	padding: 1rem;
}

.delete-name {
	background: transparent;
	border: 0px;
	padding: 0px 13px;
	cursor: pointer;
	font-size: larger;
}

.flex {
	display: flex;
	justify-content: space-between;
}

.red {
	background-color: red;
}
</style>
