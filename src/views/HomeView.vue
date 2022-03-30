<template>
	<div class="container">
		<div v-if="!store.isCourseInfo">
			<CourseInformation />
		</div>
		<div v-if="store.isGolferInfo">
			<GolferForm />
		</div>
		<div v-if="store.isGolferInfo">
			<GolferList />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CourseInformation from '@/components/CourseInformation.vue';
import GolferForm from '@/components/GolferForm.vue';
import GolferList from '@/components/GolferList.vue';
import { checkStore } from '@/stores/checkStore';

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
