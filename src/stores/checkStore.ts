import { defineStore } from 'pinia';

export const checkStore = defineStore('checkStore', {
	state: () => ({
		isCourseInfo: false,
		isGolferInfo: false,
		isSchedGenerated: false,
	}),
	actions: {
		setIsCourseInfo() {
			this.isCourseInfo = !this.isCourseInfo;
		},
		setIsGolferInfo() {
			this.isGolferInfo = !this.isGolferInfo;
		},
		setIsSchedGenerated() {
			this.isSchedGenerated = !this.isSchedGenerated;
		},
	},
});
