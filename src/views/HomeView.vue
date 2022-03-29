<template>
	<CourseInformation />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CourseInformation from '@/components/CourseInformation.vue';

export default defineComponent({
	name: 'HomeView',
	components: {
		CourseInformation,
	},
});
</script>
