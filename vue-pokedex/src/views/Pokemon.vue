<script setup lang="ts">
	import { useRoute } from "vue-router";
	import useFetchPokemon from "../hooks/useFetchPokemon";
	import Stairs from "../components/Stairs.vue";
	import PokemonInfo from "../components/PokemonInfo.vue";

	const route = useRoute();
	const { data, loading, error } = useFetchPokemon(
		`https://pokeapi.co/api/v2/pokemon/${route.params.id}`
	);
</script>

<template>
	<div class="pokemon-container">
		<Stairs v-if="loading" />
		<h2 v-else-if="error">Seems like there's an error: {$error.message}</h2>
		<PokemonInfo v-else-if="data" :pokemon="data" />
	</div>
</template>

<style scoped>
	.pokemon-container {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		background-color: #f0f2f4;
		padding: 1rem;
	}
</style>
