<template>
	<NavBar />
	<router-view />
</template>

<script lang="ts">
import NavBar from './components/Layout/Navbar.vue';

export default {
	components: {
		NavBar,
	},
};
</script>
