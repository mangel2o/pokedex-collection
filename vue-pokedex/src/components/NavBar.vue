<script setup lang="ts"></script>

<template>
	<div class="nav-bar">
		<div class="nav-links">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</div>
		<span class="nav-title">Vue Pokédex</span>
	</div>
</template>

<style scoped>
	.nav-bar {
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	.nav-links {
		display: flex;
		gap: 1rem;
		padding: 1rem 1rem 0.5rem 1rem;
	}

	.nav-title {
		font-size: 2rem;
		font-weight: bold;
		text-transform: lowercase;
		font-variant: small-caps;
	}
</style>
