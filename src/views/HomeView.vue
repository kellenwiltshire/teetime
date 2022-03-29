<template>
	<div class="container">
		<CourseInformation />
		<GolferForm
			:addGolfer="addGolfer"
			@updateGolferName="updateGolferName"
			:golferRestriction="golferRestriction"
			:golferCarpool="golferCarpool"
		/>
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
			golferName: '',
			golferRestriction: false,
			golferCarpool: '',
			courseInformation: {
				name: '',
				date: '',
				game: '',
				startTime: '',
				restrictionTime: '',
			},
		};
	},
	methods: {
		addGolfer: function () {
			const golfer = {
				name: this.golferName,
				restriction: this.golferRestriction,
				carpool: this.golferCarpool,
			};
			this.listOfGolfers.push(golfer);
			this.golferName = '';
			(this.golferRestriction = false), (this.golferCarpool = '');
		},
		updateGolferName: function (name: string) {
			this.golferName = name;
		},
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
