<template>
	<h1>Schedule</h1>
	<div class="card-holder">
		<!-- This to be replaced with Component -->
		<div v-for="(time, i) in store.schedule" :key="i" class="tee-time-card">
			<div class="tee-time">{{ time.teeTime }}</div>
			<div class="tee-names">
				<div v-for="(golfer, i) in time.golfers" :key="i">
					<p>{{ golfer.name }}</p>
					<!-- <p>{{ golfer.carpool }}</p> -->
				</div>
			</div>
		</div>
		<!-- <button @click="createSchedule">Generate Tee Time Schedule</button> -->
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import generateSchedule from '@/utils/schedule';
import { scheduleStore } from '@/stores/scheduleStore';

export default defineComponent({
	name: 'TeeTimes',
	setup() {
		const store = scheduleStore();

		return { store };
	},
	// methods: {
	// 	createSchedule() {
	// 		const schedule = generateSchedule(this.golfers.listOfGolfers, this.courseInfo.courseInfo);
	// 		this.schedStore.updateSchedule(schedule);
	// 	},
	// },
});
</script>

<style scoped>
.card-holder {
	display: flex;
	width: 100%;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
}

.tee-time-card {
	display: flex;
	width: 25%;
	border: 1px;
	border-style: solid;
	border-color: black;
}

.tee-time {
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 4rem;
	font-size: small;
}

.tee-names {
	display: flex;
	flex: 1 1 0%;
	flex-direction: column;
	justify-content: center;
}
</style>
