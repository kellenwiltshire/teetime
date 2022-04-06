<template>
	<div class="expand container">
		<AboutVue />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutVue from '@/components/About/About.vue';

export default defineComponent({
	name: 'AboutView',
	components: {
		AboutVue,
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
	height: 100vh;
}
</style>
