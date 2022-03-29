<template>
	<div class="container">
		<CourseInformation />
		<GolferForm />
		<GolferList />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CourseInformation from '@/components/CourseInformation.vue';
import GolferForm from '@/components/GolferForm.vue';
import GolferList from '@/components/GolferList.vue';

interface Golfer {
	name: string;
	restriction: boolean;
	carpool: string;
}

export default defineComponent({
	name: 'HomeView',
	components: {
		CourseInformation,
		GolferForm,
		GolferList,
	},
	data() {
		return {
			listOfGolfers: [] as Golfer[],
			golfer: {
				name: '',
				restriction: false,
				carpool: '',
			},
		};
	},
});
</script>

<style scoped>
.container {
	padding: 24px 0;
	max-width: 700px;
	width: 100%;
	margin: 0 auto;
}
</style>
