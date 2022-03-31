<template>
	<div class="container">
		<div v-if="!store.isCourseInfo">
			<CourseInformation />
		</div>
		<div v-if="store.isGolferInfo && !store.isSchedGenerated">
			<GolferForm />
		</div>
		<div v-if="store.isGolferInfo && !store.isSchedGenerated">
			<GolferList />
		</div>
		<div v-if="store.isSchedGenerated">
			<TeeTimes />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CourseInformation from '@/components/CourseInformation.vue';
import GolferForm from '@/components/GolferForm.vue';
import GolferList from '@/components/GolferList.vue';
import { checkStore } from '@/stores/checkStore';
import TeeTimes from '@/components/TeeTimes.vue';

export default defineComponent({
	name: 'HomeView',
	setup() {
		const store = checkStore();

		return { store };
	},
	components: {
		CourseInformation,
		GolferForm,
		GolferList,
		TeeTimes,
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
