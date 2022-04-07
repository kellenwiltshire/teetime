import { defineStore } from 'pinia';

interface Golfer {
	name: string;
	restriction: boolean;
	carpool: string;
}

export const golferStore = defineStore('golfers', {
	state: () => ({
		listOfGolfers: [] as Golfer[],
	}),
	getters: {
		getGolfers(state) {
			return state.listOfGolfers;
		},
	},
	actions: {
		addGolfer(newGolfer: Golfer) {
			this.listOfGolfers.push(newGolfer);
		},
	},
});
