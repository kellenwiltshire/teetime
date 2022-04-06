<template>
	<div class="expand container">
		<AboutVue />
		<AboutCreator />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutVue from '@/components/About/About.vue';
import AboutCreator from '@/components/About/AboutCreator.vue';

export default defineComponent({
	name: 'AboutView',
	components: {
		AboutVue,
		AboutCreator,
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
.expand {
	min-height: 100vh;
}
</style>
