<template>
	<h1>Course Information</h1>
	<div class="card">
		<form @submit.prevent="updateCourseInfo" class="course-form">
			<div>
				<label for="courseName">Course Name</label>
				<div class="input-holder">
					<input id="courseName" name="date" type="text" v-model="courseName" placeholder="Course Name" />
				</div>
			</div>
			<div>
				<label for="date">Date</label>
				<div class="input-holder">
					<input id="date" name="date" type="date" v-model="date" />
				</div>
			</div>
			<div>
				<label for="game">Game</label>
				<div class="input-holder">
					<input id="game" name="game" type="text" v-model="game" placeholder="Game" />
				</div>
			</div>

			<div>
				<label for="interval">Interval</label>
				<div class="input-holder">
					<input id="interval" name="interval" type="number" v-model="interval" placeholder="0" required />
				</div>
				<p class="input-post">Time Between Tee Times</p>
			</div>

			<div>
				<label for="startTime">Start Time</label>
				<div class="input-holder">
					<input id="startTime" name="startTime" type="time" v-model="startTime" required />
				</div>
				<p class="input-post">Initial Tee Time</p>
			</div>

			<div>
				<label for="restrictionTime">2nd Start Time</label>
				<div class="input-holder">
					<input id="restrictionTime" name="restrictionTime" type="time" v-model="restrictionTime" />
				</div>
				<p class="input-post">2nd Start Time (if needed)</p>
			</div>

			<button>Next</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { courseStore } from '@/stores/courseStore';
import { checkStore } from '@/stores/checkStore';
export default defineComponent({
	name: 'CourseInformation',
	setup() {
		const store = courseStore();
		const check = checkStore();
		return { store, check };
	},
	data() {
		return {
			courseName: '',
			date: '',
			game: '',
			interval: 0,
			startTime: '',
			restrictionTime: '',
		};
	},
	methods: {
		updateCourseInfo() {
			const courseInfo = {
				name: this.courseName,
				interval: this.interval,
				date: this.date,
				game: this.game,
				startTime: this.startTime,
				restrictionTime: this.restrictionTime,
			};
			this.store.updateCourse(courseInfo);
			this.check.setIsCourseInfo();
			this.check.setIsGolferInfo();
		},
	},
});
</script>

<style scoped>
label {
	display: block;
}

.input-holder {
	margin-top: 0.25rem;
}

.input-post {
	margin-top: 0.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
}

.course-form {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 2rem;
}

input {
	display: block;
	border-radius: 0.375rem;
	width: 100%;
	border-color: rgb(209 213 219);
	font-size: 0.875rem;
	line-height: 1.25rem;

	appearance: none;
	background-color: #fff;
	border-width: 1px;
	padding: 0.5rem 0.75rem 0.5rem 0.75rem;
}
</style>
