<template>
	<NavBar />
	<router-view />
	<FooterBar />
</template>

<script lang="ts">
import NavBar from './components/Layout/Navbar.vue';
import FooterBar from './components/Layout/Footer.vue';

export default {
	components: {
		NavBar,
		FooterBar,
	},
};
</script>
