<template>
	<h1>Golfer Name</h1>
	<div class="card">
		<form @submit.prevent="updateGolfers" class="golfer-form">
			<div class="input-holder">
				<label for="golferName">Name</label>
				<div class="input-holder">
					<input id="golferName" name="golferName" type="text" v-model="golferName" placeholder="John Doe" required />
				</div>
			</div>

			<div>
				<label>Late Tee Time?</label>
				<label class="switch">
					<input type="checkbox" v-model="restriction" />
					<span class="slider round"></span>
				</label>
			</div>

			<div>
				<label for="carpool">Carpool</label>
				<div class="input-holder">
					<input id="carpool" name="carpool" type="text" v-model="carpool" placeholder="Tim Doe" />
				</div>
				<p class="input-post">Enter Full Names (seperated by commas)</p>
			</div>
			<button type="submit">Add</button>
			<button @click="startOver">Start Over</button>
		</form>
	</div>
</template>

<script lang="ts">
import { checkStore } from '@/stores/checkStore';
import { courseStore } from '@/stores/courseStore';
import { golferStore } from '@/stores/golferStore';
import { scheduleStore } from '@/stores/scheduleStore';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'GolferForm',
	setup() {
		const store = golferStore();
		const courseInfo = courseStore();
		const check = checkStore();
		const schedule = scheduleStore();

		const previousGolfers = localStorage.getItem('golfers');

		if (previousGolfers) {
			store.addPrevGolfers(previousGolfers);
		}

		return { store, courseInfo, check, schedule };
	},
	data() {
		return {
			golferName: '',
			carpool: '',
			restriction: false,
		};
	},
	methods: {
		updateGolfers(e: HTMLFormElement) {
			e.preventDefault();
			const golfer = {
				name: this.golferName,
				restriction: this.restriction,
				carpool: this.carpool,
			};
			this.store.addGolfer(golfer);
			this.golferName = '';
			this.carpool = '';
			this.restriction = false;

			localStorage.setItem('golfers', JSON.stringify(this.store.getGolfers));
		},
		startOver() {
			this.store.$reset();
			this.courseInfo.$reset();
			this.schedule.$reset();
			this.check.$reset();
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

.input-holder {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}

.golfer-form {
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

.switch {
	position: relative;
	display: inline-block;
	width: 40px;
	height: 25px;
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

/* The slider */
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: '';
	height: 21px;
	width: 21px;
	left: 2px;
	bottom: 2px;
	background-color: white;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

input:checked + .slider {
	background-color: #4fc08d;
}

input:focus + .slider {
	box-shadow: 0 0 1px #4fc08d;
}

input:checked + .slider:before {
	-webkit-transform: translateX(13px);
	-ms-transform: translateX(13px);
	transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
	border-radius: 25px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
