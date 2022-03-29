<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<router-view />
</template>

<style scoped>
html,
body {
	margin: 0;
	padding: 0;
	background: #faffff;
	font-size: 16px;
}

* {
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: #3d4855;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 0;
}
</style>
