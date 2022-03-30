import { defineStore } from 'pinia';

export const scheduleStore = defineStore('schedule', {
	state: () => ({
		schedule: [],
	}),
	actions: {
		updateSchedule(newSchedule: []) {
			this.schedule = newSchedule;
		},
	},
});
