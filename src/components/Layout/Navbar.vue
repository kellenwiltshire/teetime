<template>
	<nav class="navbar">
		<!-- LOGO -->
		<div class="logo">Tee Time Generator</div>
		<!-- NAVIGATION MENU -->
		<ul class="nav-links">
			<!-- USING CHECKBOX HACK -->
			<input type="checkbox" id="checkbox_toggle" />
			<label for="checkbox_toggle" class="hamburger">&#9776;</label>
			<!-- NAVIGATION MENUS -->
			<div class="menu">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/how-to">How To Use</router-link></li>
				<li><router-link to="/about">About</router-link></li>
				<li>
					<a
						href="https://www.paypal.com/donate?business=Z2PC95TA9JLVL&item_name=Web+Services&currency_code=CAD"
						rel="noopener noreferrer"
						target="_blank"
					>
						Donate
					</a>
				</li>
			</div>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NavBar',
});
</script>

<style scoped>
a {
	text-decoration: none;
}
li {
	list-style: none;
}
.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
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

/*RESPONSIVE NAVBAR MENU STARTS*/

/* CHECKBOX HACK */
input[type='checkbox'] {
	display: none;
}
/*HAMBURGER MENU*/
.hamburger {
	display: none;
	font-size: 24px;
	user-select: none;
}
/* APPLYING MEDIA QUERIES */
@media (max-width: 768px) {
	.menu {
		display: none;
		position: absolute;
		background-color: #4fc08d;
		right: 0;
		left: 0;
		text-align: center;
		padding: 16px 0;
	}
	.menu li:hover {
		display: inline-block;
		background-color: grey;
		transition: 0.3s ease;
	}
	.menu li + li {
		margin-top: 12px;
	}
	input[type='checkbox']:checked ~ .menu {
		display: block;
	}
	.hamburger {
		display: block;
	}
	.dropdown {
		left: 50%;
		top: 30px;
		transform: translateX(35%);
	}
	.dropdown li:hover {
		background-color: grey;
	}
}
</style>
