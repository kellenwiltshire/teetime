<template>
	<h2>About Creator</h2>
	<div class="card buffer">
		<div>
			<h4>Kellen Wiltshire</h4>
			<p>
				I am a passionate full-stack developer specializing in all aspects of
				Web Development looking for the next step in my journey. I have the
				experience to create beautiful and functional websites combining the
				latest frameworks and technologies. I have experience React,
				Javascript/Typescript, TailwindCSS, Styled Components, as well as
				traditional HTML5 and CSS3. I am currently look for a new Web
				Development career opportunity!
			</p>
			<p>
				I can also help you build the perfect site for your business! I have
				experience working with Shopify and Squareup systems to make sure your
				products are easy for your customers to find and buy! Whatever your
				needs, I can make a site that works perfectly for you.
			</p>
		</div>
		<div class="links">
			<a href="https://kellenwiltshire.com"> Portfolio </a>
			<a href="https://linkedin.com/in/kellenwiltshire"> LinkedIn </a>
			<a href="https://github.com/kellenwiltshire"> Github </a>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'AboutCreator',
});
</script>

<style>
.buffer {
	padding: 20px;
}

.links {
	display: flex;
}

.links a {
	margin-right: 10px;
}
</style>
