import { defineStore } from 'pinia';

interface Course {
	name: string;
	interval: number;
	date: string;
	game: string;
	startTime: string;
	restrictionTime: string;
}

export const courseStore = defineStore('course', {
	state: () => ({
		courseInfo: {} as Course,
	}),
	getters: {
		getCourseInfo(state) {
			return state.courseInfo;
		},
	},
	actions: {
		updateCourse(newCourse: Course) {
			this.courseInfo = newCourse;
		},
	},
});
