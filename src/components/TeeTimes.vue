<template>
	<h1>Schedule</h1>
	<h2>
		{{ courseInfo.courseInfo.name || 'Course' }} -
		{{ courseInfo.courseInfo.date || 'Date' }} -
		{{ courseInfo.courseInfo.startTime }} -
		{{ courseInfo.courseInfo.game || 'Game' }}
	</h2>
	<div class="button-holder">
		<button @click="printSchedule">Print</button>
		<button @click="createSchedule">Regenerate Tee Time Schedule</button>
		<button @click="startOver">Start Over</button>
	</div>
	<div id="elementToPrint" class="card-holder">
		<div v-for="(time, i) in store.schedule" :key="i" class="tee-time-card">
			<div class="tee-time">{{ time.teeTime }}</div>
			<div class="tee-names">
				<div v-for="(golfer, i) in time.golfers" :key="i">
					<p>{{ golfer.name }}</p>
					<!-- <p>{{ golfer.carpool }}</p> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import generateSchedule from '@/utils/schedule';
import { scheduleStore } from '@/stores/scheduleStore';
import { courseStore } from '@/stores/courseStore';
import { golferStore } from '@/stores/golferStore';
import { checkStore } from '@/stores/checkStore';

export default defineComponent({
	name: 'TeeTimes',
	setup() {
		const store = scheduleStore();
		const courseInfo = courseStore();
		const golfers = golferStore();
		const check = checkStore();

		return { store, courseInfo, golfers, check };
	},
	methods: {
		createSchedule() {
			const schedule = generateSchedule(
				this.golfers.listOfGolfers,
				this.courseInfo.courseInfo,
			);
			this.store.updateSchedule(schedule);
		},
		startOver() {
			this.store.$reset();
			this.courseInfo.$reset();
			this.golfers.$reset();
			this.check.$reset();
		},
		printSchedule() {
			console.log('Printing');
			// @ts-expect-error-print
			this.$htmlToPaper('elementToPrint', {
				name: '_blank',
				specs: ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
				styles: ['../assets/print.css'],
			});
		},
	},
});
</script>

<style scoped>
.button-holder {
	display: flex;
	justify-content: space-between;
}
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
