<template>
	<div class="container">
		<HowTo />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HowTo from '@/components/HowTo/HowTo.vue';

export default defineComponent({
	name: 'HomeView',

	components: { HowTo },
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
