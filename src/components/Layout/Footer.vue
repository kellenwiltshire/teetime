<template>
	<nav class="footer">
		<div class="logo">Tee Time Generator</div>
		<ul class="nav-links">
			<div class="menu">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/how-to">How To Use</router-link></li>
				<li><router-link to="/about">About</router-link></li>
			</div>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'FooterBar',
});
</script>

<style scoped>
a {
	text-decoration: none;
}
li {
	list-style: none;
}
.footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background-color: #4fc08d;
	color: #fff;
}
.nav-links a {
	color: #fff;
}
/* LOGO */
.logo {
	font-size: 32px;
	color: white;
}
/* NAVBAR MENU */
.menu {
	display: flex;
	gap: 1em;
	font-size: 18px;
}
.menu li:hover {
	background-color: grey;
	border-radius: 5px;
	transition: 0.3s ease;
}
.menu li {
	padding: 5px 14px;
}

/* APPLYING MEDIA QUERIES */

@media (max-width: 768px) {
	.menu {
		display: none;
	}
}
</style>
