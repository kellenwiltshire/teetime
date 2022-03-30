import { defineStore } from 'pinia';

interface Golfer {
	name: string;
	restriction: boolean;
	carpool: string;
}

interface Group {
	teeTime: string;
	golfers: Golfer[];
}

export const scheduleStore = defineStore('schedule', {
	state: () => ({
		schedule: [] as Group[],
	}),
	actions: {
		updateSchedule(newSchedule: Group[]) {
			this.schedule = newSchedule;
		},
	},
});
