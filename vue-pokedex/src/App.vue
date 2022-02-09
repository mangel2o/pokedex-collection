<script setup lang="ts">
	import NavBar from "./components/NavBar.vue";
</script>

<template>
	<div class="app">
		<NavBar />
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<style>
	body {
		margin: 0;
		padding: 0;
		font-family: Century-Gothic -apple-system, BlinkMacSystemFont, "Segoe UI",
			"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		width: 100%;
	}

	.app {
		display: flex;
		flex-flow: column;
	}

	.content {
		width: 800px;
		margin: 2rem auto;
	}
</style>
